import { ActionReducerMap } from '@ngrx/store';
import { Link } from '../models/link.model';
import { linksReducer } from './reducer/links.reducer';

export interface AppState {
    links: Link[],
}

export const appReducers: ActionReducerMap<AppState> = {
    links: linksReducer,
}