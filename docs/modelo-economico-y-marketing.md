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

## Regla de comunicación interna tipo Airbnb

- Antes del match, la única forma de comunicación entre cliente y prestador es el chat interno de servicios.cl.
- El usuario puede hacer preguntas sobre trabajos, disponibilidad, precio estimado y experiencia del maestro, pero no puede pedir ni enviar datos de contacto.
- Se deben bloquear automáticamente teléfonos, WhatsApp, correos, Instagram, direcciones externas o cualquier intento de cerrar el negocio por fuera.
- Si se detecta un dato prohibido, el mensaje no se envía y aparece una “tarjeta amarilla” o warning:
  - “No está permitido compartir teléfonos o cerrar por fuera. Todo debe coordinarse y pagarse dentro de servicios.cl.”
- Si el usuario insiste, queda registro del intento, se escala a revisión interna y puede suspenderse o expulsarse de la plataforma.
- Los mensajes de voz son permitidos, pero deben transformarse a texto antes de llegar al chat. Ese texto pasa por el mismo filtro anti-contacto.
- Esta regla aplica a clientes y prestadores, especialmente para evitar que clientes intenten evitar el pago con tarjeta.

## Flujo operativo tipo Airbnb para servicios.cl

1. Cliente revisa servicios y profesionales.
2. Cliente revisa video, precio, reseñas y disponibilidad.
3. Cliente consulta dudas por chat interno o audio transcrito, sin compartir teléfonos ni datos externos.
4. Cliente solicita match/reserva.
5. Plataforma registra tarjeta de forma segura mediante pasarela externa certificada; servicios.cl no almacena números de tarjeta.
6. Prestador acepta horario y valor estimado.
7. Al llegar a la propiedad, la app/WhatsApp envía confirmación automática:
   - Al maestro: “¿Ya llegaste a la propiedad?”
   - Al cliente: “¿El maestro ya se presentó?”
8. Si ambos responden “sí”, se captura/cobra la tarjeta.
9. Si hay desacuerdo, queda en revisión manual/soporte.
10. La visita se cobra por presentación/visita, independiente de si luego se aprueba o no un trabajo adicional.
11. El prestador recibe transferencia bancaria 24–48 horas después.

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

## Regla de chat y comunicación tipo Airbnb

- Antes del match/pago, cliente y maestro solo pueden comunicarse por el chat interno de servicios.cl.
- No se permite compartir teléfonos, WhatsApp, correos, Instagram ni datos para cerrar por fuera.
- Si el sistema detecta un teléfono, correo o intento de contacto externo, el mensaje se bloquea y no llega al otro usuario.
- El usuario recibe una “tarjeta amarilla” o warning claro: “No está permitido cerrar por fuera. Todo debe hacerse por la plataforma”.
- Si insiste, la cuenta puede pasar a revisión, suspensión o expulsión.
- Los mensajes de voz deben convertirse a texto antes de entregarse al otro usuario, para aplicar el mismo filtro anti-contacto.
- Las dudas sobre trabajos, precios, experiencia o materiales deben resolverse dentro del chat, por texto o por audio transcrito.

## Evaluaciones posteriores

### Cliente evalúa al maestro

- Puntualidad en la visita.
- Calidad del trabajo o diagnóstico.
- Orden y limpieza del lugar donde trabajó.
- Cordialidad y capacidad humana para comunicarse.

### Maestro evalúa al cliente

- Comunicación clara con el maestro.
- Entregó acceso e información necesaria para trabajar.
- Fue razonable con horarios y condiciones.
- Permitió trabajar de forma segura y ordenada.

## Conceptos que deben aparecer en videos y campañas

- Servicio confiable para departamentos.
- Profesionales con video de presentación.
- El video puede grabarse con celular y enviarse por WhatsApp.
- El video debe ser explicado de forma simple: nombre, oficio, comuna, años de experiencia, certificados si tiene y ejemplos concretos de trabajos.
- En las fichas, usar ejemplos tipo “globitos” para que el prestador pueda explicar exactamente qué hace: enchufes, tableros, lámparas, filtraciones, baños, goteras, repisas, cortinas, puertas, pintura menor, etc.
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

## Chat interno protegido y bloqueo anti-contacto externo

- La comunicación cliente/maestro debe ocurrir dentro del chat de servicios.cl, similar al modelo de Airbnb.
- Antes del match o antes del pago no se pueden compartir teléfonos, WhatsApp, correos, Instagram, direcciones externas ni instrucciones para pagar por fuera.
- Si el sistema detecta números de teléfono, correos o frases como “págame por fuera”, el mensaje no debe llegar al destinatario.
- El usuario recibe una advertencia tipo tarjeta amarilla: “Por seguridad, no está permitido compartir datos de contacto ni coordinar pagos por fuera. Usa este chat para tus preguntas.”
- Si insiste, se puede suspender o expulsar de la plataforma.
- Si el cliente no quiere escribir, puede enviar audio. El audio debe transformarse a texto y ser revisado por el filtro antes de llegar al maestro.

## Evaluaciones posteriores al servicio

Evaluación del maestro por parte del cliente:

- Puntualidad en la visita.
- Calidad del trabajo o diagnóstico.
- Orden y limpieza del lugar.
- Cordialidad y capacidad humana para comunicarse.

Evaluación del cliente por parte del maestro:

- Comunicación clara.
- Entregó acceso e información necesaria.
- Fue razonable con horarios y condiciones.
- Permitió realizar el trabajo de manera segura y ordenada.

Estas evaluaciones deben servir para reputación, ranking, prevención de malos clientes/prestadores y soporte interno.

## Chat protegido y moderación

- La comunicación entre cliente y maestro debe ocurrir dentro de servicios.cl, igual que en plataformas tipo Airbnb.
- Antes del match está prohibido compartir teléfonos, correos, WhatsApp, Instagram u otros datos externos.
- Si el sistema detecta números o contacto externo, el mensaje se cancela antes de llegar.
- Primer intento: tarjeta amarilla / warning educativo.
- Reincidencia: suspensión o expulsión de la plataforma.
- Los mensajes de voz deben transformarse a texto para revisión automática antes de enviarse al chat.
- El texto de advertencia debe explicar: “Para proteger a ambos, toda coordinación y pago debe hacerse dentro de servicios.cl”.

## Evaluaciones

Evaluación al maestro por parte del cliente:

- Puntualidad.
- Calidad del trabajo o visita.
- Orden y limpieza del lugar.
- Cordialidad y capacidad de comunicación.

Evaluación al cliente por parte del maestro:

- Comunicación clara.
- Persona razonable y respetuosa.
- Entregó acceso, información y condiciones necesarias para trabajar.
- Permitió realizar el trabajo o visita de forma óptima.
