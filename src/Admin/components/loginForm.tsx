import React, {useState, useEffect} from 'react'
//@ts-ignore
import {NavLink} from 'react-router-dom'
import Wrapper from '../../UI/Wrapper'
const LoginForm = (props:any) => {
    const {logged} = props
    const [loginValue, changeLogin] = useState('')
    const [passValue, changePass] = useState('')
    const [actKey, setKey] = useState<any>(null)

    const checkData = async () => {
        await fetch(`http://192.168.0.45:555/login/?login=${loginValue}&key=${passValue}`).then(res=>res.json()).then(res=>{
            if(res===true) {
                console.log(actKey);
                logged(actKey)
                let currentDate = new Date();
                let expireDate = new Date(currentDate.getTime() + 10*60000);
                localStorage.setItem('logTime', expireDate.toString())
            } else {
                setKey('')
            }
        })

    }
    
    const submitForm = (e:any) => {
        if(e.key === 'Enter') {
            checkData()
            setKey(loginValue + ',' + passValue)
        }
    }
    const handleChangeLogin = (e:any) => {
        changeLogin(e.target.value)
    }
    const handleChangePass = (e:any) => {
        changePass(e.target.value)
    }
    useEffect(() => {
        let expireDate:any = localStorage.getItem('logTime')
        expireDate = Date.parse(expireDate)
        let actDate:any = new Date()
        actDate = Date.parse(actDate)
        if(expireDate > actDate) {
            console.log('logged');
            logged()
        } else {
            console.log('un logged');
        }
    })
    return (
        <Wrapper>
            <div className='loginPage'>
                <div className='form'>
                    <div>
                        <label>Login: <input maxLength={32} onKeyPress={submitForm} value={loginValue} onChange={handleChangeLogin}/></label>
                        <label>Password: <input type={'password'} onKeyPress={submitForm} maxLength={32} value={passValue} onChange={handleChangePass}/></label>
                    </div>
                    <NavLink to='/'>Back to home</NavLink>
                </div>
            </div>
        </Wrapper>
    )
}

export default LoginForm