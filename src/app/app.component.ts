import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AboutMeComponent } from './main-content/about-me/about-me.component';
import { ContactComponent } from './main-content/contact/contact.component';
import { HeroComponent } from './main-content/hero/hero.component';
import { PortfolioComponent } from './main-content/portfolio/portfolio.component';
import { ReferencesComponent } from './main-content/references/references.component';
import { SkillsComponent } from './main-content/skills/skills.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainContentComponent, FooterComponent, ImprintComponent, PrivacyPolicyComponent, HeaderComponent, AboutMeComponent, ContactComponent, HeroComponent, PortfolioComponent, ReferencesComponent, SkillsComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myPortfolio';
}
