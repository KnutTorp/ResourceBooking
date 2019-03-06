import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResourceListComponent } from './list/resource-list.component';
import { ResourceDetailComponent } from './details/resource-detail.component';
import { ResourceEditComponent } from './edit/resource-edit.component';

import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  { path: 'resources', component: ResourceListComponent },
  { path: 'resources/:id', component: ResourceDetailComponent },
  { path: 'resources/:id/edit', component: ResourceEditComponent },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ResourceListComponent,
    ResourceDetailComponent,
    ResourceEditComponent
  ]
})
export class ResourceModule { }
