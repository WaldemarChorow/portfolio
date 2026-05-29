import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imprint',
  imports: [],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
export class Imprint implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  goHome() {
    this.router.navigate(['']);
  }
}
