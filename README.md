# servicios.cl — Prototipo inicial

Marketplace de servicios para departamentos en Ñuñoa y Providencia, inspirado en una experiencia tipo Airbnb, pero con identidad propia.

## Qué incluye este prototipo

- Home responsive para `servicios.cl`.
- Buscador principal por servicio, comuna y fecha.
- Categorías de servicios.
- Página `/servicios` con listado y filtros visuales.
- Página `/servicios/[slug]` con ficha del profesional, video, precio, experiencia y calendario disponible.
- Página `/reservar/[slug]` con ficha del cliente, calendario del cliente y simulación de chat interno.
- Página `/profesionales` para explicar cómo postulan los prestadores.
- Reglas de confianza: video obligatorio, agenda visible, precios definidos por cada profesional, reservas dentro de la plataforma y bloqueo de teléfonos antes del match.

## Decisiones confirmadas

- Comunas iniciales: Ñuñoa y Providencia.
- Nombre temporal: servicios.cl.
- Negocio independiente de Propiedades Castillo Asociados SpA.
- Pago: cuando el profesional llega al domicilio.
- Precios: definidos por cada profesional.
- Antes de confirmar un match, la mensajería interna debe filtrar teléfonos, correos y datos de contacto externos.
- El match ocurre cuando se confirma honorario y disponibilidad entre calendario del profesional y calendario del cliente.

## Flujo de match y comunicación

1. El cliente revisa el perfil del profesional y su calendario disponible.
2. El cliente completa una ficha con nombre, comuna, referencia, horarios disponibles y detalle del servicio.
3. El profesional revisa la solicitud, confirma honorario y propone/acepta horario.
4. Antes del match, la plataforma bloquea teléfonos, correos, WhatsApp, Instagram y datos externos.
5. Cuando ambas partes aceptan honorario y disponibilidad, queda el match confirmado.
6. La comunicación de detalles finales sigue dentro del chat interno de servicios.cl.

## Ejecutar localmente

```bash
npm install
npm run dev
```

Abrir:

```text
http://localhost:3000
```

## Validar producción

```bash
npm run lint
npm run build
```

## Publicar en Vercel

Opción recomendada para Tomás:

1. Crear una cuenta en https://vercel.com si aún no existe.
2. Subir este proyecto a GitHub.
3. En Vercel, presionar **Add New Project**.
4. Importar el repositorio.
5. Framework detectado: **Next.js**.
6. Presionar **Deploy**.

Opción por terminal:

```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

Nota: para hacer el deploy real desde este computador, Tomás debe iniciar sesión en Vercel o entregar acceso al repositorio/cuenta correspondiente.
