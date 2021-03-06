import { Component, OnInit } from '@angular/core';
import { Gender } from 'src/app/models/Gender.model';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-homepage',
  template: `
    <ng-container *ngIf="!authenticatedUser; else homePage">
      <app-error-page></app-error-page>
    </ng-container>
    <ng-template #homePage>
      <app-navbar [authenticatedUser]="authenticatedUser"></app-navbar>
      <app-main></app-main>
    </ng-template>
  `,
})
export class HomePageComponent implements OnInit {
  authenticatedUser: User = null;

  ngOnInit(): void {
    this.authenticatedUser = {
      id: 12,
      firstName: 'Alessio',
      lastName: 'Rizzato',
      profilePictureUrl:
        'https://firebasestorage.googleapis.com/v0/b/scai-chat-images.appspot.com/o/posts%2Fimages%2Falessio_rizzato.png_1610378709884?alt=media&token=574691cb-0615-4303-a10b-96d6c9f5b04e',
      gender: Gender.male,
      active: false,
      about: null,
      birthday: {
        year: 1997,
        month: 2,
        day: 7,
      },
      hometown: null,
      address: 'Torino',
      location: '',
      workIn: '',
      relationshipStatus: null,
    };
  }
}
