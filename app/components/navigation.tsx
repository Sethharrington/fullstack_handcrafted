"use client";

import { useState } from "react";
import { Session } from "next-auth";
import Image from "next/image";
import Link  from "next/link";
import SignOutButton from "./navigation/signout";

interface NavigationProps {
    session: Session | null;
}

export default function Navigation({ session }: NavigationProps) {
    const [open, setOpen] = useState(false);
    const isLoggedIn = !!session?.user; // Check if user exists

    return (
        <nav className="relative w-full bg-white z-50">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center w-auto h-auto">
                        <Image 
                          src="/images/logo.svg"
                          alt="logo"
                          width={250}
                          height={70}
                        />
                    </Link>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex items-center gap-6">
                        <li>
                            <Link className="text-gray-700 hover:text-amber-600" href="/">Home</Link>
                        </li>
                        <li>
                            <Link className="text-gray-700 hover:text-amber-600" href="/product_list">Products</Link>
                        </li>
                        <li>
                            <Link className="text-gray-700 hover:text-amber-600" href="/register">Register</Link>
                        </li>
                        <li>
                            <Link className="text-gray-700 hover:text-amber-600" href="/profile">Profile</Link>
                        </li>
                        <li>
                            {isLoggedIn ? (
                                <SignOutButton />
                            ): (
                                <Link href="/login">Sign In</Link>
                            )}
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
                                <Link className="block text-gray-700 hover:text-amber-600 text-center" href="/">Home</Link>
                            </li>
                            <li>
                                <Link className="block text-gray-700 hover:text-amber-600 text-center" href="/product_list">Products</Link>
                            </li>
                            <li>
                                <Link className="block text-gray-700 hover:text-amber-600 text-center" href="/register">Register</Link>
                            </li>
                            <li>
                                <Link className="block text-gray-700 hover:text-amber-600 text-center" href="/profile">Profile</Link>
                            </li>
                            <li>
                                <SignOutButton />
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    )
}