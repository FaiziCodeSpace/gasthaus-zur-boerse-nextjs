'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
    const closeTimer = useRef(null);

    const navLinks = [
        { name: 'Start', href: '/' },
        { name: 'Speisekarte', href: '/speisekarte' },
        {
            name: 'Entdecken',
            dropdown: [
                { name: 'Zimmer', href: '/#zimmer' },
                { name: 'Gästehaus', href: '/#gastehaus' },
                { name: 'Catering', href: '/#catering' },
                { name: 'Veranstaltungen', href: '/#veranstaltungen' },
                { name: 'Saisonales', href: '/#saisonal' },
            ]
        },
        { name: 'Kontakt', href: '/kontakt' },
    ];

    const openDropdown = () => {
        clearTimeout(closeTimer.current);
        setDropdownOpen(true);
    };

    const closeDropdown = () => {
        closeTimer.current = setTimeout(() => setDropdownOpen(false), 120);
    };

    const closeMobileMenu = () => {
        setMobileOpen(false);
        setMobileDropdownOpen(false);
    };

    return (
        <>
            {/* ── Desktop Navbar ── */}
            <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 h-[70px] justify-center items-center bg-foreground rounded-b-full px-8">
                {/* Logo */}
                <div className="absolute left-12">
                    <Image
                        src="/images/logos/logo.svg"
                        alt="Gasthaus zur Börse Logo"
                        width={100}
                        height={50}
                    />
                </div>

                {/* Links */}
                <ul className="flex items-center gap-1">
                    {navLinks.map(link => (
                        <li key={link.name} className="relative">
                            {link.dropdown ? (
                                <div onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
                                    <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white rounded-md transition-colors hover:bg-white/10">
                                        {link.name}
                                        <svg
                                            className={`w-3 h-3 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2.5}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    <div className={`absolute top-[calc(100%+6px)] left-1/2 -translate-x-1/2 transition-all duration-200 ${dropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'}`}>
                                        <div className="absolute -top-2 left-0 right-0 h-2" />
                                        <ul className="bg-foreground border border-white/10 rounded-xl overflow-hidden min-w-[160px] shadow-xl">
                                            {link.dropdown.map((item, i) => (
                                                <li key={item.name}>
                                                    <Link
                                                        href={item.href}
                                                        onClick={() => setDropdownOpen(false)}
                                                        className={`block px-5 py-3 text-sm text-white font-medium hover:bg-white/10 transition-colors ${i !== link.dropdown.length - 1 ? 'border-b border-white/10' : ''}`}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    href={link.href}
                                    className={`block px-4 py-2 text-sm font-semibold text-white rounded-md transition-colors hover:bg-white/10 border-b-2 ${pathname === link.href ? 'border-white' : 'border-transparent'}`}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* ── Mobile Navbar ── */}
            <nav className="md:hidden fixed top-0 left-0 right-0 z-50 flex h-[60px] justify-between items-center bg-foreground px-5">
                {/* Logo */}
                <Image
                    src="/images/logos/logo.svg"
                    alt="Gasthaus zur Börse Logo"
                    width={80}
                    height={40}
                />

                {/* Hamburger */}
                <button
                    onClick={() => setMobileOpen(prev => !prev)}
                    className="flex flex-col justify-center items-center w-8 h-8 gap-1.5"
                    aria-label="Menü öffnen"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </nav>

            {/* ── Mobile Menu Panel ── */}
            <div className={`md:hidden fixed inset-0 top-[60px] bg-foreground z-50 transition-all duration-300 overflow-y-auto ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <ul className="flex flex-col px-5 pt-6 pb-10 gap-1">
                    {navLinks.map(link => (
                        <li key={link.name}>
                            {link.dropdown ? (
                                <div>
                                    {/* Dropdown trigger */}
                                    <button
                                        onClick={() => setMobileDropdownOpen(prev => !prev)}
                                        className="w-full flex justify-between items-center px-4 py-3.5 text-white font-semibold text-base rounded-xl hover:bg-white/10 transition-colors"
                                    >
                                        {link.name}
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2.5}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* Dropdown items */}
                                    <div className={`overflow-hidden transition-all duration-300 ${mobileDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <ul className="ml-4 mt-1 border-l border-white/20 pl-4 flex flex-col gap-1">
                                            {link.dropdown.map(item => (
                                                <li key={item.name}>
                                                    <Link
                                                        href={item.href}
                                                        onClick={closeMobileMenu}
                                                        className="block px-3 py-3 text-sm text-white/80 font-medium hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    href={link.href}
                                    onClick={closeMobileMenu}
                                    className={`block px-4 py-3.5 text-white font-semibold text-base rounded-xl hover:bg-white/10 transition-colors ${pathname === link.href ? 'bg-white/10' : ''}`}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}