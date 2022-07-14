import '../index.css';
import { Link } from 'react-router-dom'
import { useState } from "react";
import { FaBlog, FaSignInAlt, FaUser} from 'react-icons/fa'
function Nav() {
	const [isNavExpanded, setisNavExpanded] = useState(false)
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
							<li className="">
								<Link to='/'>
									<FaBlog /> Blog
								</Link>
							</li>
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
						</ul>
					</div>
				</div>
		</div>
	)
}

export default Nav
