import { Component, OnInit } from '@angular/core';
import { Kandidat } from 'src/app/model/kandidat';
import { KandidatService } from 'src/app/services/kandidat.service';

@Component({
  selector: 'app-candidate-table',
  templateUrl: './candidate-table.component.html',
  styleUrls: ['./candidate-table.component.css'] 
})
export class CandidateTableComponent implements OnInit {
  data: [Kandidat];
  

  constructor(private candidateService: KandidatService) { }

  ngOnInit(): void {
    this.getAllCandidates();
  }

  getAllCandidates() {

    this.candidateService.getAllCandidates().subscribe(res => {
      console.log(res)
      this.data = res;
    })
  } 

}
