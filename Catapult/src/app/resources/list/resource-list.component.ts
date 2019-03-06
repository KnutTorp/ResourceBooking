import { Component, OnInit } from '@angular/core';
import { IResource } from 'src/app/domain/resource';
import { ResourceService } from '../resource.service';

@Component({
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent implements OnInit {
  pageTitle = 'Resursliste';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  // tslint:disable-next-line:variable-name
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredResources = this.listFilter ? this.performFilter(this.listFilter) : this.resources;
  }
  filteredResources: IResource[] = [];
  resources: IResource[] = [];

  constructor(private resourceService: ResourceService) { }

  ngOnInit(): void {
    this.resourceService.getResources().subscribe(
      resources => {
        this.resources = resources;
        this.filteredResources = this.performFilter(this.listFilter);
      },
      error => this.errorMessage = error as any
    );
  }
  performFilter(filterBy: string): IResource[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.resources.filter((resource: IResource) =>
      resource.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
