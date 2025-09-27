import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'hackathons', component: HackathonsComponent },
  { path: 'dsa-tracker', component: DsaTrackerComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'tech-playground', component: TechPlaygroundComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'future-goals', component: FutureGoalsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }