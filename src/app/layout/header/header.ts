import { Component, inject } from '@angular/core';
import { MobileMenuService } from '../../services/mobile-menu.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private mobileMenu = inject(MobileMenuService);

  isMobileMenuOpen = this.mobileMenu.isOpen;

  closeMobileMenu() {
    this.mobileMenu.close();
  }

  scrollToWhyMe() {
  const element = document.querySelector('.whyMeSection');
  const navbarHeight = 104;
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
}
