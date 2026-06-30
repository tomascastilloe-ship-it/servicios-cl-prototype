from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "logo-exploracion-burro-perfil"
LOGOS = OUT / "logos"
LOGOS.mkdir(parents=True, exist_ok=True)

palettes = [
    ("#fff8ef", "#2b2018", "#7d6758", "#e45b2d", "#f4eadb"),
    ("#fffaf2", "#241a14", "#8a5b37", "#2f7d5a", "#efe1d0"),
    ("#f8efe2", "#1f1712", "#b86b3a", "#e45b2d", "#fff3e3"),
    ("#f5eee5", "#2d241d", "#5f5148", "#c85d2a", "#ead8c2"),
    ("#ffffff", "#231814", "#6f6259", "#d96a35", "#fff0df"),
]

styles = [
    "realista limpio", "silueta café", "línea fina", "sello redondo", "app moderno",
    "premium", "mascota seria", "mascota amable", "perfil minimal", "perfil fuerte",
    "cuerpo completo", "burro rápido", "burro hogar", "burro confianza", "burro vecino",
    "burro pro", "burro clásico", "burro urbano", "burro elegante", "burro simple",
    "burro de oficio", "burro con sombra", "burro badge", "burro escudo", "burro circular",
    "burro infantil", "burro robusto", "burro delgado", "burro artesanal", "burro marca",
    "burro lineal", "burro sólido", "burro con puerta", "burro con casa", "burro con check",
    "burro con estrella", "burro con llave", "burro con herramienta", "burro terraza", "burro barrio",
    "burro marketplace", "burro servicio", "burro calmado", "burro confiable", "burro chileno",
    "burro sello 2", "burro premium 2", "burro final A", "burro final B", "burro final C",
]


def background(i, bg, ink, accent, warm):
    mode = (i - 1) % 8
    if mode == 0:
        return f'<rect x="24" y="24" width="472" height="332" rx="38" fill="{bg}" stroke="#ead8c2" stroke-width="4"/>'
    if mode == 1:
        return f'<circle cx="260" cy="165" r="132" fill="{warm}" stroke="{accent}" stroke-width="8"/>'
    if mode == 2:
        return f'<rect x="46" y="54" width="428" height="236" rx="118" fill="{bg}" stroke="{accent}" stroke-width="7"/>'
    if mode == 3:
        return f'<path d="M260 34 L456 98 L424 302 H96 L64 98 Z" fill="{bg}" stroke="{accent}" stroke-width="7"/>'
    if mode == 4:
        return f'<rect x="58" y="52" width="404" height="238" rx="62" fill="{warm}"/><path d="M100 274 H420" stroke="{accent}" stroke-width="10" stroke-linecap="round"/>'
    if mode == 5:
        return f'<rect x="34" y="34" width="452" height="292" rx="22" fill="white" stroke="{ink}" stroke-width="5"/><rect x="54" y="54" width="412" height="252" rx="18" fill="{bg}" stroke="#ead8c2" stroke-width="3"/>'
    if mode == 6:
        return f'<circle cx="260" cy="160" r="144" fill="white" stroke="{ink}" stroke-width="6"/><circle cx="260" cy="160" r="124" fill="{bg}" stroke="{accent}" stroke-width="4"/>'
    return f'<rect x="28" y="28" width="464" height="320" rx="88" fill="{bg}" stroke="{accent}" stroke-width="6"/>'


def side_donkey(i, ink, coat, accent, warm):
    idx = i - 1
    scale = 1 + ((idx % 5) - 2) * 0.025
    body_y = 180 + (idx % 3) * 2
    body_fill = coat if idx % 4 != 2 else "none"
    stroke_w = 8 if idx % 4 != 2 else 11
    outline = ink
    muzzle = warm
    mane = accent if idx % 2 == 0 else ink
    # More realistic full side profile: horizontal torso, neck/head to right, long ears, thin legs, small tail.
    fill_attr = f'fill="{body_fill}"' if body_fill != "none" else 'fill="none"'
    opacity = ".98" if body_fill != "none" else "1"
    body = f'''
    <g transform="translate(260 178) scale({scale}) translate(-260 -178)" opacity="{opacity}">
      <path d="M118 {body_y} C126 144, 160 126, 220 124 C286 122, 327 139, 340 174 C354 211, 316 230, 242 229 C174 228, 122 214, 118 {body_y}Z" {fill_attr} stroke="{outline}" stroke-width="{stroke_w}" stroke-linejoin="round"/>
      <path d="M333 150 C354 116, 380 91, 408 100 C431 108, 436 137, 423 160 C411 181, 383 190, 353 178" {fill_attr} stroke="{outline}" stroke-width="{stroke_w}" stroke-linejoin="round"/>
      <path d="M396 104 L382 44 L414 92" fill="{coat if body_fill != 'none' else 'none'}" stroke="{outline}" stroke-width="{max(6, stroke_w-1)}" stroke-linejoin="round"/>
      <path d="M419 110 L444 55 L439 120" fill="{coat if body_fill != 'none' else 'none'}" stroke="{outline}" stroke-width="{max(6, stroke_w-1)}" stroke-linejoin="round"/>
      <path d="M405 148 C421 145, 438 145, 448 153 C438 170, 418 174, 400 165" fill="{muzzle}" stroke="{outline}" stroke-width="{max(5, stroke_w-2)}" stroke-linejoin="round"/>
      <circle cx="410" cy="122" r="5.5" fill="{outline}"/>
      <path d="M416 158 Q427 164 440 158" fill="none" stroke="{outline}" stroke-width="4" stroke-linecap="round"/>
      <path d="M356 121 C368 113, 381 108, 393 105" fill="none" stroke="{mane}" stroke-width="7" stroke-linecap="round"/>
      <path d="M124 172 C92 157, 77 136, 69 113" fill="none" stroke="{outline}" stroke-width="{max(6, stroke_w-1)}" stroke-linecap="round"/>
      <path d="M68 113 Q54 106 55 92" fill="none" stroke="{accent}" stroke-width="6" stroke-linecap="round"/>
      <path d="M156 215 L144 292" stroke="{outline}" stroke-width="{max(8, stroke_w)}" stroke-linecap="round"/>
      <path d="M206 225 L200 294" stroke="{outline}" stroke-width="{max(8, stroke_w)}" stroke-linecap="round"/>
      <path d="M282 225 L294 294" stroke="{outline}" stroke-width="{max(8, stroke_w)}" stroke-linecap="round"/>
      <path d="M326 208 L344 288" stroke="{outline}" stroke-width="{max(8, stroke_w)}" stroke-linecap="round"/>
      <path d="M132 294 H158 M187 296 H211 M281 296 H307 M333 290 H358" stroke="{outline}" stroke-width="6" stroke-linecap="round"/>
      <path d="M172 132 C202 152, 274 154, 323 141" fill="none" stroke="white" stroke-width="5" opacity=".35" stroke-linecap="round"/>
    </g>
    '''
    if idx % 6 == 0:
        body += f'<path d="M92 304 H428" stroke="{accent}" stroke-width="8" stroke-linecap="round" opacity=".75"/>'
    if idx % 7 == 0:
        body += f'<text x="92" y="86" font-family="Arial" font-size="34" font-weight="900" fill="{accent}">✓</text>'
    if idx % 9 == 0:
        body += f'<path d="M128 94 L260 52 L392 94" fill="none" stroke="{accent}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'
    return body


def make_svg(i):
    bg, ink, coat, accent, warm = palettes[(i - 1) % len(palettes)]
    donkey = side_donkey(i, ink, coat, accent, warm)
    bg_svg = background(i, bg, ink, accent, warm)
    style = styles[i - 1]
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="560" height="420" viewBox="0 0 560 420" role="img" aria-labelledby="title desc">
  <title id="title">Logo {i:02d}: burro.cl {style}</title>
  <desc id="desc">Logo para burro.cl con un burro realista de perfil, cuerpo completo, mirando a la derecha.</desc>
  <rect width="560" height="420" rx="34" fill="#fffaf2"/>
  <g transform="translate(20 8)">
    {bg_svg}
    {donkey}
    <text x="260" y="348" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="44" font-weight="900" fill="{ink}" letter-spacing="-1.6">burro.cl</text>
    <text x="260" y="374" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="900" fill="{accent}" letter-spacing="2.4">{style.upper()}</text>
  </g>
</svg>'''


def main():
    for i in range(1, 51):
        (LOGOS / f"burro-perfil-logo-{i:02d}.svg").write_text(make_svg(i), encoding="utf-8")

    cards = []
    for i, style in enumerate(styles, 1):
        cards.append(f'''
      <article class="card">
        <div class="logo-wrap"><img src="/logo-exploracion-burro-perfil/logos/burro-perfil-logo-{i:02d}.svg" alt="Logo perfil {i:02d}: Burro {style}"></div>
        <div class="meta"><strong>{i:02d}. {style}</strong><span>burro de perfil</span></div>
        <a href="/logo-exploracion-burro-perfil/logos/burro-perfil-logo-{i:02d}.svg" download>Descargar SVG</a>
      </article>''')

    html = f'''<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>50 logos burro de perfil para burro.cl</title>
  <style>
    * {{ box-sizing: border-box; }}
    body {{ margin:0; font-family: Arial, Helvetica, sans-serif; background:#fff8ef; color:#241a14; }}
    header {{ padding: 52px 28px 28px; max-width: 1180px; margin:auto; }}
    .eyebrow {{ color:#e45b2d; font-weight:900; letter-spacing:.18em; text-transform:uppercase; font-size:13px; }}
    h1 {{ margin:12px 0 12px; font-size:clamp(34px,6vw,72px); letter-spacing:-.06em; line-height:.95; }}
    p {{ max-width:800px; color:#75604d; font-size:20px; line-height:1.6; }}
    main {{ max-width:1180px; margin:auto; padding:20px 28px 60px; display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:24px; }}
    .card {{ background:white; border:1px solid #ead8c2; border-radius:28px; overflow:hidden; box-shadow:0 18px 45px rgba(91,57,40,.10); }}
    .logo-wrap {{ background:#fffaf2; padding:10px; }}
    img {{ display:block; width:100%; height:auto; border-radius:20px; }}
    .meta {{ display:flex; justify-content:space-between; gap:12px; padding:18px 18px 10px; align-items:flex-start; }}
    strong {{ font-size:16px; }}
    span {{ color:#8a5b37; font-size:12px; font-weight:900; text-transform:uppercase; letter-spacing:.12em; }}
    a {{ display:block; margin:0 18px 18px; border-radius:999px; background:#241a14; color:white; padding:12px 16px; text-align:center; text-decoration:none; font-weight:900; }}
    footer {{ max-width:1180px; margin:auto; padding:0 28px 52px; color:#8a5b37; font-weight:800; }}
  </style>
</head>
<body>
  <header>
    <div class="eyebrow">Exploración de marca · tercera ronda</div>
    <h1>50 logos con burro real de perfil</h1>
    <p>Basado en tu referencia: burro completo de lado, mirando a la derecha, orejas largas, patas delgadas y cuerpo al centro. Mantengo colores tierra para que siga pareciendo marca seria y recordable.</p>
  </header>
  <main>{''.join(cards)}
  </main>
  <footer>Si una opción se acerca, dime el número y hago una ronda final refinada con 10 versiones más limpias.</footer>
</body>
</html>'''
    (OUT / "index.html").write_text(html, encoding="utf-8")
    print(f"Generados 50 logos de burro perfil en {OUT}")

if __name__ == "__main__":
    main()
