import { Injectable } from '@angular/core';
import { AuthGuard } from 'src/app/_guards/auth.guard';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth: AuthGuard) { }

  isLogin(){
    
  }
}
