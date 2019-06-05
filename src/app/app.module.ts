import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { HomeComponent } from './pages/home/home.component';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedbackFormComponent } from './pages/feedback/feedback-form/feedback-form.component';

@NgModule({
    declarations: [
        AppComponent,
        FeedbackComponent,
        HomeComponent,
        FeedbackFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatMenuModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
