import React, {useState} from 'react'
//@ts-ignore
import './admin.css'
import Background from '../UI/Background'
import Wrapper from '../UI/Wrapper'
import LoginForm from './components/loginForm'
import AdminMenu from './components/adminMenu'

const Admin = () => {
    const [ifLogged, changeLogged] = useState(false)
    const [actKey, setKey] = useState('error')
    const logged = (key:string) => {
        console.log(key);
        changeLogged(true)
        setKey(key)
    }
    const logout = () => {
        changeLogged(false)
        setKey('error')
        localStorage.setItem('logTime', '0')
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