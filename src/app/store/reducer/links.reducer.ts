import { createReducer, on } from '@ngrx/store';
import { Link } from '../../models/link.model';
import { User } from '../../models/user.model';
import * as actions from '../actions/links.actions';

export interface LinkState {
  links: Link[],
  users: User[],
  userActive: User,
  usersLogin: User[],
  loader: boolean,
  loading: boolean,
  error: any
}

export const linksInitialState: LinkState =  {
  links: [],
  users: [],
  usersLogin: [],
  userActive: null,
  loader: false,
  loading: false,
  error: null
};

const _linksReducer = createReducer(
  linksInitialState,

  //GET LINKS
  on(actions.SetGetLinks, state => ({...state, loading:true})),

  on( actions.SuccessGetLinks, (state, {links}) => ({
    ...state, 
    loading: false,
    loader: true,
    links: [...links ]
    })
  ),

  on( actions.ErrorGetLinks, (state, { error }) => ({
    ...state, 
    loading: false,
    loader: false,
    error: error
    })
  ),
  
  // CREATE LINK
  on(actions.SetCrearLink, state => ({...state, loading:true})),
  
  on( actions.SuccessCrearLink, (state, {link}) => ({
    ...state, 
    loading: false,
    loader: true,
    links: [...state.links, new Link(link) ]
    })
  ),

  on( actions.ErrorCrearLink, (state, { error }) => ({
    ...state, 
    loading: false,
    loader: false,
    error: error
    })
  ),


  // DELETE LINK
  on(actions.SetDeleteLink, state => ({...state, loading:true})),

  on( actions.SuccessDeleteLink, (state, {linkDeleted}) => ({
    ...state, 
    loading: false,
    loader: true,
    links: [...state.links.filter(link => link.id !== linkDeleted.id) ]
    })
  ),

  on( actions.ErrorDeleteLink, (state, { error }) => ({
    ...state, 
    loading: false,
    loader: false,
    error: error
    })
  ),
  
  // CREATE USER
  on(actions.SetUserRegister, state => ({...state, loading:true})),
  
  on( actions.SuccesUserRegister, (state, {user}) => ({
    ...state, 
    loading: false,
    loader: true,
    users: [...state.users, new User(user) ]
    })
  ),

  on( actions.ErrorUserRegister, (state, { error }) => ({
    ...state, 
    loading: false,
    loader: false,
    error: error
    })
  ),

  // LOGIN USER
  on(actions.SetUserLogin, state => ({...state, loading:true})),
  
  on( actions.SuccesUserLogin, (state, {user}) => ({
    ...state, 
    loading: false,
    loader: true,
    usersLogin: [...state.usersLogin, new User(user) ]
    })
  ),

  on( actions.ErrorUserRegister, (state, { error }) => ({
    ...state, 
    loading: false,
    loader: false,
    error: error
    })
  ),

  // GET USER
  on(actions.SetUserGet, state => ({...state, loading:true})),
  
  on( actions.SuccesUserGet, (state, {user}) => ({
    ...state, 
    loading: false,
    loader: true,
    userActive: user
    })
  ),

  on( actions.ErrorUserRegister, (state, { error }) => ({
    ...state, 
    loading: false,
    loader: false,
    error: error
    })
  ),

);

export function linksReducer(state, action) {
  return _linksReducer(state, action);
}