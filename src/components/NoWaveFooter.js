import React from 'react'
import Logo from './assets/Logo.png'
import SocialButtons from './SocialButtons'

const NoWaveFooter = () => {
  return (
    <div className='footer'>
<div className="no-wave-footer-content">
    <img src={Logo} alt="Legacy Pools footer Pic" className="logo-image-footer" />
    <SocialButtons />
    <p>&copy; 2023 Legacy Pools LLC | CCB #208220 | All Rights Reserved.</p>
</div>
</div>
  )
}

export default NoWaveFooter