import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetUserGet } from '../../../store/actions/links.actions';
import { TokenService } from '../../../services/token.service';
import { getUserLogged } from '../../../store/links.selectors';
import { Observable } from 'rxjs';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {

  public user$ : Observable<any>;
  public user: User;
  constructor(
    private store: Store,
    private token: TokenService
  ) { }

  ngOnInit(): void {
    const id = this.token.getIdUser();
    console.log('id desde locals', id)
    this.store.dispatch(SetUserGet({id}));
    setTimeout(() => {
      this.store.select(getUserLogged)
      .subscribe((data: any) => {
        this.user = data.user;
      })
    }, 1000);
    
  }

  

}
