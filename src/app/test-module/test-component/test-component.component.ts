import { Component, OnInit } from '@angular/core';
import { TestDirective } from '../test.directive';

@TestDirective()
@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
