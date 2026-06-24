export const metadata = {
    title: "Impressum",
    description:
        "Impressum des Gasthaus zur Börse in Celle gemäß § 5 TMG — Anbieterkennzeichnung, Kontaktdaten und rechtliche Hinweise.",
    keywords: [
        "Impressum Gasthaus zur Börse",
        "Impressum Celle",
        "Anbieterkennzeichnung",
    ],
    alternates: {
        canonical: "https://gasthauszurboerse.de/impressum",
    },
    openGraph: {
        title: "Impressum | Gasthaus zur Börse Celle",
        description: "Impressum und Anbieterkennzeichnung des Gasthaus zur Börse in Celle gemäß § 5 TMG.",
        url: "https://gasthauszurboerse.de/impressum",
        locale: "de_DE",
        siteName: "Gasthaus zur Börse Celle",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function ImpressumPage() {
    return (
        <main className="w-full bg-background min-h-screen pt-28 pb-20 px-6 sm:px-10 lg:px-25">

            <div className="mb-12 max-w-3xl">
                <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-bold font-playfair text-black leading-none">
                    Impressum
                </h1>
                <p className="text-gray-600 mt-3 text-sm sm:text-base">
                    Angaben gemäß § 5 TMG (Telemediengesetz)
                </p>
                <hr className="mt-6 border-foreground" />
            </div>

            <div className="max-w-3xl flex flex-col gap-12">

                {/* Anbieter */}
                <section>
                    <h2 className="text-[22px] sm:text-[26px] font-bold font-playfair text-black mb-4">
                        Angaben zum Anbieter
                    </h2>
                    <div className="text-sm sm:text-base text-gray-700 leading-relaxed flex flex-col gap-1">
                        <p className="font-semibold text-black">Gasthaus zur Börse</p>
                        <p>Inhaber: Arne Broker</p>
                        <p>Hannoversche Heerstraße 132</p>
                        <p>29227 Celle</p>
                        <p>Deutschland</p>
                    </div>
                </section>

                {/* Kontakt */}
                <section>
                    <h2 className="text-[22px] sm:text-[26px] font-bold font-playfair text-black mb-4">
                        Kontakt
                    </h2>
                    <div className="text-sm sm:text-base text-gray-700 leading-relaxed flex flex-col gap-1">
                        <p>
                            Telefon:{" "}
                            <a href="tel:+4951419937973" className="text-black hover:text-foreground transition-colors">
                                +49 514 19937973
                            </a>
                        </p>
                        <p>
                            E-Mail:{" "}
                            <a href="mailto:gasthauszuerboerse@web.de" className="text-black hover:text-foreground transition-colors">
                                gasthauszuerboerse@web.de
                            </a>
                        </p>
                    </div>
                </section>

                {/* Haftungsausschluss */}
                <section>
                    <h2 className="text-[22px] sm:text-[26px] font-bold font-playfair text-black mb-4">
                        Haftungsausschluss
                    </h2>
                    <div className="text-sm sm:text-base text-gray-700 leading-relaxed flex flex-col gap-4">
                        <div>
                            <h3 className="font-semibold text-black mb-1">Haftung für Inhalte</h3>
                            <p>
                                Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
                                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                                Tätigkeit hinweisen.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-black mb-1">Haftung für Links</h3>
                            <p>
                                Unser Angebot kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir
                                keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
                                übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
                                Betreiber der Seiten verantwortlich. Eine permanente inhaltliche Kontrolle der
                                verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
                                entfernen.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Urheberrecht */}
                <section>
                    <h2 className="text-[22px] sm:text-[26px] font-bold font-playfair text-black mb-4">
                        Urheberrecht
                    </h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                        deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                        Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten,
                        nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom
                        Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf
                        eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
                        Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                    </p>
                </section>

                {/* Externe Links */}
                <section>
                    <h2 className="text-[22px] sm:text-[26px] font-bold font-playfair text-black mb-4">
                        Externe Links
                    </h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        Diese Website kann Links zu externen Webseiten Dritter enthalten (z. B. Google Maps, soziale
                        Netzwerke), auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten
                        ist stets der jeweilige Anbieter verantwortlich. Wir haben keine Kenntnis von rechtswidrigen
                        Inhalten auf diesen Seiten. Eine permanente inhaltliche Kontrolle der verlinkten Seiten findet
                        nicht statt. Bei Bekanntwerden von Rechtsverletzungen werden entsprechende Links umgehend
                        entfernt.
                    </p>
                </section>

            </div>
        </main>
    );
}
