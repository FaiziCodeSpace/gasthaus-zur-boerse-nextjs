import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const quickLinks = [
    { name: "Start", href: "/" },
    { name: "Speisekarte", href: "/speisekarte" },
    { name: "Gästehaus", href: "/#gastehaus" },
    { name: "Kontakt", href: "/kontakt" },
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
                    Book Your Stay Today
                </h2>

                {/* Map + Info card */}
                <div className="flex flex-col lg:flex-row bg-[#F5D3B1] rounded-2xl overflow-hidden border border-foreground/10 shadow-[8px_8px_0px_rgba(0,0,0,0.15)]">

                    {/* Map */}
                    <div className="w-full lg:w-[55%] h-[260px] sm:h-[320px] lg:h-[360px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78858.3!2d8.0641!3d51.3996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b90b!2sArnsberg!5e0!3m2!1sde!2sde!4v1"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Gasthaus zur Börse Arnsberg Standort"
                        />
                    </div>

                    {/* Info */}
                    <div className="flex-1 flex flex-col justify-center gap-4 p-8">
                        <h3 className="text-[24px] sm:text-[28px] font-bold font-playfair text-black">
                            Gasthaus zur Börse
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600">
                            Authentic German cuisine, comfortable accommodation, and warm hospitality. Enjoy traditional flavors, seasonal specialties, and a relaxing stay in the heart of the region.
                        </p>
                        <Link
                            href="/kontakt"
                            className="inline-flex items-center justify-center bg-foreground text-white hover:bg-foreground/80 px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-full w-fit"
                        >
                            Über uns
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
                            <a href="mailto:info@gasthaus-zur-boerse.de">
                                info@gasthaus-zur-boerse.de
                            </a>
                        </li>

                        <li className="flex items-center gap-2 text-sm text-gray-600">
                            <Phone className="w-4 h-4 flex-shrink-0" />
                            <a href="tel:+49xxxxxxxxx">
                                +49 xxx xxxxxxx
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div className="flex items-end gap-4 sm:ml-auto">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebookF className="w-5 h-5" />
                    </a>

                    <a
                        href="https://instagram.com"
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