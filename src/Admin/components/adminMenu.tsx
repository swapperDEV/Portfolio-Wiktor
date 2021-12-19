import React from 'react'
import Wrapper from '../../UI/Wrapper'
const AdminMenu = (props:any) => {
    return (
        <Wrapper>
            <p>Logged</p>
            <button onClick={() => props.logout()}>LOGOUT</button>
        </Wrapper>
    )
}

export default AdminMenu