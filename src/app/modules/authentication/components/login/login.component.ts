import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = ''

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.username = 'hello'
    this.password = '12345679',
      console.log(this.loginService.hello())

  }

  handleChange(event) {
    if (event.target.name === 'username') {
      if (!event.target.value.match(/@/)) {
        alert('invalid email')
      }
    }
    this[event.target.name] = event.target.value
  }

  submit() {
    console.log(this.username, this.password)
  }

}
