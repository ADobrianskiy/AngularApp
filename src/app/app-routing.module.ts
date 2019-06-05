import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'Home Page' } },
    { path: 'home', component: HomeComponent, data: { title: 'Home Page' } },
    { path: 'feedback', component: FeedbackComponent, data: { title: 'Leave Feedback' } }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
