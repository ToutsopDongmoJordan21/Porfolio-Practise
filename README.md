# 🚀 Portfolio — TOUTSOP DONGMO Jordan

> Site portfolio personnel développé avec **Angular 13**, présentant mon parcours, mes compétences, mes projets et mes références professionnelles.

---

## 🌐 Aperçu

Portfolio one-page entièrement responsive avec un design dark/cyberpunk moderne. Il présente mes 5+ années d'expérience en développement full stack, administration réseau et intelligence artificielle.

---

## ✨ Fonctionnalités

| Section | Description |
|---------|-------------|
| 🏠 **Hero** | Animation typewriter, photo de profil, stats rapides |
| 👤 **À Propos** | Bio, formation académique, langues, centres d'intérêt |
| 💼 **Expériences** | Onglets interactifs — Biopharma, Amla/Intelcia, Floraison, Mobi-Tech |
| 🛠️ **Compétences** | Barres de progression animées (Frontend, Backend, IA, Réseau) |
| 📁 **Projets** | Grille de projets réels avec liens (JonalePay, CheckTatoo, etc.) |
| 💬 **Témoignages** | Slider avec références contactables |
| 📬 **Contact** | Formulaire + coordonnées + réseaux sociaux |

---

## 🧱 Stack Technique

- **Framework :** Angular 13.3
- **Langage :** TypeScript 4.6
- **Style :** SCSS (CSS Variables, animations, responsive)
- **Polices :** Syne · Space Mono · Inter (Google Fonts)
- **Build :** Angular CLI · Webpack

---

## 📁 Structure du Projet

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/         # Navigation fixe + menu mobile
│   │   │   ├── hero/           # Accueil avec animation typewriter
│   │   │   ├── about/          # À propos, formation, langues
│   │   │   ├── experience/     # Expériences (onglets interactifs)
│   │   │   ├── skills/         # Compétences techniques
│   │   │   ├── projects/       # Projets réalisés
│   │   │   ├── testimonials/   # Témoignages et références
│   │   │   └── contact/        # Formulaire + footer
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   ├── assets/
│   │   └── profile.jpg
│   └── styles.scss
├── angular.json
├── package.json
└── README.md
```

---

## ⚙️ Prérequis

- [Node.js](https://nodejs.org/) v14.x ou supérieur
- npm v6.x ou supérieur
- Angular CLI v13.x

```bash
node -v
npm -v
ng version
```

---

## 🚀 Installation & Lancement

```bash
# 1. Cloner le dépôt
git clone https://github.com/ToutsopDongmoJordan21/portfolio.git
cd portfolio

# 2. Installer les dépendances
npm install

# 3. Lancer en développement
ng serve
# → http://localhost:4200

# 4. Build de production
ng build
# → dist/portfolio/
```

---

## 🌍 Déploiement GitHub Pages

```bash
ng add angular-cli-ghpages
ng deploy --base-href=/portfolio/
```

---

## 🔧 Personnalisation

| Fichier | Contenu |
|---------|---------|
| `hero/hero.component.ts` | Titres animés, nom |
| `about/about.component.ts` | Formation, langues |
| `experience/experience.component.ts` | Expériences |
| `skills/skills.component.ts` | Compétences et niveaux |
| `projects/projects.component.ts` | Projets et liens |
| `testimonials/testimonials.component.ts` | Témoignages |
| `contact/contact.component.ts` | Coordonnées |
| `src/assets/profile.jpg` | Photo de profil |

---

## 📞 Contact

**Jordan TOUTSOP DONGMO**

- 📧 [jordantoutsop472@gmail.com](mailto:jordantoutsop472@gmail.com)
- 📱 (+237) 681 409 045 / 699 028 439
- 📍 Yaoundé / Douala, Cameroun
- 💼 [LinkedIn](https://www.linkedin.com/in/jordan-toutsop-6b2b731a1/)
- 💻 [GitHub](https://github.com/ToutsopDongmoJordan21)

---

## 📄 Licence

MIT — libre d'utilisation comme base pour votre propre portfolio.

---

<p align="center">Fait avec ❤️ par <strong>Jordan TOUTSOP DONGMO</strong> · Angular 13 · 2025</p>
