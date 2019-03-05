import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IResource } from '../domain/resource';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private resourcesUrl = 'api/resources';

  constructor(private http: HttpClient) { }

  getResources(): Observable<IResource[]> {
    return this.http.get<IResource[]>(this.resourcesUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getResource(id: number): Observable<IResource> {
    if (id === 0) {
      return of(this.initializeResource());
    }
    const url = `${this.resourcesUrl}/${id}`;
    return this.http.get<IResource>(url)
      .pipe(
        tap(data => console.log('getResource: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createResource(resource: IResource): Observable<IResource> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    resource.id = null;
    return this.http.post<IResource>(this.resourcesUrl, resource, { headers })
      .pipe(
        tap(data => console.log('create resource: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteResource(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.resourcesUrl}/${id}`;
    return this.http.delete<IResource>(url, { headers })
      .pipe(
        tap(data => console.log('deleteResource: ' + id)),
        catchError(this.handleError)
      );
  }

  updateResource(resource: IResource): Observable<IResource> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.resourcesUrl}/${resource.id}`;
    return this.http.put<IResource>(url, resource, { headers })
      .pipe(
        tap(() => console.log('update resource: ' + resource.id)),
        // Return the resource on an update
        map(() => resource),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  private initializeResource(): IResource {
    // Return an initialized object
    return {
      id: 0,
      name: null,
      code: null,
      category: null,
      tags: [],
      price: null,
      description: null,
      starRating: null,
      imageUrl: null
    };
  }
}
