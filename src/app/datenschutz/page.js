export const metadata = {
    title: "Datenschutz",
    description:
        "Datenschutzerklärung des Gasthaus zur Börse in Celle gemäß DSGVO — Informationen zur Verarbeitung Ihrer personenbezogenen Daten.",
    keywords: [
        "Datenschutz Gasthaus zur Börse",
        "Datenschutzerklärung Celle",
        "DSGVO Celle",
    ],
    alternates: {
        canonical: "https://gasthauszurboerse.de/datenschutz",
    },
    openGraph: {
        title: "Datenschutz | Gasthaus zur Börse Celle",
        description: "Datenschutzerklärung des Gasthaus zur Börse in Celle gemäß DSGVO.",
        url: "https://gasthauszurboerse.de/datenschutz",
        locale: "de_DE",
        siteName: "Gasthaus zur Börse Celle",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function DatenschutzPage() {
    return (
        <main className="w-full bg-background min-h-screen pt-28 pb-20 px-6 sm:px-10 lg:px-25">

            <div className="mb-12 max-w-3xl">
                <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-bold font-playfair text-black leading-none">
                    Datenschutzerklärung
                </h1>
                <p className="text-gray-600 mt-3 text-sm sm:text-base">
                    Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO
                </p>
                <hr className="mt-6 border-foreground" />
            </div>

            <div className="max-w-3xl flex flex-col gap-12">

                {/* Verantwortlicher */}
                <section>
                    <h2 className="text-[22px] sm:text-[26px] font-bold font-playfair text-black mb-4">
                        1. Verantwortlicher
                    </h2>
                    <div className="text-sm sm:text-base text-gray-700 leading-relaxed flex flex-col gap-1">
                        <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
                        <p className="font-semibold text-black mt-2">Gasthaus zur Börse</p>
                        <p>Rakan Keti</p>
                        <p>Hannoversche Heerstraße 132</p>
                        <p>29227 Celle</p>
                        <p>
                            E-Mail:{" "}
                            <a href="mailto:gasthauszuerboerse@web.de" className="text-black hover:text-foreground transition-colors">
                                gasthauszuerboerse@web.de
                            </a>
                        </p>
                        <p>
                            Telefon:{" "}
                            <a href="tel:+4951419937973" className="text-black hover:text-foreground transition-colors">
                                +49 514 19937973
                            </a>
                        </p>
                    </div>
                </section>

                {/* Allgemeines zur Datenverarbeitung */}
                <section>
                    <h2 className="text-[22px] sm:text-[26px] font-bold font-playfair text-black mb-4">
                        2. Allgemeine Hinweise
                    </h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                        personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
                        Datenschutzvorschriften sowie dieser Datenschutzerklärung. Diese Website erhebt nur die
                        personenbezogenen Daten, die für den Betrieb einer technisch einwandfreien Website sowie
                        zur Bearbeitung Ihrer Anfragen notwendig sind.
                    </p>
                </section>

                {/* Kontaktformular */}
                <section>
                    <h2 className="text-[22px] sm:text-[26px] font-bold font-playfair text-black mb-4">
                        3. Datenerfassung über das Kontaktformular
                    </h2>
                    <div className="text-sm sm:text-base text-gray-700 leading-relaxed flex flex-col gap-4">
                        <p>
                            Wenn Sie uns über das Kontaktformular eine Anfrage zusenden, werden die von Ihnen
                            gemachten Angaben — Name, Telefonnummer, E-Mail-Adresse und Ihre Nachricht — zur
                            Bearbeitung Ihrer Anfrage und für eventuell anschließende Rückfragen bei uns
                            gespeichert.
                        </p>
                        <p>
                            Die über das Kontaktformular übermittelten Daten werden ausschließlich per E-Mail
                            (mittels Nodemailer) an unsere geschäftliche E-Mail-Adresse{" "}
                            <a href="mailto:gasthauszuerboerse@web.de" className="text-black hover:text-foreground transition-colors">
                                gasthauszuerboerse@web.de
                            </a>{" "}
                            versendet, um Ihre Anfrage zu beantworten. Eine Speicherung der eingegebenen Daten in
                            einer Datenbank findet nicht statt.
                        </p>
                        <p>
                            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, da
                            die Verarbeitung zur Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher
                            Maßnahmen erforderlich ist, sowie auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO, sofern
                            ein berechtigtes Interesse an der Bearbeitung Ihrer Anfrage besteht.
                        </p>
                    </div>
                </section>

                {/* Google Maps */}
                <section>
                    <h2 className="text-[22px] sm:text-[26px] font-bold font-playfair text-black mb-4">
                        4. Google Maps
                    </h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        Auf unserer Kontaktseite nutzen wir den Kartendienst Google Maps der Google Ireland
                        Limited, Gordon House, Barrow Street, Dublin 4, Irland. Bei Aufruf der Kontaktseite stellt
                        Google Maps eine Verbindung zu Servern von Google her, wobei auch Daten wie Ihre IP-Adresse
                        an Google übertragen werden können. Diese Datenübertragung erfolgt unabhängig davon, ob
                        Google ein Nutzerkonto bereitstellt, über das Sie eingeloggt sind, oder ob kein Nutzerkonto
                        besteht. Wenn Sie bei Google eingeloggt sind, werden Ihre Daten unter Umständen direkt
                        Ihrem Konto zugeordnet. Es gilt die Datenschutzerklärung von Google, die Sie unter{" "}
                        <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black underline hover:text-foreground transition-colors"
                        >
                            policies.google.com/privacy
                        </a>{" "}
                        einsehen können.
                    </p>
                </section>

                {/* Google Fonts */}
                <section>
                    <h2 className="text-[22px] sm:text-[26px] font-bold font-playfair text-black mb-4">
                        5. Google Fonts
                    </h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        Diese Website nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Google
                        Fonts. Diese werden jedoch nicht von einem Server von Google geladen, sondern lokal über
                        next/font in das Projekt eingebunden und auf unserem eigenen Server (Hosting) bereitgestellt
                        (Self-Hosting). Es findet folglich keine Verbindung zu Servern von Google statt, und es
                        werden bei der Nutzung der Schriftarten keine Daten an Google übermittelt.
                    </p>
                </section>

                {/* Google Analytics / Tracking */}
                <section>
                    <h2 className="text-[22px] sm:text-[26px] font-bold font-playfair text-black mb-4">
                        6. Keine Analyse- oder Tracking-Tools
                    </h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        Wir setzen auf dieser Website keine Analyse-Tools wie Google Analytics oder vergleichbare
                        Dienste ein. Es findet keine Auswertung Ihres Nutzerverhaltens zu Statistik- oder
                        Marketingzwecken statt.
                    </p>
                </section>

                {/* Cookies */}
                <section>
                    <h2 className="text-[22px] sm:text-[26px] font-bold font-playfair text-black mb-4">
                        7. Cookies
                    </h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        Unsere Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb
                        der Website erforderlich sind. Diese Cookies dienen beispielsweise dazu, grundlegende
                        Funktionen der Website sicherzustellen, und erfordern gemäß § 25 Abs. 2 TTDSG keine
                        gesonderte Einwilligung. Cookies zu Tracking- oder Marketingzwecken werden nicht
                        eingesetzt.
                    </p>
                </section>

                {/* Hosting */}
                <section>
                    <h2 className="text-[22px] sm:text-[26px] font-bold font-playfair text-black mb-4">
                        8. Hosting
                    </h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA, gehostet.
                        Beim Besuch unserer Website erfasst Vercel als Hosting-Anbieter automatisch
                        Server-Logdaten, etwa IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp und
                        Betriebssystem, soweit dies für den sicheren und stabilen Betrieb der Website technisch
                        erforderlich ist. Die Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses
                        an einer technisch fehlerfreien Darstellung und Optimierung unserer Website gemäß Art. 6
                        Abs. 1 lit. f DSGVO. Weitere Informationen finden Sie in der Datenschutzerklärung von
                        Vercel.
                    </p>
                </section>

                {/* Ihre Rechte */}
                <section>
                    <h2 className="text-[22px] sm:text-[26px] font-bold font-playfair text-black mb-4">
                        9. Ihre Rechte
                    </h2>
                    <div className="text-sm sm:text-base text-gray-700 leading-relaxed flex flex-col gap-3">
                        <p>
                            Im Rahmen der geltenden gesetzlichen Bestimmungen haben Sie jederzeit das Recht auf
                            unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren
                            Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf
                            Berichtigung, Löschung oder Sperrung dieser Daten. Im Einzelnen stehen Ihnen folgende
                            Rechte zu:
                        </p>
                        <ul className="flex flex-col gap-2 list-disc pl-5">
                            <li><span className="font-semibold text-black">Recht auf Auskunft</span> (Art. 15 DSGVO)</li>
                            <li><span className="font-semibold text-black">Recht auf Berichtigung</span> (Art. 16 DSGVO)</li>
                            <li><span className="font-semibold text-black">Recht auf Löschung</span> (Art. 17 DSGVO)</li>
                            <li><span className="font-semibold text-black">Recht auf Widerspruch</span> gegen die Verarbeitung (Art. 21 DSGVO)</li>
                            <li><span className="font-semibold text-black">Recht auf Einschränkung der Verarbeitung</span> (Art. 18 DSGVO)</li>
                            <li><span className="font-semibold text-black">Recht auf Datenübertragbarkeit</span> (Art. 20 DSGVO)</li>
                        </ul>
                        <p>
                            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter
                            der im Impressum genannten Adresse oder per E-Mail an{" "}
                            <a href="mailto:gasthauszuerboerse@web.de" className="text-black hover:text-foreground transition-colors">
                                gasthauszuerboerse@web.de
                            </a>{" "}
                            an uns wenden. Ihnen steht zudem ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde
                            zu, beispielsweise der Landesbeauftragten für den Datenschutz Niedersachsen.
                        </p>
                    </div>
                </section>

            </div>
        </main>
    );
}
