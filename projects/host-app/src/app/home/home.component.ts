import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { MfSharedService } from 'mf-shared'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  loggedInUser: string = '';
  subsription = new Subscription();
  themeData = null;
  constructor(private dataService: DataService, private sharedService: MfSharedService) {
  }
  ngOnInit(): void {
    this.checkLoggedInUser();
    this.checkTheme();
  }
  checkTheme() {
    // this.subsription.add(this.dataService.themeDataAsObservable.subscribe(theme => {
    //   this.themeData = theme;
    // }))
    this.subsription.add(this.sharedService.themeDataAsObservable.subscribe(theme => {
      this.themeData = theme;
    }))
  }

  setLoggedInUser() {
    this.loggedInUser = 'Paul';
    console.log('Logged in user:', this.loggedInUser);
    sessionStorage.setItem('loggedInUser', this.loggedInUser);
  }
  checkLoggedInUser() {
    const storedLoggedInUser = sessionStorage.getItem('loggedInUser');
    if (storedLoggedInUser) {
      this.loggedInUser = storedLoggedInUser;
      
    }
  }
  updateTheme() {
    let updateThemeData = { 'background': 'aliceBlue', 'color': 'black', 'fontsize': '100px'};
    this.sharedService.updateData(updateThemeData);
  }
}
