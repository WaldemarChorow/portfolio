import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-legalprivacy',
  imports: [],
  templateUrl: './legalprivacy.html',
  styleUrl: './legalprivacy.scss',
})
export class Legalprivacy {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['']);
  }
}
