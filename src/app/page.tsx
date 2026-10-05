import { EditorialNav } from "@/components/EditorialNav";
import { EditorialHome } from "@/components/EditorialHome";

export default function Home() {
  return (
    <>
      <EditorialNav />
      <main>
        <EditorialHome />
      </main>
    </>
  );
}
