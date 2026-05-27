import { Component } from '@angular/core';
import { Reference } from './reference.interface';

@Component({
  selector: 'app-references',
  imports: [],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  references: Reference[] = [
    { name: 'Björn', project: 'Bestell App', text: 'dfsdfsdfsdfsdf', linkedInLink: '' },

    { name: 'Björn', project: 'Bestell App', text: 'dfsdfsdfsdfsdf', linkedInLink: '' },

    { name: 'Björn', project: 'Bestell App', text: 'dfsdfsdfsdfsdf', linkedInLink: '' },

    { name: 'Björn', project: 'Bestell App', text: 'dfsdfsdfsdfsdf', linkedInLink: '' },
  ];
}
