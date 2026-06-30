import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

const requirements = [
  "Subir video de presentación de más de 1 minuto.",
  "Explicar experiencia, servicio y forma de trabajo.",
  "Definir precios y condiciones del servicio.",
  "Mantener calendario de disponibilidad actualizado.",
  "Aceptar que la coordinación inicial y reservas ocurren dentro de burro.cl.",
];

export default function ProfessionalsPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#14123D]">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_430px] lg:items-center">
          <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:p-10 lg:p-14">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#3F35F2]">
              Para profesionales
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
              Recibe solicitudes reales sin perder el control de tu agenda.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5E5A8F]">
              En burro.cl cada profesional publica sus precios, disponibilidad y video de presentación. El cliente envía una ficha, se confirma honorario y horario, y recién ahí se genera el match.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/profesionales/postular" className="inline-flex rounded-full bg-[#3F35F2] px-6 py-4 font-black text-white transition hover:bg-[#2F1FEA]">
                Completar ficha profesional
              </Link>
              <Link href="/profesionales/piloto-maestro" className="inline-flex rounded-full bg-[#14123D] px-6 py-4 font-black text-white transition hover:bg-[#27235F]">
                Ver ficha piloto
              </Link>
              <Link href="/servicios" className="inline-flex rounded-full border border-[#D8D6FF] px-6 py-4 font-black text-neutral-900 transition hover:border-[#3F35F2]">
                Ver cómo se ve un perfil
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#14123D] p-6 text-white shadow-xl sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ADA7FF]">Panel del profesional</p>
            <div className="mt-5 rounded-[1.5rem] bg-white p-5 text-[#14123D]">
              <p className="text-sm font-bold text-[#7773A8]">Calendario semanal</p>
              <div className="mt-4 grid gap-2">
                {["Lunes 09:00–13:00", "Martes 15:00–19:00", "Jueves 10:00–16:00"].map((slot) => (
                  <div key={slot} className="rounded-xl border border-[#E7E5FF] px-4 py-3 text-sm font-black">
                    {slot}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 rounded-[1.5rem] bg-white/10 p-5 ring-1 ring-white/10">
              <p className="font-black">Match protegido</p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Antes de confirmar una solicitud, el sistema filtra teléfonos y datos externos para que la operación no se salga de la plataforma.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:p-8">
            <h2 className="text-2xl font-black">1. Crea tu perfil</h2>
            <p className="mt-3 leading-7 text-[#5E5A8F]">
              Agrega experiencia, servicios, comunas, precios y fotos. El video de presentación será obligatorio para publicar.
            </p>
          </section>
          <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:p-8">
            <h2 className="text-2xl font-black">2. Configura tu agenda</h2>
            <p className="mt-3 leading-7 text-[#5E5A8F]">
              Define bloques disponibles para que los clientes propongan horarios compatibles antes de confirmar.
            </p>
          </section>
          <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:p-8">
            <h2 className="text-2xl font-black">3. Confirma el match</h2>
            <p className="mt-3 leading-7 text-[#5E5A8F]">
              Revisa la ficha del cliente, acuerda honorario por chat interno y acepta la solicitud dentro de la plataforma.
            </p>
          </section>
        </div>

        <section className="mt-10 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#3F35F2]">Requisitos</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">Qué pediremos para publicar</h2>
              <ul className="mt-6 space-y-4">
                {requirements.map((item) => (
                  <li key={item} className="flex gap-3 text-[#27235F]">
                    <span className="font-black text-[#3F35F2]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.7rem] bg-[#F1EFFF] p-6">
              <h3 className="text-2xl font-black text-[#3F35F2]">Formulario próximo</h3>
              <p className="mt-3 leading-7 text-[#27235F]">
                En la siguiente versión este bloque será un formulario real para postular como profesional, subir video, definir precios y configurar calendario.
              </p>
              <Link href="/profesionales/postular" className="mt-6 inline-flex rounded-full bg-[#14123D] px-6 py-4 font-black text-white">
                Postular como profesional
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
