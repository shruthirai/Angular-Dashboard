import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonServiceService } from '../../../service/common-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userForm: any;
  @Input() display;
  @Output() displayChange = new EventEmitter();
  @Output() addedUser= new EventEmitter();
  date;
  constructor(private _commonSVC: CommonServiceService) { }

  ngOnInit() {
    this.date = new Date(); // Today date and time
    // Login Validation
    this.userForm = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      course: new FormControl('', Validators.required),
      cgpa: new FormControl('', Validators.required)
    });
  }

 closeModalDialog() {
  this.display = 'none'; // set none css after close dialog
  this.displayChange.emit(this.display);
 }

// Work against memory leak if component is destroyed
ngOnDestroy() {
  this.displayChange.unsubscribe();
}

saveUser() {
  if (this.userForm.valid) {
  this.addedUser.emit(this.userForm.value);
  this.closeModalDialog();
  } else {
    this._commonSVC.validateAllFields(this.userForm);
  }
}

}
