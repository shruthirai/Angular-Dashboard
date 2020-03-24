import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../../service/user.service';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
userList = [];
isEdit = false;
selectedId;
  constructor(private _userSVC: UserService) { }

  editItem(item) {
this.selectedId = item.id;
this.isEdit = true;
  }

  cancel() {
    this.isEdit = false;
    this.selectedId = '';
  }

  save() {
    this.isEdit = false;
    this.selectedId = '';
  }

  deleteItem(i) {
    this.userList.splice(i, 1);
  }

  display= 'none'; // default Variable

  ngOnInit() {
    this._userSVC.getUserList().subscribe((data) => {
      this.userList = data.json();

    });
  }

  showDialog(){
    this.display = 'block';
  }
  openModalDialog(event) {
    this.display = event; // Set block css
 }

 addUser(event) {
   event.status = 'active';
   event.id = UUID.UUID();
   this.userList.push(event);
 }
 activateDactivate(item) {
   this.userList.filter((data => {
     if (data.id === item.id) {
      if (item.status !== 'active' ) {
        data.status = 'active';
      } else {
        data.status =  'inactive';
      }
     }
   }));
   return item.status !== 'active' ? 'active' : 'inactive';
 }
}
