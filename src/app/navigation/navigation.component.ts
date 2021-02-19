import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isToggled = false;

  toggleSidebar(command) {
      if(command === 'off') {
        this.isToggled = false;
        return;
      }

      this.isToggled = !this.isToggled;
      return;
  }
}
