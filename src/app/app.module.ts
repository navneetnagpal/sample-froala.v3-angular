import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
// to import all plugins
import 'froala-editor/js/plugins.pkgd.min.js';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(), BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
