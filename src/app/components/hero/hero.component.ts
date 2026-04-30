import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  displayText = '';
  titles = [
    'Ingénieur Full Stack',
    'Développeur Angular/Node',
    'Admin Réseau & Systèmes',
    'Architecte Logiciel'
  ];
  currentIndex = 0;
  charIndex = 0;
  isDeleting = false;
  private timeout: any;

  ngOnInit(): void {
    this.typeLoop();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeout);
  }

  typeLoop() {
    const current = this.titles[this.currentIndex];
    if (this.isDeleting) {
      this.displayText = current.substring(0, this.charIndex--);
      if (this.charIndex < 0) {
        this.isDeleting = false;
        this.currentIndex = (this.currentIndex + 1) % this.titles.length;
        this.timeout = setTimeout(() => this.typeLoop(), 500);
        return;
      }
    } else {
      this.displayText = current.substring(0, ++this.charIndex);
      if (this.charIndex === current.length) {
        this.isDeleting = true;
        this.timeout = setTimeout(() => this.typeLoop(), 2000);
        return;
      }
    }
    this.timeout = setTimeout(() => this.typeLoop(), this.isDeleting ? 40 : 80);
  }

  scrollTo(id: string) {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
