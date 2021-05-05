import { ActionReducerMap } from '@ngrx/store';
import { Link } from '../models/link.model';
import { User } from '../models/user.model';
import { linksReducer } from './reducer/links.reducer';
import { usersReducer } from './reducer/users.reducer';

export interface AppState {
    links: Link[],
    users: User[]
}

export const appReducers: ActionReducerMap<AppState> = {
    links: linksReducer,
    users: usersReducer
}
