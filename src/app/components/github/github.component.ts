import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  authenticate() {
    console.log('authenticate github....');
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://github.com/login/oauth/authorize?client_id=f57d11b3beb91330a759&type=user_agent&redirect_uri=https://www.google.com/')
    .pipe(
      tap(
         // Log the result or error
        data => this.log(data),
        error => this.logError(error)
      )
    );
  }
    /** Log a message */
  private log(res) {
       console.log(`log service: `, res );
  }
  private logError(res) {
        console.log(`log error: `, res );
  }
}
