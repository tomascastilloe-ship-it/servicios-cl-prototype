# servicios.cl — Plan de pagos, validación de visita y contabilidad

> Documento de trabajo para diseño de producto, integración de pagos y validación contable. No reemplaza revisión de contador/abogado tributario. Debe validarse antes de operar con clientes reales.

## 1. Objetivo del flujo económico

servicios.cl funcionará como plataforma/intermediario entre clientes y prestadores de servicios para departamentos.

La lógica definida por Tomás:

1. El cliente revisa profesionales/maestros disponibles.
2. El cliente elige una opción.
3. Revisa disponibilidad/calendario.
4. Solicita match o reserva.
5. Ambas partes acuerdan día/hora de visita.
6. El maestro/profesional se presenta en la propiedad.
7. El sistema valida llegada con confirmación del maestro y del cliente.
8. Con ambas confirmaciones, se cobra a la tarjeta del cliente.
9. El servicio se considera cobrado por la visita/presentación, independiente de si luego el cliente evalúa bueno/malo el trabajo.
10. La plataforma paga al maestro por transferencia bancaria 24 a 48 horas después de realizado el servicio/visita, por control contable y operativo.

## 2. Flujo recomendado estilo Airbnb / marketplace

### Etapa A — Descubrimiento

- Cliente entra a servicios.cl.
- Filtra por comuna, categoría, precio, disponibilidad, evaluación y video.
- Revisa perfil del profesional.

### Etapa B — Solicitud / match

- Cliente selecciona día/hora disponible.
- Cliente completa ficha:
  - Nombre.
  - Dirección o referencia de propiedad.
  - Comuna.
  - Tipo de servicio.
  - Fotos/comentarios.
  - Medio de pago: tarjeta.
- Profesional acepta o propone ajuste.
- Mientras no exista match, se bloquean teléfono, WhatsApp, correo e Instagram para evitar salida de plataforma.

### Etapa C — Medio de pago seguro

Opción ideal:

- El cliente registra tarjeta o autoriza un pago antes de la visita.
- La plataforma no almacena datos sensibles de tarjeta; solo usa token seguro del proveedor de pago.
- Los datos PCI/tarjeta quedan bajo proveedor certificado: Transbank, Mercado Pago, Kushki, Stripe u otro PSP.

### Etapa D — Confirmación de llegada

Cuando llega el maestro:

1. Maestro recibe WhatsApp/mensaje automático: “¿Llegaste a la propiedad para la visita?”
2. Maestro responde: “Sí”.
3. Cliente recibe WhatsApp/mensaje automático: “¿El maestro se presentó en la propiedad?”
4. Cliente responde: “Sí”.
5. Si ambas respuestas son “Sí”, se dispara el cobro o captura del pago.

### Etapa E — Cobro

- Con doble confirmación se cobra la tarjeta.
- El cobro corresponde a la visita o servicio acordado, según la regla comercial definida.
- Si hay diferencia de monto por trabajo adicional, debe existir aceptación expresa del cliente antes de cobrar extra.

### Etapa F — Pago al prestador

- La plataforma espera 24 a 48 horas después de la visita/servicio.
- Se revisa que no exista incidencia crítica.
- Se paga por transferencia bancaria al prestador.
- Se registra comprobante de transferencia.

## 3. Confirmación vía WhatsApp

Para automatizar WhatsApp de manera formal se recomienda usar:

- WhatsApp Business Platform / Meta Cloud API.
- Twilio WhatsApp.
- MessageBird / Bird.
- Zenvia u otro proveedor compatible.

No se recomienda operar con WhatsApp personal ni automatizaciones informales, porque pueden bloquear el número.

### Mensajes sugeridos

#### Al maestro

“Hola [Nombre], tienes una visita agendada por servicios.cl en [comuna/dirección parcial] a las [hora]. Cuando estés en la propiedad responde **SI LLEGUE** para confirmar tu llegada.”

#### Al cliente

“Hola [Nombre], servicios.cl necesita confirmar la llegada del profesional [Nombre]. ¿El profesional ya se presentó en la propiedad? Responde **SI** para confirmar.”

#### Al confirmar ambos

“Confirmación recibida. Se activará el cobro de la visita/servicio según las condiciones aceptadas en servicios.cl.”

## 4. Integraciones de pago a evaluar

### Opción 1 — Transbank

Productos relevantes:

- Webpay Plus: pago con tarjeta en Chile.
- Oneclick / Oneclick Mall: pagos con tarjeta guardada/tokenizada para futuros cobros.

Ventajas:

- Marca muy conocida en Chile.
- Alta confianza local.
- Buen reconocimiento por clientes chilenos.
- Útil si el foco inicial es Chile.

Puntos a validar:

- Si permite autorización y captura posterior en el flujo exacto que necesitamos.
- Si Oneclick Mall permite lógica tipo marketplace con varios prestadores.
- Cómo manejar tokenización de tarjeta y cargos posteriores.
- Comisiones, abonos, conciliación y tiempos de liquidación.

Uso probable en servicios.cl:

- MVP inicial: Webpay Plus para pago puntual de una reserva.
- Fase 2: Oneclick para guardar tarjeta y cobrar/capturar cuando se confirme llegada.

### Opción 2 — Mercado Pago

Productos relevantes:

- Checkout API.
- Checkout Pro.
- Split de pagos / marketplace, según disponibilidad y aprobación.

Ventajas:

- Integración relativamente rápida.
- Buen manejo de pagos online.
- Posible lógica de marketplace/split payments.
- Experiencia conocida por usuarios.

Puntos a validar:

- Disponibilidad exacta de split payments para Chile.
- Comisiones.
- Si permite retención/autorización y captura posterior como se requiere.
- Cómo funciona la liberación de fondos y retiro.

Uso probable en servicios.cl:

- Buen candidato para MVP si permite tokenización/cobro simple y reportes.
- Evaluar split si los prestadores tendrán cuentas propias o si la plataforma paga después manualmente por transferencia.

### Opción 3 — Kushki

Productos relevantes:

- Pagos con tarjeta.
- Webpay Plus.
- Oneclick.
- Flujos de autorización y captura posterior, según documentación.

Ventajas:

- Orientado a empresas y flujos más avanzados.
- Documentación menciona autorización/captura y captura posterior en productos de pago.
- Puede calzar mejor con “reservar fondos / cobrar después”.

Puntos a validar:

- Costos y requisitos comerciales.
- Onboarding de empresa.
- Soporte local en Chile.
- Complejidad técnica versus MVP.

Uso probable en servicios.cl:

- Muy buen candidato para fase avanzada si necesitamos autorización/captura real y control de cobros.

### Opción 4 — Stripe

Productos relevantes:

- PaymentIntents con manual capture/autorización y captura.
- Stripe Connect para marketplaces.

Ventajas:

- Muy robusto técnicamente.
- Excelente para marketplaces internacionales.
- Buen soporte para autorizar primero y capturar después.

Puntos a validar:

- Disponibilidad contractual y operativa para empresa chilena.
- Moneda, bancos, impuestos y payouts en Chile.
- Requisitos de Stripe Connect para prestadores locales.

Uso probable en servicios.cl:

- Ideal técnicamente si está disponible y aprobado para Chile, pero no asumir sin validación comercial.

### Opción 5 — Khipu

Productos relevantes:

- Pagos vía transferencia bancaria.

Ventajas:

- Útil para transferencias y conciliación.
- Menores costos en algunos casos.

Puntos a validar:

- No resuelve por sí solo el requerimiento de tarjeta de crédito.
- Puede servir como alternativa secundaria, no como medio principal si la regla es tarjeta.

## 5. Recomendación para MVP

### MVP recomendado

Para partir rápido y seguro:

1. Usar proveedor local conocido: Transbank Webpay Plus o Mercado Pago Checkout.
2. Cobrar una reserva/visita dentro de la plataforma.
3. No guardar tarjeta inicialmente si complica el lanzamiento.
4. Validar manualmente o semi-automáticamente llegada con WhatsApp.
5. Pagar al maestro manualmente por transferencia 24 a 48 horas después.
6. Registrar todo en base de datos:
   - solicitud,
   - match,
   - aceptación,
   - llegada maestro,
   - confirmación cliente,
   - pago cliente,
   - pago maestro,
   - comprobante.

### Fase 2 recomendada

Cuando el flujo ya esté probado:

1. Tokenizar tarjeta / guardar medio de pago.
2. Implementar autorización y captura posterior.
3. Automatizar WhatsApp Business API.
4. Automatizar conciliación bancaria y pagos masivos.
5. Evaluar split payments real o subcuentas de prestadores.

## 6. Contabilidad y tributación — puntos a validar

Debe validarlo un contador chileno antes de lanzar.

### Pregunta clave

¿servicios.cl vende el servicio completo al cliente y luego subcontrata/paga al maestro, o servicios.cl solo intermedia y cobra una comisión?

Esto cambia:

- Quién emite boleta/factura al cliente.
- Si la plataforma emite documento por total o solo por comisión.
- Si el maestro emite boleta de honorarios a la plataforma o al cliente.
- Tratamiento de IVA, honorarios y retenciones.
- Registro contable de fondos recibidos por cuenta de terceros.

### Modelo A — Plataforma como vendedora del servicio

- Cliente paga a servicios.cl.
- servicios.cl emite boleta/factura al cliente por el servicio.
- servicios.cl paga al maestro como proveedor/subcontratista.
- Maestro emite boleta/factura a servicios.cl.

Ventaja:

- Experiencia simple para cliente.
- Mayor control de calidad y pago.

Riesgo/punto a revisar:

- Mayor responsabilidad tributaria y operativa sobre el servicio completo.

### Modelo B — Plataforma como intermediaria/comisionista

- Cliente paga en plataforma.
- Parte del pago corresponde al maestro.
- Plataforma cobra comisión.
- Maestro podría emitir documento tributario por su servicio.
- Plataforma emite documento por comisión/intermediación.

Ventaja:

- Más parecido a marketplace.

Riesgo/punto a revisar:

- Más complejo de explicar al cliente y conciliar.
- Hay que definir bien documentación tributaria y responsabilidades.

## 7. Decisión inicial sugerida

Para el piloto del primer maestro:

- No implementar split payments todavía.
- Cobrar al cliente a la plataforma.
- Registrar pago y visita.
- Pagar al maestro por transferencia manual 24–48 horas después.
- Definir con contador si el documento tributario inicial será:
  - boleta/factura de servicios.cl al cliente por total, y documento del maestro a servicios.cl; o
  - documento del maestro más comisión de plataforma.

## 8. Datos que debe pedir la ficha del prestador

- Nombre completo.
- RUT.
- Teléfono.
- Correo.
- Dirección/comuna base.
- Servicios ofrecidos.
- Precios base.
- Disponibilidad.
- Video de presentación.
- Fotos de trabajos.
- Banco.
- Tipo de cuenta.
- Número de cuenta.
- Titular de cuenta.
- RUT titular.
- Aceptación de reglas de plataforma.
- Aceptación de pago por transferencia 24–48 horas después.
- Aceptación de no cerrar por fuera.

## 9. Datos que debe pedir la ficha del cliente

- Nombre.
- Teléfono.
- Correo.
- Dirección de servicio.
- Comuna.
- Departamento / referencia.
- Servicio requerido.
- Fotos opcionales.
- Fecha/hora solicitada.
- Aceptación de reglas de pago.
- Aceptación de que el cobro se realizará al confirmar llegada del maestro.
- Tarjeta mediante proveedor de pago seguro.

## 10. Riesgos y controles

### Riesgo: maestro dice que llegó, cliente dice que no

Control:

- Geolocalización opcional del maestro.
- Foto de llegada opcional.
- Registro de hora.
- Soporte manual.
- No cobrar automáticamente si no hay doble confirmación.

### Riesgo: cliente confirma por error

Control:

- Mensaje claro antes de confirmar.
- Botón o respuesta explícita: “Sí, el profesional llegó”.
- Historial auditable.

### Riesgo: pago fuera de plataforma

Control:

- Bloqueo de teléfonos y datos antes del match.
- Reglas aceptadas por prestador.
- Penalización o baja de perfil.
- Incentivar pago protegido.

### Riesgo: contracargo / desconocimiento de compra

Control:

- Confirmación cliente + profesional.
- Registro de IP/device si aplica.
- Logs de chat.
- Evidencia de llegada.
- Términos y condiciones claros.

## 11. Backlog técnico para desarrollo

### Prioridad 1 — MVP

- Crear tabla de usuarios/clientes.
- Crear tabla de prestadores.
- Crear tabla de servicios.
- Crear tabla de reservas.
- Estados de reserva:
  - solicitada,
  - aceptada,
  - agendada,
  - maestro_llego,
  - cliente_confirmo_llegada,
  - cobro_pendiente,
  - pagada,
  - servicio_realizado,
  - pago_maestro_pendiente,
  - pago_maestro_realizado,
  - cancelada,
  - disputa.
- Integrar pago inicial con Transbank o Mercado Pago.
- Guardar referencia de transacción.
- Dashboard interno de pagos pendientes a maestros.

### Prioridad 2 — WhatsApp

- Definir proveedor WhatsApp Business API.
- Plantillas de mensajes.
- Webhook para leer respuestas.
- Confirmación de llegada por maestro y cliente.
- Panel de excepciones.

### Prioridad 3 — Pago avanzado

- Evaluar tokenización de tarjeta.
- Evaluar autorización/captura posterior.
- Evaluar split payments.
- Automatizar transferencias a maestros.
- Conciliación contable.

## 12. Próxima decisión necesaria

Antes de programar pagos reales hay que decidir:

1. ¿Partimos MVP con Transbank Webpay Plus o Mercado Pago?
2. ¿El cliente paga una visita base fija o un monto variable confirmado por el maestro?
3. ¿servicios.cl emitirá documento tributario por el total o solo comisión?
4. ¿El primer piloto será manual/semi-manual o 100% automático?

Recomendación: partir con MVP semi-manual, pago seguro online y transferencia manual al maestro, mientras contador define el modelo tributario definitivo.
