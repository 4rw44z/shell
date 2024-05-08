import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MfSharedService } from 'mf-shared'
@Component({
  selector: 'app-module-federation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './module-federation.component.html',
  styleUrl: './module-federation.component.scss'
})
export class ModuleFederationComponent implements OnInit{
  loggedInUser: string = '';
  isUserLoggedIn: boolean = false;
  themeData = {};
  observableThemeData: Observable<any> = new BehaviorSubject({});
  constructor(private sharedService: MfSharedService) {
  }
  ngOnInit(): void {
    this.checkLoggedInUser();
    this.checkServiceData();
  }
  checkServiceData() {
    this.observableThemeData = this.sharedService.themeDataAsObservable;
  }
  checkLoggedInUser() {
    const storedLoggedInUser = sessionStorage.getItem('loggedInUser');
    if (storedLoggedInUser) {
      this.loggedInUser = storedLoggedInUser;
      this.isUserLoggedIn = true;
    } else {
      this.isUserLoggedIn = false;
    }
  }
  setLoggedInUser() {
    this.loggedInUser = 'Jude';
    console.log('Logged in user:', this.loggedInUser);
    sessionStorage.setItem('loggedInUser', this.loggedInUser);
  }
  setTheme() {
    let updateThemeData = { 'background': 'sepia', 'color': 'black', 'fontsize': '50px'};
    this.sharedService.updateData(updateThemeData);
  }
}
