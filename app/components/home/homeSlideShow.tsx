"use client";

import Image from "next/image";
import { useState } from "react";
import SlideShowButton from "./slideShowButton";

export default function SlideShow() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const imagePathList: Array<string> = [
        "/images/home/handcrafted_fabrics.webp",
        "/images/home/handcrafted_keychains.webp",
        "/images/home/handcrafted_startup_buisness.webp",
        "/images/home/handcrafted_tiara_diy.webp"
    ];

    const imageAltList: Array<string> = [
        "Fabrics layed out on a table.",
        "Woman looking at diy keychains for sale.",
        "Woman looking at computer screen, viewing information.",
        "Materials set on a table to make a diy tiara."
    ];

    const handleClick = (handler: boolean) => {
        if (handler) {
            if (currentImageIndex === 3) {
                setCurrentImageIndex(0);
            } else {
                setCurrentImageIndex(currentImageIndex + 1);
            }
        } else {
          if (currentImageIndex === 0) {
            setCurrentImageIndex(3);
          } else {
            setCurrentImageIndex(currentImageIndex - 1);
          }
        };
    };

    return (
        <div className="flex items-center justify-center gap-4 w-full max-w-2xl">
            <SlideShowButton onClick={ () => {handleClick(false)} }>
                &lt;
            </SlideShowButton>
            <div>
                <Image
                    key={currentImageIndex}
                    // This is here to reset the animation each time the button is clicked
                    src={imagePathList[currentImageIndex]}
                    alt={imageAltList[currentImageIndex]} 
                    width={600} 
                    height={400}
                    className="animate-slideIn border-2 border-gray-800"
                />
            </div>
            <SlideShowButton onClick={ () => {handleClick(true)} }>
                &gt;
            </SlideShowButton>
        </div>
    );
}