import { Component } from '@angular/core';

interface Project {
  name: string;
  duration: string;
  about: string;
  workProcess: string;
  groupWork: string;
  technologies: { src: string; alt: string }[];
  liveLink: string;
  githubLink: string;
  image: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  activeIndex = 0;

  projects: Project[] = [
    {
      name: 'El Polo Loco',
      duration: 'Duration: 3 weeks',
      about: 'A 2D jump-and-run game built with vanilla JavaScript.',
      workProcess: 'Structured with OOP classes for each game element.',
      groupWork: 'Solo project — full game logic, animations and level design.',
      technologies: [
        { src: '/assets/icons/Javascript.svg', alt: 'JavaScript' },
        { src: '/assets/icons/HTML.svg', alt: 'HTML' },
        { src: '/assets/icons/CSS.svg', alt: 'CSS' },
      ],
      liveLink: 'https://waldemarchorow.developerakademie.net/projekte/elpololoco/index.html',
      githubLink: 'https://github.com/WaldemarChorow/elpololoco.git',
      image: '/assets/images/projects/elpololoco.png',
    },
    {
      name: 'Join',
      duration: 'Duration: 4 weeks',
      about: 'A Kanban-based task management tool with drag & drop.',
      workProcess: 'Built with Angular, Firebase backend and real-time updates.',
      groupWork: 'Team project with 3 devs. I built the board view and drag & drop.',
      technologies: [
        { src: '/assets/icons/angular.svg', alt: 'Angular' },
        { src: '/assets/icons/typescript.svg', alt: 'TypeScript' },
        { src: '/assets/icons/HTML.svg', alt: 'HTML' },
      ],
      liveLink: '#',
      githubLink: '#',
      image: '/assets/images/projects/join.svg',
    },
    {
      name: 'Pokédex',
      duration: 'Duration: 2 weeks',
      about: 'A Pokédex app fetching data from the PokéAPI.',
      workProcess: 'Vanilla JS with REST API and lazy loading.',
      groupWork: 'Solo project — API integration, UI and responsive layout.',
      technologies: [
        { src: '/assets/icons/Javascript.svg', alt: 'JavaScript' },
        { src: '/assets/icons/HTML.svg', alt: 'HTML' },
        { src: '/assets/icons/CSS.svg', alt: 'CSS' },
        { src: '/assets/icons/Api.svg', alt: 'Rest API' },
      ],
      liveLink: 'https://waldemarchorow.developerakademie.net/projekte/pokedex/index.html',
      githubLink: 'https://github.com/WaldemarChorow/pokedex.git',
      image: '/assets/images/projects/pokedex.png',
    },
  ];

  setActive(index: number) {
    this.activeIndex = index;
  }
}
