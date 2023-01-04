// MainStack
/*
1. npm install @react-navigation/native
2. npx expo install react-native-screens react-native-safe-area-context
3. npm install @react-navigation/native-stack
  */

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import store from '../redux/store'
import { Provider } from 'react-redux'
import Home from '../Screens/Home'
import Details from '../Screens/Details'

const Stack = createNativeStackNavigator()

export default function MainStack () {
  return (
    <Provider store={store}>

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Details' component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
