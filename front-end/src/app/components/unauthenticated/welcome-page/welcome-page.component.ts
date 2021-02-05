import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
  scaiConsultingLogo;
  linkedInIcon: string;
  gitHubIcon: string;

  constructor() {}

  ngOnInit(): void {
    this.scaiConsultingLogo = environment.logo;
    this.linkedInIcon = environment.iconsFolderPath + '/linkedin.svg';
    this.gitHubIcon = environment.iconsFolderPath + '/github.svg';
  }
}
