import { Component, OnInit } from '@angular/core';

import { IResource } from '../../domain/resource';
import { ResourceService } from '../resource.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.scss']
})
export class ResourceDetailComponent implements OnInit {
  pageTitle = 'Resurs detaljer';
  resource: IResource;
  errorMessage: string;
  qParams = [];

  constructor(private resourceService: ResourceService, private route: ActivatedRoute) {
   }

   ngOnInit(): void {
     // + casts to number
     const id = +this.route.snapshot.paramMap.get('id');
     this.getResource(id);
   }

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
