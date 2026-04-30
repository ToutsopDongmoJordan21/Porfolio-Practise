import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  activeSlide = 0;

  testimonials = [
    {
      name: 'FOTSO Simplice',
      role: 'Responsable Informatique',
      company: 'Biopharma SA',
      phone: '(+237) 698708560',
      email: 'fonajosi@gmail.com',
      avatar: 'FS',
      color: '#00e5ff',
      quote: 'Jordan a fait un travail remarquable chez Biopharma SA. Sa maîtrise des réseaux CISCO et sa capacité à numériser nos processus internes ont transformé notre infrastructure informatique. Professionnel, rigoureux et toujours disponible pour résoudre les problèmes rapidement. Je le recommande sans hésitation pour tout projet IT exigeant.'
    },
    {
      name: 'SOP DEFFO Lionel Landry',
      role: 'Coordinator / Dept. Computer Engineering',
      company: 'Université de Buea',
      phone: '(+237) 651305659 / 698962166',
      email: 'lsopdeffo@yahoo.com',
      avatar: 'SL',
      color: '#39ff14',
      quote: 'J\'ai eu le plaisir d\'encadrer Jordan tout au long de son parcours académique. C\'est un étudiant d\'exception, alliant curiosité intellectuelle et compétences techniques solides. Son investissement dans les projets de développement logiciel et d\'intelligence artificielle dépasse les attentes. Il possède toutes les qualités pour exceller dans l\'industrie technologique.'
    },
    {
      name: 'Équipe Technique',
      role: 'Développeur Senior',
      company: 'Amla Cameroun / Intelcia',
      phone: 'N/A',
      email: 'N/A',
      avatar: 'ET',
      color: '#7c3aed',
      quote: 'Travailler avec Jordan sur le développement de nos applications web et mobiles a été une expérience très positive. Sa maîtrise d\'Angular, Node.js et son sens du détail pour l\'UX/UI nous ont permis de livrer des projets de haute qualité dans les délais. Sa communication claire et son esprit d\'équipe sont des atouts précieux.'
    },
    {
      name: 'Lead Developer',
      role: 'Architecte Logiciel',
      company: 'Mobi-Tech SARL / Zepstra',
      phone: 'N/A',
      email: 'N/A',
      avatar: 'LD',
      color: '#f59e0b',
      quote: 'Jordan a contribué de manière significative à notre équipe pendant 4 ans. Sa polyvalence — du développement full stack à l\'IA Python — est impressionnante. Il adopte rapidement les nouvelles technologies et livre du code propre, bien documenté, selon les principes Agile. Un développeur de haut niveau que nous recommandons chaleureusement.'
    }
  ];

  next() {
    this.activeSlide = (this.activeSlide + 1) % this.testimonials.length;
  }

  prev() {
    this.activeSlide = (this.activeSlide - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goTo(i: number) {
    this.activeSlide = i;
  }
}
