import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  selectedItem: any;
  imageCount: any;
  i: any;

  constructor(
    private dataService: ProfileService
  ) { 
    this.dataService.data.subscribe(data => {
      console.log('the data', data);
      let list: any;
      list = data;
      this.selectedItem = list.item;
      console.log('the selected ', this.selectedItem)
      this.i = list.i;
      this.imageCount = list.imageCount;

    });
  }

  ngOnInit(): void {
  }
  

}