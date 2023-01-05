// import { SET_LIKED_RECETA } from './actions'
/* eslint-disable */
//import store from './store'
const data = require('../recetas.json')

export const actionAddLike = {
  type: '@liked/added'
}

export const actionQuitLike = {
  type: '@liked/added'
}

export const actionViewState = {
  type: '@liked/viewState'
}
export const initialState = []

console.log('primerinitialState', initialState.length)
if (initialState.length === 0) {
  data.map(info => initialState.push({ nombre: info.nombre, liked: false }))
} else {
  console.log('Ya esta hecho')
}

console.log('initialState', initialState)
let modState = [...initialState]

export const likeReducer = (state = modState, action) => {
  switch (action.type) {
    case '@liked/added':
      modState = modState.map(receta => {
        if (receta.nombre === action.payload.nombre) {
          //console.log('ESTOY EN IF RETRUN__', action.payload.nombre)
          return {
            ...receta,
            liked: true
          }
        } else {
          return receta
        }
      })
      console.log('modState', modState)

      return modState

    case '@liked/quit':
      modState = modState.map(receta => {
        if (receta.nombre === action.payload.nombre) {
          //console.log('ESTOY EN IF RETRUN__', action.payload.nombre)
          return {
            ...receta,
            liked: false
          }
        } else {
          return receta
        }
      })
      console.log('modState', modState)

      return modState

    default:
      return { ...initialState }
  }
}
