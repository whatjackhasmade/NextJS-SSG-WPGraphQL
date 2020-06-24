import React, { useEffect, useState } from "react"
import { useMenus } from "particles/hooks"
import { Menu, MenuItem } from "wjhm"

import HeaderComponent from "./header.styles"

import Logo from "assets/images/logo/logo.svg"
import IconBars from "assets/images/icons/solid/bars.svg"
import IconTimes from "assets/images/icons/solid/times.svg"

import Link from "atoms/link"

const Header = () => {
  const [menuOpen, toggleMenu] = useState(false)

  const allMenus = useMenus()
  const headerMenu: Menu = allMenus.find(({ slug }) => slug === "header-menu")
  if (!headerMenu) return null

  const nodes = headerMenu?.menuItems?.nodes
  if (!nodes) return null

  const itemCount = nodes.length
  const lastItem = nodes[itemCount - 1]
  if (!lastItem) return null

  let className = `header__menu`
  if (menuOpen) className += ` header__menu--show`

  const menuLabel = menuOpen ? `Close` : `Open`

  const handleClick = (e) => {
    e.preventDefault()
    toggleMenu(!menuOpen)
  }

  return (
    <HeaderComponent>
      <div className="header__contents">
        <Link href="/" className="header__logo">
          <Logo />
        </Link>
        <nav className={className}>
          {nodes.map(
            (item, index) =>
              index !== itemCount - 1 && (
                <Item key={`header-nav-${index}`} {...item} />
              )
          )}
        </nav>
        <a className="mailtoui" href={lastItem.url}>
          {lastItem.label}
        </a>
        <button onClick={handleClick}>
          <span>{menuLabel} Menu</span>
          <span> Navigation</span>
          {menuOpen ? <IconTimes /> : <IconBars />}
        </button>
      </div>
    </HeaderComponent>
  )
}

const Item = ({ label, url }: MenuItem) => <Link href={url}>{label}</Link>

export default Header
