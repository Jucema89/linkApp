import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LinkState } from '../../../../testing/linkApp/src/app/store/reducer/links.reducer';
import { AppState } from './app.reducer';



export const getLinkState = createFeatureSelector<AppState>('links')

export const getUserState = createFeatureSelector<AppState>('users')

export const getUserLogged = createSelector(
    getUserState,
    state => state
);