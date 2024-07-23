import React, { useContext, useEffect, useState } from "react";
import logo from "./../assets/header-logo.png";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiMoon } from "react-icons/hi2";
import { HiSun } from "react-icons/hi2";
import { ThemeContext } from "../context/ThemeContext";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  useEffect(() => {
    console.log(theme);
  }, []);
  return (
    <div className="flex items-center">
      <img src={logo} width={60} height={60} />
      <div className="flex bg-slate-100 p-2 w-full items-center mx-9 rounded-full">
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          placeholder="Search Games..."
          className="bg-transparent outline-none px-2"
        />
      </div>
      <div className="cursor-pointer">
        {theme === "light" ? (
          <HiMoon
            className="bg-slate-200 text-black text-4xl rounded-full px-1 m-1"
            onClick={() =>{ setTheme("dark")
            localStorage.setItem('theme','dark')}}
          />
        ) : (
          <HiSun
            className="bg-slate-100 text-slate-950 rounded-full text-4xl px-1 m-1"
            onClick={() => {setTheme("light")
            localStorage.setItem('theme','light')}}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
