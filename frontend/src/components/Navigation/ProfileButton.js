import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        }

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu)
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    }

    return (
        <>
            <div className="profile_button" onClick={openMenu}>
                <div className="user-icon" style={{ backgroundImage: `url(${sessionUser?.profile_pic})` }}></div>
            </div>
            {showMenu && (
                <ul className="profile-dropdown">
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <li>
                        <div id="logout" onClick={logout}>Log Out</div>
                    </li>
                </ul>
            )}
        </>
    )
}

export default ProfileButton;