import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileInfo } from 'src/app/models/profile-model'


@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css']
})
export class UsersProfileComponent implements OnInit {
  list: ProfileInfo[] = [];
  profileList: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ProfileService
  ) { }

  ngOnInit(): void {
    this.getProfileList('data');
  }

  getProfileList(action: string) {
    this.service.getProfileDetails().subscribe((result: any) => {
      this.profileList = result.data.matches;
      console.log('Profile', this.profileList)

    }, err => {
      console.log('getProfileDetails', err);
    });
  }


}
