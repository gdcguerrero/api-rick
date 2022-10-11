import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import StorageHelper from 'src/app/libs/helpers/storage.helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public username: string = '';
  public password: string = '';

  constructor(public service : ApiService, private router: Router) {}

  onClick(){
    this.service.login(this.username, this.password).subscribe(
      {next: res => {
        StorageHelper.setItem('session',res)
        this.router.navigate(['search'])
      }}
    )
  }

}
