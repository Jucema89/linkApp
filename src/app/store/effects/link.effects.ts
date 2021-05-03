import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { catchError, exhaustMap, map, switchMap, tap, take } from "rxjs/operators";
import * as actions from '../actions/links.actions';

import { Link } from '../../models/link.model';
import { DatabaseService } from '../../services/database.service';



@Injectable()
export class LinksEffects {

    constructor(
        private actions$: Actions,
        private db: DatabaseService
    ) {}

    createLink$= createEffect(() => 
        this.actions$.pipe(
        ofType( actions.crearLink ),
           switchMap(({link}) => {
            return this.db.createLink({ ...link})
            .pipe(
                map((resp) => {
                   console.log(resp);
                }),
                catchError((error) => {
                    console.log(error);
                    return alert(error)
                })
            )
           })
        )
    );



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