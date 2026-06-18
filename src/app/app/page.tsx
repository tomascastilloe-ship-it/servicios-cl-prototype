import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

const flow = [
  {
    title: "Explorar servicios",
    text: "El cliente revisa profesionales, video, precio, comuna y disponibilidad desde web o app.",
  },
  {
    title: "Solicitar match",
    text: "Cliente y prestador acuerdan horario dentro de la plataforma, sin compartir datos externos.",
  },
  {
    title: "Confirmar llegada",
    text: "Al llegar, se envía confirmación por app/WhatsApp al maestro y al cliente para validar presencia.",
  },
  {
    title: "Cobro seguro",
    text: "Con doble confirmación, se captura/cobra la tarjeta autorizada por la visita o servicio pactado.",
  },
  {
    title: "Pago al prestador",
    text: "El maestro recibe transferencia bancaria 24 a 48 horas después de realizado el trabajo.",
  },
];

export default function AppPrototypePage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-neutral-950">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff385c]">App conectada a la web</p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
              servicios.cl funcionará como web y app en línea.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-600">
              La página web y la app deben compartir los mismos datos: perfiles, videos, agenda, reservas, chat, confirmaciones, pagos y estado del servicio. Lo que ocurra en un canal debe verse actualizado en el otro.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/profesionales/piloto-maestro" className="rounded-full bg-[#ff385c] px-6 py-4 text-center font-black text-white transition hover:bg-[#e31c5f]">
                Ver ficha piloto del maestro
              </Link>
              <Link href="/reservar/electricista-mario-fuentes" className="rounded-full border border-neutral-300 bg-white px-6 py-4 text-center font-black transition hover:border-neutral-950">
                Ver reserva cliente
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm rounded-[3rem] bg-neutral-950 p-4 shadow-2xl ring-8 ring-neutral-200">
            <div className="overflow-hidden rounded-[2.4rem] bg-white">
              <div className="bg-neutral-950 px-5 py-5 text-white">
                <div className="mx-auto mb-4 h-1.5 w-24 rounded-full bg-white/25" />
                <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-200">servicios.cl app</p>
                <h2 className="mt-2 text-2xl font-black">Reserva activa</h2>
              </div>
              <div className="space-y-4 p-5">
                <div className="rounded-3xl bg-rose-50 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#d70466]">Maestro asignado</p>
                  <p className="mt-1 text-xl font-black">Mantención general</p>
                  <p className="mt-1 text-sm text-neutral-600">Ñuñoa · Hoy 15:00</p>
                </div>
                <div className="rounded-3xl border border-neutral-200 p-4">
                  <p className="font-black">Estado del servicio</p>
                  <div className="mt-4 space-y-3 text-sm font-bold text-neutral-700">
                    <p>✓ Match confirmado</p>
                    <p>✓ Tarjeta autorizada</p>
                    <p>⌛ Esperando llegada del maestro</p>
                    <p>□ Doble confirmación cliente/maestro</p>
                    <p>□ Captura de pago</p>
                  </div>
                </div>
                <button className="w-full rounded-full bg-neutral-950 px-5 py-4 font-black text-white">
                  Confirmar llegada
                </button>
                <p className="text-center text-xs leading-5 text-neutral-500">
                  La confirmación también podrá enviarse por WhatsApp automático para cliente y prestador.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-12 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff385c]">Flujo operacional</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight">Mismo proceso para web y app</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-5">
            {flow.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-neutral-200 p-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950 text-sm font-black text-white">{index + 1}</span>
                <h3 className="mt-4 font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
