import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';
import { GroupCreationRequest, AlertMessage, GroupDisplay, Me, Group } from '@dwn/models';
import { faSyncAlt, faPlusSquare, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { finalize, map } from 'rxjs/operators';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-admin-group-management',
  templateUrl: './admin-group-management.component.html',
  styleUrls: ['./admin-group-management.component.scss']
})
export class AdminGroupManagementComponent implements OnInit {
  groups = new Array<GroupDisplay>();
  selectedGroupName? = '';
  alertMessage?: AlertMessage;
  iconRefresh = faSyncAlt;
  iconAddGroup = faPlusSquare;
  iconCancel = faWindowClose;
  loading = false;
  createGroupForm: FormGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/[^_][A-Z_]+/)]],
      requires2FA: [false],
      requiresVaultPIN: [false]
    });
  showCreateGroupForm = false;
  me?: Me;

  constructor(
    private groupService: GroupService,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.userService.me$.subscribe((me) => this.me = me);
  }

  selectGroup(group: GroupDisplay): void {
    this.selectedGroupName = group.name;
  }

  updateGroup(group: Group): void {
    console.debug("updating", group);
    const idx = this.groups.findIndex((g) => g.name === group.name);
    this.groups[idx] = {...group, modifiedByDisplayName: this.me?.user.displayName ?? 'me'};
  }

  createGroup(): void {
    const groupRequest = this.createGroupForm.value as GroupCreationRequest;
    this.groupService.create(groupRequest)
      .pipe(
        map((group) => {
          return {...group, modifiedByDisplayName: this.me?.user.displayName ?? 'me'};
        })
      )
      .subscribe(
        (group: GroupDisplay) => {
          this.alertMessage = undefined;
          this.groups.push(group);
        },
        (err) => {
          this.alertMessage = AlertMessage.fromHttpErrorResponse(err);
        }
      );
  }

  fetchInfo(): void {
    this.loading = true;
    this.groupService.groups().pipe(finalize(() => this.loading = false)).subscribe(
      (groups) => {
        this.alertMessage = undefined;
        this.groups = groups;
      },
      (err) => {
        this.alertMessage = AlertMessage.fromHttpErrorResponse(err);
      }
    );
  }

  toggleCreateGroupForm(): void {
      this.createGroupForm.reset();
      this.showCreateGroupForm = !this.showCreateGroupForm;
  }

  ngOnInit(): void {
    this.fetchInfo();
  }
}
