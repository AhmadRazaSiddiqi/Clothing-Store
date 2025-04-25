import { createBrowserRouter, Outlet, useNavigation } from 'react-router-dom'
import Home from "../Pages/Home.jsx"
import Cart from "../Pages/Cart.jsx"
import ProductPage from "../Pages/ProductPage.jsx"
import Navbar from "../Pages/Navbar.jsx"
import LoadingComponent from '../Pages/LoadingComponent.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'

// Layout that wraps all routes with Navbar and loading logic
const AppLayout = () => {
  const navigation = useNavigation()

  if (navigation.state === "loading") {
    return <LoadingComponent />
  }

  return (
    <>
      <Header/>
      <Outlet />
      <Footer/>
    </>
  )
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // Wrap all routes in layout
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "product/:id",
        element: <ProductPage />,
      },
    ],
  },
])
