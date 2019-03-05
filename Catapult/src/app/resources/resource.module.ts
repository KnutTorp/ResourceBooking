import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourseListComponent } from './list/resourse-list.component';
import { ResourceDetailComponent } from './details/resource-detail.component';
import { ResourceEditComponent } from './edit/resource-edit.component';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  { path: 'resources', component: ResourseListComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ResourseListComponent,
    ResourceDetailComponent,
    ResourceEditComponent
  ]
})
export class ResourceModule { }
