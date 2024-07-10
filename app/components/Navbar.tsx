"use client"
import { useState, useEffect } from "react";
import teslaText from "@public/teslaText.svg";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let prevScrollPos = window.scrollY;
    
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setIsScrolled(currentScrollPos > 100 && currentScrollPos < prevScrollPos);
            prevScrollPos = currentScrollPos;
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`w-[100vw] h-[100px] ${isScrolled ? 'fixed top-0 left-0 bg-[#fff] transition-all duration-300 ease-in-out' : 'absolute transition-all duration-300 ease-in-out hidden' } navbar flex justify-center items-center`}>
            <div className="flex justify-between w-[97vw] h-[100px] items-center overflow-visible">
                <img src={teslaText.src} alt="" className="h-[170px] cursor-pointer" />
                <button type="button" className="px-6 py-3 font-bold bg-[#e3e2e0] hover:scale-[1.1] duration-100 ease-in-out rounded-md">Menu</button>
            </div>
        </div>
    );
}