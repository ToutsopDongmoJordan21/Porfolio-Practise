import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'JonalePay',
      description: 'Plateforme de paiement en ligne sécurisée. Solution fintech permettant des transactions rapides et fiables pour les utilisateurs camerounais.',
      url: 'https://jonalepay.net/accueil',
      tags: ['Angular', 'NodeJS', 'Payment', 'Fintech'],
      color: '#00e5ff',
      icon: '💳'
    },
    {
      title: 'CheckTatoo',
      description: 'Plateforme internationale dédiée au monde du tatouage. Mise en relation entre artistes tatoueurs et clients.',
      url: 'https://www.checktatoo.com/fr/',
      tags: ['Angular', 'API REST', 'UI/UX', 'Mobile-First'],
      color: '#39ff14',
      icon: '🎨'
    },
    {
      title: 'LaZoneShop',
      description: 'E-commerce moderne avec gestion de catalogue, panier d\'achats et système de commandes intégré.',
      url: 'https://lazoneshop.com/',
      tags: ['Angular', 'SpringBoot', 'SQL', 'E-commerce'],
      color: '#7c3aed',
      icon: '🛒'
    },
    {
      title: 'CoinAfrique Cameroun',
      description: 'Plateforme de petites annonces leader en Afrique. Contribution au développement de la version camerounaise.',
      url: 'https://cm.coinafrique.com/',
      tags: ['React', 'NodeJS', 'Firebase', 'Mobile'],
      color: '#f59e0b',
      icon: '📢'
    },
    {
      title: 'GED Biopharma',
      description: 'Système de Gestion Électronique de Documents pour Biopharma SA. Numérisation complète des processus internes.',
      url: '#',
      tags: ['Angular', 'NodeJS', 'Document Management', 'Sage'],
      color: '#ec4899',
      icon: '📁'
    },
    {
      title: 'GitHub Projects',
      description: 'Collection de projets open source incluant des applications web, des outils CLI et des solutions d\'IA.',
      url: 'https://github.com/ToutsopDongmoJordan21',
      tags: ['Python', 'TensorFlow', 'Angular', 'Open Source'],
      color: '#06b6d4',
      icon: '💻'
    }
  ];
}
