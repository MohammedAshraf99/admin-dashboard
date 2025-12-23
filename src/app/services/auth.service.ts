import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
    private loginStatus = false;
    private $authStatus:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.loginStatus);
    $authListener:Observable<boolean> = this.$authStatus.asObservable();

ChangeStatus(){ 
  this.loginStatus = !this.loginStatus;
  this.$authStatus.next(this.loginStatus);
} 

CheckStatus(){
 return this.$authListener;
}

 
}
