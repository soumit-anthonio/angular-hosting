import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, map, filter } from 'rxjs';
//import { environment } from 'src/environments/environment';

const API_LOGOUT_URL = "https://www.google.com";

@Injectable({
  providedIn: 'root',
})
export class SoumitService {
  constructor(private http: HttpClient) {}

  users = [
    { id: 1, name: 'John', isActive: true },
    { id: 2, name: 'Jack', isActive: true },
    { id: 3, name: 'Mike', isActive: true },
  ];

  // This is now behave like observable / stream of users.
  users$ = of(this.users);
  // get the username observables. / stream of user name.
  username$ = this.users$.pipe(map((users) => users.map((user) => user.name)));
  // filtered user stream.
  filteredUsers$ = this.users$.pipe(
    filter((users: any) => users.every((user: any) => user.isActive))
  );

  OnPing(tickle: string): void {
    alert('Tick' + tickle);
    // We can use this observbles.
    this.users$.subscribe((users) => {
      console.log('Users ', users);
    });
    // But the above code is not necessary. we can directly use the async from html and then the async will do the subscribe automatically.
    // <div *ngFor="let user of users$ | async">
    // {{user.name}}
    // </div>
  }

  getRules(): Observable<any> {
    return this.http.get(`${API_LOGOUT_URL}`);
  }

// forkJoin to call parallel call.



//mergeMap
// mergeMap executes reandomly when any response comes it will show that.
//concatMap
// Concatmap executes one after another when first finish then second start
//switchmap  (we use this in autocomplete)
// switchMap will discard all the revious calls and accept only the last call.
// exhaustMap 
// exhaustMap will execute the first one and the same execution if second response come then it will discard the second. It will only accept the response when no other response come.
}
