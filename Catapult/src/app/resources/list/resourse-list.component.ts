import { Component, OnInit } from '@angular/core';
import { IResource } from 'src/app/domain/resource';
import { ResourceService } from '../resource.service';

@Component({
  // selector: 'crb-resourse-list',
  templateUrl: './resourse-list.component.html',
  styleUrls: ['./resourse-list.component.scss']
})
export class ResourseListComponent implements OnInit {
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
  //   {
  //     "id": 1,
  //     "name": "3D-Scanner",
  //     "code": "3DS-001",
  //     "description": "Scanner alt.",
  //     "price": 19.95,
  //     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"

  //   },
  //   {
  //     "id": 2,
  //     "name": "3D-Printer",
  //     "code": "3DP-101",
  //     "description": "Printer alt.",
  //     "price": 77.95,
  //     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
  //   }
  // ];
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
