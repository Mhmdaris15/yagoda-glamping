import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer
            className="bg-forest text-cream py-16 px-6 lg:px-20 border-t border-white/5"
            id="footer"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                {/* Logo & tagline */}
                <div className="col-span-1 md:col-span-1">
                    <div className="mb-6">
                        <div className="text-2xl font-serif font-bold tracking-[0.15em] text-white">
                            YAGODA
                        </div>
                        <div className="text-[9px] tracking-[0.35em] uppercase text-sand/50 font-semibold">
                            glamping
                        </div>
                    </div>
                </div>

                {/* Nav column 1 */}
                <div>
                    <ul className="space-y-3 text-sand/60 text-sm">
                        <li>
                            <Link
                                href="/#cabins"
                                className="hover:text-sand transition-colors"
                            >
                                Проживание
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services"
                                className="hover:text-sand transition-colors"
                            >
                                Услуги
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#contacts"
                                className="hover:text-sand transition-colors"
                            >
                                Контакты
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#booking"
                                className="hover:text-sand transition-colors"
                            >
                                Бронирование
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <div className="flex gap-3 mb-6">
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-sand transition-all"
                            aria-label="VK"
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 13.222c.496.487.983.97 1.318 1.525.148.246.288.498.332.783.063.41-.09.647-.09.647l-.003.005s-.184.297-.268.387c-.218.233-.482.447-.794.543-.425.13-.844.06-1.258-.14a9.8 9.8 0 0 1-1.186-.726c-.207-.145-.4-.309-.583-.486-.098-.095-.19-.197-.262-.313-.1-.163-.114-.327-.014-.493.068-.114.17-.2.262-.29l.817-.823c.225-.227.442-.462.612-.735.096-.155.177-.32.133-.511-.058-.252-.248-.38-.463-.456-.245-.086-.497-.134-.749-.18l-1.367-.21c-.206-.027-.408-.066-.599-.145-.128-.053-.242-.126-.304-.26-.08-.175-.01-.33.092-.47.1-.135.232-.24.37-.337a11.6 11.6 0 0 1 3.455-1.755 4.73 4.73 0 0 1 1.308-.252c.226-.012.434.04.557.265.028.051.044.108.057.164.058.249.032.5.003.75a14.8 14.8 0 0 1-.472 2.012c-.1.33-.207.658-.294.992-.047.18-.063.364.05.53z" />
                            </svg>
                        </a>
                        <a
                            href="https://wa.me/79218835640"
                            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-sand transition-all"
                            aria-label="WhatsApp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </a>
                    </div>
                    <a
                        href="tel:+79218835640"
                        className="text-white font-semibold text-sm hover:text-sand transition-colors"
                    >
                        +7921 883-56-40
                    </a>
                </div>

                {/* Address */}
                <div>
                    <p className="text-sand/60 text-sm leading-relaxed">
                        г. Шлиссельбург,
                        <br />
                        ул. Красный Тракт, 17
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-sand/30">
                <p>&copy; 2024 YAGODA GLAMPING. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</p>
            </div>
        </footer>
    );
}
