import React, {useState} from 'react'
//@ts-ignore
import './admin.css'
import Background from '../UI/Background'
import Wrapper from '../UI/Wrapper'
import LoginForm from './components/loginForm'
import AdminMenu from './components/adminMenu'

const Admin = () => {
    const [ifLogged, changeLogged] = useState(false)
    const logged = () => {
        changeLogged(true)
    }
    const logout = () => {
        changeLogged(false)
    }    
    return (
        <Wrapper className='adminPage'>
            <Background>
                {ifLogged ? <AdminMenu logout={logout}/> :<LoginForm logged={logged}/>}
            </Background>
        </Wrapper>
    )
}

export default Admin