import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <>
            <NavBar />
            <main className="flex-grow pt-20">
                {/* Back link */}
                <div className="max-w-7xl mx-auto px-6 lg:px-20 py-4">
                    <Link
                        href="/"
                        className="text-forest/60 hover:text-forest text-sm inline-flex items-center gap-1 transition-colors"
                    >
                        ← На главную
                    </Link>
                </div>

                {/* ═══════════════════════════════════════════
            SPA SECTION
        ═══════════════════════════════════════════ */}
                <section id="spa" className="py-16 px-6 lg:px-20 bg-cream">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="font-serif text-4xl md:text-6xl text-forest mb-10">SPA</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <div className="space-y-6 text-forest/80 text-lg leading-relaxed">
                                <p>
                                    Когда дневные приключения остались позади, самое время расслабиться
                                    в уютной бане прямо в сердце природы. Тёплый пар, натуральные ароматы
                                    дерева, мягкие полотенца и ощущение полного комфорта — именно такие
                                    моменты делают отдых в глэмпинге &laquo;YAGODA&raquo; особенным.
                                </p>
                                <p>
                                    Мы заботимся о вашем уюте: комфортные зоны отдыха, бережно
                                    приготовленные веники и ухоженная территория. Важно, что все детали
                                    продуманы с заботой об экологии, чтобы вы могли насладиться чистым
                                    воздухом, красотой природы и гармонией с окружающим миром.
                                </p>
                                <p>
                                    Баня у реки подарит вам спокойствие и зарядит энергией. Посидеть с
                                    друзьями у костра, вдохнуть свежий воздух, почувствовать единение с
                                    природой.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="rounded-xl overflow-hidden hover-zoom aspect-[3/4]">
                                    <img
                                        alt="SPA бане"
                                        className="w-full h-full object-cover"
                                        src="/images/spa/spa-1.jpg"
                                    />
                                </div>
                                <div className="rounded-xl overflow-hidden hover-zoom aspect-[3/4]">
                                    <img
                                        alt="Зона отдыха"
                                        className="w-full h-full object-cover"
                                        src="/images/spa/spa-2.jpg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
            БАННЫЙ ЧАН SECTION
        ═══════════════════════════════════════════ */}
                <section id="hot-tub" className="py-16 px-6 lg:px-20 bg-forest text-cream">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="font-serif text-4xl md:text-6xl text-cream mb-10">
                            Банный чан
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <div className="grid grid-cols-2 gap-3 order-2 lg:order-1">
                                <div className="rounded-xl overflow-hidden hover-zoom aspect-square col-span-2">
                                    <img
                                        alt="Банный чан на дровах"
                                        className="w-full h-full object-cover"
                                        src="/images/spa/chan-1.jpg"
                                    />
                                </div>
                                <div className="rounded-xl overflow-hidden hover-zoom aspect-square">
                                    <img
                                        alt="Чан вечером"
                                        className="w-full h-full object-cover"
                                        src="/images/spa/chan-2.jpg"
                                    />
                                </div>
                                <div className="rounded-xl overflow-hidden hover-zoom aspect-square">
                                    <img
                                        alt="Отдых на природе"
                                        className="w-full h-full object-cover"
                                        src="/images/spa/spa-3.jpg"
                                    />
                                </div>
                            </div>

                            <div className="space-y-6 text-sand/80 text-lg leading-relaxed order-1 lg:order-2">
                                <p>
                                    У каждого из наших уютных домиков — собственный банный чан на
                                    дровах!
                                </p>
                                <p>
                                    Представьте: свежий воздух, потрескивание дров, теплое парение под
                                    открытым небом&hellip; И всё это — только для вас, без посторонних
                                    гостей. Мы заботимся о вашем комфорте и личном пространстве, поэтому
                                    у каждого домика теперь свой индивидуальный чан.
                                </p>
                                <p>
                                    Погрузитесь в атмосферу природного релакса и откройте для себя новый
                                    уровень загородного отдыха. Уют, забота, свежий лесной воздух и
                                    настоящее удовольствие от жизни — теперь ещё доступнее.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
            БАНКЕТНЫЙ ЗАЛ SECTION
        ═══════════════════════════════════════════ */}
                <section id="banquet" className="py-16 px-6 lg:px-20 bg-cream">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="font-serif text-4xl md:text-6xl text-forest mb-10">
                            Банкетный зал
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <div className="space-y-6 text-forest/80 text-lg leading-relaxed">
                                <p>
                                    Когда дневные приключения остались позади, самое время расслабиться
                                    в уютной бане прямо в сердце природы. Тёплый пар, натуральные ароматы
                                    дерева, мягкие полотенца и ощущение полного комфорта — именно такие
                                    моменты делают отдых в глэмпинге &laquo;YAGODA&raquo; особенным.
                                </p>
                                <p>
                                    Мы заботимся о вашем уюте: комфортные зоны отдыха, бережно
                                    приготовленные веники и ухоженная территория. Важно, что все детали
                                    продуманы с заботой об экологии, чтобы вы могли насладиться чистым
                                    воздухом, красотой природы и гармонией с окружающим миром.
                                </p>
                                <p>
                                    Баня у реки подарит вам спокойствие и зарядит энергией. Посидеть с
                                    друзьями у костра, вдохнуть свежий воздух, почувствовать единение с
                                    природой.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="rounded-xl overflow-hidden hover-zoom aspect-square col-span-2">
                                    <img
                                        alt="Банкетный зал"
                                        className="w-full h-full object-cover"
                                        src="/images/restaurant/hall-1.jpg"
                                    />
                                </div>
                                <div className="rounded-xl overflow-hidden hover-zoom aspect-square">
                                    <img
                                        alt="Интерьер зала"
                                        className="w-full h-full object-cover"
                                        src="/images/restaurant/hall-2.jpg"
                                    />
                                </div>
                                <div className="rounded-xl overflow-hidden hover-zoom aspect-square">
                                    <img
                                        alt="Сервировка"
                                        className="w-full h-full object-cover"
                                        src="/images/restaurant/hall-3.jpg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
            МЕРОПРИЯТИЯ SECTION
        ═══════════════════════════════════════════ */}
                <section id="events" className="py-16 px-6 lg:px-20 bg-forest text-cream">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="font-serif text-4xl md:text-6xl text-cream mb-10">
                            Мероприятия
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <div className="grid grid-cols-2 gap-3 order-2 lg:order-1">
                                <div className="rounded-xl overflow-hidden hover-zoom aspect-square">
                                    <img
                                        alt="Корпоратив на природе"
                                        className="w-full h-full object-cover"
                                        src="/images/restaurant/event-1.jpg"
                                    />
                                </div>
                                <div className="rounded-xl overflow-hidden hover-zoom aspect-square">
                                    <img
                                        alt="Праздник"
                                        className="w-full h-full object-cover"
                                        src="/images/restaurant/event-2.jpg"
                                    />
                                </div>
                                <div className="rounded-xl overflow-hidden hover-zoom aspect-square">
                                    <img
                                        alt="Территория"
                                        className="w-full h-full object-cover"
                                        src="/images/territory/nature-4.jpg"
                                    />
                                </div>
                                <div className="rounded-xl overflow-hidden hover-zoom aspect-square">
                                    <img
                                        alt="Площадка"
                                        className="w-full h-full object-cover"
                                        src="/images/territory/nature-3.jpg"
                                    />
                                </div>
                            </div>

                            <div className="space-y-6 text-sand/80 text-lg leading-relaxed order-1 lg:order-2">
                                <p>
                                    Устали от стандартных банкетных залов и скучных конференц-комнат?
                                    Подарите себе и своим гостям уникальный опыт! Наш
                                    глэмпинг-пространство на воде — это готовая потрясающая локация для
                                    мероприятий любого формата. Почему это идеально?
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-gold text-sm mt-1.5">check_circle</span>
                                        <span>Уникальная локация с панорамными видами</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-gold text-sm mt-1.5">check_circle</span>
                                        <span>Продуманная инфраструктура и стильные зоны</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-gold text-sm mt-1.5">check_circle</span>
                                        <span>Организация питания от лучших поваров</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-gold text-sm mt-1.5">check_circle</span>
                                        <span>Разнообразие форматов: от фуршета до барбекю</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-gold text-sm mt-1.5">check_circle</span>
                                        <span>Полная конфиденциальность и уединение</span>
                                    </li>
                                </ul>
                                <p>
                                    Расскажите нам о вашем событии, а мы воплотим его в жизнь с
                                    максимальным вниманием к деталям.
                                </p>
                                <a
                                    href="/#booking"
                                    className="border border-sand text-sand px-10 py-4 rounded-full uppercase text-xs tracking-widest font-bold hover:bg-sand hover:text-forest transition-all inline-block mt-4"
                                >
                                    Забронировать
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
