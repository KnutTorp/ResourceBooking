import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { IResource } from '../domain/resource';
import { Observable } from 'rxjs';
import { ResourceService } from './resource.service';

// this is a service -> injectable -> registered in the root injector
@Injectable({
    providedIn: 'root'
})
export class ResourceResolver implements Resolve<IResource> {

    constructor(private resourceService: ResourceService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IResource> {
        const id = + route.paramMap.get('id');
        // The resolver get the data from the resource service
        // We do not subscribe in the resolver. It handles the subscription part for us
        return this.resourceService.getResource(id);
        /* This is the code where we retrived the data our self. Here we subscribe to the observable
            getResource(id: number) {
                this.resourceService.getResource(id).subscribe(
                resource => this.onResourceRetrieved(resource),
                error => this.errorMessage = error as any);
            }
        */
    }
}
