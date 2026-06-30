from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "logo-exploracion-animales"
LOGOS = OUT / "logos"
LOGOS.mkdir(parents=True, exist_ok=True)

palettes = [
    ("#fff8ef", "#241a14", "#e45b2d", "#b86b3a", "#2f7d5a"),
    ("#f8efe2", "#301d13", "#d96a35", "#8a5b37", "#315f46"),
    ("#fff3e3", "#1f1712", "#f08a4b", "#5b3928", "#48725d"),
    ("#f4eadb", "#2a1b14", "#c85d2a", "#a56a43", "#233f32"),
    ("#fffaf2", "#20130d", "#e45b2d", "#70472e", "#2f7d5a"),
]
styles = [
    "sello", "mascota", "línea", "geométrico", "premium", "app", "infantil", "fuerte", "amable", "minimal",
    "circular", "escudo", "puerta", "casa", "edificio", "llave", "herramienta", "video", "estrella", "check",
    "rápido", "urbano", "clásico", "moderno", "redondo", "cuadrado", "monograma", "familia", "conserje", "servicio",
    "vecino", "oficio", "calma", "confianza", "reserva", "agenda", "24h", "chile", "rústico", "elegante",
    "sombra", "sólido", "contorno", "amistoso", "profesional", "premium 2", "pictograma", "badge", "finalista A", "finalista B",
]

# Small icon sets for visual difference inside/around the centered animal.
extras = ["★", "✓", "⌂", "▣", "●", "+", "▶", "24", "CL", ""]


def shape_variant(i, bg, ink, accent, clay, green):
    idx = i - 1
    mood = idx % 10
    round_rect = 38 if idx % 3 else 80
    badge_shape = (
        f'<rect x="42" y="34" width="436" height="216" rx="{round_rect}" fill="{bg}" stroke="{clay}" stroke-width="8"/>'
        if idx % 4 != 1 else
        f'<circle cx="260" cy="142" r="112" fill="{bg}" stroke="{clay}" stroke-width="8"/>'
    )
    if idx % 4 == 2:
        badge_shape = f'<path d="M260 22 L454 86 L420 250 H100 L66 86 Z" fill="{bg}" stroke="{clay}" stroke-width="8"/>'
    if idx % 4 == 3:
        badge_shape = f'<rect x="64" y="42" width="392" height="200" rx="28" fill="{bg}" stroke="{clay}" stroke-width="8"/><path d="M86 218 Q260 276 434 218" fill="none" stroke="{accent}" stroke-width="10" stroke-linecap="round"/>'

    # Donkey proportions vary by model.
    body_rx = 76 + (idx % 4) * 7
    body_ry = 40 + (idx % 5) * 3
    head_rx = 35 + (idx % 3) * 4
    head_ry = 43 + (idx % 4) * 3
    body_y = 142 + (idx % 3) * 3
    head_x = 320 + (idx % 5) * 4
    head_y = 116 - (idx % 4) * 2

    if mood in [2, 9]:  # line / minimal variants
        animal = f'''
        <path d="M159 {body_y} C184 100, 274 100, 313 {body_y} C346 180, 255 209, 178 184 C144 174, 138 154, 159 {body_y}Z" fill="none" stroke="{ink}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M308 126 C326 72, 372 72, 388 122 C399 160, 367 186, 333 174" fill="none" stroke="{ink}" stroke-width="14" stroke-linecap="round"/>
        <path d="M332 76 L314 30 L351 63" fill="none" stroke="{ink}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M369 74 L391 29 L386 82" fill="none" stroke="{ink}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M178 178 V222 M250 186 V225 M300 174 V220" stroke="{ink}" stroke-width="12" stroke-linecap="round"/>
        <path d="M151 137 L112 108" stroke="{accent}" stroke-width="12" stroke-linecap="round"/>
        <circle cx="360" cy="124" r="5" fill="{accent}"/>
        '''
    elif mood in [3, 6]:  # geometric / playful
        animal = f'''
        <polygon points="154,{body_y} 206,96 304,106 334,{body_y} 286,190 184,186" fill="{clay}" stroke="{ink}" stroke-width="8" stroke-linejoin="round"/>
        <polygon points="314,103 361,70 398,122 379,172 327,168" fill="{accent}" stroke="{ink}" stroke-width="8" stroke-linejoin="round"/>
        <polygon points="328,71 312,22 354,58" fill="{green}" stroke="{ink}" stroke-width="7"/>
        <polygon points="365,68 392,22 389,78" fill="{green}" stroke="{ink}" stroke-width="7"/>
        <rect x="176" y="178" width="17" height="48" rx="8" fill="{ink}"/><rect x="248" y="178" width="17" height="48" rx="8" fill="{ink}"/><rect x="301" y="170" width="17" height="50" rx="8" fill="{ink}"/>
        <circle cx="363" cy="119" r="6" fill="{ink}"/><path d="M378 146 Q360 155 343 145" fill="none" stroke="{ink}" stroke-width="6" stroke-linecap="round"/>
        <path d="M154 {body_y} L114 112" stroke="{accent}" stroke-width="9" stroke-linecap="round"/>
        '''
    else:  # friendly filled mascot
        animal = f'''
        <ellipse cx="230" cy="{body_y}" rx="{body_rx}" ry="{body_ry}" fill="{clay}" stroke="{ink}" stroke-width="8"/>
        <ellipse cx="{head_x}" cy="{head_y}" rx="{head_rx}" ry="{head_ry}" fill="{accent}" stroke="{ink}" stroke-width="8" transform="rotate({-7 + (idx % 5)*3} {head_x} {head_y})"/>
        <path d="M{head_x-21} {head_y-38} L{head_x-43} {head_y-92} L{head_x-4} {head_y-55} Z" fill="{green}" stroke="{ink}" stroke-width="7" stroke-linejoin="round"/>
        <path d="M{head_x+19} {head_y-38} L{head_x+48} {head_y-91} L{head_x+45} {head_y-34} Z" fill="{green}" stroke="{ink}" stroke-width="7" stroke-linejoin="round"/>
        <ellipse cx="{head_x+9}" cy="{head_y+16}" rx="25" ry="16" fill="{bg}" stroke="{ink}" stroke-width="5"/>
        <circle cx="{head_x+14}" cy="{head_y-8}" r="5" fill="{ink}"/>
        <circle cx="{head_x+25}" cy="{head_y+15}" r="3" fill="{ink}"/>
        <path d="M{head_x-2} {head_y+28} Q{head_x+12} {head_y+38} {head_x+31} {head_y+27}" fill="none" stroke="{ink}" stroke-width="5" stroke-linecap="round"/>
        <rect x="176" y="{body_y+30}" width="17" height="50" rx="9" fill="{ink}"/><rect x="250" y="{body_y+30}" width="17" height="50" rx="9" fill="{ink}"/><rect x="300" y="{body_y+22}" width="17" height="53" rx="9" fill="{ink}"/>
        <path d="M155 {body_y-6} Q119 {body_y-35} 108 {body_y-72}" fill="none" stroke="{ink}" stroke-width="10" stroke-linecap="round"/>
        <circle cx="106" cy="{body_y-76}" r="9" fill="{accent}"/>
        '''

    extra = extras[idx % len(extras)]
    extra_svg = ""
    if extra:
        extra_svg = f'<circle cx="405" cy="70" r="28" fill="{green}"/><text x="405" y="80" text-anchor="middle" font-family="Arial" font-size="24" font-weight="900" fill="white">{extra}</text>'
    if idx % 7 == 0:
        extra_svg += f'<path d="M93 205 H430" stroke="{accent}" stroke-width="7" stroke-linecap="round" opacity=".75"/>'
    if idx % 8 == 0:
        extra_svg += f'<path d="M105 82 L260 38 L415 82" fill="none" stroke="{green}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>'

    return badge_shape + animal + extra_svg


def make_svg(i: int):
    bg, ink, accent, clay, green = palettes[(i - 1) % len(palettes)]
    title = f"Burro animal {i:02d} · {styles[i-1]}"
    animal = shape_variant(i, bg, ink, accent, clay, green)
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="520" height="360" viewBox="0 0 520 360" role="img" aria-labelledby="title desc">
  <title id="title">Logo {i:02d}: {title}</title>
  <desc id="desc">Logo para burro.cl con un burro animal al centro, estilo {styles[i-1]}.</desc>
  <rect width="520" height="360" rx="34" fill="#fffaf2"/>
  <rect x="18" y="18" width="484" height="324" rx="30" fill="white" stroke="#ead8c2" stroke-width="3"/>
  {animal}
  <text x="260" y="304" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="42" font-weight="900" fill="{ink}" letter-spacing="-1.5">burro.cl</text>
  <text x="260" y="329" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="900" fill="{clay}" letter-spacing="2.5">{styles[i-1].upper()}</text>
</svg>'''


def main():
    for i in range(1, 51):
        (LOGOS / f"burro-animal-logo-{i:02d}.svg").write_text(make_svg(i), encoding="utf-8")

    cards = []
    for i, style in enumerate(styles, 1):
        cards.append(f'''
      <article class="card">
        <div class="logo-wrap"><img src="/logo-exploracion-animales/logos/burro-animal-logo-{i:02d}.svg" alt="Logo animal {i:02d}: Burro {style}"></div>
        <div class="meta"><strong>{i:02d}. Burro {style}</strong><span>animal al centro</span></div>
        <a href="/logo-exploracion-animales/logos/burro-animal-logo-{i:02d}.svg" download>Descargar SVG</a>
      </article>''')

    html = f'''<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>50 logos animales para burro.cl</title>
  <style>
    * {{ box-sizing: border-box; }}
    body {{ margin:0; font-family: Arial, Helvetica, sans-serif; background:#fff8ef; color:#241a14; }}
    header {{ padding: 52px 28px 28px; max-width: 1180px; margin:auto; }}
    .eyebrow {{ color:#e45b2d; font-weight:900; letter-spacing:.18em; text-transform:uppercase; font-size:13px; }}
    h1 {{ margin:12px 0 12px; font-size:clamp(36px,6vw,76px); letter-spacing:-.06em; line-height:.95; }}
    p {{ max-width:760px; color:#75604d; font-size:20px; line-height:1.6; }}
    main {{ max-width:1180px; margin:auto; padding:20px 28px 60px; display:grid; grid-template-columns:repeat(auto-fit,minmax(270px,1fr)); gap:24px; }}
    .card {{ background:white; border:1px solid #ead8c2; border-radius:28px; overflow:hidden; box-shadow:0 18px 45px rgba(91,57,40,.10); }}
    .logo-wrap {{ background:#fffaf2; padding:12px; }}
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
    <div class="eyebrow">Exploración de marca · segunda ronda</div>
    <h1>50 logos con burro animal al centro</h1>
    <p>Tomé tu corrección: ahora todas las opciones tienen un burro/animal al medio, con distintas formas: mascota, sello, escudo, geométrico, línea, app, premium, infantil y profesional.</p>
  </header>
  <main>{''.join(cards)}
  </main>
  <footer>Recomendación inicial: mirar primero 01, 02, 07, 12, 22, 32, 42, 49 y 50. Si eliges una dirección, después la refinamos como logo real final.</footer>
</body>
</html>'''
    (OUT / "index.html").write_text(html, encoding="utf-8")
    print(f"Generados 50 logos en {OUT}")

if __name__ == "__main__":
    main()
