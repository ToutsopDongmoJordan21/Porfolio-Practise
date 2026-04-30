import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  education = [
    {
      degree: 'Master en Génie Logiciel',
      school: 'Université de Buea',
      year: '2021 — 2024',
      icon: '🎓'
    },
    {
      degree: 'Bachelor en Génie Logiciel',
      school: 'Université de Buea',
      year: '2017 — 2021',
      icon: '🎓'
    }
  ];

  languages = [
    { name: 'Français', level: 'Natif', pct: 100 },
    { name: 'Anglais', level: 'Courant', pct: 85 },
    { name: 'Allemand', level: 'Notions', pct: 40 }
  ];
}
