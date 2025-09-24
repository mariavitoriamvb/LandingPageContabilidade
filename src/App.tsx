import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Studio from './components/Studio'
import Process from './components/Process'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'


import heroBg from './assets/background.jpg' 
import studioBg from './assets/studio-bg.png'


export default function App(){
  return (
    <>
      <Navbar sections={[
        { id: 'home', label: 'Home', theme: 'light' },
        { id: 'services', label: 'Services', theme: 'dark' },
        { id: 'studio', label: 'Studio', theme: 'light' },
        { id: 'process', label: 'Process', theme: 'dark' },
        { id: 'clients', label: 'Clients', theme: 'light' },
        { id: 'contact', label: 'Contact', theme: 'dark' },
      ]} active={'home'} theme={'light'} onChange={()=>{}} />

      <ReactFullpage
        licenseKey={'gplv3-license'}          
        credits={{ enabled: false }}    
        scrollingSpeed={800} // velocidade em ms
        navigation         // bolinhas na lateral
        anchors={['home','services','studio','process','clients','contact']} // ids
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section section--home"><Hero /></div>
              <div className="section theme-dark"><Services /></div>
              <div className="section section--studio"><Studio /></div>
              <div className="section theme-dark"><Process /></div>
              <div className="section theme-dark"><Clients /></div>
              <div className="section theme-dark"><Contact /></div>
              
            </ReactFullpage.Wrapper>

           
          )
        }}
      />

       <Footer />
    </>
  )
}
