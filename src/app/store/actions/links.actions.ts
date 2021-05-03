import { createAction, props } from '@ngrx/store';
import { Link } from '../../models/link.model';

export const crearLink = createAction(
    '[LINK] Crear link',
    props< {link: Link} >()
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
           