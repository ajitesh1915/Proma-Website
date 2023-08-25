import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import {MdAccountCircle } from "react-icons/md";
import {MdSearch } from "react-icons/md";
import {MdAddShoppingCart } from "react-icons/md";
import logo from "../../../images/myLogo.png"

const options = {
  burgerColor: "red",
  burgerColorHover: "#f9cc0b",
  logo,
  logoWidth: "20vmax",
  navColor1: "black",
  logoHoverSize: "15px",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "white",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#f9cc0b",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "white",
  searchIconColor: "white",
  cartIconColor: "white",
  profileIconColorHover: "#f9cc0b",
  searchIconColorHover: "#f9cc0b",
  cartIconColorHover: "#f9cc0b",
  cartIconMargin: "1vmax",
};

export const Header = () => {
  return (
    <ReactNavbar
    profileIcon= {true}
    ProfileIconElement= {MdAccountCircle}
    searchIcon= {true}
    SearchIconElement= {MdSearch}
    cartIcon= {true}
    CartIconElement= {MdAddShoppingCart}
    {...options}
    />
  )
}

export default Header;
