/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, For, If} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'app'
})
@View({
  templateUrl: 'templates/app.html',
  directives: [For, If]
})
// Component controller
class App {
  notes: Array<Object>;
  editing: Boolean;

  constructor() {
    this.notes = [];
    this.editing = false;
  }
}

bootstrap(App);
