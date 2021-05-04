import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { Router } from "@angular/router";
import { catchError, exhaustMap, map, switchMap, tap, take } from "rxjs/operators";
import { of } from "rxjs";
import * as actions from '../actions/links.actions';

import { DatabaseService } from '../../services/database.service';
import { UtilitiesService } from '../../services/utilities.service';
import { TokenService } from '../../services/token.service';
import { SetUserLogin } from '../actions/links.actions';

@Injectable()
export class LinksEffects {

    constructor(
        private actions$: Actions,
        private db: DatabaseService,
        private utils: UtilitiesService,
        private token: TokenService,
        private route: Router,
    ) {}
    
    // createLink$= createEffect(() => 
    //     this.actions$.pipe(
    //     ofType( actions.SetCrearLink ),
    //        switchMap(({link}) => {
    //         return this.db.createLink({ ...link})
    //         .pipe(
    //             map((resp) => {
    //                console.log(resp);
    //                return this.utils.alertSucces('Link creado correctamenet')
    //             }),
    //         )
    //        }),
    //        catchError( error => {
    //         of(actions.ErrorCrearLink({ error }));
    //     })
    //     )
    // );

    // errorLink$= createEffect(() => 
    //     this.actions$.pipe(
    //     ofType( actions.ErrorCrearLink ),
    //        switchMap((error: any) => {
    //         return this.utils.alertError(error)
    //        })
    //     )
    // );

    // successLink$ = createEffect(() => 
    //     this.actions$.pipe(
    //     ofType( actions.SuccessCrearLink ),
    //        exhaustMap( resp => {
    //         return this.utils.alertSucces(resp)
    //        })
    //     )
    // );

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

    // errorLink$= createEffect(() => 
    //     this.actions$.pipe(
    //     ofType( actions.ErrorCrearLink ),
    //        switchMap((error: any) => {
    //         return this.utils.alertError(error)
    //        })
    //     )
    // );

    // successLink$= createEffect(() => 
    //     this.actions$.pipe(
    //     ofType( actions.SuccessCrearLink ),
    //        exhaustMap(resp => {
    //         return this.utils.alertSucces(resp)
    //        })
    //     )
    // );




    // cargarUsuarios$ = createEffect(() => 
    //     this.actions$.pipe(
    //         ofType( usuariosActions.cargarUsuarios ),
    //         map( data => console.log('efecto tap: ', data) ),
    //         exhaustMap(
    //             () => this.usuarioService.getUsers()
    //                 .pipe(
    //                     map( data      => console.log('getUsers effect: ', data) )
    //                 )
    //         )
    //     )
    // );
}