import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Me } from '../../../shared/models';
import { UserService } from '../../user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() me: Me;

  iconEdit = faEdit;

  constructor() {
  }

  ngOnInit(): void {
  }
}
