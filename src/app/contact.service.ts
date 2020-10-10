import { ContactListComponent } from './contact-list/contact-list.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  filter: string;

  constructor(private http: HttpClient) { }

  httpOptions(): any {
    const header = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return header;
  }

  public ContactListComponent(): any {
    // this.http.get("https://reqres.in/api/users")
    return this.http.get<Config>('https://reqres.in/api/users', this.httpOptions());
  }
}
