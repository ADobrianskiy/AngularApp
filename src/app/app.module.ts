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
import { FeedbackFormComponent } from './pages/feedback/components/feedback-form/feedback-form.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { FeedbackEffects } from './pages/feedback/reducers/feedback.effects';

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
        MatProgressSpinnerModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([
            FeedbackEffects
        ]),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
