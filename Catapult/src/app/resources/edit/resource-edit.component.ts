import { Component, OnInit } from '@angular/core';

import { IResource } from '../../domain/resource';
import { ResourceService } from '../resource.service';
import { MessageService } from '../../messages/message.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './resource-edit.component.html',
  styleUrls: ['./resource-edit.component.scss']
})
export class ResourceEditComponent implements OnInit {
  pageTitle = 'Oppdater resurs';
  errorMessage: string;
  resource: IResource;

  constructor(private resourceService: ResourceService,
              private messageService: MessageService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getResource(id);
      });
    }

    getResource(id: number): void {
    this.resourceService.getResource(id)
      .subscribe(
        (resource: IResource) => this.onResourceRetrieved(resource),
        (error: any) => this.errorMessage = error as any
      );
  }

  onResourceRetrieved(resource: IResource): void {
    this.resource = resource;

    if (!this.resource) {
      this.pageTitle = 'Ingen resurs ble funnet';
    } else {
      if (this.resource.id === 0) {
        this.pageTitle = 'Ny resurs';
      } else {
        this.pageTitle = `Oppdater resurs: ${this.resource.name}`;
      }
    }
  }

  deleteResource(): void {
    if (this.resource.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete(`${this.resource.name} ble slettet`);
    } else {
      if (confirm(`Bekreft sletting av resurs: ${this.resource.name}?`)) {
        this.resourceService.deleteResource(this.resource.id)
          .subscribe(
            () => this.onSaveComplete(`${this.resource.name} ble slettet`),
            (error: any) => this.errorMessage = error as any
          );
      }
    }
  }

  saveResource(): void {
    if (true === true) {
      if (this.resource.id === 0) {
        this.resourceService.createResource(this.resource)
          .subscribe(
            () => this.onSaveComplete(`The new ${this.resource.name} ble lagret`),
            (error: any) => this.errorMessage = error as any
          );
      } else {
        this.resourceService.updateResource(this.resource)
          .subscribe(
            () => this.onSaveComplete(`Oppdatering av ${this.resource.name} ble lagret`),
            (error: any) => this.errorMessage = error as any
          );
      }
    } else {
      this.errorMessage = 'Vennligst korriger ugyldige data.';
    }
  }

  onSaveComplete(message?: string): void {
    if (message) {
      this.messageService.addMessage(message);
    }
    this.router.navigateByUrl('/resources');
  }

}
