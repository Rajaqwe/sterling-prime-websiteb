import { notFound } from "next/navigation";
import { EditorialPage, FunctionalBridge } from "@/components/EditorialPage";
import { publicRoutes, specialAreas } from "@/lib/site";
import { ProductDetail } from "@/components/ProductDetail";

export default async function RoutePage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const first = slug[0] ?? "";
  if (first === "products" && slug[1]) return <ProductDetail slug={slug[1]} />;
  if (specialAreas.includes(first)) return <FunctionalBridge area={first} />;
  if (publicRoutes.includes(first)) return <EditorialPage slug={first} />;
  notFound();
}
