import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectComponent } from './operators/subject/subject.component';
import { SwitchMapComponent } from './operators/switch-map/switch-map.component';

const routes: Routes = [
  { path: "subject", component: SubjectComponent },
  { path: "switchmap", component: SwitchMapComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
