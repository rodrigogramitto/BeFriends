import { useAuth0 } from '@auth0/auth0-react';
import defaultAvatar from '../images/avatar.png';
import logo from '../images/befriends-logo.png';

function NavBar ({viewSwitcher, currentUser}) {
    const { logout } = useAuth0();
    console.log('current user: ', currentUser);

    return (
        <div className="navbar">
            <div className="flex-1 gap-4">
                <img className="w-24" src={logo} />
                <a 
                className="underline text-sm" 
                onClick={() => viewSwitcher(1)}
                >Profile</a>
                <a 
                className="underline text-sm"
                onClick={() => viewSwitcher(2)}
                >Discover</a>
                <a 
                className="underline text-sm"
                onClick={() => viewSwitcher(3)}
                >FriendCircles™</a>    
            </div>
            <div className="flex-none">
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src={currentUser.firstname ? currentUser.profile_pic : defaultAvatar }/> 
                </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <a className="justify-between" onClick={() => viewSwitcher(1)}>
                    Profile
                    <span className="badge">New</span>
                    </a>
                </li>
                <li><a>Settings</a></li>
                <li><a onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Logout</a></li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default NavBar;