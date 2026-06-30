from pathlib import Path
from html import escape

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "logo-exploracion"
LOGOS = OUT / "logos"
LOGOS.mkdir(parents=True, exist_ok=True)

palettes = [
    ("Terracota", "#e45b2d", "#241a14", "#fff3e3"),
    ("Café premium", "#5b3928", "#e45b2d", "#fff8ef"),
    ("Verde confianza", "#2f7d5a", "#241a14", "#e6f2d7"),
    ("Arena cálida", "#b86b3a", "#241a14", "#fff3e3"),
    ("Negro elegante", "#241a14", "#e45b2d", "#fff8ef"),
]

names = [
    "Burro sello", "Burro puerta", "Burro confianza", "Burro rápido", "Burro vecino",
    "Burro hogar", "Burro pro", "Burro simple", "Burro fuerte", "Burro amable",
    "Burro llave", "Burro edificio", "Burro casco", "Burro check", "Burro app",
    "Burro barrio", "Burro manos", "Burro estrella", "Burro ruta", "Burro oficio",
    "Burro limpio", "Burro maestro", "Burro seguro", "Burro reserva", "Burro hoy",
    "Burro cuidado", "Burro video", "Burro agenda", "Burro premium", "Burro calma",
    "Burro taller", "Burro escudo", "Burro circular", "Burro badge", "Burro cordial",
    "Burro asistencia", "Burro conserje", "Burro depto", "Burro llave inglesa", "Burro puerta abierta",
    "Burro clásico", "Burro moderno", "Burro minimal", "Burro familiar", "Burro urbano",
    "Burro recomendado", "Burro 24h", "Burro verified", "Burro chile", "Burro finalista",
]

def icon_svg(i, primary, dark, sand):
    kind = i % 10
    # All icons are drawn in a 160x160 viewBox.
    if kind == 0:
        return f'''
        <rect x="42" y="45" width="76" height="82" rx="24" fill="{primary}"/>
        <rect x="45" y="16" width="22" height="42" rx="11" fill="{dark}" transform="rotate(-12 56 37)"/>
        <rect x="93" y="16" width="22" height="42" rx="11" fill="{dark}" transform="rotate(12 104 37)"/>
        <circle cx="64" cy="76" r="5" fill="{sand}"/><circle cx="96" cy="76" r="5" fill="{sand}"/>
        <path d="M67 101c10 8 18 8 28 0" stroke="{sand}" stroke-width="7" stroke-linecap="round" fill="none"/>'''
    if kind == 1:
        return f'''
        <path d="M34 122V61l46-31 46 31v61H34Z" fill="{sand}" stroke="{dark}" stroke-width="8" stroke-linejoin="round"/>
        <rect x="58" y="74" width="44" height="48" rx="14" fill="{primary}"/>
        <rect x="51" y="24" width="16" height="38" rx="8" fill="{primary}" transform="rotate(-18 59 43)"/>
        <rect x="93" y="24" width="16" height="38" rx="8" fill="{primary}" transform="rotate(18 101 43)"/>
        <circle cx="92" cy="96" r="4" fill="{sand}"/>'''
    if kind == 2:
        return f'''
        <path d="M80 18l50 20v36c0 34-20 57-50 69-30-12-50-35-50-69V38l50-20Z" fill="{dark}"/>
        <path d="M54 77l17 17 36-40" stroke="{primary}" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <rect x="48" y="31" width="18" height="37" rx="9" fill="{sand}" transform="rotate(-17 57 49)"/>
        <rect x="94" y="31" width="18" height="37" rx="9" fill="{sand}" transform="rotate(17 103 49)"/>'''
    if kind == 3:
        return f'''
        <circle cx="80" cy="80" r="58" fill="{primary}"/>
        <path d="M37 91h70c14 0 25-11 25-25" stroke="{dark}" stroke-width="10" stroke-linecap="round" fill="none"/>
        <path d="M104 50l28 16-28 16" stroke="{dark}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <text x="80" y="106" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="58" font-weight="900" fill="{sand}">b</text>'''
    if kind == 4:
        return f'''
        <rect x="30" y="36" width="100" height="88" rx="28" fill="{sand}" stroke="{primary}" stroke-width="8"/>
        <path d="M56 36V22M104 36V22" stroke="{dark}" stroke-width="16" stroke-linecap="round"/>
        <path d="M51 83h58" stroke="{dark}" stroke-width="10" stroke-linecap="round"/>
        <path d="M54 104h36" stroke="{primary}" stroke-width="10" stroke-linecap="round"/>'''
    if kind == 5:
        return f'''
        <path d="M52 51c-4-16 4-30 19-30 12 0 18 9 20 22 6-10 16-15 27-9 14 8 14 25 5 39-9 15-25 28-43 55C61 99 47 72 52 51Z" fill="{primary}"/>
        <path d="M41 123h78" stroke="{dark}" stroke-width="12" stroke-linecap="round"/>
        <circle cx="72" cy="63" r="5" fill="{sand}"/><circle cx="96" cy="63" r="5" fill="{sand}"/>
        <path d="M70 85c7 6 14 6 22 0" stroke="{sand}" stroke-width="6" stroke-linecap="round" fill="none"/>'''
    if kind == 6:
        return f'''
        <rect x="37" y="48" width="86" height="76" rx="24" fill="{dark}"/>
        <path d="M55 49c0-22 10-34 25-34s25 12 25 34" stroke="{primary}" stroke-width="12" stroke-linecap="round" fill="none"/>
        <text x="80" y="103" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="60" font-weight="900" fill="{sand}">b</text>'''
    if kind == 7:
        return f'''
        <circle cx="80" cy="80" r="60" fill="{sand}" stroke="{dark}" stroke-width="7"/>
        <path d="M53 61c8-22 46-22 54 0 5 16-3 44-27 63C56 105 48 77 53 61Z" fill="{primary}"/>
        <path d="M58 45l-7-26M102 45l7-26" stroke="{dark}" stroke-width="13" stroke-linecap="round"/>
        <path d="M67 89h26" stroke="{sand}" stroke-width="8" stroke-linecap="round"/>'''
    if kind == 8:
        return f'''
        <path d="M33 114c22-44 51-73 94-82" stroke="{primary}" stroke-width="14" stroke-linecap="round" fill="none"/>
        <path d="M41 114h78" stroke="{dark}" stroke-width="12" stroke-linecap="round"/>
        <path d="M87 50l-9-27M110 43l4-28" stroke="{dark}" stroke-width="12" stroke-linecap="round"/>
        <circle cx="103" cy="62" r="21" fill="{primary}"/><text x="103" y="73" text-anchor="middle" font-family="Arial" font-weight="900" font-size="32" fill="{sand}">b</text>'''
    return f'''
        <rect x="27" y="31" width="106" height="98" rx="24" fill="{primary}"/>
        <path d="M51 44V23M109 44V23" stroke="{dark}" stroke-width="15" stroke-linecap="round"/>
        <path d="M55 82l15 15 37-39" stroke="{sand}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <text x="80" y="121" text-anchor="middle" font-family="Arial" font-weight="900" font-size="26" fill="{sand}">OK</text>'''

def logo_svg(i):
    palette_name, primary, dark, sand = palettes[i % len(palettes)]
    name = names[i - 1]
    shape = ["wordmark", "badge", "vertical", "stamp", "app"][i % 5]
    subtitle = ["servicios confiables", "conoce antes", "video verificado", "hogar y depto", "reserva simple"][i % 5]
    bg = "#fffaf2" if i % 3 else sand
    if shape == "vertical":
        body = f'''
        <rect width="520" height="300" rx="30" fill="{bg}"/>
        <g transform="translate(180 30)">{icon_svg(i, primary, dark, sand)}</g>
        <text x="260" y="221" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="48" font-weight="900" fill="{dark}">burro</text>
        <text x="260" y="252" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="800" letter-spacing="4" fill="{primary}">{subtitle.upper()}</text>'''
    elif shape == "badge":
        body = f'''
        <rect width="520" height="300" rx="30" fill="{bg}"/>
        <circle cx="150" cy="150" r="92" fill="{dark}"/>
        <g transform="translate(70 70)">{icon_svg(i, primary, dark, sand)}</g>
        <text x="275" y="138" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="900" fill="{dark}">burro.cl</text>
        <text x="278" y="174" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="800" letter-spacing="3" fill="{primary}">{subtitle.upper()}</text>'''
    elif shape == "stamp":
        body = f'''
        <rect width="520" height="300" rx="30" fill="{dark}"/>
        <rect x="38" y="38" width="444" height="224" rx="34" fill="none" stroke="{sand}" stroke-width="5" stroke-dasharray="12 10"/>
        <g transform="translate(58 70)">{icon_svg(i, primary, dark, sand)}</g>
        <text x="235" y="137" font-family="Arial, Helvetica, sans-serif" font-size="58" font-weight="900" fill="{sand}">burro</text>
        <text x="238" y="176" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="800" letter-spacing="3" fill="{primary}">{subtitle.upper()}</text>'''
    elif shape == "app":
        body = f'''
        <rect width="520" height="300" rx="30" fill="{bg}"/>
        <rect x="62" y="62" width="128" height="128" rx="32" fill="{primary}"/>
        <g transform="translate(46 46) scale(.9)">{icon_svg(i, sand, dark, primary)}</g>
        <text x="225" y="130" font-family="Arial, Helvetica, sans-serif" font-size="56" font-weight="900" fill="{dark}">burro</text>
        <text x="228" y="169" font-family="Arial, Helvetica, sans-serif" font-size="17" font-weight="900" letter-spacing="3" fill="{primary}">{subtitle.upper()}</text>'''
    else:
        body = f'''
        <rect width="520" height="300" rx="30" fill="{bg}"/>
        <g transform="translate(50 70)">{icon_svg(i, primary, dark, sand)}</g>
        <text x="220" y="135" font-family="Arial, Helvetica, sans-serif" font-size="60" font-weight="900" fill="{dark}">burro.cl</text>
        <text x="224" y="176" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="800" letter-spacing="3" fill="{primary}">{subtitle.upper()}</text>'''
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="520" height="300" viewBox="0 0 520 300" role="img" aria-label="{escape(name)}">
<title>{escape(name)}</title>
{body}
</svg>'''

cards = []
for i in range(1, 51):
    svg = logo_svg(i)
    fname = f"burro-logo-{i:02d}.svg"
    (LOGOS / fname).write_text(svg, encoding="utf-8")
    palette_name = palettes[i % len(palettes)][0]
    cards.append(f'''
      <article class="card">
        <div class="logo-wrap"><img src="logos/{fname}" alt="Logo {i:02d}: {escape(names[i-1])}"></div>
        <div class="meta"><strong>{i:02d}. {escape(names[i-1])}</strong><span>{palette_name}</span></div>
        <a href="logos/{fname}" download>Descargar SVG</a>
      </article>''')

index = f'''<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>50 logos para burro.cl</title>
  <style>
    * {{ box-sizing: border-box; }}
    body {{ margin:0; font-family: Arial, Helvetica, sans-serif; background:#fff8ef; color:#241a14; }}
    header {{ padding: 44px 24px 26px; max-width: 1180px; margin:auto; }}
    .eyebrow {{ color:#e45b2d; font-weight:900; letter-spacing:.18em; text-transform:uppercase; font-size:13px; }}
    h1 {{ font-size: clamp(36px, 6vw, 78px); line-height:.95; margin: 12px 0 18px; letter-spacing:-.06em; }}
    p {{ color:#75604d; font-size:18px; line-height:1.6; max-width:780px; }}
    .palette {{ display:flex; gap:10px; flex-wrap:wrap; margin-top:24px; }}
    .chip {{ display:flex; align-items:center; gap:8px; border:1px solid #ead8c2; background:white; padding:8px 12px; border-radius:999px; font-weight:800; color:#5d4635; }}
    .dot {{ width:18px; height:18px; border-radius:50%; box-shadow: inset 0 0 0 1px rgba(0,0,0,.08); }}
    .grid {{ max-width:1180px; margin:0 auto 70px; padding:0 24px; display:grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap:18px; }}
    .card {{ background:white; border:1px solid #ead8c2; border-radius:24px; overflow:hidden; box-shadow:0 14px 40px rgba(91,57,40,.08); transition:.18s ease; }}
    .card:hover {{ transform: translateY(-3px); box-shadow:0 22px 55px rgba(91,57,40,.14); }}
    .logo-wrap {{ background:#fffaf2; padding:12px; }}
    img {{ display:block; width:100%; height:auto; border-radius:16px; }}
    .meta {{ padding:14px 16px 4px; display:flex; flex-direction:column; gap:4px; }}
    .meta strong {{ font-size:15px; }}
    .meta span {{ font-size:12px; color:#8a5b37; font-weight:800; text-transform:uppercase; letter-spacing:.12em; }}
    a {{ display:inline-flex; margin:10px 16px 16px; color:#e45b2d; font-weight:900; text-decoration:none; }}
    footer {{ max-width:1180px; margin:0 auto; padding:0 24px 50px; color:#75604d; }}
  </style>
</head>
<body>
  <header>
    <div class="eyebrow">Exploración de marca</div>
    <h1>50 logos para burro.cl</h1>
    <p>Opciones rápidas para elegir dirección visual: más premium, más amable, más app, más sello de confianza o más barrio. Todos son SVG descargables.</p>
    <div class="palette">
      <span class="chip"><span class="dot" style="background:#e45b2d"></span>Terracota</span>
      <span class="chip"><span class="dot" style="background:#241a14"></span>Café burro</span>
      <span class="chip"><span class="dot" style="background:#fff3e3"></span>Arena</span>
      <span class="chip"><span class="dot" style="background:#2f7d5a"></span>Verde confianza</span>
    </div>
  </header>
  <main class="grid">
    {''.join(cards)}
  </main>
  <footer>Recomendación inicial: mirar primero las opciones 01, 03, 07, 22, 32 y 42 porque mantienen mejor el equilibrio entre confianza, simpleza y recordación.</footer>
</body>
</html>'''
(OUT / "index.html").write_text(index, encoding="utf-8")
print(f"Generados 50 SVG + galería en {OUT}")
