import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../host-app/src/app/services/data.service';
import { Subscription } from 'rxjs';
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
  private subscription = new Subscription();
  constructor(private dataService: DataService, private sharedService: MfSharedService) {
  }
  ngOnInit(): void {
    this.checkLoggedInUser();
    this.checkServiceData();
  }
  checkServiceData() {
    this.subscription.add(
      this.sharedService.themeDataAsObservable.subscribe((theme : any) => {
        this.themeData = theme
        console.log(theme);
      })
    )
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
}
