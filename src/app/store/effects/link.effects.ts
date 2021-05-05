import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { Router } from "@angular/router";
import { catchError, exhaustMap, map, switchMap, tap, take, debounceTime } from "rxjs/operators";
import { of, from } from "rxjs";
import * as actions from '../actions/links.actions';
import { DatabaseService } from '../../services/database.service';
import { UtilitiesService } from '../../services/utilities.service';
import { TokenService } from '../../services/token.service';
import { Link } from '../../models/link.model';

@Injectable()
export class LinksEffects {

    constructor(
        private actions$: Actions,
        private db: DatabaseService,
        private utils: UtilitiesService,
        private token: TokenService,
        private route: Router,
    ) {}
    
    createLink$= createEffect(() => 
        this.actions$.pipe(
        ofType( actions.SetCrearLink ),
           exhaustMap(({url, name}) => {
            return this.db.createLink(url, name)
            .pipe(
                map((linkRes) => {
                   console.log('createLink$ resp of db = ', linkRes);
                const link = {
                    url, name
                }
                   return actions.SuccessCrearLink({link})
                }),
            )
           }),
           // @ts-ignore
           catchError( error => {
            of(actions.ErrorCrearLink({ error }));
        })
        )
    );

    errorLink$= createEffect(() => 
        this.actions$.pipe(
        ofType( actions.ErrorCrearLink ),
            // @ts-ignore
           switchMap((error: any) => {
            this.utils.alertError(error)
           })
        )
    );

    successLink$ = createEffect(() => 
        this.actions$.pipe(
        ofType( actions.SuccessCrearLink ),
            // @ts-ignore
           exhaustMap( resp => {
               if(resp) {
                this.utils.alertSucces({msj: 'Link creado correctamente'})
               } else {
                this.utils.alertError({msj: 'Error creando Link'})
               }
               
           })
        )
    );

    // USER REGISTER
    createUser$= createEffect(() => 
        this.actions$.pipe(
        ofType(actions.SetUserRegister),
            exhaustMap(({user}) => { 
            return this.db.createUser(user.name, user.email, user.password)
            .pipe(
                map((resp: any) => {
                    this.token.saveIdUser(resp.id);
                    return actions.SuccesUserRegister({user: user, msj: 'Usuario creado correctamenet'});
                }),
                // @ts-ignore
                catchError( error => {
                    of(actions.ErrorUserRegister({ error }));
                })
            )
           })
        )
    );

    successCreateUser$= createEffect(() => 
        this.actions$.pipe(
        ofType( actions.SuccesUserRegister ),
           // @ts-ignore
           switchMap(({msj}) => {
            this.utils.alertSucces(msj)
            .then((resp) => {
                if(resp.isConfirmed){
                    this.route
                    .navigate(["/dashboard"])
                }
            })
           })
        )
    );

    errorCreateUser$= createEffect(() => 
        this.actions$.pipe(
        ofType( actions.ErrorUserRegister ),
           // @ts-ignore
           switchMap((error: any) => {
            this.utils.alertError(error)
            .then((resp) => {
                if(resp.isConfirmed){
                    this.route
                    .navigate([""])
                }
            })
           })
        )
    );

    // USER LOGIN
    loginUser$= createEffect(() => 
        this.actions$.pipe(
        ofType(actions.SetUserLogin),
            exhaustMap(({user}) => { 
            return this.db.loginUser(user.email, user.password)
            .pipe(
                map((resp: any) => {
                    this.token.saveIdUser(resp.id);
                    return actions.SuccesUserRegister({user: user, msj: 'Usuario logueado correctamenet'});
                }),
                // @ts-ignore
                catchError( error => {
                    of(actions.ErrorUserLogin({ error }));
                })
            )
           })
        )
    );

    successLoginUser$= createEffect(() => 
        this.actions$.pipe(
        ofType( actions.SuccesUserLogin ),
           // @ts-ignore
           switchMap(({msj}) => {
            this.utils.alertSucces(msj)
            .then((resp) => {
                if(resp.isConfirmed){
                    this.route
                    .navigate(["/dashboard"])
                }
            })
           })
        )
    );

    errorLoginUser$= createEffect(() => 
        this.actions$.pipe(
        ofType( actions.ErrorUserLogin ),
           // @ts-ignore
           switchMap((error: any) => {
            this.utils.alertError(error)
            .then((resp) => {
                if(resp.isConfirmed){
                    this.route
                    .navigate([""])
                }
            })
           })
        )
    );
    
    // USER GET
    
    getUser$= createEffect(() => 
        this.actions$.pipe(
        ofType(actions.SetUserGet),
            // @ts-ignore
            switchMap(({id}) => { 
            return this.db.getUser(id)
            .pipe(
                map((user: any) => {
                    return actions.SuccesUserGet({user});
                }),
                // @ts-ignore
                catchError( error => {
                    of(actions.ErrorUserGet({ error }));
                })
            )
           })
        )
    );

    errorGetUser$= createEffect(() => 
        this.actions$.pipe(
        ofType( actions.ErrorUserGet ),
           // @ts-ignore
           switchMap((error: any) => {
            this.utils.alertError(error)
            .then((resp) => {
                if(resp.isConfirmed){
                    this.route
                    .navigate([""])
                }
            })
           })
        )
    );
    
}