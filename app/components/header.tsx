'use client';

import Navigation from "./navigation";

export default function Header() {
    // Return nav in the header
    return (
        <header className="relative w-full border-b bg-white py-12">
            <Navigation />
        </header>
    );
};