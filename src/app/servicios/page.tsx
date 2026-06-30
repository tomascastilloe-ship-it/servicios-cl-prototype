import { ServiceCard } from "@/components/ServiceCard";
import { SiteHeader } from "@/components/SiteHeader";
import { categories, services } from "@/lib/services";

const communes = ["Ñuñoa", "Providencia"];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F7F6FF] text-[#14123D]">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-[#E7E5FF] sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#3F35F2]">
            Servicios disponibles
          </p>
          <div className="mt-3 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <h1 className="text-4xl font-black tracking-[-0.04em] sm:text-6xl">
                Encuentra el profesional correcto.
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-[#5E5A8F]">
                Explora servicios para departamentos en Ñuñoa y Providencia. Todos los perfiles destacados incluyen video de presentación, experiencia y disponibilidad.
              </p>
            </div>
            <div className="rounded-2xl bg-[#14123D] px-5 py-4 text-white">
              <p className="text-sm text-white/70">Modelo de pago</p>
              <p className="font-black">Pagas cuando llega el profesional</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="h-fit rounded-[1.7rem] bg-white p-5 shadow-sm ring-1 ring-[#E7E5FF] lg:sticky lg:top-24">
            <h2 className="text-lg font-black">Filtros</h2>

            <div className="mt-6">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#5E5A8F]">Comuna</p>
              <div className="space-y-2">
                {communes.map((commune) => (
                  <label key={commune} className="flex items-center gap-3 rounded-xl border border-[#E7E5FF] px-3 py-3 text-sm font-bold">
                    <input type="checkbox" defaultChecked className="h-4 w-4 accent-[#3F35F2]" />
                    {commune}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#5E5A8F]">Categoría</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span key={category} className="rounded-full border border-[#E7E5FF] px-3 py-2 text-xs font-bold text-[#27235F]">
                    {category}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-[#F1EFFF] p-4">
              <p className="font-black text-[#4F46FF]">Próxima versión</p>
              <p className="mt-2 text-sm leading-6 text-[#27235F]">
                Estos filtros serán interactivos cuando conectemos base de datos y disponibilidad real.
              </p>
            </div>
          </aside>

          <section>
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="font-bold text-[#27235F]">{services.length} profesionales encontrados</p>
              <select className="rounded-full border border-[#E7E5FF] bg-white px-4 py-3 text-sm font-bold shadow-sm">
                <option>Mejor evaluados</option>
                <option>Menor precio</option>
                <option>Disponibles hoy</option>
              </select>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
