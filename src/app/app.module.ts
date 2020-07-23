import { MyOrderByPipe } from './component/shared/sort.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RotatingtextComponent } from './component/rotatingtext/rotatingtext.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { GirdListViewComponent } from './component/gird-list-view/gird-list-view.component';

import { CountdownTimerComponent } from './component/countdown-timer/countdown-timer.component';
import { CounterDirective } from './component/countdown-timer/counter.directive';
import { DynamicTableComponent } from './component/dynamic-table/dynamic-table.component';
import { DynamicDivOnscrollComponent } from './component/dynamic-div-onscroll/dynamic-div-onscroll.component';
import { CountdownTimerServiceComponent } from './component/countdown-timer-service/countdown-timer-service.component';

import { ToggleDirective } from './component/shared/toggle.directive';
import { CountdownTimerService } from './component/countdown-timer-service/countdown-timer.service';
import { HeroComponent } from './component/countdown-timer-service/hero/hero.component';
@NgModule({
  declarations: [
    AppComponent,
    RotatingtextComponent,
    NavbarComponent,
    GirdListViewComponent,
    ToggleDirective,
    CountdownTimerComponent,
    CounterDirective,
    DynamicTableComponent,
    DynamicDivOnscrollComponent,
    CountdownTimerServiceComponent,
    HeroComponent,
    MyOrderByPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CountdownTimerService, MyOrderByPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
