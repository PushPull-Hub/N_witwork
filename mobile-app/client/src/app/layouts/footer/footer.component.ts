import { Component, Input, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import {
  faCogs,
  faHome,
  faPaperPlane,
  faUser,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

import { TabsConfiguration } from './footer.configurations';

@Component({
  selector: 'app-tabs',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  // @Input() tabsConfiguration: TabsConfiguration;
  tabsConfiguration: TabsConfiguration;
  importedIcons: { [key: string]: IconProp };

  constructor() {
    this.importedIcons = {
      homeIcon: faHome,
      messengerIcon: faPaperPlane,
      profileIcon: faUser,
      friendsIcon: faUsers,
      settingsIcon: faCogs,
    };
  }

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
