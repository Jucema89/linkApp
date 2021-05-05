import { createReducer, on } from '@ngrx/store';
import { Link } from '../../models/link.model';
import * as actions from '../actions/links.actions';

export const linksInitialState: Link[] =  [];

const _linksReducer = createReducer(
  linksInitialState,

  //GET LINKS
  on(actions.SetGetLinks, state => ({...state, loading:true})),

  on( actions.SuccessGetLinks, (state, {links}) => ({
    ...state, 
    ...links
    })
  ),

  on( actions.ErrorGetLinks, (state, { error }) => ({
    ...state, 
    error: error
    })
  ),
  
  // CREATE LINK
  on(actions.SetCrearLink, state => ({...state, loading:true})),
  
  on( actions.SuccessCrearLink, (state, {link}) => ({
    ...state, 
    link
    })
  ),

  on( actions.ErrorCrearLink, (state, { error }) => ({
    ...state, 
    error: error
    })
  ),


  // DELETE LINK
  on(actions.SetDeleteLink, state => ({...state, loading:true})),

  on( actions.SuccessDeleteLink, (state, {linkDeleted}) => ({
    ...state.filter(link => link.id !== linkDeleted.id)
    })
  ),

  on( actions.ErrorDeleteLink, (state, { error }) => ({
    ...state, 
    error: error
    })
  ),
  
);

export function linksReducer(state, action) {
  return _linksReducer(state, action);
}