import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const quickLinks = [
    { name: "Start", href: "/" },
    { name: "Speisekarte", href: "/speisekarte" },
    { name: "Gästehaus", href: "/#gastehaus" },
    { name: "Kontakt", href: "/kontakt" },
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
];

export default function Footer() {
    return (
        <footer
            className="w-full"
            style={{
                background:
                    "linear-gradient(to bottom, #F7E2CF 0%, #F7E2CF 52%, #FFC793 52%, #FFC793 100%)",
            }}
        >
            {/* CTA Section */}
            <div className="px-6 sm:px-10 lg:px-25 pt-16 pb-10">
                <h2 className="text-[48px] sm:text-[72px] lg:text-[96px] font-bold font-playfair text-black text-center leading-none mb-10">
                    Jetzt Ihren Aufenthalt buchen
                </h2>

                {/* Map + Info card */}
                <div className="flex flex-col lg:flex-row bg-[#F5D3B1] rounded-2xl overflow-hidden border border-foreground/10 shadow-[8px_8px_0px_rgba(0,0,0,0.15)]">

                    {/* Map */}
                    <div className="w-full lg:w-[55%] h-[260px] sm:h-[320px] lg:h-[360px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d730.1137584529033!2d10.06934600925633!3d52.59933653394575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b0181efa152303%3A0xbae898037ae9b05c!2sHannoversche%20Heerstra%C3%9Fe%20132%2C%2029227%20Celle-Westercelle%2C%20Germany!5e1!3m2!1sen!2s!4v1782214477706!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Gasthaus zur Börse Celle Standort"
                        />
                    </div>

                    {/* Info */}
                    <div className="flex-1 flex flex-col justify-center gap-4 p-8">
                        <h3 className="text-[24px] sm:text-[28px] font-bold font-playfair text-black">
                            Gasthaus zur Börse
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600">
                            Authentische deutsche Küche, komfortable Unterkunft und herzliche Gastfreundschaft. Genießen Sie traditionelle Gerichte, saisonale Spezialitäten und einen entspannten Aufenthalt im Herzen der Region.
                        </p>
                        <Link
                            href="/kontakt"
                            className="inline-flex items-center justify-center bg-foreground text-white hover:bg-foreground/80 px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-full w-fit"
                        >
                            Jetzt anfragen
                        </Link>
                    </div>  
                </div>
            </div>

            {/* Footer bottom */}
            <div className="px-6 sm:px-10 lg:px-25 py-10 flex flex-col sm:flex-row gap-10 sm:gap-0 justify-between">

                {/* Quick links */}
                <div className="flex flex-col gap-3">
                    <h4 className="text-xs font-bold tracking-widest text-black uppercase">
                        Quick Links
                    </h4>

                    <ul className="flex flex-col gap-2">
                        {quickLinks.map(link => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-sm text-gray-600 hover:text-black transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Divider */}
                <div className="hidden sm:block w-px bg-foreground/20 mx-10" />

                {/* Contact */}
                <div className="flex flex-col gap-3">
                    <h4 className="text-xs font-bold tracking-widest text-black uppercase">
                        Kontakt
                    </h4>

                    <ul className="flex flex-col gap-3">
                        <li className="flex items-center gap-2 text-sm text-gray-600">
                            <Mail className="w-4 h-4 flex-shrink-0" />
                            <a href="mailto:Rakanbedel7@gmail.com">
                                Rakanbedel7@gmail.com
                            </a>
                        </li>

                        <li className="flex items-center gap-2 text-sm text-gray-600">
                            <Phone className="w-4 h-4 flex-shrink-0" />
                            <a href="tel:+4951418180 3">
                                05141 81803
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div className="flex items-end gap-4 sm:ml-auto">
                    <a
                        href="https://www.instagram.com/zurborsecelle/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="px-6 sm:px-10 lg:px-25 pb-6 text-center">
                <p className="text-xs text-gray-400">
                    © {new Date().getFullYear()} Gasthaus zur Börse. Alle Rechte vorbehalten.
                </p>
            </div>
        </footer>
    );
}