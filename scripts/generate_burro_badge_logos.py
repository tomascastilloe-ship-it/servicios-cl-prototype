from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "logo-sello-burro"
LOGOS = OUT / "logos"
LOGOS.mkdir(parents=True, exist_ok=True)

palettes = [
    {"name":"azul clásico", "navy":"#0c2a4d", "navy2":"#163f6b", "paper":"#f8fbff", "accent":"#e45b2d", "muted":"#7d91a7"},
    {"name":"azul noche", "navy":"#071d36", "navy2":"#0f3158", "paper":"#f7faf6", "accent":"#d6a04f", "muted":"#8493a0"},
    {"name":"verde confianza", "navy":"#163b31", "navy2":"#2f7d5a", "paper":"#fbfff8", "accent":"#e45b2d", "muted":"#7e998b"},
    {"name":"café premium", "navy":"#241a14", "navy2":"#5b3928", "paper":"#fff8ef", "accent":"#e45b2d", "muted":"#9c826c"},
    {"name":"grafito", "navy":"#111827", "navy2":"#374151", "paper":"#f9fafb", "accent":"#e45b2d", "muted":"#8d99a6"},
]

styles = [
    "clásico", "montaña", "estrella", "premium", "simple", "doble aro", "escudo", "vintage", "app", "fuerte",
    "amable", "profesional", "barrio", "cordillera", "limpio", "redondo", "sello seco", "confiable", "maestro", "rápido",
    "casa", "puerta", "llave", "edificio", "vecino", "chile", "oficio", "seguro", "reserva", "familia",
    "minimal", "lineal", "moderno", "robusto", "premium azul", "premium café", "verde", "nocturno", "noble", "urbano",
    "frontal", "lateral", "sonriente", "orejas grandes", "cordillera 2", "escudo 2", "insignia", "finalista A", "finalista B", "finalista C",
]


def donkey_head(i, navy, paper, accent, muted):
    # Variations keep the animal recognisable: long ears, mane, muzzle and eye.
    shift = (i % 5) - 2
    ear_extra = (i % 4) * 4
    mane = "".join(
        f'<path d="M{214 + k*7} {126 + k*7} l{-14 - (k%2)*4} {8 + k*2} l{12 + (k%2)*4} {7}" fill="{navy}" />'
        for k in range(7)
    )
    if i % 3 == 0:
        head = f'''
        <path d="M205 119 C194 154 199 214 235 241 C269 266 333 246 339 196 C345 145 301 105 256 111 C234 114 216 106 205 119Z" fill="{navy}"/>
        <path d="M235 224 C265 205 313 207 337 229 C327 253 288 270 251 252 C242 248 235 240 235 224Z" fill="{paper}"/>
        '''
    elif i % 3 == 1:
        head = f'''
        <path d="M208 113 C195 151 202 215 244 245 C282 272 342 239 339 190 C336 140 297 101 250 113 C232 117 217 103 208 113Z" fill="{navy}"/>
        <path d="M246 224 C275 202 321 207 339 231 C326 255 287 267 253 249 C246 245 243 236 246 224Z" fill="{paper}"/>
        '''
    else:
        head = f'''
        <path d="M206 116 C193 159 203 221 246 247 C283 270 334 241 335 195 C336 142 295 107 255 112 C235 114 216 103 206 116Z" fill="{navy}"/>
        <path d="M242 225 C270 205 313 207 335 229 C323 252 287 266 255 251 C246 247 241 238 242 225Z" fill="{paper}"/>
        '''
    return f'''
    <g transform="translate({shift},0)">
      <path d="M221 124 C199 78 210 45 233 31 C249 70 248 104 232 134 Z" fill="{paper}" stroke="{navy}" stroke-width="10" stroke-linejoin="round"/>
      <path d="M230 111 C219 78 221 59 232 48" fill="none" stroke="{navy}" stroke-width="5" stroke-linecap="round" opacity=".9"/>
      <path d="M292 119 C315 74 306 41 281 28 C263 67 264 103 280 134 Z" fill="{paper}" stroke="{navy}" stroke-width="10" stroke-linejoin="round"/>
      <path d="M282 109 C294 75 292 57 282 46" fill="none" stroke="{navy}" stroke-width="5" stroke-linecap="round" opacity=".9"/>
      {head}
      {mane}
      <path d="M241 170 C258 152 279 152 293 170" fill="none" stroke="{paper}" stroke-width="7" stroke-linecap="round"/>
      <path d="M258 176 C264 169 273 169 280 176" fill="none" stroke="{paper}" stroke-width="5" stroke-linecap="round" opacity=".85"/>
      <ellipse cx="292" cy="184" rx="10" ry="13" fill="{paper}" opacity=".9"/>
      <circle cx="294" cy="182" r="4" fill="{navy}"/>
      <circle cx="309" cy="226" r="4" fill="{navy}"/>
      <path d="M286 239 Q306 252 326 237" fill="none" stroke="{navy}" stroke-width="5" stroke-linecap="round"/>
    </g>
    '''


def mountains(i, navy, muted):
    if i % 4 == 0:
        return f'''
        <path d="M88 198 L137 142 L176 198" fill="none" stroke="{muted}" stroke-width="9" stroke-linejoin="round"/>
        <path d="M334 201 L386 145 L437 201" fill="none" stroke="{muted}" stroke-width="9" stroke-linejoin="round"/>
        <path d="M111 177 H158 M356 178 H421" stroke="{muted}" stroke-width="6" stroke-linecap="round" opacity=".55"/>
        '''
    if i % 4 == 1:
        return f'''
        <path d="M82 202 L128 158 L152 181 L176 151 L215 202" fill="{muted}" opacity=".22"/>
        <path d="M331 202 L379 154 L405 182 L425 162 L462 202" fill="{muted}" opacity=".22"/>
        <path d="M82 202 L128 158 L152 181 L176 151 L215 202" fill="none" stroke="{muted}" stroke-width="6" stroke-linejoin="round"/>
        <path d="M331 202 L379 154 L405 182 L425 162 L462 202" fill="none" stroke="{muted}" stroke-width="6" stroke-linejoin="round"/>
        '''
    if i % 4 == 2:
        return f'''
        <path d="M82 178 H154 M95 200 H191 M350 178 H437 M329 201 H452" stroke="{muted}" stroke-width="6" stroke-linecap="round" opacity=".55"/>
        '''
    return f'''
        <path d="M92 198 L151 146 L206 198" fill="none" stroke="{navy}" stroke-width="5" stroke-linejoin="round" opacity=".55"/>
        <path d="M338 198 L388 150 L448 198" fill="none" stroke="{navy}" stroke-width="5" stroke-linejoin="round" opacity=".55"/>
        '''


def make_svg(i):
    p = palettes[(i - 1) % len(palettes)]
    navy, navy2, paper, accent, muted = p["navy"], p["navy2"], p["paper"], p["accent"], p["muted"]
    style = styles[i-1]
    ring_w = 11 + (i % 3) * 2
    banner_y = 236 + (i % 2) * 4
    top_text = "" if i % 5 else f'<text x="260" y="86" text-anchor="middle" font-family="Arial" font-size="18" font-weight="900" fill="{muted}" letter-spacing="3">SERVICIOS</text>'
    star = "★" if i % 6 != 0 else "✓"
    side_mark = ""
    if i % 7 == 0:
        side_mark = f'<circle cx="122" cy="280" r="13" fill="{accent}"/><circle cx="398" cy="280" r="13" fill="{accent}"/>'
    elif i % 7 == 1:
        side_mark = f'<path d="M112 280 H174 M346 280 H408" stroke="{accent}" stroke-width="8" stroke-linecap="round"/>'
    elif i % 7 == 2:
        side_mark = f'<text x="126" y="286" text-anchor="middle" font-family="Arial" font-size="18" font-weight="900" fill="{accent}">CL</text><text x="394" y="286" text-anchor="middle" font-family="Arial" font-size="18" font-weight="900" fill="{accent}">24</text>'

    shield_tail = "" if i % 4 else f'<path d="M190 318 L260 346 L330 318" fill="{navy}" stroke="{paper}" stroke-width="5"/>'
    outer = f'<circle cx="260" cy="180" r="151" fill="{paper}" stroke="{navy}" stroke-width="{ring_w}"/>'
    if i % 4 == 0:
        outer = f'<path d="M260 28 C337 28 464 76 464 189 C464 267 362 316 260 344 C158 316 56 267 56 189 C56 76 183 28 260 28Z" fill="{paper}" stroke="{navy}" stroke-width="{ring_w}"/>'
    elif i % 4 == 2:
        outer = f'<circle cx="260" cy="180" r="153" fill="{paper}" stroke="{navy}" stroke-width="{ring_w}"/><circle cx="260" cy="180" r="130" fill="none" stroke="{navy2}" stroke-width="4" opacity=".8"/>'

    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="640" height="640" viewBox="0 0 520 360" role="img" aria-labelledby="title desc">
<title id="title">Logo burro.cl sello {i:02d}</title>
<desc id="desc">Logo estilo sello con burro animal al centro, cordillera y cinta burro.cl. Variante {style}.</desc>
<rect width="520" height="360" rx="22" fill="#ffffff"/>
<g>
  {outer}
  {shield_tail}
  {mountains(i, navy, muted)}
  {top_text}
  {donkey_head(i, navy, paper, accent, muted)}
  <path d="M69 {banner_y-20} H451 L474 {banner_y+24} H46 Z" fill="{navy}" stroke="{paper}" stroke-width="6" stroke-linejoin="round"/>
  <path d="M73 {banner_y-20} H447" stroke="{navy2}" stroke-width="4" opacity=".55"/>
  <text x="260" y="{banner_y+18}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="58" font-weight="900" fill="white" letter-spacing="-2.5">burro.cl</text>
  <circle cx="260" cy="302" r="20" fill="{navy}"/>
  <text x="260" y="314" text-anchor="middle" font-family="Arial" font-size="30" font-weight="900" fill="{paper}">{star}</text>
  {side_mark}
</g>
</svg>'''


def main():
    for i in range(1, 51):
        (LOGOS / f"burro-sello-logo-{i:02d}.svg").write_text(make_svg(i), encoding="utf-8")

    cards = []
    for i, style in enumerate(styles, 1):
        cards.append(f'''
      <article class="card">
        <div class="logo-wrap"><img src="/logo-sello-burro/logos/burro-sello-logo-{i:02d}.svg" alt="Logo sello {i:02d}: Burro {style}"></div>
        <div class="meta"><strong>{i:02d}. Sello {style}</strong><span>burro al centro</span></div>
        <a href="/logo-sello-burro/logos/burro-sello-logo-{i:02d}.svg" download>Descargar SVG</a>
      </article>''')

    html = f'''<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>50 logos sello burro.cl</title>
  <style>
    * {{ box-sizing: border-box; }}
    body {{ margin:0; font-family: Arial, Helvetica, sans-serif; background:#f7fafc; color:#0c2a4d; }}
    header {{ padding: 52px 28px 28px; max-width: 1180px; margin:auto; }}
    .eyebrow {{ color:#e45b2d; font-weight:900; letter-spacing:.18em; text-transform:uppercase; font-size:13px; }}
    h1 {{ margin:12px 0 12px; font-size:clamp(36px,6vw,76px); letter-spacing:-.06em; line-height:.95; }}
    p {{ max-width:800px; color:#52677d; font-size:20px; line-height:1.6; }}
    main {{ max-width:1180px; margin:auto; padding:20px 28px 60px; display:grid; grid-template-columns:repeat(auto-fit,minmax(270px,1fr)); gap:24px; }}
    .card {{ background:white; border:1px solid #d8e2ec; border-radius:28px; overflow:hidden; box-shadow:0 18px 45px rgba(12,42,77,.12); }}
    .logo-wrap {{ background:#ffffff; padding:12px; }}
    img {{ display:block; width:100%; height:auto; border-radius:20px; }}
    .meta {{ display:flex; justify-content:space-between; gap:12px; padding:18px 18px 10px; align-items:flex-start; }}
    strong {{ font-size:16px; }}
    span {{ color:#6b7f95; font-size:12px; font-weight:900; text-transform:uppercase; letter-spacing:.12em; }}
    a {{ display:block; margin:0 18px 18px; border-radius:999px; background:#0c2a4d; color:white; padding:12px 16px; text-align:center; text-decoration:none; font-weight:900; }}
    footer {{ max-width:1180px; margin:auto; padding:0 28px 52px; color:#52677d; font-weight:800; }}
  </style>
</head>
<body>
  <header>
    <div class="eyebrow">Exploración sello · tercera ronda</div>
    <h1>50 logos tipo sello, como tu referencia</h1>
    <p>Ahora la dirección es clara: burro animal protagonista, círculo/sello, cinta grande con burro.cl, estilo fuerte y recordable.</p>
  </header>
  <main>{''.join(cards)}
  </main>
  <footer>Recomendación inicial: mirar 01, 02, 06, 08, 12, 18, 24, 34, 42, 48 y 50.</footer>
</body>
</html>'''
    (OUT / "index.html").write_text(html, encoding="utf-8")
    print(f"Generados 50 logos sello en {OUT}")

if __name__ == "__main__":
    main()
