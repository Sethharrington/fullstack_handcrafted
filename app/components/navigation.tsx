"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navigation() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="relative w-full bg-white">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <a href="#" className="flex items-center">
                        <Image 
                          src="/images/logo.svg"
                          alt="logo"
                          width={250}
                          height={70}
                        />
                    </a>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex items-center gap-6">
                        <li>
                            <a className="text-gray-700 hover:text-amber-600" href="#">Link 1</a>
                        </li>
                        <li>
                            <a className="text-gray-700 hover:text-amber-600" href="#">Link 2</a>
                        </li>
                        <li>
                            <a className="text-gray-700 hover:text-amber-600" href="#">Link 3</a>
                        </li>
                    </ul>

                    {/* Mobile button */}
                    <button
                      className="md:hidden text-gray-700"
                      onClick={() => setOpen(!open)}
                      area-label="Toggle menu"
                    >
                    ☰
                    </button>

                    {/* Mobile Menu */}
                    {open && (
                        <ul className="md:hidden absolute top-16 left-0 w-full bg-white border-t flex flex-col gap-4 p-4 shadow-md transition delay-150 duration-300 ease-in-out">
                            <li>
                            <a className="block text-gray-700 hover:text-amber-600 text-center" href="#">Link 1</a>
                            </li>
                            <li>
                            <a className="block text-gray-700 hover:text-amber-600 text-center" href="#">Link 2</a>
                            </li>
                            <li>
                            <a className="block text-gray-700 hover:text-amber-600 text-center" href="#">Link 3</a>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    )
}