/* eslint-disable no-undef */
import { likeReducer } from '../redux/reducer'
const data = require('../recetas.json')

const state = []
data.map(info => state.push({ nombre: info.nombre, liked: false }))
console.log(state)

const stateTrue = []
data.map(info => state.push({ nombre: info.nombre, liked: false }))
console.log(state)

describe('Like reducer: @liked/added ', () => {
  test('Solo modifica el parametro liked del objeto solicitado', () => {
    const action = {
      type: '@liked/added',
      payload: {
        nombre: 'Hamburgueja',
        liked: true
      }
    }
    const newState = likeReducer(state, action)
    expect(newState).toContainEqual(state[2])
    console.log('NEWSTATE', newState)
  })

  test('Devuelve un nuevo estado con la misma longitud', () => {
    const action = {
      type: '@liked/added',
      payload: {
        nombre: 'Hamburgueja',
        liked: true
      }
    }

    const newState = likeReducer(state, action)
    expect(newState).toHaveLength(6)
  })

  test('Devuelve un nuevo estado con el parametro liked en true', () => {
    const action = {
      type: '@liked/added',
      payload: {
        nombre: 'Hamburgueja',
        liked: true
      }
    }

    const newState = likeReducer(state, action)
    expect(newState).toContainEqual({
      nombre: 'Hamburgueja',
      liked: true
    })
  })
})

describe('Like reducer: @liked/quit ', () => {
  test('Solo modifica el parametro liked del objeto solicitado', () => {
    const action = {
      type: '@liked/quit',
      payload: {
        nombre: 'Hamburgueja',
        liked: false
      }
    }
    const newState = likeReducer(stateTrue, action)
    expect(newState).toContainEqual(state[2])
    console.log('NEWSTATE', newState)
  })

  test('Devuelve un nuevo estado con la misma longitud', () => {
    const action = {
      type: '@liked/quit',
      payload: {
        nombre: 'Hamburgueja',
        liked: true
      }
    }

    const newState = likeReducer(stateTrue, action)
    expect(newState).toHaveLength(6)
  })

  test('Devuelve un nuevo estado con el parametro liked en false', () => {
    const action = {
      type: '@liked/quit',
      payload: {
        nombre: 'Hamburgueja',
        liked: false
      }
    }

    const newState = likeReducer(stateTrue, action)
    expect(newState).toContainEqual({
      nombre: 'Hamburgueja',
      liked: false
    })
  })
})
