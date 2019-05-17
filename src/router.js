import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation'

import Login from './pages/Login'
import Home from './pages/Home'
import Contato from './pages/Contato'
import SideBar from './componets/SideBar'
import Cadastro from './pages/CadastroContato'
import CadastrarUser from './pages/CadastroUser'

const Router = createStackNavigator({
    Login,
    Home: createDrawerNavigator({
        Home,
        Contato
    }, {contentComponent: SideBar}),
    Cadastro,
    CadastrarUser
})

export default createAppContainer(Router)