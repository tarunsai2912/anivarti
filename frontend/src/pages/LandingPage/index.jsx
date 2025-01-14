import React, {useState} from 'react'
import Register from '../../components/Register'
import signImg from '../../assets/signImg.png'
import toast from 'react-hot-toast';
import Login from '../../components/Login'
import './index.css'

function LandingPage() {

  const [showLogin, setShowLogin] = useState(true)
  const [showRegister, setShowRegister] = useState(false)

  const handleLogin = () => {
    setShowLogin(true)
    setShowRegister(false)
  }

  const handleRegister = () => {
    setShowRegister(true)
    setShowLogin(false)
  }

  return (
    <>
    <div className='land-container'>
      <div className='div1-land'>
        <img className='img-land' src={signImg} alt='sign_img'></img>
        <h3 className='para1-land'>Welcome aboard my friend<br/><span className='para2-land'>just a couple of clicks and we start</span></h3>
      </div>
      <div className='div2-land'>
        {showRegister && <Register handleLogin={handleLogin} />}
        {showLogin && <Login handleRegister={handleRegister} />}
      </div>
    </div>
    </>
  )
}

export default LandingPage
