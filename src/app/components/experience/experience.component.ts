import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  activeIndex = 0;

  experiences = [
    {
      company: 'Biopharma SA',
      role: 'Informaticien, Admin Réseau & Développeur',
      period: '2025 — 2026',
      type: 'Entreprise Pharmaceutique',
      color: '#00e5ff',
      tasks: [
        'Numérisation des processus (demandes d\'achat, production) et implémentation d\'une GED',
        'Configuration et déploiement des équipements CISCO (Switchs, téléphones IP, laptops, desktops)',
        'Vérification quotidienne des services : SAGE, VOIP, NAS, Domaine, VPN',
        'Conception, installation et configuration de l\'architecture réseau de l\'entreprise',
        'Gestion de la sécurité réseau : firewall, VPN, antivirus, détection d\'intrusions',
        'Configuration et maintien des serveurs (Windows Server, Linux, Active Directory)',
        'Support Helpdesk de premier et second niveau aux utilisateurs',
        'Formation des utilisateurs aux bonnes pratiques de sécurité réseau',
      ],
      techs: ['Winbox', 'Tera Term', 'Sage', 'Angular', 'NodeJS', 'Microsoft Office', 'Canva']
    },
    {
      company: 'Amla Cameroun / Intelcia',
      role: 'Développeur Web & Mobile – Conseiller Technique',
      period: '2024 — 2025',
      type: 'Développement & Support Technique',
      color: '#39ff14',
      tasks: [
        'Conception, développement et maintenance d\'applications web et mobiles (iOS, Android)',
        'Développement et intégration d\'API REST et services web',
        'Création d\'interfaces utilisateur responsives et intuitives',
        'Gestion des bases de données et optimisation des requêtes',
        'Support technique de premier et second niveau (tickets, helpdesk)',
        'Rédaction de guides techniques et de documentation utilisateur',
        'Gestion des escalades vers les équipes spécialisées',
        'Formation des utilisateurs sur les nouveaux outils et fonctionnalités',
      ],
      techs: ['Windev', 'Angular', 'NodeJS', 'Java', 'AnyDesk']
    },
    {
      company: 'Floraison',
      role: 'Développeur Front-end',
      period: '2022 — 2023',
      type: 'Développement Frontend',
      color: '#7c3aed',
      tasks: [
        'Développement d\'applications web dynamiques avec Angular JS',
        'Création et gestion de composants, directives et services réutilisables',
        'Implémentation du data-binding bidirectionnel et gestion d\'état',
        'Consommation d\'API REST / GraphQL avec gestion des appels HTTP asynchrones (RxJS)',
        'Implémentation de l\'authentification et gestion des tokens JWT',
        'Création d\'interfaces modernes avec animations CSS3 et JavaScript',
        'Tests unitaires avec Jasmine/Karma',
        'Gestion des versions avec Git (branches, merge, pull requests)',
      ],
      techs: ['HTML5', 'CSS3', 'Angular JS', 'TypeScript', 'RxJS', 'Bootstrap', 'Git']
    },
    {
      company: 'Mobi-Tech SARL / AdvancedIT / Zepstra / Novazen',
      role: 'Développeur Full Stack & Ingénieur IA',
      period: '2018 — 2022',
      type: 'Développement Full Stack & IA',
      color: '#f59e0b',
      tasks: [
        'Conception et implémentation d\'applications pour des individus et entreprises',
        'Utilisation de l\'intégration continue et livraison continue (CI/CD)',
        'Développement et déploiement de solutions d\'IA en Python (ML, analyse de données)',
        'Mise en œuvre de nouvelles fonctionnalités selon la méthodologie Agile',
        'Maintenance et optimisation des infrastructures informatiques',
        'Support Helpdesk et résolution de problèmes matériels et logiciels',
        'Développement backend avec SpringBoot et déploiement sur AWS',
        'Intégration Firebase pour les applications mobiles',
      ],
      techs: ['PHP', 'Firebase', 'Angular 14', 'SpringBoot', 'NodeJS', 'AWS', 'Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'SQL']
    }
  ];
}
