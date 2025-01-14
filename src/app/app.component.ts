import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}</div>`,
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }
  ngOnInit() {
    // ...
   // https://angulardemowelcome.azurewebsites.net/
    this.http.post("https://angulardemowelcome.azurewebsites.net/api/SendEmail?",{to:"me",from:"you",subject:"subjectofmail",body:"hellobody"}).subscribe(data=>{
     console.log(JSON.stringify(data));
    });
  }
  value = 'Azure training ';
 
}
