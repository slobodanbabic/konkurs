import { Component, OnInit } from '@angular/core';
import { Kandidat } from 'src/app/model/kandidat';
import { KandidatService } from 'src/app/services/kandidat.service';

@Component({
  selector: 'app-accepted-table',
  templateUrl: './accepted-table.component.html',
  styleUrls: ['./accepted-table.component.css']
})
export class AcceptedTableComponent implements OnInit {

  data: [Kandidat];
  

  constructor(private candidateService: KandidatService) { }

  ngOnInit(): void {
    this.getAllAcceptedCandidates();
  }

  getAllAcceptedCandidates() {

    this.candidateService.findAllAcceptedCandidates().subscribe(res => {
      console.log(res)
      this.data = res;
    })
  } 

}
