import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';
import {RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Redux/store.js'
import { router } from './Components/routes.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
<RouterProvider router={router}/>
<ToastContainer autoClose={1000} hideProgressBar theme='dark'/>
  </Provider>
)
