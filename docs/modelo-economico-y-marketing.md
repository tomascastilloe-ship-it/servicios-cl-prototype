# servicios.cl — Reglas económicas y mensajes para marketing

Este documento separa el proyecto **servicios.cl** de **Propiedades Castillo Asociados SpA**.

- **Propiedades Castillo Asociados SpA**: corredora inmobiliaria de Tomás, captación, propiedades, clientes compradores/vendedores, informes y correos comerciales.
- **servicios.cl**: proyecto nuevo e independiente, tipo marketplace/app, para conectar clientes de departamentos con prestadores de servicios.

## Modelo económico definido

- El cliente contrata servicios exclusivamente dentro de la plataforma.
- El medio de pago del cliente será tarjeta de crédito/débito.
- El flujo ideal es tipo Airbnb: selección del profesional, revisión de disponibilidad, solicitud/match, autorización de tarjeta, confirmación de llegada, captura/cobro y posterior pago al prestador.
- No se promueven pagos en efectivo, transferencias directas ni pagos por fuera.
- Al reservar, la plataforma debe poder autorizar o dejar preparado el medio de pago de forma segura.
- El cobro/captura se efectúa cuando el prestador/maestro confirma que llegó a la propiedad en el horario acordado y el cliente también confirma la llegada.
- El prestador recibe su pago mediante transferencia bancaria.
- La transferencia al prestador se realiza normalmente 24 a 48 horas después de realizado el trabajo, por orden contable y control de servicio.

## Investigación inicial de pasarelas de pago para Chile

### Opción recomendada inicial: Transbank

Transbank tiene productos relevantes para este flujo:

- **Webpay Plus**: pago web tradicional.
- **Webpay Plus con captura diferida**: permite autorizar una transacción y capturar/cobrar después. Esto calza con el flujo de “retener/autorizar y cobrar al confirmar llegada”.
- **Oneclick / Oneclick Mall**: permite inscripción de tarjeta para pagos futuros. Transbank indica que los datos de la tarjeta quedan almacenados de forma segura en Transbank y no son conocidos por el comercio.
- **Transacción Completa**: integración más avanzada para cobro con tarjeta dentro de un flujo más controlado.

Conclusión: para servicios.cl conviene evaluar **Transbank con captura diferida** y, más adelante, **Oneclick** para usuarios recurrentes/app.

### Opción alternativa: Mercado Pago

Mercado Pago tiene Checkout Pro, Checkout API, webhooks, reembolsos/cancelaciones y documentación para marketplace. Puede servir para salir rápido, pero hay que validar específicamente:

- Si en Chile permite autorización/captura separada para el flujo exacto.
- Costos/comisiones.
- Plazos de disponibilidad de dinero.
- Facilidad para pagos recurrentes o tarjetas guardadas.
- Cómo manejar marketplace/prestadores si el dinero entra primero a servicios.cl.

### Stripe

Stripe tiene un flujo muy bueno técnicamente para marketplaces y captura manual, pero se debe validar disponibilidad, cuenta local, payouts y compatibilidad comercial/tributaria para Chile antes de elegirlo como base principal.

## Flujo operativo tipo Airbnb para servicios.cl

1. Cliente revisa servicios y profesionales.
2. Cliente revisa video, precio, reseñas y disponibilidad.
3. Cliente solicita match/reserva.
4. Plataforma registra tarjeta de forma segura mediante pasarela externa certificada; servicios.cl no almacena números de tarjeta.
5. Prestador acepta horario y valor estimado.
6. Al llegar a la propiedad, la app/WhatsApp envía confirmación automática:
   - Al maestro: “¿Ya llegaste a la propiedad?”
   - Al cliente: “¿El maestro ya se presentó?”
7. Si ambos responden “sí”, se captura/cobra la tarjeta.
8. Si hay desacuerdo, queda en revisión manual/soporte.
9. La visita se cobra por presentación/visita, independiente de si luego se aprueba o no un trabajo adicional.
10. El prestador recibe transferencia bancaria 24–48 horas después.

## Pendientes contables/legales a resolver

- Definir si servicios.cl será una empresa separada de Propiedades Castillo.
- Definir giro comercial ante SII.
- Definir si servicios.cl emite boleta/factura al cliente por la comisión/plataforma o por el total del servicio.
- Definir si el prestador debe emitir boleta/factura a servicios.cl o al cliente final.
- Definir tratamiento de IVA, retenciones y comisión de plataforma.
- Definir términos y condiciones: pago por visita, cancelaciones, no presentación, reclamos, reembolsos y servicio no ejecutado.
- Revisar con contador/abogado el modelo antes de producción real.

## Mensaje para clientes

“Reserva un servicio para tu departamento de forma simple y segura. Coordinas con el profesional dentro de la plataforma y pagas con tarjeta cuando el profesional confirma que llegó a tu propiedad en el horario acordado.”

## Mensaje para prestadores

“Recibe solicitudes ordenadas, agenda tus horarios y trabaja con pagos gestionados por la plataforma. El cliente paga dentro de servicios.cl y tú recibes transferencia bancaria 24 a 48 horas después de realizar el trabajo.”

## Conceptos que deben aparecer en videos y campañas

- Servicio confiable para departamentos.
- Profesionales con video de presentación.
- Agenda y disponibilidad clara.
- Pago seguro dentro de la plataforma.
- Sin pagos por fuera.
- Transferencia bancaria al prestador después del trabajo.
- Plataforma que conecta, gestiona y monitorea.
- Ideal para mantenciones, reparaciones y servicios cotidianos del hogar.

## Guion base corto para video comercial

“¿Necesitas arreglar algo en tu departamento? En servicios.cl encuentras profesionales verificados, con video de presentación, agenda disponible y pago seguro dentro de la plataforma. El profesional confirma su llegada, tú pagas con tarjeta y todo queda coordinado de forma simple y ordenada.”

## Guion base para captar prestadores

“Si haces mantenciones, reparaciones o servicios para departamentos, servicios.cl te ayuda a recibir solicitudes ordenadas, mostrar tu experiencia en video, manejar tu agenda y recibir pagos por transferencia después de realizar el trabajo.”

## Regla de comunicación

No mezclar marcas sin definir estrategia:

- Propiedades Castillo puede ser respaldo operativo o canal de confianza.
- servicios.cl debe construirse como marca independiente de servicios para departamentos.
