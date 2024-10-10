import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}</div>`,
})
export class AppComponent {
  constructor(private http: HttpClient) { }
  value = 'Azure training ';
  https://angulardemowelcome.azurewebsites.net/
   this.http.get("https://angulardemowelcome.azurewebsites.net/api/SendEmail?").subscribe(data=>{
    console.log(JSON.stringify(data));
   });
}
