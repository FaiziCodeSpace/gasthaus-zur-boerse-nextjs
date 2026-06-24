import ContactForm from "@/components/contact/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
    title: "Kontakt | Gasthaus zur Börse Celle",
    description: "Kontaktieren Sie das Gasthaus zur Börse in Celle. Reservierungen, Catering-Anfragen und allgemeine Fragen.",
};

export default function KontaktPage() {
    return (
        <main className="w-full bg-background min-h-screen pt-28 pb-16 px-6 sm:px-10 lg:px-25">

            <div className="mb-12">
                <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-bold font-playfair text-black leading-none">
                    Kontakt
                </h1>
                <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-xl">
                    Haben Sie Fragen, möchten Sie reservieren oder ein Event planen? Wir freuen uns auf Ihre Nachricht.
                </p>
                <hr className="mt-6 border-foreground" />
            </div>

            <div className="flex flex-col lg:flex-row gap-16">

                {/* left — contact info */}
                <div className="flex flex-col gap-8 lg:w-[320px] flex-shrink-0">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-start gap-4">
                            <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-foreground" />
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Adresse</p>
                                <p className="text-sm text-black">Hannoversche Heerstraße 132</p>
                                <p className="text-sm text-black">29227 Celle</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-foreground" />
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Telefon</p>
                                <a href="tel:+4951419937973" className="text-sm text-black hover:text-foreground transition-colors">
                                    +49 514 19937973
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-foreground" />
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">E-Mail</p>
                                <a href="mailto:Rakanbedel7@gmail.com" className="text-sm text-black hover:text-foreground transition-colors">
                                    Rakanbedel7@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Clock className="w-5 h-5 flex-shrink-0 mt-0.5 text-foreground" />
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Öffnungszeiten</p>
                                <p className="text-sm text-black">Mo–Fr: 11:00 – 22:00</p>
                                <p className="text-sm text-black">Sa–So: 10:00 – 23:00</p>
                            </div>
                        </div>
                    </div>

                    {/* map */}
                    <div className="rounded-xl overflow-hidden h-[200px]">
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
                </div>

                {/* right — form */}
                <div className="flex-1">
                    <ContactForm />
                </div>

            </div>
        </main>
    );
}