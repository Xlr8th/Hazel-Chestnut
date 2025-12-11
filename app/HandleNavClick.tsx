"use client"

import { ReactNode, useEffect } from "react"

interface Props {
  children: ReactNode
}

export default function AOSWrapper({ children }: Props) {
  useEffect(() => {
    const navItem = document.querySelectorAll('.nav-item');
    const hamburgerCheckbox = document.getElementById('toggle') as HTMLInputElement;

    const handleNavClick = () => {
      const screenWidth = window.innerWidth;
      if(screenWidth < 992 && hamburgerCheckbox.checked) {
        hamburgerCheckbox.checked= false;
      }
    }
    navItem.forEach((link) => {
      link.addEventListener('click', handleNavClick);
    });

    return () => {
      navItem.forEach((link) => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, []);

  return <>{children}</>
}


