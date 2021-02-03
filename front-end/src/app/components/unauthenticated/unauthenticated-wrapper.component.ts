import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-unauthenticated-wrapper',
  templateUrl: './unauthenticated-wrapper.component.html',
  styleUrls: ['./unauthenticated-wrapper.component.scss'],
})
export class UnauthenticatedWrapperComponent implements OnInit {
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
