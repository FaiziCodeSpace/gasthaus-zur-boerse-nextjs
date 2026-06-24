'use client';
import { useState } from "react";
import { MoveRight, Loader2 } from "lucide-react";

// which inquiry type is selected drives what extra fields show
const inquiryTypes = [
    { value: "general", label: "Allgemeine Anfrage" },
    { value: "Catering", label: "Catering" },
    { value: "Veranstaltung", label: "Veranstaltung / Event" },
    { value: "Zimmer", label: "Zimmer buchen" },
];

const inputClass = "w-full bg-transparent border-b-2 border-foreground/20 focus:border-foreground outline-none py-3 text-sm text-black placeholder:text-gray-400 transition-colors duration-200";
const labelClass = "text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1 block";

export default function ContactForm({ defaultType = "general" }) {
    const [form, setForm] = useState({
        fullName: '',
        phone: '',
        email: '',
        message: '',
        type: defaultType,
        preferredDate: '',
        preferredTime: '',
        duration: '',
    });

    const [status, setStatus] = useState('idle'); // idle | loading | success | error

    const isSpecific = form.type !== 'general';

    const set = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            setStatus(data.success ? 'success' : 'error');
        } catch {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
                <div className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold font-playfair text-black">Vielen Dank!</h3>
                <p className="text-gray-600 text-sm max-w-sm">
                    Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns so schnell wie möglich bei Ihnen.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">

            {/* inquiry type selector */}
            <div>
                <label className={labelClass}>Art der Anfrage</label>
                <div className="flex flex-wrap gap-2 mt-2">
                    {inquiryTypes.map(t => (
                        <button
                            key={t.value}
                            type="button"
                            onClick={() => setForm(prev => ({ ...prev, type: t.value }))}
                            className={`px-4 py-2 text-xs font-semibold rounded-full border-2 transition-all duration-200 ${
                                form.type === t.value
                                    ? 'bg-foreground text-white border-foreground'
                                    : 'bg-transparent text-foreground border-foreground/30 hover:border-foreground'
                            }`}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* base fields — always shown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                    <label className={labelClass}>Vollständiger Name *</label>
                    <input
                        type="text"
                        required
                        placeholder="Max Mustermann"
                        value={form.fullName}
                        onChange={set('fullName')}
                        className={inputClass}
                    />
                </div>
                <div>
                    <label className={labelClass}>Telefon *</label>
                    <input
                        type="tel"
                        required
                        placeholder="+49 xxx xxxxxxx"
                        value={form.phone}
                        onChange={set('phone')}
                        className={inputClass}
                    />
                </div>
            </div>

            <div>
                <label className={labelClass}>E-Mail <span className="text-gray-400 normal-case tracking-normal font-normal">(optional)</span></label>
                <input
                    type="email"
                    placeholder="max@example.de"
                    value={form.email}
                    onChange={set('email')}
                    className={inputClass}
                />
            </div>

            {/* extra fields for specific inquiries */}
            {isSpecific && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div>
                        <label className={labelClass}>Wunschdatum</label>
                        <input
                            type="date"
                            value={form.preferredDate}
                            onChange={set('preferredDate')}
                            className={inputClass}
                        />
                    </div>
                    <div>
                        <label className={labelClass}>Uhrzeit</label>
                        <input
                            type="time"
                            value={form.preferredTime}
                            onChange={set('preferredTime')}
                            className={inputClass}
                        />
                    </div>
                    <div>
                        <label className={labelClass}>Dauer (Stunden / Tage)</label>
                        <input
                            type="text"
                            placeholder="z.B. 4 Stunden"
                            value={form.duration}
                            onChange={set('duration')}
                            className={inputClass}
                        />
                    </div>
                </div>
            )}

            <div>
                <label className={labelClass}>Nachricht <span className="text-gray-400 normal-case tracking-normal font-normal">(optional)</span></label>
                <textarea
                    rows={4}
                    placeholder="Ihre Nachricht..."
                    value={form.message}
                    onChange={set('message')}
                    className={`${inputClass} resize-none`}
                />
            </div>

            {status === 'error' && (
                <p className="text-red-500 text-sm">
                    Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder rufen Sie uns an.
                </p>
            )}

            <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center gap-2 border-2 border-foreground text-foreground hover:bg-foreground hover:text-white px-6 py-3 text-sm font-semibold transition-all duration-300 w-fit disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === 'loading' ? (
                    <>Wird gesendet <Loader2 className="w-4 h-4 animate-spin" /></>
                ) : (
                    <>Nachricht senden <MoveRight className="w-4 h-4" /></>
                )}
            </button>
        </form>
    );
}