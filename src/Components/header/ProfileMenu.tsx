import React, { useState, useRef, useEffect } from "react";
import defaultMenu from '../../assets/icons/menu-01.svg'

interface Props {
    menu?: string;
    onToggle?: (isOpen: boolean) => void;
}

export default function ProfileMenu({ menu, onToggle }: Props) {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const menuIcon = menu ?? defaultMenu

    // Close menu when clicking outside
    useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
    }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

  // Helper function to navigate to a page
    const goToPage = (hash: string) => {
    window.location.hash = hash;
    setOpen(false);
    };

    const toggleMenu = () => {
    setOpen(!open);
    onToggle?.(!open);
    };

    return (
    <div id="profile" className="relative" ref={menuRef}>
      {/* Menu Button */}
        <button onClick={toggleMenu} aria-label="Profile menu">
            <img className="w-8 h-8 cursor-pointer" src={menuIcon} alt="menu" />
        </button>

      {/* Dropdown Menu */}
    {open && (
        <div className="absolute top-12 right-0 mt-3 w-56 bg-white shadow-xl rounded-2xl border py-3 z-50">
            <ul className="text-sm text-gray-800">
            <li
                className="px-4 py-3 font-semibold hover:bg-gray-100 cursor-pointer rounded-t-lg"
                onClick={() => goToPage('#signup')}
            >
                Sign up
            </li>

            <li
                className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => goToPage('#login')}
            >
                Log in
            </li>

            <hr className="my-2" />

            <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                Airbnb your home
            </li>

            <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer rounded-b-lg">
                Help centre
            </li>
            </ul>
        </div>
    )}
    </div>
);
}
