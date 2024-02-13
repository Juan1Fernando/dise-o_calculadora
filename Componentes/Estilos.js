import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  // Estilos del boton
  boton: {
    padding: 10,
    borderRadius: 8,
    width: 100,
    height: 60,
    backgroundColor: 'black', // Change the background color to black
    borderColor: 'darkgrey', // Change the border color to dark gray
    borderWidth: 2,
    alignItems: 'flex-end', // Align content to the right
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textoB: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginRight: 20
  },
  logoB: {
    height: 30,
    width: 30,
    marginRight: 5
  },
  // Estilos de la caja
  boxContainer: {
    borderColor: 'darkgrey', // Change the border color to dark gray
    borderWidth: 3,
    borderRadius: 10,
    height: 80,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'black' // Change the background color to black
  },
  TextBox: {
    fontSize: 40,
    fontWeight: 'bold', // Add bold font style
    color: 'darkgrey' // Change the text color to dark gray
  },
  // Estilo de contenedor de los botones
  botonescontainer: {
    padding: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: 'black' // Change the background color to black
  }
});
