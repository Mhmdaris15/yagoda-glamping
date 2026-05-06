import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MapSection from "@/components/MapSection";
import CabinDetailContent from "@/components/CabinDetailContent";
import { notFound } from "next/navigation";

const ALLOWED = ["family-one", "family-two", "studio"] as const;
type CabinSlug = (typeof ALLOWED)[number];

export function generateStaticParams() {
  return ALLOWED.map((id) => ({ id }));
}

export default async function CabinDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!ALLOWED.includes(id as CabinSlug)) notFound();
  const slug = id as CabinSlug;

  return (
    <>
      <NavBar />
      <CabinDetailContent slug={slug} />
      <MapSection />
      <Footer />
    </>
  );
}
