# Master Front End XVII - Módulo 7 - Cloud - Laboratorio

## Modulo Cloud - Laboratorio

### Básico

2. Automatizar el proceso de despliegue: [https://github.com/cbsumastre/cloud-laboratorio-gh-pages-autom](https://github.com/cbsumastre/cloud-laboratorio-gh-pages-autom)

   - Queremos que cada vez que se haga un merge a la rama principal de este ejercicio, se dispare un flujo de build y despliegue.
   - Usar Github Actions para esto.

_Para simplificar la entrega de los ejercicios podéis crear un repositorio por cada uno._

_Es importante saber que Github necesita que los workflows estén en la ruta raiz del proyecto en la carpeta .github/workflows_

Pasos a realizar para desplegar en Github Pages con Github Actions:

- En el repo en **Settings** -> **Pages** hay que cambiar _"Deploy from a branch"_ por _"GitHub Actions"_

- Crear el workflow

_.github/workflows/cd.yml_

```yml
name: CD Workflow

on:
  push:
    branches:
      - main

jobs:
  cd:
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Install
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

- Hacer commit y push

```bash
git add .
git commit -m "using deploy-pages Github Actions"
git push
```
