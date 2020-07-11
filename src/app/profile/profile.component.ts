import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  content: string;

  constructor(private userService: UserService) { }

  ngOnInit() {

  }
}