import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MfSharedService {
  themeData: ITheme = { 'background': 'tomato', 'color': 'white', 'fontsize': '80px'};
  themeDataAsObservable:  BehaviorSubject<any> = new BehaviorSubject<any>({});
  constructor() {
    this.themeDataAsObservable.next(this.themeData);
   }

   updateData(data: ITheme) {
    this.themeDataAsObservable.next(data);
   }
   
   resetObservableToInitialState() {
    this.themeDataAsObservable.next(this.themeData);
   }
}
export interface ITheme {
  background: string,
  color: string
  fontsize: string
}
