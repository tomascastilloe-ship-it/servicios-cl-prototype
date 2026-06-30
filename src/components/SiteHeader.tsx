import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#E7E5FF]/80 bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link className="flex items-center gap-3" href="/" aria-label="Ir al inicio">
          <Image
            src="/brand/burro-logo.svg"
            alt="burro.cl"
            width={156}
            height={56}
            priority
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-[#27235F] md:flex">
          <Link className="hover:text-[#3F35F2]" href="/servicios">
            Servicios
          </Link>
          <Link className="hover:text-[#3F35F2]" href="/#funciona">
            Cómo funciona
          </Link>
          <Link className="hover:text-[#3F35F2]" href="/profesionales">
            Soy profesional
          </Link>
          <Link className="hover:text-[#3F35F2]" href="/app">
            App piloto
          </Link>
        </nav>

        <Link
          className="rounded-full border border-[#D8D6FF] bg-white px-4 py-2 text-sm font-bold text-[#2F1FEA] shadow-sm transition hover:border-[#3F35F2] hover:shadow-md"
          href="/profesionales/postular"
        >
          Ofrecer servicio
        </Link>
      </div>
    </header>
  );
}
