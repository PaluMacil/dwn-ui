import { Component, Input } from '@angular/core';
import { Me } from '@dwn/models';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent {
  @Input() me?: Me;
}
