import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;
  sending = false;

  contacts = [
    {
      icon: '📞',
      label: 'Téléphone',
      value: '(+237) 681 409 045',
      href: 'tel:+237681409045',
      sub: '(+237) 699 028 439'
    },
    {
      icon: '✉️',
      label: 'Email',
      value: 'jordantoutsop472@gmail.com',
      href: 'mailto:jordantoutsop472@gmail.com',
      sub: null
    },
    {
      icon: '📍',
      label: 'Localisation',
      value: 'Yaoundé / Douala',
      href: null,
      sub: 'Cameroun'
    }
  ];

  onSubmit() {
    if (!this.form.name || !this.form.email || !this.form.message) return;
    this.sending = true;
    setTimeout(() => {
      this.sending = false;
      this.submitted = true;
    }, 1500);
  }

  reset() {
    this.submitted = false;
    this.form = { name: '', email: '', subject: '', message: '' };
  }
}
