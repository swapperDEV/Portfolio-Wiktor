import React, {useState} from 'react'
import './styles/adminMenu.css'
import Home from './adminView/home'
import PostCreate from './adminView/PostCreate'

const AdminMenu = (props:any) => {
    const [actView, changeView] = useState('home')
    const viewChange = (x:string) => {
        console.log(x);
        changeView(x)
    }
    return (
        <div className='admin_panel'>
            <div className='admin_sidebar'>
                <div>
                    <i className="fas fa-user-circle"></i> Logged
                </div>
                <div className='admin_menu'>
                    <ul>
                        <li onClick={() => viewChange('home')}>Home</li>
                        <li onClick={() => viewChange('postc')}>Create Post</li>
                        <li onClick={() => viewChange('postr')}>Remove Posts</li>
                        <li onClick={() => viewChange('poste')}>Edit Post</li>
                    </ul>
                </div>
                <button onClick={() => props.logout()}>LOGOUT</button>
            </div>
            <div className='admin_viewPanel'>
                {actView === 'home' && <Home/>}
                {actView === 'postc' && <PostCreate/>}
            </div>
        </div>
    )
}

export default AdminMenu