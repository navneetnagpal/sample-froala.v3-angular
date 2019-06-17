import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular6-start';
  control;

  editorContent = 'test';
  public options: Object = {
  placeholder: "Edit Me",
  events : {
  	'initialized':function(e, editor) {
  		console.log('app initializer');
  	},
    'focus' : function(e, editor) {
      // console.log(editor.selection.get());
    }
  }
}

  check(event) {
  if (this,event.target.checked) {
  	console.log('destroy')
  	this.control.destroy();
  } else {
  	this.control.initialize();
  	console.log('initialize')
  }
  }

  initialize(control) {
  	this.control = control;
  	this.control.initialize();
  }
}
