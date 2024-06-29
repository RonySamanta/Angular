import { Component } from "@angular/core";
import { testFile } from "./testfile.component";

@Component({
    selector: "courses",
    template: '<h2>Next Steps</h2>\
    <p>What do you want to do next with your app?</p>\
    <testfile></testfile>'
})

export class CourseComponent {

}