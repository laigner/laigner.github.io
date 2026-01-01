# laigner.github.io
Meine persönliche Webseite — statische, moderne Vorlage.

Vorschau lokal starten:

```bash
# im Repository-Root
python3 -m http.server 8000
# dann im Browser öffnen: http://localhost:8000
```

Dateien:
- [index.html](index.html)
- [assets/css/style.css](assets/css/style.css)
- [assets/js/main.js](assets/js/main.js)

Nächste Schritte: passe `index.html` an (Name, Texte, Links) und füge reale Projektbeschreibungen hinzu. Zum Veröffentlichen kannst du GitHub Pages für dieses Repository aktivieren.

Deployment mit GitHub Pages

 - Es gibt ein GitHub Actions Workflow unter `.github/workflows/pages.yml`, das bei Push auf `main` das Repository als statische Seite für GitHub Pages bereitstellt.
 - Falls du eine eigene Domain möchtest, lege eine `CNAME`-Datei in das Repo (oder setze die Domain in den Repository‑Einstellungen).

Schnelltest nach Änderungen:

```bash
python3 -m http.server 8000
# öffnen: http://localhost:8000
```
