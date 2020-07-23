import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RotatingtextComponent } from './component/rotatingtext/rotatingtext.component';
import { GirdListViewComponent } from './component/gird-list-view/gird-list-view.component';
import { CountdownTimerComponent } from './component/countdown-timer/countdown-timer.component';
import { DynamicTableComponent } from './component/dynamic-table/dynamic-table.component';
import { DynamicDivOnscrollComponent } from './component/dynamic-div-onscroll/dynamic-div-onscroll.component';
import { CountdownTimerServiceComponent } from './component/countdown-timer-service/countdown-timer-service.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: RotatingtextComponent },
  { path: 'view', component: GirdListViewComponent },
  { path: 'timer', component: CountdownTimerComponent },
  { path: 'serviceTimer', component: CountdownTimerServiceComponent },
  { path: 'dynamicTable', component: DynamicTableComponent },
  { path: 'dynamicDiv', component: DynamicDivOnscrollComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
