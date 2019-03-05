import { InMemoryDbService } from 'angular-in-memory-web-api';

import { IResource } from '../domain/resource';

export class ResourceData implements InMemoryDbService {

  createDb() {
    const resources: IResource[] = [
      {
        id: 1,
        name: '3D-Printer',
        code: '3DP-001',
        description: 'Printyng anything',
        price: 19.95,
        starRating: 3.2,
        imageUrl: 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png',
        category: 'Virtualisering',
        tags: ['print', 'create', 'plastic', 'metal']
      },
      {
        id: 2,
        name: '3D-Scanner',
        code: '3DS-001',
        description: 'Scanning anything',
        price: 10.95,
        starRating: 4.2,
        imageUrl: 'https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png',
        category: 'Virtualisering',
        tags: ['scan', 'create', 'plastic', 'metal']
      },
      {
        id: 4,
        name: 'Hammer',
        code: 'Hammer-001',
        description: 'Forge anything, need hammer',
        price: 2.5,
        starRating: 4.7,
        imageUrl: 'https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png',
        category: 'Creating',
        tags: ['forge', 'create', 'tool', 'make', 'metal']
      },
      {
        id: 4,
        name: 'Forge',
        code: 'Forge-001',
        description: 'Forge anything',
        price: 5,
        starRating: 4.7,
        imageUrl: 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png',
        category: 'Creating',
        tags: ['forge', 'create', 'make', 'metal']
      }
    ];
    return { resources };
  }
}
