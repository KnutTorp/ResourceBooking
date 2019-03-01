import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ResourseListComponent } from './resourse-list.component';

// const routes: Routes = [
//   { path: 'resources', component: ResourseListComponent }
// ];

@NgModule({
    imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'resources', component: ResourseListComponent }
    ])
  ],
  declarations: [
    ResourseListComponent
  ]
})
export class ResourceModule { }
