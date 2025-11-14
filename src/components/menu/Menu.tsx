"use client";
import {
  DollarSign,
  DollarSignIcon,
  Home,
  LayoutDashboard,
  LogOut,
  MenuIcon,
  Package,
  Settings,
  Users,
  X,
} from "lucide-react";
import {
  MenuContainer,
  MenuExit,
  MenuLinks,
  MenuLinksMobile,
} from "./Menu.styled";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "@/context/Context";


function Menu() {
  const [menuMobile, setMenuMobile] = useState(false);
  const {theme} = useTheme();
  const menuMobileControls = () => {
    setMenuMobile(!menuMobile);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MenuContainer>
      <MenuLinks className="flex w-full items-center gap-16 flex-col">
       <LayoutDashboard
          className="h-8 w-8"
          style={{
            color: theme === "light" ? "#0f172a" : "white", // 🔹 muda só o ícone conforme tema
            cursor: "default",
          }}
        />
        <Link href='/home'>
          <Home className="h-6 w-6" />
        </Link>
        <Link href='/clients'>
          <Users className="h-6 w-6" />
        </Link>
        <Link href='/financial'>
          <DollarSignIcon className="h-6 w-6" />
        </Link>
        <Link href='/settings'>
          <Settings className="h-6 w-6" />
        </Link>
      </MenuLinks>
      <LayoutDashboard className="mobile-dashboard-icon" />
      {menuMobile ? (
        <X className="menu-icon z-99999999" onClick={menuMobileControls} />
      ) : (
        <MenuIcon className="menu-icon" onClick={menuMobileControls} />
      )}
      <MenuLinksMobile
        style={{
          transform: menuMobile ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <Link href="/home">
          <div>
            <Home className="h-6 w-6" />
            <span>Início</span>
          </div>
        </Link>
        <Link href="/clients">
          <div>
            <Users className="h-6 w-6" />
            <span>Clientes</span>
          </div>
        </Link>
        <Link href='/financial'>
          <div>
            <DollarSignIcon className="h-6 w-6" />
            <span>Receitas</span>
          </div>
        </Link>
        <Link href='/settings'>
          <div>
            <Settings className="h-6 w-6" />
            <span>Configurações</span>
          </div>
        </Link>

        <Link href='/'>
          <div className="exit">
            <LogOut />
            <span>Sair</span>
          </div>
        </Link>
      </MenuLinksMobile>
      <MenuExit>
        <Link href='/'>
          <LogOut />
        </Link>
      </MenuExit>
    </MenuContainer>
  );
}

export default Menu;
