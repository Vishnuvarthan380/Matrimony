import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersProfileRoutingModule } from './users-profile-routing.module';
import { UsersProfileComponent } from 'src/app/component/users-profile/users-profile.component';
import { NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbToastrModule, NbToastrService  } from '@nebular/theme';

@NgModule({
  declarations: [
    UsersProfileComponent
  ],
  imports: [
    CommonModule,
    UsersProfileRoutingModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbLayoutModule,
  ]
})
export class UsersProfileModule { }
