import { Component, OnInit } from '@angular/core';
import { IResource } from '../domain/resource';

@Component({
  // selector: 'crb-resourse-list',
  templateUrl: './resourse-list.component.html',
  styleUrls: ['./resourse-list.component.scss']
})
export class ResourseListComponent implements OnInit {

  resources: IResource[] = [];

  resourceList: IResource[] = [
    {
      "id": 1,
      "name": "3D-Scanner",
      "code": "3DS-001",
      "description": "Scanner alt.",
      "price": 19.95,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"

    },
    {
      "id": 2,
      "name": "3D-Printer",
      "code": "3DP-101",
      "description": "Printer alt.",
      "price": 77.95,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }
  ];
  constructor() { }

  ngOnInit(): void {
    this.resources = this.resourceList;
  }

}
