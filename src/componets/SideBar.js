import React, {Component} from 'react'
import {Text, View, TouchableOpacity, Dimensions, StyleSheet, ScrollView} from 'react-native'
import firebase from '../connect'

class SideBar extends Component {
    handleSair = () => {
        firebase.auth().signOut()
        this.props.navigation.navigate('Login')
    }

    navLink(nav, text){
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate(nav)} style={{height: 50}}>
                <Text style={{flex: 1, textAlign: 'center', padding: 6, fontSize: 18, paddingLeft: 14, margin: 5, color: 'white'}}>{text}</Text>
            </TouchableOpacity>
        )
    }
    render(){
        return (
            <ScrollView style={styles.container}> 
                <View style={styles.header}>
                    <Text style={styles.usuarioNome}>Nome Do Usuário</Text>
                    <Text style={styles.usuarioEmail}>Email</Text>
                </View>
                <View style={{flex: 1, marginTop: 10}}>
                    {this.navLink('Home', 'Home')}
                    {this.navLink('Contato', 'Contato')}
                </View>
                <TouchableOpacity onPress={() => {}} style={{flex: 1, height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                    <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold', marginRight: 10}}>Sair</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(26, 25, 25, 0.9)"
    },
    header: {
        flex: 1, 
        backgroundColor: "rgba(26, 25, 25, 0.8)", 
        flexDirection: 'column', 
        justifyContent: 'center', 
        height: 80
    },
    usuarioNome: {
        color: "#C4C4C4", 
        fontSize: 18, 
        paddingBottom: 8, 
        paddingLeft: 8
    },
    usuarioEmail: {
        color: "#C4C4C4", 
        fontSize: 16, 
        paddingTop: 8, 
        paddingLeft: 8
    }
})

export default SideBar