import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersProfileComponent } from 'src/app/component/users-profile/users-profile.component';
import { ProfileComponent } from './component/profile/profile.component';

const routes: Routes = [
  { path: '', component: UsersProfileComponent},
  { path: 'user-profile', component: ProfileComponent},
  { path: 'daily-recommendation', loadChildren: () => import('src/app/component/daily-recommendations/daily-recommendations/daily-recommendations.module').then(m => m.DailyRecommendationsModule)},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
