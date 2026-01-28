'use client';

import Image from "next/image";

export default function Footer() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return (
        <footer className="flex flex-col space-y-2 justify-center items-center relative w-full border-t bg-white py-4">
            <div>
                <p className="text-xl font-semibold">Handcrafted - {currentYear}&copy;</p>
            </div>
            <div className="flex justify-between w-1/4 py-4">
                <a href="https://www.facebook.com/" target="_blank">
                    <Image
                     src="/images/facebook.svg"
                     alt="facebook"
                     width={16}
                     height={16} 
                    />
                </a>
                <a href="https://x.com/" target="_blank">
                    <Image
                     src="/images/twitter-x.svg"
                     alt="twitter-x"
                     width={16}
                     height={16} 
                    />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                    <Image
                     src="/images/instagram.svg"
                     alt="instagram"
                     width={16}
                     height={16} 
                    />
                </a>
            </div>
        </footer>
    );
};