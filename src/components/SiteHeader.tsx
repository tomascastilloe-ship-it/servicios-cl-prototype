import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#ead8c2]/80 bg-[#fffaf2]/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link className="flex items-center gap-3" href="/" aria-label="Ir al inicio">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-[1rem] bg-gradient-to-br from-[#e45b2d] via-[#b86b3a] to-[#5b3928] text-xl font-black text-white shadow-[0_12px_28px_rgba(91,57,40,0.25)]">
            <span className="absolute -top-2 left-2 h-5 w-3 -rotate-12 rounded-full bg-[#5b3928]" />
            <span className="absolute -top-2 right-2 h-5 w-3 rotate-12 rounded-full bg-[#5b3928]" />
            b
          </span>
          <span className="leading-tight">
            <span className="block text-xl font-black tracking-tight text-[#241a14]">burro.cl</span>
            <span className="hidden text-xs font-bold uppercase tracking-[0.18em] text-[#8a5b37] sm:block">servicios de confianza</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-[#5d4635] md:flex">
          <Link className="hover:text-[#241a14]" href="/servicios">
            Servicios
          </Link>
          <Link className="hover:text-[#241a14]" href="/#funciona">
            Cómo funciona
          </Link>
          <Link className="hover:text-[#241a14]" href="/profesionales">
            Soy profesional
          </Link>
          <Link className="hover:text-[#241a14]" href="/app">
            App piloto
          </Link>
        </nav>

        <Link
          className="rounded-full border border-[#d9c2aa] bg-white px-4 py-2 text-sm font-bold text-[#241a14] shadow-sm transition hover:border-[#e45b2d] hover:shadow-md"
          href="/profesionales/postular"
        >
          Ofrecer servicio
        </Link>
      </div>
    </header>
  );
}
