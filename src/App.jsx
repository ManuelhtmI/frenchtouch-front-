import "./App.css";
import Home from "./components/visiteur/home/Home";
import HomeAdmin from "./components/Administrateur/Adminhome/AdminHome";
import { Route, Switch } from "react-router-dom";
import AdminLogin from "./components/visiteur/Adminlogin/AdminLogin";
import Prestations from "./components/visiteur/prestation/Presentation";
import CartGifts from "./components/visiteur/prestation/CartGift";
import Reserves from "./components/visiteur/reserve/Reserve";
import Cart from "./components/visiteur/panier/Cart";

import Books from "./components/visiteur/book/Book";
import Products from "./components/visiteur/shop/Products";
import Palettes from "./components/visiteur/palette/Palette";
import Abouts from "./components/visiteur/about/About";
import PrestationsAdmin from "./components/Administrateur/Adminprestation/AdminPrestation";
import CartGiftsAdmin from "./components/Administrateur/Adminprestation/AdminGift";
import ReservesAdmin from "./components/Administrateur/Adminreserve/AdminReserve";
import BooksAdmin from "./components/Administrateur/Adminbook/AdminBook";
import ShopsAdmin from "./components/Administrateur/Adminshop/AdminShop";
import PalettesAdmin from "./components/Administrateur/Adminpalette/AdminPalette";
import AboutsAdmin from "./components/Administrateur/Adminabout/AdminAbout";
import Admin from "./components/Administrateur/Admin/Admin";
import { useLayoutEffect, useEffect, useState } from "react";

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}
function getToken() {
  const tokenString = localStorage.getItem("token");
  // const userToken = JSON.parse(tokenString);
  return tokenString;
}

function App() {
  const savedCart = localStorage.getItem("cart");
  const [openFirst, setOpenFirst] = useState(false);
  const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //  const getCartReduce = () => {
  //   return cart.reduce(
  //     (sum, { quantity }) => sum + quantity,
  //     0
  //   );
  // };

  return (
    <div className="">
      <Switch>
        <Route exact path="/" component={Home}>
          <Home cart={cart} />
        </Route>

        <Route path="/about" component={Abouts}>
          <Abouts cart={cart} />
        </Route>
        <Route path="/prestations" component={Prestations}>
          <Prestations cart={cart} />
        </Route>

        <Route path="/Gifts" component={CartGifts}>
          <CartGifts cart={cart} />
        </Route>
        <Route path="/rendezvous" component={Reserves}>
          <Reserves cart={cart} />
        </Route>
        <Route path="/book" component={Books}>
          <Books cart={cart} />
        </Route>
        <Route path="/nuancier" component={Palettes}>
          <Palettes cart={cart} />
        </Route>

        <Route path="/product" component={Products}>
          <Products cart={cart} setCart={setCart} />
        </Route>
        <Route path="/cart" component={Cart}>
          {" "}
          <Cart cart={cart} setCart={setCart} />
        </Route>
        <Route path="/login" component={AdminLogin}>
          <AdminLogin cart={cart} setToken={setToken} />
        </Route>
        <Route path="/admin" component={Admin}>
          {getToken() ? <Admin /> : <AdminLogin setToken={setToken} />}
        </Route>
        <Route path="/home_admin" component={HomeAdmin}>
          {getToken() ? <HomeAdmin /> : <AdminLogin setToken={setToken} />}
        </Route>
        <Route path="/about_admin" component={AboutsAdmin}>
          {getToken() ? <AboutsAdmin /> : <AdminLogin setToken={setToken} />}
        </Route>
        <Route path="/prestations_admin" component={PrestationsAdmin}>
          {getToken() ? (
            <PrestationsAdmin />
          ) : (
            <AdminLogin setToken={setToken} />
          )}
        </Route>
        <Route path="/Gifts_admin" component={CartGiftsAdmin}>
          {getToken() ? <CartGiftsAdmin /> : <AdminLogin setToken={setToken} />}
        </Route>
        <Route path="/rendezvous_admin" component={ReservesAdmin}>
          {getToken() ? <ReservesAdmin /> : <AdminLogin setToken={setToken} />}
        </Route>
        <Route path="/book_admin" component={BooksAdmin}>
          {getToken() ? <BooksAdmin /> : <AdminLogin setToken={setToken} />}
        </Route>
        <Route path="/shop_admin" component={ShopsAdmin}>
          {getToken() ? <ShopsAdmin /> : <AdminLogin setToken={setToken} />}
        </Route>
        <Route path="/nuancier_admin" component={PalettesAdmin}>
          {getToken() ? <PalettesAdmin /> : <AdminLogin setToken={setToken} />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
