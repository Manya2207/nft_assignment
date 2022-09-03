import './App.css';
import Home from './components/Home/Home';
import './components/Navbar/Navbar.css'
import React, { useState } from 'react'
import { headings } from './components/Navbar/NavbarData';
import { GiHamburgerMenu } from 'react-icons/gi'
import Footer from './components/Navbar/Footer';

function App() {

  const [toggleSidebar, setToggleSidebar] = useState(false);

  const displaySidebar = () => {
    setToggleSidebar(!toggleSidebar)
    console.log(toggleSidebar)
  }

  console.log(headings)

  return (
    <div className="App">
      <div className='nav'>
        <div className='hamburger' onClick={displaySidebar}><GiHamburgerMenu /> </div>
        <button className='addBtn'>+</button>
        {
            toggleSidebar? <ul className='sidebar'>
              {
                headings.map(heading => <li className='sidebarItem'>
                  <i> {heading.icon} </i> &nbsp;
                  <a href='#'> {heading.name} </a>
                </li> )
              }
              <Footer />
            </ul> : <></>
        }
    </div>
      <Home open={toggleSidebar}/>
    </div>
  );
}

export default App;
