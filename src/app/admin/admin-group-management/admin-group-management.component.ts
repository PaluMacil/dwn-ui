import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';
import { Group, GroupCreationRequest, AlertMessage, GroupDisplay, Me } from '../../shared/models';
import { faSyncAlt, faPlusSquare, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, Validators, AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';
import { finalize, map } from 'rxjs/operators';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-admin-group-management',
  templateUrl: './admin-group-management.component.html',
  styleUrls: ['./admin-group-management.component.scss']
})
export class AdminGroupManagementComponent implements OnInit {
  groups = new Array<GroupDisplay>();
  selectedGroupName: string;
  alertMessage: AlertMessage;
  iconRefresh = faSyncAlt;
  iconAddGroup = faPlusSquare;
  iconCancel = faWindowClose;
  loading = false;
  createGroupForm: FormGroup;
  showCreateGroupForm = false;
  me: Me;

  constructor(
    private gs: GroupService,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.userService.me$.subscribe(me => this.me = me);
  }

  selectGroup(group: GroupDisplay) {
    this.selectedGroupName = group.name;
  }

  updateGroup(group: GroupDisplay) {
    const idx = this.groups.findIndex(g => g.name === group.name);
    this.groups[idx] = group;
  }

  createGroup() {
    const groupRequest = this.createGroupForm.value as GroupCreationRequest;
    this.gs.create(groupRequest)
      .pipe(
        map(g => {
          return {...g, modifiedByDisplayName: this.me.user.displayName };
        })
      )
      .subscribe(
        group => {
          this.alertMessage = undefined;
          this.groups.push(group);
        },
        err => {
          this.alertMessage = AlertMessage.fromHttpErrorResponse(err);
        }
      );
  }

  fetchInfo() {
    this.loading = true;
    this.gs.groups().pipe(finalize(() => this.loading = false)).subscribe(
      g => {
        this.alertMessage = undefined;
        this.groups = g;
      },
      err => {
        this.alertMessage = AlertMessage.fromHttpErrorResponse(err);
      }
    );
  }

  toggleCreateGroupForm() {
    this.createGroupForm.reset();
    this.showCreateGroupForm = !this.showCreateGroupForm;
  }

  ngOnInit() {
    this.fetchInfo();
    this.createGroupForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/[^_][A-Z_]+/)]],
      requires2FA: [false],
      requiresVaultPIN: [false]
    });
  }
}
