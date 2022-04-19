import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-product-table';
  currentTab: number = 0;

  menuTitles = ['Restaurant', 'Retail', 'Redemption', 'Packages']
  
  setTab(page: number): void {
    this.currentTab = page;
  }
}
