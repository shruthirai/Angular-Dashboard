import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { routingModule } from './app.routing';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserlistComponent } from './views/userlist/userlist.component';
import { PermissionsComponent } from './views/permissions/permissions.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CreateUserComponent } from './views/userlist/create-user/create-user.component';
import { CommonServiceService } from './service/common-service.service';
import { HttpModule, Http } from '@angular/http';
import { UserService } from './service/user.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserlistComponent,
    PermissionsComponent,
    DashboardComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, routingModule, ReactiveFormsModule, FormsModule,
    HttpModule
  ],
  providers: [CommonServiceService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
