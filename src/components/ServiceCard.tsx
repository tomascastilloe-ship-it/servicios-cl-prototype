import Link from "next/link";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/servicios/${service.slug}`}
      className="group block overflow-hidden rounded-[1.7rem] bg-white shadow-sm ring-1 ring-neutral-200 transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className={`h-56 bg-gradient-to-br ${service.gradient} p-4`}>
        <div className="flex h-full flex-col justify-between rounded-[1.2rem] bg-white/45 p-4 backdrop-blur-sm">
          <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-black text-neutral-800 shadow-sm">
            {service.badge}
          </span>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950 text-white shadow-lg transition group-hover:scale-110">
            ▶
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="font-black">{service.commune}</p>
          <p className="text-sm font-bold">★ {service.rating}</p>
        </div>
        <h3 className="mt-2 min-h-12 font-bold leading-6">{service.title}</h3>
        <p className="mt-2 text-sm text-neutral-600">
          {service.provider} · {service.reviews} reseñas
        </p>
        <p className="mt-4 text-sm">
          <span className="text-lg font-black">{service.price}</span> desde
        </p>
      </div>
    </Link>
  );
}
