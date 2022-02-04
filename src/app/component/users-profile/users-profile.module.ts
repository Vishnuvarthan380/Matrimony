import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersProfileRoutingModule } from './users-profile-routing.module';
import { UsersProfileComponent } from 'src/app/component/users-profile/users-profile.component';


@NgModule({
  declarations: [
    UsersProfileComponent
  ],
  imports: [
    CommonModule,
    UsersProfileRoutingModule
  ]
})
export class UsersProfileModule { }
