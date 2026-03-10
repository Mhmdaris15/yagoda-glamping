import React from "react";

export default function MapSection() {
    return (
        <section className="py-20 bg-forest text-cream" id="contacts">
            <div className="max-w-7xl mx-auto px-6 lg:px-20">
                <h2 className="font-serif text-3xl md:text-5xl text-center mb-16 text-cream">
                    Как проехать к месту безусловного счастья?
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Map placeholder */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-olive/30">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A5c26f3c8e9e0b7d85f70c8b7f1e2a3d4&amp;source=constructor"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            className="absolute inset-0"
                            title="Карта"
                            style={{ filter: "saturate(0.8) contrast(1.1)" }}
                        />
                        {/* Fallback overlay for when iframe doesn't load */}
                        <div className="absolute inset-0 bg-olive/20 flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
                            <span className="text-cream/60 text-sm">Загрузка карты...</span>
                        </div>
                    </div>

                    {/* Info */}
                    <div className="space-y-6">
                        <p className="font-serif text-2xl text-cream leading-relaxed">
                            Глэмпинг &laquo;YAGODA&raquo; &mdash; с заботой
                            <br />о Вашем отдыхе.
                        </p>
                        <p className="text-sand/80 text-lg leading-relaxed">
                            Здесь о комфортном отдыхе
                            <br />
                            на природе наедине с собой,
                            <br />с вашей семьей и даже
                            <br />с питомцами
                        </p>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-gold mt-1">
                                    location_on
                                </span>
                                <p className="text-cream">
                                    <span className="font-semibold">Адрес:</span> г. Шлиссельбург,
                                    <br />
                                    ул. Красный Тракт, 17
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-gold mt-1">
                                    call
                                </span>
                                <p className="text-cream">
                                    По любым вопросам обращаться
                                    <br />
                                    по телефону:{" "}
                                    <a
                                        href="tel:+79218835640"
                                        className="font-semibold hover:text-sand transition-colors"
                                    >
                                        +7(921) 883-56-40
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
