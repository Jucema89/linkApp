import { createReducer, on } from '@ngrx/store';
import { Link } from '../../models/link.model';
import * as actions from '../actions/links.actions';


export const initialState:Link[] = [];

const _linksReducer = createReducer(
  initialState,
  on( actions.crearLink, (state, {link}) => [...state, link]),

//   on( actions.toggle, (state, { id }) => {
//     return state.map( todo => {
//       if( todo.id === id ) {
//         return {
//           ... todo,
//           completado: !todo.completado
//         }
//       } else {
//         return todo;
//       }
//     })
//   }),

//   on( actions.editar, (state, { id, texto }) => {
//     return state.map( todo => {
//       if( todo.id === id ) {
//         return {
//           ... todo,
//           texto: texto
//         }
//       } else {
//         return todo;
//       }
//     })
//   }),

//   on( actions.borrar, (state, { id }) => {
//     return state.filter( todo => todo.id !== id )
//   }),
  
//   on( actions.borrarCompletados, state => state.filter(todo => !todo.completado)),

//   on( actions.toggleAll, state => {
//     return state.map( todo => {
//       if( todo ) {
//         return {
//           ... todo,
//           completado: !todo.completado
//         }
//       }
//     })
//   }),
  


);



export function linksReducer(state, action) {
  return _linksReducer(state, action);
}