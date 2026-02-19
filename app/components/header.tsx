'use client';

interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
    // Return nav in the header
    return (
        <header className="relative w-full border-b bg-white py-12">
            { children }
        </header>
    );
};