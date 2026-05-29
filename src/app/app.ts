import { Component, signal } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from './layout/header/header';
import { Navbar } from './layout/navbar/navbar';
import { AboutMe } from './layout/about-me/about-me';
import { Skills } from './layout/skills/skills';
import { Projects } from './layout/projects/projects';
import { Contact } from './layout/contact/contact';
import { References } from './layout/references/references';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Header, Navbar, AboutMe, Skills, Projects, Contact, References, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
  isHome = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isHome = this.router.url === '' || this.router.url === '/';
    });
  }
}
