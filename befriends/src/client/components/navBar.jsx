import { useAuth0 } from '@auth0/auth0-react';

function NavBar () {
    const { logout } = useAuth0();
    return (
        <div className="navbar">
            <div className="flex-1">
                <a className="normal-case text-xl">BeFriends</a>
                <a>Profile</a>
            </div>
            <div className="flex-none">
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src="https://picsum.photos/id/237/300/300" />
                </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                    </a>
                </li>
                <li><a>Settings</a></li>
                <li><a onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >Logout</a></li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default NavBar;