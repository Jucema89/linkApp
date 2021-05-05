import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/user.model';
import * as actions from '../actions/links.actions';

export const usersInitialState: User[] =  [];

const _usersReducer = createReducer(
  usersInitialState,
  
  // CREATE USER
  on(actions.SetUserRegister, state => ({...state, loading:true})),
  
  on( actions.SuccesUserRegister, (state, {user}) => ({
    ...state, 
    user,
    })
  ),

  on( actions.ErrorUserRegister, (state, { error }) => ({
    ...state, 
    error: error
    })
  ),

  // LOGIN USER
  on(actions.SetUserLogin, state => ({...state, loading:true})),
  
  on( actions.SuccesUserLogin, (state, {user}) => ({
    ...state, 
     user
    })
  ),

  on( actions.ErrorUserRegister, (state, { error }) => ({
    ...state, 
    error: error
    })
  ),

  // GET USER
  on(actions.SetUserGet, state => ({...state, loading:true})),
  
  on( actions.SuccesUserGet, (state, {user}) => ({
    ...state, 
     user
    })
  ),

  on( actions.ErrorUserRegister, (state, { error }) => ({
    ...state, 
    error: error
    })
  ),

);

export function usersReducer(state, action) {
  return _usersReducer(state, action);
}