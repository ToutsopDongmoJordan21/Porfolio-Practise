import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  categories = [
    {
      label: 'Frontend',
      icon: '🖥️',
      skills: [
        { name: 'Angular', pct: 90 },
        { name: 'HTML5 / CSS3', pct: 92 },
        { name: 'TypeScript', pct: 85 },
        { name: 'RxJS', pct: 78 },
        { name: 'Bootstrap / Tailwind', pct: 85 },
      ]
    },
    {
      label: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'NodeJS', pct: 88 },
        { name: 'Java / SpringBoot', pct: 75 },
        { name: 'PHP', pct: 72 },
        { name: 'Windev', pct: 70 },
        { name: 'API REST / GraphQL', pct: 85 },
      ]
    },
    {
      label: 'IA & Data',
      icon: '🤖',
      skills: [
        { name: 'Python', pct: 80 },
        { name: 'TensorFlow', pct: 70 },
        { name: 'Scikit-learn', pct: 72 },
        { name: 'Pandas', pct: 75 },
        { name: 'SQL', pct: 82 },
      ]
    },
    {
      label: 'Réseau & Infra',
      icon: '🌐',
      skills: [
        { name: 'Windows Server / Linux', pct: 82 },
        { name: 'CISCO / Switchs / VPN', pct: 78 },
        { name: 'Active Directory', pct: 80 },
        { name: 'AWS', pct: 68 },
        { name: 'Firewall / Sécurité', pct: 75 },
      ]
    }
  ];

  softSkills = [
    { label: 'Résolution de problèmes', icon: '🧩' },
    { label: 'Communication', icon: '💬' },
    { label: 'Structure des données', icon: '📊' },
    { label: 'Algorithmes', icon: '🔢' },
    { label: 'Conception OO', icon: '🏗️' },
    { label: 'Leadership', icon: '🎯' },
    { label: 'Focus & Vision', icon: '🔭' },
    { label: 'Travail en équipe', icon: '🤝' },
  ];
}
