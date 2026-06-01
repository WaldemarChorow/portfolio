import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileMenuService } from '../../services/mobile-menu.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  private mobileMenu = inject(MobileMenuService);

  isMobileMenuOpen = this.mobileMenu.isOpen;

  toggleMobileMenu() {
    this.mobileMenu.toggle();
  }

  closeMobileMenu() {
    this.mobileMenu.close();
  }
}
