import { createBrowserRouter, Outlet, useLocation, useNavigation } from 'react-router-dom'
import Home from "../Pages/Home.jsx"
import Cart from "../Pages/Cart.jsx"
import ProductPage from "../Pages/ProductPage.jsx"
import LoadingComponent from '../Pages/LoadingComponent.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Checkout from '../Pages/Checkout.jsx'
import { useEffect } from 'react'

const AppLayout = () => {
  const navigation = useNavigation()
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
    element: <AppLayout />, 
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
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
])
