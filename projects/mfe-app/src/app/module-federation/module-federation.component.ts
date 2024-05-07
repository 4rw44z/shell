import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../host-app/src/app/services/data.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

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
  constructor(private dataService: DataService) {
  }
  ngOnInit(): void {
    this.checkLoggedInUser();
    this.checkServiceData();
  }
  checkServiceData() {
    this.subscription.add(
      this.dataService.themeDataAsObservable.subscribe((theme) => {
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
