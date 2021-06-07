import { Component, OnInit } from '@angular/core';
import {
  faHome,
  faUser,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit {
  homeIcon = faHome;
  messengerIcon = faPaperPlane;
  profileIcon = faUser;
  constructor() {}

  ngOnInit() {}
}
