import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import styles from './style'

class Login extends Component {

  handleLogar = () => {
      this.props.navigation.navigate('Home')
  }

  handleCadatrar = () => {
      this.props.navigation.navigate('CadastrarUser')
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="E-MAIL" placeholderTextColor="#C4C4C4" style={styles.input}/>
        <TextInput placeholder="*********" placeholderTextColor="#C4C4C4" secureTextEntry={true} style={styles.input}/>
        <TouchableOpacity onPress={this.handleCadatrar} style={styles.btnCadastrar}>
            <Text style={styles.cadastrarText}>CADASTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleLogar} style={styles.btnLogar}>
            <Text style={styles.logarText}>LOGAR</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

Login.navigationOptions = {
    header: null
}

export default Login

