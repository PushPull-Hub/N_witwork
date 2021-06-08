import { Component, OnInit } from '@angular/core';
import { TabsConfiguration } from 'src/app/layouts/footer/footer.configurations';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit {
  tabsConfiguration: TabsConfiguration;
  constructor() {}

  ngOnInit() {
    this.tabsConfiguration = {
      tabs: [
        { tabName: 'home', tabLink: 'home', tabIcon: 'homeIcon' },
        {
          tabName: 'messenger',
          tabLink: 'messenger',
          tabIcon: 'messengerIcon',
        },
        { tabName: 'friends', tabLink: 'friends', tabIcon: 'friendsIcon' },
        { tabName: 'settings', tabLink: 'settings', tabIcon: 'settingsIcon' },
      ],
    };
  }
}
