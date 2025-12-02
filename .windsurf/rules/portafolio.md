---
trigger: always_on
---

---
trigger:
  # Se activa en push a main/master o manualmente
  push:
    branches: [main, master]
  workflow_dispatch:  # Permite ejecución manual
    inputs:
      reason:
        description: 'Razón del despliegue'
        required: true
        default: 'Actualización manual'

# Variables globales
env:
  NODE_VERSION: '20.x'  # Versión LTS de Node.js
  CACHE_VERSION: 'v1'

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Upload build artifacts
        uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist/
          retention-days: 5

  deploy:
    needs: build-and-deploy
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main' || github.ref == 'refs/heads/master'
    steps:
      - name: Download build artifacts
        uses: actions/download-artifact@v4
        with:
          name: dist
          path: dist

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
          branch: gh-pages
          clean: true
          token: ${{ secrets.GITHUB_TOKEN }}