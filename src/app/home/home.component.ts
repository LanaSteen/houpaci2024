import { Component } from '@angular/core';
import { ThemeServiceService } from '../common/services/theme-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isDarkMode?: boolean;
  constructor(private themeService: ThemeServiceService){
    this.themeService.darkMode$.subscribe((darkMode) => {
      this.isDarkMode = darkMode;
      console.log(this.isDarkMode)
    });
  }
}
