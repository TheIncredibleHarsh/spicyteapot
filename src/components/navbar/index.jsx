import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SidebarData from '../../lib/sidebar-data.js';
import { IconContext } from 'react-icons';
import './style.css';

const Navbar = () => {
	const [sidebar,setSidebar] = useState(false);

	const toggleSidebar = () => setSidebar(!sidebar)
  return (
    <>
			<IconContext.Provider value={{color: '#fff'}}>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={toggleSidebar}/>
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
				<ul className='nav-menu-items'>
					<li className="navbar-toggle">
						<Link to="#" className="menu-bars">
							<AiIcons.AiOutlineClose onClick={toggleSidebar}/>
						</Link>
					</li>
					{SidebarData.map((item, index) => {
						return  (
							<li key={index} className={item.cName}>
								<Link to={item.path} onClick={toggleSidebar}>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						)
					})}
				</ul>
      </nav>
			</IconContext.Provider>
    </>
  );
};

export default Navbar;
