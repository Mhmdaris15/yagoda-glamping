import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MapSection from "@/components/MapSection";
import Link from "next/link";
import { notFound } from "next/navigation";
import { assetPath } from "@/lib/config";

/* ── Cabin Data ── */
interface CabinData {
    title: string;
    slug: string;
    heroImage: string;
    description: string;
    whatAwaits: string[];
    capacity: string;
    gallery: string[];
}

const cabins: Record<string, CabinData> = {
    "family-one": {
        title: "Домик Family One",
        slug: "family-one",
        heroImage: assetPath("/images/cabin-family-one/hero.jpg"),
        description:
            "Вдохните свежий лесной воздух и отдохните в настоящем комфорте. Домик Family one — это оазис гармонии с природой и удобства, где каждая деталь создана для вашего удовольствия.",
        whatAwaits: [
            "Две отдельные спальни — уютные, светлые, с двумя большими двуспальными кроватями. Здесь легко разместится вся семья или компания друзей!",
            "Просторная кухня-гостиная: большой диван, на котором так приятно собраться после насыщенного дня, полностью оборудованная кухня — для совместных ужинов и вкусных завтраков.",
            "Современная ванная комната для абсолютного комфорта.",
        ],
        capacity: "Общая вместимость в домике — 6 человек.",
        gallery: [
            assetPath("/images/cabin-family-one/interior-1.jpg"),
            assetPath("/images/cabin-family-one/interior-2.jpg"),
            assetPath("/images/cabin-family-one/interior-3.jpg"),
            assetPath("/images/cabin-family-one/interior-4.jpg"),
            assetPath("/images/cabin-family-one/interior-5.jpg"),
            assetPath("/images/cabin-family-one/interior-6.jpg"),
        ],
    },
    "family-two": {
        title: "Домик Family Two",
        slug: "family-two",
        heroImage: assetPath("/images/cabin-family-two/hero.jpg"),
        description:
            "Откройте для себя новый уровень уюта – Домик Family two нашего глэмпинга ждёт именно вас! Здесь комфорт гармонично сочетается с близостью к природе и продуманным функционалом.",
        whatAwaits: [
            "2 отдельные спальные комнаты с большими, уютными двуспальными кроватями.",
            "Просторная кухня-гостиная для душевных вечеров — чуть компактнее, чем в первом домике, зато не менее удобная.",
            "Комфортное размещение до 6 человек: качественная мебель и современный раскладывающийся диван легко превращается в два дополнительных спальных места!",
            "Уютная зона отдыха с журнальным столиком для приятных бесед.",
            "Ванная комната с современной душевой кабиной — свежесть и уют в любое время дня.",
        ],
        capacity: "Общая вместимость — 6 человек.",
        gallery: [
            assetPath("/images/cabin-family-two/interior-1.jpg"),
            assetPath("/images/cabin-family-two/interior-2.jpg"),
            assetPath("/images/cabin-family-two/interior-3.jpg"),
            assetPath("/images/cabin-family-two/interior-4.jpg"),
            assetPath("/images/cabin-family-two/interior-5.jpg"),
            assetPath("/images/cabin-family-two/interior-6.jpg"),
        ],
    },
    studio: {
        title: "Домик Studio",
        slug: "studio",
        heroImage: assetPath("/images/cabin-studio/hero.jpg"),
        description:
            "Мечтаете сбежать из города вдвоём, но не готовы отказаться от комфорта? У нас для вас отличная новость — в нашем глэмпинге доступен Домик Studio!",
        whatAwaits: [
            "Уютная планировка: просторная студия, где спальня отделена стильной перегородкой.",
            "Дополнительные места: удобный раскладывающийся диван, идеально подойдет для семьи или компании до 4 человек.",
            "Мини-кухня: для легких перекусов и утреннего кофе.",
            "Современный санузел с душевой кабиной — комфорт на уровне лучших гостиниц!",
            "Загородный отдых стал еще ближе: свежий воздух, уют в одном месте!",
        ],
        capacity: "Вместимость — до 4 человек.",
        gallery: [
            assetPath("/images/cabin-studio/interior-1.jpg"),
            assetPath("/images/cabin-studio/interior-2.jpg"),
            assetPath("/images/cabin-studio/interior-3.jpg"),
            assetPath("/images/cabin-studio/interior-4.jpg"),
        ],
    },
};

export function generateStaticParams() {
    return Object.keys(cabins).map((id) => ({ id }));
}

export default async function CabinDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const cabin = cabins[id];

    if (!cabin) {
        notFound();
    }

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

                {/* Hero */}
                <section className="relative h-[50vh] md:h-[65vh] w-full overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${cabin.heroImage}')` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />
                    </div>
                    <div className="absolute bottom-8 left-6 lg:left-20 max-w-2xl text-white">
                        <h1 className="text-4xl lg:text-6xl font-serif font-bold leading-tight mb-4 text-shadow">
                            {cabin.title}
                        </h1>
                    </div>
                </section>

                {/* Content */}
                <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Left: Description */}
                        <div className="lg:col-span-3 space-y-10">
                            <p className="text-lg text-forest/80 leading-relaxed">
                                {cabin.description}
                            </p>

                            <div>
                                <h2 className="font-serif text-3xl font-bold mb-6 text-forest">
                                    Что вас ждет
                                </h2>
                                <ul className="space-y-4">
                                    {cabin.whatAwaits.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-forest/80 leading-relaxed">
                                            <span className="material-symbols-outlined text-gold mt-1 text-sm flex-shrink-0">
                                                check_circle
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-6 text-forest font-semibold">{cabin.capacity}</p>
                            </div>

                            {/* Gallery */}
                            <div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {cabin.gallery.map((src, i) => (
                                        <div
                                            key={i}
                                            className={`rounded-xl overflow-hidden hover-zoom shadow-md ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
                                                }`}
                                        >
                                            <img
                                                className="w-full h-full object-cover"
                                                alt={`${cabin.title} — фото ${i + 1}`}
                                                src={src}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Booking sidebar */}
                        <div className="lg:col-span-2">
                            <div className="sticky top-28 space-y-6">
                                <div className="bg-white p-8 rounded-2xl shadow-lg border border-sand/30">
                                    <h3 className="font-serif text-2xl font-bold text-forest mb-4">
                                        Забронировать
                                    </h3>
                                    <p className="text-forest/60 text-sm mb-6 leading-relaxed">
                                        Свяжитесь с нами, чтобы узнать свободные даты и забронировать {cabin.title}.
                                    </p>

                                    <a
                                        href="tel:+79218835640"
                                        className="w-full bg-forest hover:bg-moss text-cream py-4 rounded-xl font-bold text-base transition-all shadow-md flex items-center justify-center gap-3 mb-3"
                                    >
                                        <span className="material-symbols-outlined">call</span>
                                        +7921 883-56-40
                                    </a>
                                    <a
                                        href="https://wa.me/79218835640"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-accent/20 hover:bg-accent/30 text-forest py-4 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-3"
                                    >
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <MapSection />
            </main>
            <Footer />
        </>
    );
}
