import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import CreateTrip from './createTrip/index.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ViewTrip from './viewTrip/[tripID]/index.jsx'
import Header from './components/header.jsx';
import Footer from './components/Footer.jsx'
import MyTrips from './myTrips/MyTrips.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/createTrip',
    element:<CreateTrip/>
  },
  {
    path:'/viewTrip/:tripID',
    element:<ViewTrip/>
  },
  {
    path:'/myTrips',
    element:<MyTrips/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <Header/>
      <RouterProvider router={router} />
      <Footer/>
    </GoogleOAuthProvider>
  </StrictMode>,
)
