import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { ToastContainer } from 'react-toastify';
import AppLoading from './Components/apploading';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppLoading />
     <ToastContainer
     position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

      />
  </StrictMode>,
)
