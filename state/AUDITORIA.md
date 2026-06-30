# AUDITORÍA

## Resultado

RESULTADO: PASA

## Qué se revisó

- `state/META_ACTUAL.md`: meta DAME acotada a integrar el self-test negativo ya existente de `scripts/verify-content-security-policy.py` en el smoke MVP.
- Claude Code está instalado (`2.1.177`) y fue invocado como maker con `--print`, pero terminó con `Error: Reached max turns (1)` sin completar la edición; Hermes dejó constancia de “Claude limitado” y ejecutó el cambio acotado directo.
- `scripts/verify-mvp-smoke.sh`: ahora ejecuta `BURRO_VERIFY_CSP_SELFTEST=1 python3 scripts/verify-content-security-policy.py` justo después del chequeo normal “Content-Security-Policy”.
- No se modificaron pantallas HTML, archivos de configuración con claves, Supabase/n8n real, WhatsApp, pagos, producción ni credenciales.

## Criterios de aceptación

- [x] `scripts/verify-mvp-smoke.sh` ejecuta `BURRO_VERIFY_CSP_SELFTEST=1 python3 scripts/verify-content-security-policy.py` inmediatamente después del chequeo normal “Content-Security-Policy”.
- [x] No se cambiaron pantallas HTML, configuración con claves, Supabase/n8n real, WhatsApp, pagos, producción ni credenciales.
- [x] Pasaron checker normal de CSP, self-test negativo, `bash -n scripts/verify-mvp-smoke.sh`, smoke completo y `git diff --check`.

## Pruebas ejecutadas

```bash
python3 scripts/verify-content-security-policy.py
BURRO_VERIFY_CSP_SELFTEST=1 python3 scripts/verify-content-security-policy.py
bash -n scripts/verify-mvp-smoke.sh
git diff --check
scripts/verify-mvp-smoke.sh
```

Resultado real:

```text
python3 scripts/verify-content-security-policy.py EXIT:0
OK Content-Security-Policy: 9 pantallas HTML con CSP estática mínima

BURRO_VERIFY_CSP_SELFTEST=1 python3 scripts/verify-content-security-policy.py EXIT:0
OK self-test CSP: detecta ausencia, duplicado, fuera de head, directiva faltante (incluye font-src, manifest-src, frame-src, worker-src y child-src), directivas 'none' mezcladas, unsafe-eval y wildcard

bash -n scripts/verify-mvp-smoke.sh EXIT:0

git diff --check EXIT:0

scripts/verify-mvp-smoke.sh EXIT:0
Bloque incluido: Self-test Content-Security-Policy (negativo) → OK self-test CSP...
OK smoke MVP (24 harnesses Node)
```

## Correcciones requeridas

Ninguna para esta meta.

## Nota para ESTADO.md

Registrar que el smoke MVP ahora protege también el checker de Content-Security-Policy con su self-test negativo, sin tocar UI, credenciales ni servicios reales.
