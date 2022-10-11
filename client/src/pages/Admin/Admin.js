import React from "react"
import Navbar from "../../components/Navbar/Navbar"
import { NavLink, Outlet } from "react-router-dom"
import "./Admin.css"

export default function Admin() {
  const navbarLinks = [
    { path: "", text: "Бренды" },
    { path: "projections", text: "Телефоны" },
    { path: "orders", text: "Заказы" },
    { path: "reports", text: "Итог" },
  ]
  return (
    <div className='admin container'>
      <Navbar data={navbarLinks} />
      <div className='admin_divider'>
        <Outlet />
      </div>
    </div>
  )
}
