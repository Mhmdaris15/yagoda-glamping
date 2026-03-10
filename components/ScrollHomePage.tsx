"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ── Service data for the cycling reveal section ── */
const services = [
    {
        name: "SPA",
        description:
            "Расслабьтесь в уютной бане прямо в сердце природы. Тёплый пар, натуральные ароматы дерева и ощущение полного комфорта.",
        image: "/images/spa/spa-1.jpg",
    },
    {
        name: "Банный чан",
        description:
            "У каждого домика — собственный банный чан на дровах. Свежий воздух, потрескивание дров, теплое парение под открытым небом.",
        image: "/images/spa/chan-1.jpg",
    },
    {
        name: "Банкетный зал",
        description:
            "Комфортные зоны отдыха, ухоженная территория, детали продуманы с заботой об экологии и гармонии с окружающим миром.",
        image: "/images/restaurant/hall-1.jpg",
    },
    {
        name: "Мероприятия",
        description:
            "Уникальная локация с панорамными видами. Продуманная инфраструктура. Полная конфиденциальность и уединение.",
        image: "/images/restaurant/event-1.jpg",
    },
];

const cabins = [
    {
        slug: "family-one",
        title: "Домик Family One",
        desc: "Две спальни, кухня-гостиная, ванная. До 6 гостей.",
        image: "/images/cabin-family-one/hero.jpg",
    },
    {
        slug: "family-two",
        title: "Домик Family Two",
        desc: "Две спальни, раскладной диван, душевая. До 6 гостей.",
        image: "/images/cabin-family-two/hero.jpg",
    },
    {
        slug: "studio",
        title: "Домик Studio",
        desc: "Студия с перегородкой, мини-кухня. До 4 гостей.",
        image: "/images/cabin-studio/hero.jpg",
    },
];

export default function ScrollHomePage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLElement>(null);
    const philosophyRef = useRef<HTMLElement>(null);
    const servicesRef = useRef<HTMLElement>(null);
    const natureRef = useRef<HTMLElement>(null);
    const cabinsRef = useRef<HTMLElement>(null);
    const kidsRef = useRef<HTMLElement>(null);
    const mapRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            /* ── Hero parallax ── */
            if (heroRef.current) {
                gsap.to(".hero-bg-img", {
                    yPercent: 30,
                    ease: "none",
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                });
                gsap.from(".hero-title", {
                    y: 60,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    delay: 0.3,
                });
                gsap.from(".hero-subtitle", {
                    y: 40,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    delay: 0.6,
                });
            }

            /* ── Philosophy split-screen reveal ── */
            if (philosophyRef.current) {
                gsap.from(".philosophy-text", {
                    y: 80,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: philosophyRef.current,
                        start: "top 70%",
                        end: "top 30%",
                        scrub: 1,
                    },
                });
                gsap.from(".philosophy-img", {
                    scale: 1.15,
                    scrollTrigger: {
                        trigger: philosophyRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            }

            /* ── Services pinned cycling section ── */
            if (servicesRef.current) {
                const serviceItems = gsap.utils.toArray<HTMLElement>(".service-item");
                const serviceImages = gsap.utils.toArray<HTMLElement>(".service-image");
                const serviceDescs = gsap.utils.toArray<HTMLElement>(".service-desc");
                const totalServices = serviceItems.length;

                // Helper to activate a specific service index
                const activateService = (index: number) => {
                    serviceItems.forEach((el, j) => {
                        el.classList.toggle("service-active", j === index);
                    });
                    serviceImages.forEach((el, j) => {
                        gsap.to(el, {
                            opacity: j === index ? 1 : 0,
                            duration: 0.5,
                            ease: "power2.inOut",
                        });
                    });
                    serviceDescs.forEach((el, j) => {
                        gsap.to(el, {
                            opacity: j === index ? 1 : 0,
                            duration: 0.4,
                            ease: "power2.inOut",
                        });
                    });
                };

                // Create a timeline that will be scrubbed by scroll
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: servicesRef.current,
                        start: "top top",
                        end: `+=${totalServices * 100}vh`,
                        pin: true,
                        pinSpacing: true,
                        scrub: 0.5,
                        onUpdate: (self) => {
                            // Determine which service should be active based on scroll progress
                            const progress = self.progress;
                            const activeIndex = Math.min(
                                Math.floor(progress * totalServices),
                                totalServices - 1
                            );
                            activateService(activeIndex);
                        },
                    },
                });

                // Add a dummy tween to give the timeline duration (needed for scrub)
                tl.to({}, { duration: totalServices });
            }

            /* ── Nature / Location stats card ── */
            if (natureRef.current) {
                gsap.from(".nature-card", {
                    y: 100,
                    opacity: 0,
                    scale: 0.9,
                    scrollTrigger: {
                        trigger: natureRef.current,
                        start: "top 60%",
                        end: "top 20%",
                        scrub: 1,
                    },
                });
                gsap.to(".nature-bg", {
                    scale: 1.1,
                    scrollTrigger: {
                        trigger: natureRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            }

            /* ── Cabins editorial layout ── */
            if (cabinsRef.current) {
                gsap.utils.toArray<HTMLElement>(".cabin-card").forEach((card) => {
                    gsap.from(card, {
                        y: 80,
                        opacity: 0,
                        scale: 0.95,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            end: "top 50%",
                            scrub: 1,
                        },
                    });
                });
            }

            /* ── Kids section ── */
            if (kidsRef.current) {
                gsap.from(".kids-text", {
                    x: 80,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: kidsRef.current,
                        start: "top 60%",
                        end: "top 25%",
                        scrub: 1,
                    },
                });
                gsap.from(".kids-img-wrapper", {
                    x: -80,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: kidsRef.current,
                        start: "top 60%",
                        end: "top 25%",
                        scrub: 1,
                    },
                });
            }

            /* ── Map section ── */
            if (mapRef.current) {
                gsap.from(".map-content", {
                    y: 60,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: mapRef.current,
                        start: "top 60%",
                        end: "top 25%",
                        scrub: 1,
                    },
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="scroll-container">
            {/* ═══════════════════════════════════════════
          SECTION 1: HERO
      ═══════════════════════════════════════════ */}
            <section
                ref={heroRef}
                className="relative h-screen w-full flex items-center justify-center overflow-hidden"
            >
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Глэмпинг YAGODA"
                        className="hero-bg-img w-full h-full object-cover will-change-transform"
                        src="/images/hero/hero-main.jpg"
                    />
                    <div className="absolute inset-0 hero-overlay" />
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-5xl">
                    <h1 className="hero-title font-serif text-5xl md:text-7xl lg:text-[6.5rem] mb-6 leading-[0.95] text-shadow tracking-tight">
                        Глэмпинг
                        <br />
                        <span className="italic font-normal opacity-90">на берегу реки</span>
                    </h1>
                    <p className="hero-subtitle text-base md:text-lg font-light max-w-xl mx-auto opacity-80 text-shadow-sm mt-8 tracking-wide uppercase text-[11px] md:text-[13px] leading-relaxed">
                        Тишина, которую можно услышать.
                        <br />
                        Отдых, который можно почувствовать.
                    </p>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
                    <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5">
                        <div className="w-1 h-2.5 bg-white/60 rounded-full animate-bounce" />
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 2: PHILOSOPHY — Split Screen
      ═══════════════════════════════════════════ */}
            <section
                ref={philosophyRef}
                className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2"
            >
                <div className="bg-forest flex items-center justify-center p-12 lg:p-20 min-h-[50vh] lg:min-h-screen">
                    <div className="philosophy-text max-w-lg">
                        <p className="font-serif text-3xl md:text-4xl lg:text-[2.8rem] text-sand/90 leading-[1.25] mb-8">
                            Откройте двери
                            <br />
                            глэмпинга YAGODA
                            <br />
                            <span className="italic">и обретите себя</span>
                        </p>
                        <p className="text-sand/50 text-sm uppercase tracking-[0.2em] leading-relaxed">
                            Философия отдыха, где стиль и удобство
                            <br />
                            сочетаются с уникальными впечатлениями
                        </p>
                    </div>
                </div>
                <div className="relative overflow-hidden min-h-[50vh] lg:min-h-screen">
                    <img
                        alt="Природа"
                        className="philosophy-img absolute inset-0 w-full h-full object-cover will-change-transform"
                        src="/images/territory/nature-1.jpg"
                    />
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 3: SERVICES — Pinned Cycling
      ═══════════════════════════════════════════ */}
            <section
                ref={servicesRef}
                className="relative h-screen w-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
            >
                <div className="relative h-full overflow-hidden">
                    {services.map((service, i) => (
                        <img
                            key={service.name}
                            alt={service.name}
                            className={`service-image absolute inset-0 w-full h-full object-cover will-change-transform ${i === 0 ? "opacity-100" : "opacity-0"
                                }`}
                            src={service.image}
                        />
                    ))}
                </div>

                <div className="bg-forest flex flex-col justify-center p-12 lg:p-20 relative">
                    <div className="space-y-2 mb-12">
                        {services.map((service, i) => (
                            <div
                                key={service.name}
                                className={`service-item transition-all duration-500 cursor-default ${i === 0 ? "service-active" : ""
                                    }`}
                            >
                                <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl service-name transition-colors duration-500">
                                    {service.name}
                                </h3>
                            </div>
                        ))}
                    </div>

                    <div className="relative min-h-[80px]">
                        {services.map((service, i) => (
                            <p
                                key={service.name}
                                className={`service-desc text-sand/60 text-sm leading-relaxed max-w-md ${i === 0
                                        ? "opacity-100 relative"
                                        : "opacity-0 absolute top-0 left-0"
                                    }`}
                            >
                                {service.description}
                            </p>
                        ))}
                    </div>

                    <Link
                        href="/services"
                        className="mt-12 text-sand/50 text-xs uppercase tracking-[0.3em] hover:text-sand transition-colors inline-flex items-center gap-2"
                    >
                        Все услуги
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="mt-0.5"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 4: NATURE — Full-screen with floating card
      ═══════════════════════════════════════════ */}
            <section
                ref={natureRef}
                className="relative h-screen w-full flex items-center justify-end overflow-hidden"
            >
                <div className="absolute inset-0">
                    <img
                        alt="Природа вокруг"
                        className="nature-bg w-full h-full object-cover will-change-transform"
                        src="/images/territory/nature-2.jpg"
                    />
                    <div className="absolute inset-0 bg-forest/20" />
                </div>

                <div className="nature-card relative z-10 mr-8 lg:mr-20 bg-forest/85 backdrop-blur-lg p-10 lg:p-14 rounded-md max-w-sm border border-white/10">
                    <img
                        alt="Прогулка"
                        className="w-full aspect-[4/3] object-cover rounded-sm mb-6"
                        src="/images/territory/territory-kids.jpg"
                    />
                    <div className="text-sand">
                        <span className="font-serif text-7xl lg:text-8xl block mb-2 text-sand/60">
                            3
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-sand/50">
                            минуты пешком
                            <br />
                            до берега реки
                        </span>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 5: CABINS — Editorial Layout
      ═══════════════════════════════════════════ */}
            <section ref={cabinsRef} className="py-32 bg-cream px-6 lg:px-20" id="cabins">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-forest/40 text-xs uppercase tracking-[0.3em] block mb-4">
                            Проживание
                        </span>
                        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-forest">
                            Мы для Вас
                            <br />
                            <span className="italic">подготовили</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
                        <Link
                            href={`/cabins/${cabins[0].slug}`}
                            className="cabin-card md:col-span-7 group block"
                        >
                            <div className="relative overflow-hidden rounded-sm aspect-[4/3] hover-zoom">
                                <img
                                    alt={cabins[0].title}
                                    className="w-full h-full object-cover"
                                    src={cabins[0].image}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8">
                                    <h3 className="font-serif text-3xl lg:text-4xl text-white text-shadow mb-2">
                                        {cabins[0].title}
                                    </h3>
                                    <p className="text-white/70 text-sm">{cabins[0].desc}</p>
                                </div>
                            </div>
                        </Link>

                        <Link
                            href={`/cabins/${cabins[1].slug}`}
                            className="cabin-card md:col-span-5 md:mt-24 group block"
                        >
                            <div className="relative overflow-hidden rounded-sm aspect-[3/4] hover-zoom">
                                <img
                                    alt={cabins[1].title}
                                    className="w-full h-full object-cover"
                                    src={cabins[1].image}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8">
                                    <h3 className="font-serif text-3xl text-white text-shadow mb-2">
                                        {cabins[1].title}
                                    </h3>
                                    <p className="text-white/70 text-sm">{cabins[1].desc}</p>
                                </div>
                            </div>
                        </Link>

                        <Link
                            href={`/cabins/${cabins[2].slug}`}
                            className="cabin-card md:col-start-3 md:col-span-8 group block"
                        >
                            <div className="relative overflow-hidden rounded-sm aspect-[16/9] hover-zoom">
                                <img
                                    alt={cabins[2].title}
                                    className="w-full h-full object-cover"
                                    src={cabins[2].image}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8">
                                    <h3 className="font-serif text-3xl text-white text-shadow mb-2">
                                        {cabins[2].title}
                                    </h3>
                                    <p className="text-white/70 text-sm">{cabins[2].desc}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 6: KIDS — Split Screen
      ═══════════════════════════════════════════ */}
            <section
                ref={kidsRef}
                className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2"
            >
                <div className="kids-img-wrapper relative overflow-hidden min-h-[50vh] lg:min-h-screen">
                    <img
                        alt="Дети на природе"
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/images/territory/nature-5.jpg"
                    />
                </div>
                <div className="bg-forest flex items-center justify-center p-12 lg:p-20 min-h-[50vh] lg:min-h-screen">
                    <div className="kids-text max-w-lg">
                        <h2 className="font-serif text-3xl md:text-5xl text-cream mb-8 leading-tight">
                            Для наших
                            <br />
                            <span className="italic">маленьких гостей</span>
                        </h2>
                        <p className="text-sand/70 text-base leading-relaxed mb-6">
                            Наши маленькие гости наслаждаются активными играми на свежем воздухе,
                            развиваются и заводят новых друзей, пока родители могут расслабиться.
                        </p>
                        <p className="text-sand/70 text-base leading-relaxed mb-10">
                            Для взрослых это время тишины и настоящего отдыха: можно устроить пикник,
                            почитать книгу или просто насладиться красотой природы.
                        </p>
                        <a
                            href="#booking"
                            className="text-sand/40 text-xs uppercase tracking-[0.3em] hover:text-sand transition-colors inline-flex items-center gap-2"
                        >
                            Узнать свободные даты
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 7: MAP — Full screen dark
      ═══════════════════════════════════════════ */}
            <section
                ref={mapRef}
                className="relative min-h-screen bg-forest flex items-center"
                id="contacts"
            >
                <div className="map-content max-w-7xl mx-auto px-6 lg:px-20 w-full">
                    <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream mb-16 text-center leading-tight">
                        Как проехать к месту
                        <br />
                        <span className="italic">безусловного счастья?</span>
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="aspect-[4/3] rounded-sm overflow-hidden bg-olive/30 relative">
                            <img
                                alt="Территория глэмпинга"
                                className="w-full h-full object-cover opacity-70"
                                src="/images/territory/nature-3.jpg"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-cream/50 text-sm uppercase tracking-widest bg-forest/60 px-6 py-3 rounded">
                                    Карта будет добавлена
                                </span>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <p className="font-serif text-2xl text-cream/90 leading-relaxed">
                                Глэмпинг &laquo;YAGODA&raquo; &mdash;
                                <br />с заботой о Вашем отдыхе.
                            </p>
                            <p className="text-sand/50 text-base leading-relaxed">
                                Здесь о комфортном отдыхе на природе наедине с собой, с вашей семьей
                                и даже с питомцами.
                            </p>
                            <div className="space-y-4 pt-4">
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-gold/60 mt-0.5 text-lg">
                                        location_on
                                    </span>
                                    <p className="text-cream/70 text-sm">
                                        Адрес: г. Шлиссельбург,
                                        <br />
                                        ул. Красный Тракт, 17
                                    </p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-gold/60 mt-0.5 text-lg">
                                        call
                                    </span>
                                    <a
                                        href="tel:+79218835640"
                                        className="text-cream/70 text-sm hover:text-cream transition-colors"
                                    >
                                        +7(921) 883-56-40
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 8: BOOKING CTA
      ═══════════════════════════════════════════ */}
            <section id="booking" className="py-32 bg-cream">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="font-serif text-4xl md:text-6xl text-forest mb-8">
                        Забронировать
                    </h2>
                    <p className="text-forest/50 text-base mb-12 leading-relaxed max-w-lg mx-auto">
                        Свяжитесь с нами по телефону или оставьте заявку, и мы подберём для вас
                        лучший вариант отдыха.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+79218835640"
                            className="bg-forest text-cream px-10 py-4 rounded-full font-semibold text-sm tracking-wider hover:bg-moss transition-all inline-flex items-center justify-center gap-3"
                        >
                            <span className="material-symbols-outlined text-lg">call</span>
                            +7921 883-56-40
                        </a>
                        <a
                            href="https://wa.me/79218835640"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-forest/30 text-forest px-10 py-4 rounded-full font-semibold text-sm tracking-wider hover:bg-forest hover:text-cream transition-all inline-flex items-center justify-center gap-3"
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
