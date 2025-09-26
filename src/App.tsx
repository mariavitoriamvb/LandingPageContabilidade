import React from 'react'
// @ts-ignore
import ReactFullpage from '@fullpage/react-fullpage'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Studio from './components/Studio'
import Process from './components/Process'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'

// se usar progress/ativo no Navbar, implemente lá via fullpage_api.moveTo
export default function App(){

  return (
    <>
      <Navbar sections={[
        { id: 'home', label: 'Home', theme: 'dark' },
        { id: 'services', label: 'Services', theme: 'dark' },
        { id: 'studio', label: 'Studio', theme: 'dark' },
        { id: 'process', label: 'Process', theme: 'dark' },
        { id: 'clients', label: 'Clients', theme: 'dark' },
        { id: 'contact', label: 'Contact', theme: 'dark' },
      ]} active={'home'} theme={'dark'} onChange={() => { } } progress={0} />

      

      <ReactFullpage
        licenseKey={'gplv3-license'}
        credits={{ enabled: false }}
        scrollingSpeed={600}
        navigation={false}                 // sem bolinhas, já que você usa navbar
        anchors={['home','services','studio','process','clients','contact']}
        autoScrolling
        scrollBar={false}
        fitToSection
        bigSectionsDestination="top"
        render={() => (
          <ReactFullpage.Wrapper>
            {/* NOTE: cada .section é filha direta do Wrapper */}
            <div className="section section--home theme-dark"><Hero /></div>
            <div className="section theme-dark"><Services /></div>
            <div className="section section--studio theme-dark"><Studio /></div>
            <div className="section theme-dark"><Process /></div>
            <div className="section theme-dark"><Clients /></div>
            <div className="section theme-dark"><Contact /></div>
            {/* Se quiser o Footer como seção:
            <div className="section theme-dark"><Footer /></div> */}
          </ReactFullpage.Wrapper>
        )}
      />

      {/* Se preferir fixo: */}
      <Footer />
    </>
  )
}
