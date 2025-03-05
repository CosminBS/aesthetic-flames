import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import NavBar from "./components/NavBar"
import Products from "./pages/Products/Products"
import Footer from "./components/Footer"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import ViewProduct from "./pages/ViewProduct/ViewProduct"


const AppRouter = () => {

    const routes = [
        {name: <HomePage/>, path: '/'},
        {name: <Products/>, path: '/products'},
        {name: <About/>, path: '/about'},
        {name: <Contact/>, path: '/contact'},
        {name: <ViewProduct/>, path: '/products/:id'}
    ]

  return (
    <BrowserRouter>
        <NavBar/>
            <Routes>
                {routes.map(({name, path}) => (
                    <Route key={path} path={path} element={name} />
                ))}
            </Routes>
        <Footer/>
    </BrowserRouter>
 )
}

export default AppRouter