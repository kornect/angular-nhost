import { Component, OnInit } from '@angular/core';
import {NhostService} from "../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private nhost: NhostService, private router: Router) { }

  ngOnInit(): void {
  }


  async onLogin() {
    const response = await this.nhost.auth.signIn({
      email: 'test@tester.com',
      password: 'Password123'});

    await this.router.navigate(['/secured']);
  }
}
