import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { Link } from '../models/link.model';



@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  createUser( email: string, password: string ){
    return this.http.post(`${environment.url_api}/register`,
    { email, password }, 
    {
      headers: { 'Content-Type': 'application/json' }
    })
    .pipe(
      tap(
        (data: {token: string}) => {
          const token = data.token;
          this.tokenService.saveToken(token);
        }
      )
    )
  }

  getUser(id: string) {
    return this.http.get(`${environment.url_api}/user/` + id),
    {
      headers: { 
        'Token': this.tokenService.getToken(),
        'Content-Type': 'application/json' }
    }
  }

  createLink(link: Link){
    return this.http.post(`${environment.url_api}/links`, {
      ... link
    },
    {
      headers: { 
        'Token': this.tokenService.getToken(),
        'Content-Type': 'application/json' }
    })
  }

  getLinks() {
    return this.http.get<Link[]>(`${environment.url_api}/links`,
    {
      headers: { 
        'Token': this.tokenService.getToken(),
        'Content-Type': 'application/json' }
    })
  }

  deleteLink(id: string){
    return this.http.delete(`${environment.url_api}/links` + id )
  }
  

  // getHouse(house: string) {
  //   return this.http.get<Magician[]>(`${environment.url_api}characters/house/` + house)
  // }






}
