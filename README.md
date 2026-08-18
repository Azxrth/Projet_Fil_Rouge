Billetterie EDM — Projet fil rouge RNCP 38606

Plateforme de billetterie dédiée à la musique électronique (House, Techno, Dubstep, Trance, Hardstyle, Drum & Bass...), pensée pour les fans de sous-genres EDM mal desservis par les plateformes généralistes.

Projet réalisé dans le cadre de la certification RNCP 38606 — Développeur Web Full Stack (niveau 6), IT Akademy / Cloud Campus.

Statut du projet

🚧 En cours de développement — Sprint 1 (setup environnement). Aucune fonctionnalité métier n'est encore implémentée.

Stack technique
Côté	Technologie
Frontend	React + Vite
Backend	Laravel (API REST) + Sanctum (auth)
Base de données	MySQL
Paiement	Stripe (mode test)
Structure du repo
/back    → API Laravel
/front   → Application React
Prérequis
PHP 8.x, Composer
Node.js 18+, npm
MySQL
Installation — Backend
bash
cd back
composer install
cp .env.example .env
php artisan key:generate
# Configurer les identifiants MySQL dans .env
php artisan migrate
php artisan serve
Installation — Frontend
bash
cd front
npm install
npm run dev
Fonctionnalités prévues
Socle (priorité)
Authentification à 3 rôles (Client / Organisme / Admin) via Sanctum
Catalogue d'événements + fiche événement
Tunnel d'achat + paiement Stripe (test)
Génération de billet avec QR code
Dashboard organisme (créer événement, gérer stock, suivre ventes)
Dashboard admin (validation, modération)
Bonus
PWA (cache offline limité au billet/QR code)
Découverte géolocalisée sur carte interactive
Filtres par sous-genres + temporalité
Preview audio 30s des DJ/artistes
Dark UX
Méthodologie

Développement en sprints hebdomadaires, suivi sur Trello.

Auteur
Lucas — projet réalisé en solo dans le cadre de la certification RNCP 38606
