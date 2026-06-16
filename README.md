# servicios.cl — Prototipo inicial

Marketplace de servicios para departamentos en Ñuñoa y Providencia, inspirado en una experiencia tipo Airbnb, pero con identidad propia.

## Qué incluye este prototipo

- Home responsive para `servicios.cl`.
- Buscador principal por servicio, comuna y fecha.
- Categorías de servicios.
- Tarjetas de profesionales con precio, comuna, rating y video.
- Sección de funcionamiento: elegir, revisar video, reservar y pagar al llegar.
- Bloque para captar profesionales.
- Reglas de confianza: video obligatorio, agenda visible, precios definidos por cada profesional y reservas dentro de la plataforma.

## Decisiones confirmadas

- Comunas iniciales: Ñuñoa y Providencia.
- Nombre temporal: servicios.cl.
- Negocio independiente de Propiedades Castillo Asociados SpA.
- Pago: cuando el profesional llega al domicilio.
- Precios: definidos por cada profesional.

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
