import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseComponent } from './courses.component';
import { testFile } from './testfile.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    testFile
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
