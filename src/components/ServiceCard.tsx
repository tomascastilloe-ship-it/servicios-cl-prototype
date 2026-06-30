import Link from "next/link";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/servicios/${service.slug}`}
      className="group block overflow-hidden rounded-[1.7rem] bg-white shadow-sm ring-1 ring-[#ead8c2] transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#b86b3a]/15"
    >
      <div className={`h-56 bg-gradient-to-br ${service.gradient} p-4`}>
        <div className="flex h-full flex-col justify-between rounded-[1.2rem] bg-white/50 p-4 backdrop-blur-sm">
          <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-black text-[#5b3928] shadow-sm">
            {service.badge}
          </span>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#241a14] text-white shadow-lg transition group-hover:scale-110 group-hover:bg-[#e45b2d]">
            ▶
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="font-black text-[#241a14]">{service.commune}</p>
          <p className="text-sm font-bold text-[#8a5b37]">★ {service.rating}</p>
        </div>
        <h3 className="mt-2 min-h-12 font-bold leading-6 text-[#2f2118]">{service.title}</h3>
        <p className="mt-2 text-sm text-[#75604d]">
          {service.provider} · {service.reviews} reseñas
        </p>
        <p className="mt-4 text-sm text-[#75604d]">
          <span className="text-lg font-black text-[#241a14]">{service.price}</span> desde
        </p>
      </div>
    </Link>
  );
}
