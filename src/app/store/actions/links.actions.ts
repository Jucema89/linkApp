import { createAction, props } from '@ngrx/store';
import { Link } from '../../models/link.model';
import { User } from '../../models/user.model';


// CREATE LINKS
export const SetCrearLink = createAction(
    '[LINK] Set Crear link',
);

export const SuccessCrearLink = createAction(
    '[LINK] Success Crear link',
    props< { link: any } >()
);

export const ErrorCrearLink = createAction(
    '[LINK] Error Crear link',
    props< { error: any} >()
);

// DELETE LINKS
export const SetDeleteLink = createAction(
    '[LINK] Set Delete link',
    props< { id: string } >()
);

export const SuccessDeleteLink = createAction(
    '[LINK] Success Delete link',
    props< { linkDeleted: Link} >()
);

export const ErrorDeleteLink = createAction(
    '[LINK] Error Delete link',
    props< { error: any} >()
);

// GET LINKS
export const SetGetLinks = createAction(
    '[LINKS] Set Get links',
);

export const SuccessGetLinks = createAction(
    '[LINKS] Success Get links',
    props< { links: Link[] } >()
);

export const ErrorGetLinks = createAction(
    '[LINKS] Error Get links',
    props< { error: any} >()
);

// CREATE USERS
export const SetUserRegister = createAction(
    '[AUTH] Set User Create',
    props< {user: User} >()
);

export const SuccesUserRegister = createAction(
    '[AUTH] Success User Create',
    props< { user: any, msj: string } >()
);

export const ErrorUserRegister = createAction(
    '[AUTH] Error User Create',
    props< { error: any } >()
);

// LOGIN USERS
export const SetUserLogin = createAction(
    '[AUTH] Set User Login',
    props< { user: User } >()
);

export const SuccesUserLogin = createAction(
    '[AUTH] Success User Login',
    props< { user: any } >()
);

export const ErrorUserLogin = createAction(
    '[AUTH] Error User Login',
    props< { error: any } >()
);

// GET USER
export const SetUserGet = createAction(
    '[AUTH] Set User Get',
    props< { id: string } >()
);

export const SuccesUserGet = createAction(
    '[AUTH] Success User Get',
    props< { user: any } >()
);

export const ErrorUserGet = createAction(
    '[AUTH] Error User Get',
    props< { error: any } >()
);
            
// export const crearLink = createAction(
//     '[LINK] Crear link',
//     props< { 
//         id: string,
//         createdAt: Date,
//         url: string,
//         name: string
//     } >()
// );
           