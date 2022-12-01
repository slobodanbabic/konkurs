import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceptedTableComponent } from './candidate/accepted-table/accepted-table.component';
import { CandidateTableComponent } from './candidate/candidate-table/candidate-table.component';
import { RejectedTableComponent } from './candidate/rejected-table/rejected-table.component';


const routes: Routes = [
  { path: "", component: CandidateTableComponent },
  { path: "find-rejected", component: RejectedTableComponent},
  { path: "find-accepted", component: AcceptedTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }