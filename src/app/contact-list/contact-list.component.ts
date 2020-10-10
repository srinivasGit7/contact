import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  displayedColumns = ['name'];

  users: any[] = [];
  first_name: any;
  // p: number = 1;

  constructor(private service: ContactService) { }

  ngOnInit() {

    this.getAllContactList();

  }
  public getAllContactList() {
    this.service.ContactListComponent()
      .subscribe(result => {

        console.log(result);
        this.users = result.data;
      }, error => {
        if (error.error.statusCode === 401) {
          console.log(error.error.message);
        }
      });
  }
  // applyFilter(filterValue: string) {
  //   // filterValue = filterValue.trim();
  //   // filterValue = filterValue.toLowerCase();
  //   this.service.filter = filterValue.trim().toLowerCase();
  //   Search() {
  //     if (this.first_name == "") {
  //       this.ngOnInit();

  //     } else {
  //       this.users = this.users.filter(res => {
  //         return res.first_name.toLocalLowerCase().match(this.first_name.toLocaleLowerCase)
  //       })
  //     }
  //   }
  // }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.service.filter = filterValue.trim().toLowerCase();
  }
}
