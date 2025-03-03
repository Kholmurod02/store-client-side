import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./layout/layout"
import About from "./pages/about/about"
import Cart from "./pages/cart/cart"
import Contact from "./pages/contact/contact"
import Home from "./pages/home/home"
import SignUp from "./pages/signUp/signUp"
import Wishes from "./pages/wishes/wishes"
import Account from "./pages/account/account"
import Products from "./pages/products/products"
import Login from "./pages/login/login"
import InfoPage from "./pages/infoPage/infoPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/signUp",
        element: <SignUp />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/wishes",
        element: <Wishes />
      },
      {
        path: "/account",
        element: <Account />
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/infoPage/:id",
        element: <InfoPage />
      }
    ]
  }
])

function App() {



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
