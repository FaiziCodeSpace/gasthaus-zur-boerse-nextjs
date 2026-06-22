import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function Heading({ heading, paragraph, children, btnLabel, btnHref, num, comment }) {
    return (
        <div className="w-full mb-8 sm:mb-12">

            <div className="flex items-start justify-between gap-4">

                {/* Left — heading + optional paragraph */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-[28px] sm:text-[36px] lg:text-[48px] font-bold text-black font-playfair leading-tight">
                        {heading}
                    </h1>
                    {paragraph && (
                        <p className="text-sm sm:text-base text-gray-600">{paragraph}</p>
                    )}
                </div>

                {/* Right — num/comment OR button */}
                <div className="flex-shrink-0 flex items-start">
                    {num && comment ? (
                        <div className="text-right">
                            <h2 className="text-[48px] sm:text-[64px] font-bold font-playfair text-black leading-none">
                                {num}
                            </h2>
                            <p className="text-sm text-gray-600 mt-1">{comment}</p>
                        </div>
                    ) : btnLabel && btnHref ? (
                        <Link
                            href={btnHref}
                            className={`inline-flex items-center gap-2 border-2 border-foreground text-foreground hover:bg-foreground hover:text-white px-3 py-1.5 sm:px-5 sm:py-2.5 text-[10px] sm:text-sm font-semibold transition-all duration-300 ${
                                paragraph ? 'mt-1' : 'mt-3'
                            }`}
                        >
                            <span className="hidden sm:inline">{btnLabel}</span>
                            <span className="sm:hidden">Mehr</span>
                            <MoveRight className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Link>
                    ) : null}
                </div>

            </div>

            <hr className="my-4 border-foreground" />
            {children}
        </div>
    );
}