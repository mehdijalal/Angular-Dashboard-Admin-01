import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import{IApplications} from '../models/applications.models';

@Injectable({
    providedIn: 'root'
  })
export class ApplicationService{

    private tempEmpApiUrl = 'https://jsonplaceholder.typicode.com/users';
    private tempEmpApiUrl2 = 'http://dummy.restapiexample.com/api/v1/employees';

    constructor(private http: HttpClient) { }

    getApplication1() {
      //return this.http.get('https://jsonplaceholder.typicode.com/users');
      return this.http.get(this.tempEmpApiUrl2);
    }
    getApplications(): Observable<IApplications[]> {
      return this.http.get<IApplications[]>(this.tempEmpApiUrl2)
        .pipe(
          tap(data => console.log('All: ' + JSON.stringify(data))),
         catchError(this.handleError)
       )
    }
  
    private handleError(err: HttpErrorResponse) {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }
}