import { Component, OnInit } from '@angular/core';
import { Kandidat } from 'src/app/model/kandidat';
import { KandidatService } from 'src/app/services/kandidat.service';

@Component({
  selector: 'app-rejected-table',
  templateUrl: './rejected-table.component.html',
  styleUrls: ['./rejected-table.component.css']
})
export class RejectedTableComponent implements OnInit {

  data: [Kandidat];
  

  constructor(private candidateService: KandidatService) { }

  ngOnInit(): void {
    this.getAllRejectedCandidates();
  }

  getAllRejectedCandidates() {

    this.candidateService.findAllRejectedCandidates().subscribe(res => {
      console.log(res)
      this.data = res;
    })
  } 
}
