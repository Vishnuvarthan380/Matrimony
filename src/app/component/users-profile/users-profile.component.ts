import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileInfo } from 'src/app/models/profile-model'
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css']
})
export class UsersProfileComponent implements OnInit {
  list: ProfileInfo[] = [];
  profileList: any;
  imageCount = 50;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
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
      this.imageCount++;
      this.profileList = result.data.matches;
      console.log('Profile', this.profileList)

    }, err => {
      console.log('getProfileDetails', err);
    });
  }

  clickUser(item: any, i: number, imageCount: number) {
    const payload = {
      item,
      i,
      imageCount
    }
    console.log('item', payload);
    this.service.addData(payload);
    this.router.navigate(['user-profile']);
  }


}
