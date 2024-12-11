import { Component } from '@angular/core';
import { ThemeServiceService } from './common/services/theme-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'houpaci';
  isDarkMode?: boolean;
  constructor(private themeService: ThemeServiceService){
    this.themeService.darkMode$.subscribe((darkMode) => {
      this.isDarkMode = darkMode;
    });
  }
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  toggleMode() {
    this.themeService.toggleDarkMode();
  }
}
