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

function Menu() {
  const [menuMobile, setMenuMobile] = useState(false);

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
          style={{ color: "white", cursor: "default" }}
        />
        <Home className="h-6 w-6" />
        <Users className="h-6 w-6" />
        <DollarSignIcon className="h-6 w-6" />
        <Settings className="h-6 w-6" />
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
  <div>
    <Home className="h-6 w-6" />
    <span>Início</span>
  </div>
  <div>
    <Users className="h-6 w-6" />
    <span>Clientes</span>
  </div>
  <div>
    <DollarSignIcon className="h-6 w-6" />
    <span>Receitas</span>
  </div>
  <div>
    <Settings className="h-6 w-6" />
    <span>Configurações</span>
  </div>

  <div className="exit">
    <LogOut />
    <span>Sair</span>
  </div>
</MenuLinksMobile>
      <MenuExit>
        <LogOut />
      </MenuExit>
    </MenuContainer>
  );
}

export default Menu;
