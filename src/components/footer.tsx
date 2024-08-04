import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="flex items-center  justify-end border-t border-neutral-100 py-2 align-middle">


      <div className="flex items-center gap-4 transition-all">
        <Button asChild className="" variant={"ghost"}>
          <Link href="/sitemap.xml">Sitemap</Link>
        </Button>

        <Button asChild className="" variant={"ghost"}>
          <Link href="/imprint">Imprint</Link>
        </Button>
      </div>
    </footer>
  );
}
