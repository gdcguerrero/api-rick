import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import StorageHerlper from '../libs/helpers/storage.helper';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post('http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/api/login',
      {
        username,
        password
      }
    )
  }

  searchName(name: string): Observable<any> {
    return this.http.post('http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/mirror/rickandmorty',
    {
      "endpoint": "character/?name=" + name
    })
  }

  token(): Observable<any>{
    return this.http.post('http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/api/refresh',{
      session: StorageHerlper.getItem('session')
    })
  }

  getList(): Observable<any>{
    return this.http.get('https://rickandmortyapi.com/api/character')
  }

}
