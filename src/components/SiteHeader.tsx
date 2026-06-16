import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link className="flex items-center gap-2" href="/" aria-label="Ir al inicio">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff385c] text-lg font-black text-white shadow-sm">
            s
          </span>
          <span className="text-xl font-black tracking-tight">servicios.cl</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-neutral-700 md:flex">
          <Link className="hover:text-neutral-950" href="/servicios">
            Servicios
          </Link>
          <Link className="hover:text-neutral-950" href="/#funciona">
            Cómo funciona
          </Link>
          <Link className="hover:text-neutral-950" href="/profesionales">
            Soy profesional
          </Link>
        </nav>

        <Link
          className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-bold shadow-sm transition hover:shadow-md"
          href="/profesionales"
        >
          Ofrecer servicio
        </Link>
      </div>
    </header>
  );
}
