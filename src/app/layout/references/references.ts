import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Reference } from './reference.interface';

@Component({
  selector: 'app-references',
  imports: [TranslatePipe],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  references: Reference[] = [
    {
      id: 1,
      name: 'Björn Sagmeister',
      project: 'Kochwelt',
      text:
        'In my experience, Waldemar is a motivated, highly organized individual. ' +
        'Together we developed a recipe-platform (Kochwelt) as part of the Developer Academy curriculum. ' +
        'He quickly adapts to any task, and his calm, level-headed approach has proven advantageous ' +
        'even in the most stressful situations.',
      linkedInLink: 'https://www.linkedin.com/in/bj%C3%B6rn-sagmeister-358558a5/',
    },
    {
      id: 2,
      name: 'Ievgen Bilion',
      project: 'Join',
      text:
        'Waldemar hat sich in unserem gemeinsamen Projekt als echter Teamplayer bewiesen. ' +
        'Man kann ihm Aufgaben anvertrauen und sicher sein, dass er alles daran setzen wird, ' +
        'sie richtig, skalierbar und nach besten Praktiken umzusetzen. ' +
        'Er nimmt neue Informationen sehr schnell auf und wendet sie direkt in der Praxis an.',
      linkedInLink: 'https://www.linkedin.com/in/ievgen-bilion-434377192/',
    },
    {
      id: 3,
      name: 'Roger Fiebus',
      project: 'Kochwelt',
      text:
        'Ich habe mit Waldemar im Rahmen einer Gruppenarbeit während der Developer Akademie . ' +
        'zusammengearbeitet und ihn als sehr angenehmen, zuverlässigen und teamorientierten Kollegen, ' +
        'erlebt.' +
        'Waldemar bringt sich ruhig, konzentriert und lösungsorientiert in die gemeinsame Arbeit ein.' +
        'geht Aufgaben gewissenhaft an, bleibt auch bei Rückfragen oder technischen Herausforderungen' +
        'konstruktiv und ist offen für Austausch im Team. Besonders positiv war für mich seine verlässliche' +
        'Art in der Zusammenarbeit.' +
        'Ich kann Waldemar als engagierten und lernbereiten Entwickler empfehlen, der sich gut in ein Team'+
        'einfügt und bereit ist, Verantwortung für seine Aufgaben zu übernehmen.',
      linkedInLink: '',
    },
  ];
}
