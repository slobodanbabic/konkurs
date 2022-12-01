import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KandidatService } from '../services/kandidat.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private router: Router,private candidateService: KandidatService) { }

  ngOnInit(): void {
  }

  saveToFile() {
    const currentUrl = this.router.url;
    console.log(currentUrl)
    if(currentUrl == "/find-rejected"){     
      this.candidateService.saveRejectedCandidates().subscribe(res => {
        console.log(res)       
      })
    }
    else if(currentUrl == "/find-accepted"){      
      this.candidateService.saveAcceptedCandidates().subscribe(res => {
        console.log(res)      
      })
    }
    else if(currentUrl == "/"){
      console.log("snimam sve kandidate u datoteku")
      this.candidateService.saveAllCandidates().subscribe(res => {
        console.log(res)      
      })
    }
}}
