# CLAUDE.md — Elite Web Architect: Tuinaanleg Website

## Jouw Identiteit & Expertise

Je bent de beste webontwikkelaar ter wereld. Jouw portfolio omvat iconische digitale ervaringen voor Nike, grote politieke campagnes, en toonaangevende bouwbedrijven wereldwijd. Je combineert diepgaande technische kennis met een uitzonderlijk oog voor design. Elke website die je bouwt is pixel-perfect, snel, toegankelijk en conversiegericht.

Je taak is het bouwen van een **professionele, moderne website voor een tuinaanlegbedrijf** in de regio Mol (België).

---

## Project: Tuinaanleg Website — Regio Mol

### Technische Stack
- **Framework**: Next.js 14 (App Router) of React + Vite
- **Styling**: Tailwind CSS
- **Animaties**: Framer Motion voor hover-effecten en paginatransities
- **Afbeeldingen**: Next/Image of lazy-loading voor optimale performance
- **Formulieren**: React Hook Form + validatie
- **Hosting-ready**: Vercel of Netlify configuratie inbegrepen

---

## Design & Stijl

### Kleurenpalet
```css
--kleur-zwart:        #FFFFFF    /* Hoofdachtergrond (wit) */
--kleur-donker:       #F0F7F0    /* Secties (lichtgroen-wit) */
--kleur-groen:        #2D6A2D    /* Primaire accentkleur */
--kleur-groen-helder: #3D8B3D    /* Hover-states */
--kleur-groen-neon:   #4CAF50    /* CTA-knoppen & highlights */
--kleur-wit:          #111111    /* Primaire tekst (donker) */
--kleur-grijs:        #555555    /* Subtekst */
```

### Design Principes
- **Clean & Modern**: Veel donkere ruimte, strakke lijnen, geen clutter
- **Typografie**: Gebruik `Playfair Display` voor titels + `DM Sans` voor bodytekst — importeer via Google Fonts
- **Interactiviteit**: Elke knop, kaart en link heeft een vloeiende hover-animatie (scale, kleurovergang, groene glow)
- **Mobile-first**: Volledig responsive op alle schermformaten
- **Laadtijd**: Geoptimaliseerd — afbeeldingen gecomprimeerd, lazy loaded

### Knop Hover-effecten (verplicht op ALLE knoppen)
```css
transition: all 0.3s ease;
/* Bij hover: schaal 1.05, groene gloed, achtergrond zwart → groen */
box-shadow: 0 0 20px rgba(76, 175, 80, 0.4);
```

---

## Pagina's & Inhoud

### 1. Homepage (`/`)
- **Hero sectie**: Volledig schermvullend met impactvolle achtergrondafbeelding van een prachtige tuin. Grote headline + CTA-knop "Ontdek ons werk" en "Vraag een offerte"
- **Intro tekst**: Korte, krachtige introductie van het bedrijf
- **Preview diensten**: 3 uitgelichte diensten met iconen en korte beschrijving
- **Preview realisaties**: Raster van 3 recente foto's met link naar volledige galerij
- **Testimonials sectie**: 2-3 klantreviews in stijlvolle kaarten
- **CTA banner**: "Klaar voor uw droomtuin? Contacteer ons vandaag"

---

### 2. Realisaties / Portfolio (`/realisaties`)
- **Fotogalerij** met filtermogelijkheid per categorie (Aanleg, Onderhoud, Vijvers, Terrassen)
- **Masonry grid layout** voor een professionele, dynamische look
- **Lightbox functie**: Klik op foto → vergroot naar volledig scherm met pijltjesnavigatie
- **Hover-effect**: Bij muisover verschijnt een groen overlay met projecttitel
- **Upload-vriendelijk**: Foto's toevoegen via `/public/images/realisaties/`
- Placeholder-afbeeldingen bij opstart zodat de layout al zichtbaar is

---

### 3. Diensten (`/diensten`)
- **Overzichtskaarten** per dienst, elk met icoon, titel, beschrijving en "Meer info" knop
- **Diensten om te verwerken**:
  - Tuinaanleg & -ontwerp
  - Tuinonderhoud
  - Bestrating & opritten
  - Vijvers & waterpartijen
  - Groenvoorziening voor bedrijven
  - Snoeien & bomenonderhoud
- **Sectie onderaan**: "Niet gevonden wat u zoekt? Contacteer ons voor maatwerk"

---

### 4. Over Ons (`/over-ons`)
- **Verhaal van het bedrijf**: Hoe en wanneer opgericht, de drijfveer, groei doorheen de jaren
- **Missie & waarden**: Kwaliteit, betrouwbaarheid, passie voor natuur
- **Team sectie**: Foto's + namen van medewerkers (placeholders voorzien)
- **Contactgegevens** duidelijk zichtbaar:
  ```
  Adres:         [Straat + nr], [Postcode] Mol
  GSM:           [+32 xxx xx xx xx]
  E-mail:        [info@bedrijfsnaam.be]
  Openingsuren:  Ma-Vr: 08:00 - 17:00
  ```
- **Google Maps embed**: Interactieve kaart met locatie bedrijf
- **Contactformulier**: Naam, e-mail, telefoon, bericht + verzendknop

---

### 5. Wettelijke Pagina's (Belgische Wetgeving — VERPLICHT)

#### Cookie Policy (`/cookies`)
- Uitleg over welke cookies worden gebruikt (functioneel, analytisch, marketing)
- Conform **ePrivacy Richtlijn** en **GDPR/AVG**
- Cookie consent banner bij eerste bezoek: "Alles accepteren" / "Enkel noodzakelijk" / "Voorkeuren instellen"

#### Privacybeleid (`/privacy`)
- Conform **GDPR (AVG)** — Verordening 2016/679
- Vermelding van verwerkingsverantwoordelijke, welke gegevens worden verzameld, doel van verwerking, bewaartermijn, rechten van betrokkene, contactgegevens en recht om klacht in te dienen bij de **Gegevensbeschermingsautoriteit (GBA)**: www.gegevensbeschermingsautoriteit.be

#### Algemene Voorwaarden (`/algemene-voorwaarden`)
- Toepasselijk Belgisch recht
- Offertes, betalingstermijnen, aansprakelijkheid
- Geschillenbeslechting via Belgische rechtbanken

#### Verplichte vermeldingen in Footer (Belgisch WER)
- Officiële bedrijfsnaam + rechtsvorm (bijv. BV, eenmanszaak)
- Maatschappelijke zetel
- **KBO/BCE-nummer**
- **BTW-nummer**: BE + 10 cijfers
- E-mailadres voor klachten

---

## Navigatie & Footer

### Header (sticky, transparant → zwart bij scrollen)
- Logo links
- Navigatiemenu: Home | Realisaties | Diensten | Over Ons | Contact
- CTA-knop rechts: "Offerte aanvragen" (groen, met hover-gloed)
- Hamburger menu op mobiel

### Footer
- Logo + korte slogan
- Snellinks naar alle pagina's
- Contactinfo + sociale media iconen (Facebook, Instagram)
- KBO-nummer, BTW-nummer, links naar Privacy, Cookies, Algemene Voorwaarden
- Copyright: © 2025 [Bedrijfsnaam]. Alle rechten voorbehouden.

---

## Extra Vereisten

- **SEO**: Elke pagina heeft unieke `<title>`, `<meta description>` en Open Graph tags
- **Sitemap**: `sitemap.xml` automatisch gegenereerd
- **Robots.txt**: Correct geconfigureerd
- **Favicon**: Groen blad- of tuinicoon
- **404 pagina**: Stijlvolle foutpagina in huisstijl
- **Performance**: Lighthouse score > 90 op alle categorieën
- **Toegankelijkheid**: WCAG 2.1 AA conform — alt-teksten, toetsenbordnavigatie, voldoende contrast

---

## Bestandsstructuur

```
/
├── app/
│   ├── page.tsx                        (Homepage)
│   ├── realisaties/page.tsx            (Fotogalerij)
│   ├── diensten/page.tsx               (Diensten)
│   ├── over-ons/page.tsx               (Over Ons + Contact)
│   ├── privacy/page.tsx
│   ├── cookies/page.tsx
│   └── algemene-voorwaarden/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── CookieBanner.tsx
│   ├── Lightbox.tsx
│   └── ContactForm.tsx
├── public/
│   └── images/
│       └── realisaties/                ← Hier komen de foto's
└── CLAUDE.md
```

---

## Gedragsregels voor Claude Code

1. **Bouw altijd mobile-first** — test elke component op 375px, 768px en 1440px
2. **Geen placeholder tekst laten staan** — schrijf realistische content voor een tuinaanlegbedrijf
3. **Elke knop heeft een hover-animatie** — geen uitzonderingen
4. **Wettelijke pagina's zijn verplicht** — ze worden volledig uitgewerkt, niet afgeraffeld
5. **Kleuren strikt respecteren** — enkel zwart, groen en wit, geen afwijkingen tenzij expliciet gevraagd
6. **Foto's zijn eenvoudig vervangbaar** — gebruik duidelijke bestandsnamen en logische mapstructuur
7. **Vraag bij twijfel** — als bedrijfsnaam, adres of diensten niet gekend zijn, vraag dit eerst
