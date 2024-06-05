import React from 'react'
import Header from './components/headerComponent.js'
import BodyComponent from './components/bodyComponent.js'

const App = () => {
    
    return <div style={{width:"100%",height:"100%"}}>
        <Header></Header>
        <BodyComponent/>     
    </div>
}

export default App