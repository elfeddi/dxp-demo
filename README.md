# dxp-demo

Application de démonstration DxP

## Stack
- Langage : nodejs
- CI/CD : Tekton → Harbor → ArgoCD
- Plateforme : DxP

## Démarrage rapide
```bash
# Cloner le repo
git clone <repo-url>
cd dxp-demo

# Lancer en local
docker build -t dxp-demo .
docker run -p 8080:8080 dxp-demo
```
