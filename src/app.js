import React from 'react'
import Header from './components/headerComponent.js'
import BodyComponent from './components/bodyComponent.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WatchComponent from './components/watchComponent.js'
// import MainContainer from './components/mainContainer.js'
import VideoContainer from './components/video/videoContainer.js'

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <BodyComponent />,
        children: [{
            path: '/',
            element: <VideoContainer />/** Outlet is inside MainContainer Comp and  MainContainer is child of BodyComp
                                            => it is not mandatory to place oultlet in direct child comp */
        },
        {
            path: '/watch',
            element: <WatchComponent /> /** Outlet is inside MainContainer Comp, which is child of BodyComp */
        }
        ]
    },
   
])

const App = () => {

    return <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <Header></Header>
        <RouterProvider router={appRouter} />
    </div>
}

export default App