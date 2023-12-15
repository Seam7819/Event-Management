import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => { 
    const {user,logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then()
        .catch()
    }

    const links = <>
        <li><NavLink to='/'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }>Home</NavLink></li>
        <li><NavLink to='/about'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }>About</NavLink></li>
        <li><NavLink to='/services'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }>Services</NavLink></li>
        <li><NavLink to='/contact'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }>Contact</NavLink></li>
        
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img className="h-16 w-40 border rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_fyNuUpweJc0MbuH5H5emTPePFv4cHSRNPDnDXUol12TF7-i92m2nDf57Pu19wqluFv0&usqp=CAU" alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    (user) ? <button onClick={handleLogOut} className="btn btn-ghost">
                        Sign Out
                    </button> : <Link to={'/login'} className="btn">LogIn</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;