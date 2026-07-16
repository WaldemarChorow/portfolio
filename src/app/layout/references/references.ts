import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { Reference } from './reference.interface';

@Component({
  selector: 'app-references',
  imports: [TranslatePipe],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  private translate = inject(TranslateService);
  currentLanguage: 'en' | 'de' = 'en';

  references: Reference[] = [
    {
      id: 1,
      name: 'Björn Sagmeister',
      project: 'Kochwelt',
      text: {
        en: 'In my experience, Waldemar is a motivated, highly organized individual. ' +
          'Together we developed a recipe-platform (Kochwelt) as part of the Developer Academy curriculum. ' +
          'He quickly adapts to any task, and his calm, level-headed approach has proven advantageous ' +
          'even in the most stressful situations.',
        de: 'Nach meiner Erfahrung ist Waldemar ein motivierter und hochorganisierter Mensch. ' +
          'Zusammen haben wir eine Rezept-Plattform (Kochwelt) als Teil des Developer Academy Lehrplans entwickelt. ' +
          'Er passt sich schnell an jede Aufgabe an, und sein ruhiger, besonnener Ansatz hat sich auch ' +
          'in stressigsten Situationen als vorteilhaft erwiesen.'
      },
      linkedInLink: 'https://www.linkedin.com/in/bj%C3%B6rn-sagmeister-358558a5/',
    },
    {
      id: 2,
      name: 'Ievgen Bilion',
      project: 'Join',
      text: {
        en: 'Waldemar proved himself to be a true team player in our joint project. ' +
          'You can trust him with tasks and be confident that he will do everything to implement them ' +
          'correctly, scalably, and according to best practices. ' +
          'He absorbs new information very quickly and applies it directly in practice.',
        de: 'Waldemar hat sich in unserem gemeinsamen Projekt als echter Teamplayer bewiesen. ' +
          'Man kann ihm Aufgaben anvertrauen und sicher sein, dass er alles daran setzen wird, ' +
          'sie richtig, skalierbar und nach besten Praktiken umzusetzen. ' +
          'Er nimmt neue Informationen sehr schnell auf und wendet sie direkt in der Praxis an.'
      },
      linkedInLink: 'https://www.linkedin.com/in/ievgen-bilion-434377192/',
    },
    {
      id: 3,
      name: 'Roger Fiebus',
      project: 'Kochwelt',
      text: {
        en: 'I worked with Waldemar as part of a group project during the Developer Academy and experienced him as a very pleasant, reliable, and team-oriented colleague. ' +
          'Waldemar brings himself calmly, focused, and solution-oriented to the joint work. ' +
          'He tackles tasks conscientiously, remains constructive even with inquiries or technical challenges, and is open to exchange within the team. ' +
          'I was particularly impressed by his dependable approach to collaboration. ' +
          'I can recommend Waldemar as a committed and eager-to-learn developer who integrates well into a team and is ready to take responsibility for his tasks.',
        de: 'Ich habe mit Waldemar im Rahmen einer Gruppenarbeit während der Developer Akademie zusammengearbeitet und ihn als sehr angenehmen, zuverlässigen und teamorientierten Kollegen erlebt. ' +
          'Waldemar bringt sich ruhig, konzentriert und lösungsorientiert in die gemeinsame Arbeit ein. ' +
          'Er geht Aufgaben gewissenhaft an, bleibt auch bei Rückfragen oder technischen Herausforderungen konstruktiv und ist offen für Austausch im Team. ' +
          'Besonders positiv war für mich seine verlässliche Art in der Zusammenarbeit. ' +
          'Ich kann Waldemar als engagierten und lernbereiten Entwickler empfehlen, der sich gut in ein Team einfügt und bereit ist, Verantwortung für seine Aufgaben zu übernehmen.'
      },
      linkedInLink: 'https://www.linkedin.com/in/roger-friebus-993913378/',
    },
  ];

  constructor() {
    this.translate.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang as 'en' | 'de';
    });
    this.currentLanguage = (this.translate.currentLang as 'en' | 'de') || 'en';
  }
}
