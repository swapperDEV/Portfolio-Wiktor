import React, {useState} from 'react'
//@ts-ignore
import {NavLink} from 'react-router-dom'
import Wrapper from '../../UI/Wrapper'
const LoginForm = (props:any) => {
    const {logged} = props
    const [loginValue, changeLogin] = useState('')
    const [passValue, changePass] = useState('')

    const checkData = async () => {
        await fetch(`http://192.168.0.45:555/login/?login=${loginValue}&key=${passValue}`).then(res=>res.json()).then(res=>{
            if(res===true) {
                logged()
            }
        })

    }
    
    const submitForm = (e:any) => {
        if(e.key === 'Enter') {
            checkData()
        }
    }
    const handleChangeLogin = (e:any) => {
        changeLogin(e.target.value)
    }
    const handleChangePass = (e:any) => {
        changePass(e.target.value)
    }
    return (
        <Wrapper>
            <div className='loginPage'>
                <div className='form'>
                    <NavLink to='/'>HOME</NavLink>
                    <div>
                        <label>Login: <input maxLength={32} onKeyPress={submitForm} value={loginValue} onChange={handleChangeLogin}/></label>
                        <label>Password: <input type={'password'} onKeyPress={submitForm} maxLength={32} value={passValue} onChange={handleChangePass}/></label>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default LoginForm