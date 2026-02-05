"use client";

// Define the button type so it can be used with typescript
type SlideShowButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
};

export default function SlideShowButton({ children, onClick }: SlideShowButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="bg-white hover:bg-gray-200 text-black border border-gray-800 px-4 py-2 text-lg font-bold rounded transition-colors duration-200">
            {children}
        </button>
    );
}