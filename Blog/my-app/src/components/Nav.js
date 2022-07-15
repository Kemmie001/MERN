import '../index.css';
import { Link, useNavigate} from 'react-router-dom'
import { useState } from "react";
import { FaBlog, FaSignInAlt,FaSignOutAlt, FaUser} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'

function Nav() {
	const [isNavExpanded, setisNavExpanded] = useState(false)
	const navigate = useNavigate()
	const dispatch = useDispatch()  
	const {user} = useSelector((state) => state.auth)

	const onLogOut = () => {
		dispatch(logout())
		dispatch(reset())
		navigate('/')
	}
	return (
		<div>
				<div className="nav"> 
					<div className="logo">
						<Link to="/">Logo</Link>
						<div onClick={() => {
							setisNavExpanded(!isNavExpanded);
						}} className="burger">&#9776;
					</div>
					</div>
					<div onClick={() => {
						setisNavExpanded(false);
					}} className={
						isNavExpanded ? "overlay expanded" : "overlay"
					}>
						<ul>
							{
								user ? (
									<li className="">
								<button className="btn" onClick={onLogOut}>
									<FaSignOutAlt /> Logout
								</button>
							</li>
								) : (<>
									<li className="">
								<Link to='/SignIn'>
									<FaSignInAlt /> SignIn
								</Link>
							</li>
							<li className="">
								<Link to='/SignUp'>
									<FaUser/> SignUp
								</Link>
							</li>
									</>)
							}
							
						</ul>
					</div>
				</div>
		</div>
	)
}

export default Nav
