import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() authenticatedUser: User;
  navBarLogo: string;
  profilePictureUrl: string;

  homeIcon: string;
  messengerIcon: string;
  friendsIcon: string;
  notificationIcon: string;

  constructor() {}

  ngOnInit(): void {
    this.navBarLogo = environment.logo;
    this.homeIcon = environment.iconsFolderPath + '/home.svg';
    this.messengerIcon = environment.iconsFolderPath + '/messenger.svg';
    this.friendsIcon = environment.iconsFolderPath + '/users.svg';
    this.notificationIcon = environment.iconsFolderPath + '/notification.svg';
    this.loadProfilePicture();
  }

  private loadProfilePicture() {
    this.authenticatedUser.profilePictureUrl
      ? (this.profilePictureUrl = this.authenticatedUser.profilePictureUrl)
      : this.authenticatedUser.gender.toString() == 'male'
      ? (this.profilePictureUrl = environment.male_avatar_photo_url)
      : (this.profilePictureUrl = environment.female_avatar_photo_url);
  }
}
