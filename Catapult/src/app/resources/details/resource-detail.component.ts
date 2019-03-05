import { Component } from '@angular/core';

import { IResource } from '../../domain/resource';
import { ResourceService } from '../resource.service';

@Component({
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.scss']
})
export class ResourceDetailComponent {
  pageTitle = 'Resurs detaljer';
  resource: IResource;
  errorMessage: string;

  constructor(private resourceService: ResourceService) { }

  getResource(id: number) {
    this.resourceService.getResource(id).subscribe(
      resource => this.onResourceRetrieved(resource),
      error => this.errorMessage = error as any);
  }

  onResourceRetrieved(resource: IResource): void {
    this.resource = resource;

    if (this.resource) {
      this.pageTitle = `Resursdetaljer for: ${this.resource.name}`;
    } else {
      this.pageTitle = 'Fant ikke resursen';
    }
  }
}
