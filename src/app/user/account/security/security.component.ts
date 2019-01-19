import { Component, OnInit, Input } from '@angular/core';
import { Me } from '../../../shared/models/me';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  @Input() me: Me;

  constructor() { }

  ngOnInit() {
  }

}
