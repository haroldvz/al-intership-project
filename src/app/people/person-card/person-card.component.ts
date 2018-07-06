

/**
 * PersonCardComponent's component class
 *
 * Class that set up the PersonCardComponent's component implementation
 * @author Harold Velez <harold.velez.zambrano@correounivalle.edu.co>
 *
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {

  @Input() public data;

  constructor() { }

  ngOnInit() {
  }

}
