import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ParticlesComponent } from './components/particles/particles.component';

// Services
import { ThemeService } from './services/theme.service';
import { AnimationService } from './services/animation.service';
import { HackathonsComponent } from './components/hackathons/hackathons.component';
import { DsaTrackerComponent } from './components/dsa-tracker/dsa-tracker.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ResearchComponent } from './components/research/research.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TechPlaygroundComponent } from './components/tech-playground/tech-playground.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FutureGoalsComponent } from './components/future-goals/future-goals.component';
import { ResumeComponent } from './components/resume/resume.component';
import { AchievementsComponent } from './components/achievements/achievements.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    ScrollToTopComponent,
    LoaderComponent,
    ParticlesComponent,
    HackathonsComponent,
    DsaTrackerComponent,
    BlogsComponent,
    ResearchComponent,
    TimelineComponent,
    TechPlaygroundComponent,
    TestimonialsComponent,
    FutureGoalsComponent,
    ResumeComponent,
    AchievementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ThemeService, AnimationService],
  bootstrap: [AppComponent]
})
export class AppModule { }