import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8080/';
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

@Injectable({
  providedIn: 'root'
})
export class RestService {
  

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    console.log(res);
    return body || { };
  }

  getTeste(): Observable<any> {
    return this.http.get(endpoint + 'students');
  }

  add (student): Observable<any> {
    console.log(student);
    return this.http.post<any>(endpoint + 'students', JSON.stringify(student), httpOptions).pipe(
      tap((student) => console.log(`added student w/`)),
      catchError(this.handleError<any>('addStudent'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
