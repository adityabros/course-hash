import { Component, OnInit, NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

// @NgModule ({
//   imports: [
//     MatSliderModule,
//   ]
// })

export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  courseTitle: string ="Discover latest Courses on React";

}

