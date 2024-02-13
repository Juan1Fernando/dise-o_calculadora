import { View } from 'react-native'
import React from 'react'
import { Boton, Caja } from './Atomicos'
import { estilos } from './Estilos'

export const Calculadora = () => {
  return (
    <View>
      <View>
        <Caja valor={'0'}/>
      </View>
      <View style={estilos.botonescontainer}>
        <Boton texto={' C '}/>
        <Boton texto={' () '}/>
        <Boton texto={' % '}/>
        <Boton texto={' / '}/>
        <Boton texto={' 9 '}/>
        <Boton texto={' 8 '}/>
        <Boton texto={' 7 '}/>
        <Boton texto={' 6 '}/>
        <Boton texto={' 5 '}/>
        <Boton texto={' 4 '}/>
        <Boton texto={' 3 '}/>
        <Boton texto={' 2 '}/>
        <Boton texto={' 1 '}/>
        <Boton texto={' + '}/>
        <Boton texto={' +/- '}/>
        <Boton texto={' 0 '}/>
        <Boton texto={' . '}/>
        <Boton texto={' = '}/>
        
      </View>
    </View>
  )
}
