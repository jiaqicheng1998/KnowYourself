import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import { login } from '../../store/session'
import logo from './logo.png'

function Navigation({ isLoaded }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const handleClick = () => {
        const demoUser = {
            credential: 'demo@user.io',
            password: 'password'
        }
        dispatch(login(demoUser))
    }

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div>
                <ProfileButton user={sessionUser} />
            </div>
        );
    } else {
        sessionLinks = (
            <>
                <div className='demo' onClick={handleClick} >Demo</div>
                <LoginFormModal />
                <div className='signup'>
                    <NavLink to='/signup'>Sign Up</NavLink>
                </div>
            </>
        );
    }

    return (
        <nav>
            <div className='logo_container'>
                <NavLink exact to='/'><img className='logo' src={logo} alt="logo"/></NavLink>
            </div>
            <div className='ls_container'>
                {isLoaded && sessionLinks}
            </div>
        </nav>
    );
}

export default Navigation;