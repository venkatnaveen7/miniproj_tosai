import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StatesComponent } from './states/states.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { HelplineComponent } from './helpline/helpline.component';
import { SummaryComponent } from './summary/summary.component';
import { DistrictInfoComponent } from './district-info/district-info.component';

const routes: Routes = [
  { path: '', component: SummaryComponent },
  { path: 'states', component: StatesComponent },
  { path: 'hospitals', component: HospitalsComponent },
  { path: 'helpline', component: HelplineComponent },
  { path: 'districts', component: DistrictInfoComponent },
  { path: '**', component: SummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
