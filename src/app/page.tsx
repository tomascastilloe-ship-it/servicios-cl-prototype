import Image from "next/image";
import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import { SiteHeader } from "@/components/SiteHeader";
import { categories, services } from "@/lib/services";

const steps = [
  "Elige servicio, comuna y horario disponible.",
  "Revisa el video de presentación del profesional.",
  "Reserva en la plataforma y paga cuando llega a tu domicilio.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F6FF] text-[#14123D]">
      <SiteHeader />

      <section id="inicio" className="mx-auto max-w-7xl px-5 pb-12 pt-8 lg:px-8 lg:pb-16 lg:pt-12">
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(63,53,242,0.12)] ring-1 ring-[#E7E5FF]">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-6 sm:p-10 lg:p-14">
              <p className="mb-5 inline-flex rounded-full bg-[#F1EFFF] px-4 py-2 text-sm font-bold text-[#4F46FF]">
                Partimos en Ñuñoa y Providencia
              </p>
              <h1 className="max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Burro: servicios para tu departamento, con profesionales en video.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5E5A8F]">
                Encuentra maestros, aseo, limpieza de vidrios, colchones, autos y paseo de perros. Compara perfiles con video, revisa disponibilidad y reserva con más confianza antes de abrir la puerta.
              </p>

              <div className="mt-8 rounded-[2rem] border border-[#E7E5FF] bg-white p-2 shadow-xl shadow-[#D8D6FF]/30 lg:rounded-full lg:max-w-4xl">
                <div className="grid gap-2 md:grid-cols-[1.1fr_0.8fr_0.7fr_auto]">
                  <div className="rounded-full px-5 py-3 hover:bg-neutral-50">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#5E5A8F]">Servicio</p>
                    <p className="mt-1 font-bold">¿Qué necesitas?</p>
                  </div>
                  <div className="rounded-full px-5 py-3 hover:bg-neutral-50">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#5E5A8F]">Comuna</p>
                    <p className="mt-1 font-bold">Ñuñoa o Providencia</p>
                  </div>
                  <div className="rounded-full px-5 py-3 hover:bg-neutral-50">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#5E5A8F]">Fecha</p>
                    <p className="mt-1 font-bold">Esta semana</p>
                  </div>
                  <Link
                    className="flex items-center justify-center rounded-full bg-[#3F35F2] px-8 py-4 text-base font-black text-white transition hover:bg-[#2F1FEA]"
                    href="/servicios"
                  >
                    Buscar
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative min-h-[420px] bg-[#14123D] p-6 text-white lg:min-h-full lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,70,255,0.48),transparent_30%),radial-gradient(circle_at_80%_50%,rgba(241,239,255,0.55),transparent_24%)]" />
              <div className="relative flex h-full flex-col justify-between gap-8">
                <div className="ml-auto w-fit rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">
                  Pago al llegar el profesional
                </div>
                <div className="rounded-[1.7rem] bg-white p-4 text-[#14123D] shadow-2xl">
                  <div className="h-56 rounded-[1.2rem] bg-gradient-to-br from-[#F1EFFF] via-[#E7E5FF] to-[#ADA7FF] p-5">
                    <div className="flex h-full flex-col justify-between rounded-[1rem] border border-white/70 bg-white/55 p-4 backdrop-blur-sm">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#3F35F2]">Video obligatorio +1 minuto</p>
                        <h2 className="mt-3 text-2xl font-black">“Hola, soy Claudia. Llevo 8 años haciendo aseo profundo...”</h2>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-[#14123D] px-4 py-2 text-sm font-bold text-white">▶ Ver presentación</span>
                        <span className="text-sm font-bold">4,91 ★</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end justify-between px-2 py-4">
                    <div>
                      <p className="font-black">Aseo profundo departamento</p>
                      <p className="text-sm text-[#5E5A8F]">Providencia · Disponible mañana</p>
                    </div>
                    <p className="text-right text-sm text-[#5E5A8F]"><span className="text-lg font-black text-[#14123D]">$49.000</span><br />desde</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center text-sm font-bold">
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">Agenda</div>
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">Reserva</div>
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">Confianza</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-4 lg:px-8" aria-label="Categorías">
        <div className="flex gap-3 overflow-x-auto pb-3">
          {categories.map((category) => (
            <Link
              key={category}
              className="whitespace-nowrap rounded-full border border-[#E7E5FF] bg-white px-5 py-3 text-sm font-bold text-[#27235F] shadow-sm transition hover:border-[#3F35F2] hover:text-[#14123D]"
              href="/servicios"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#3F35F2]">Servicios destacados</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Profesionales listos para departamentos</h2>
          </div>
          <p className="max-w-xl text-[#5E5A8F]">Cada profesional define su precio y debe presentarse en video antes de aparecer publicado.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section id="funciona" className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="rounded-[2rem] bg-[#14123D] p-6 text-white sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#9D98FF]">Cómo funciona</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Reserva simple, pago presencial y todo registrado.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step} className="rounded-[1.4rem] bg-white/10 p-5 ring-1 ring-white/10">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-black text-[#14123D]">{index + 1}</span>
                  <p className="mt-6 font-bold leading-7">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="profesionales" className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#E7E5FF] sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#3F35F2]">Para profesionales</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Muestra tu experiencia y recibe reservas.</h2>
            <p className="mt-5 text-lg leading-8 text-[#5E5A8F]">Sube un video de más de 1 minuto, define tus precios, marca si atiendes Ñuñoa, Providencia o ambas, y administra tu agenda desde el panel.</p>
            <Link className="mt-8 inline-flex rounded-full bg-[#14123D] px-6 py-4 font-black text-white transition hover:bg-[#27235F]" href="/profesionales">
              Quiero ser profesional
            </Link>
          </div>
          <div className="rounded-[2rem] bg-[#3F35F2] p-8 text-white shadow-sm sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-white/70">Reglas de confianza</p>
            <ul className="mt-6 space-y-5 text-lg font-bold leading-8">
              <li>✓ Video de presentación obligatorio.</li>
              <li>✓ Agenda y disponibilidad visibles.</li>
              <li>✓ Precios publicados por cada profesional.</li>
              <li>✓ Todas las reservas quedan dentro de burro.cl.</li>
              <li>✓ Pago cuando el profesional llega al domicilio.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="marca" className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="rounded-[2rem] border border-[#E7E5FF] bg-[#14123D] p-6 text-white shadow-[0_24px_80px_rgba(63,53,242,0.18)] sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#9D98FF]">Identidad visual Burro</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Una marca cercana, fuerte y fácil de recordar.</h2>
              <p className="mt-5 text-lg leading-8 text-white/72">
                La propuesta usa azul morado intenso, blanco limpio y lavanda suave: una marca simple, amable, digital y fácil de reconocer.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                ["Azul burro", "#3F35F2", "Botones y llamados a la acción"],
                ["Morado profundo", "#14123D", "Texto, header y confianza"],
                ["Blanco lavanda", "#F1EFFF", "Fondos cálidos"],
                ["Azul confianza", "#4F46FF", "Estados positivos y seguridad"],
              ].map(([name, hex, use]) => (
                <div key={hex} className="rounded-[1.4rem] bg-white/10 p-4 ring-1 ring-white/10">
                  <div className="h-20 rounded-2xl shadow-inner" style={{ backgroundColor: hex }} />
                  <p className="mt-4 font-black">{name}</p>
                  <p className="font-mono text-sm text-white/70">{hex}</p>
                  <p className="mt-2 text-sm leading-6 text-white/70">{use}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-[1.4rem] bg-white p-6 text-[#14123D]">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#5E5A8F]">Logo oficial base</p>
            <Image
              src="/brand/burro-logo.svg"
              alt="Logo burro.cl"
              width={520}
              height={188}
              className="mt-4 h-auto w-full max-w-xl"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-[#E7E5FF] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-[#5E5A8F] md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="font-bold text-[#14123D]">burro.cl</p>
          <p>Marca en desarrollo · Ñuñoa y Providencia · Marketplace independiente.</p>
        </div>
      </footer>
    </main>
  );
}
