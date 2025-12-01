import React from 'react'
import Dropdown from './Components/header/ProfileMenu'
import Logo from './Components/header/Logo'
import Nav from './Components/header/Nav'
import Body from './Components/Main/Body'
import Footer from './Components/footer/Footer'
import LastFooter from './Components/footer/LastFooter'
import Login from './Components/Main/Login'
import ProfileMenu from './Components/header/ProfileMenu'
import Log2 from './Components/Main/Log2'



function App() {
  return (
    <div>
      <Dropdown/>
      <Logo/>
      <Log2/>
      <Nav/>
      <Body/>  
      <ProfileMenu/>
      <Login/> 
      <Footer/>
      <hr className=' m-8 bg-gray-400'/>
      <LastFooter/>  
    </div>
  )
}

export default App