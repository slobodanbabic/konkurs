import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { KandidatList } from '../model/kandidat-list';

const baseURL = 'http://localhost:8080/candidate';
@Injectable({
  providedIn: 'root'
})
export class KandidatService {

  constructor(private http: HttpClient) { }

  getAllCandidates(): Observable<any> {
    return this.http.get(`${baseURL}/getAll`)
  }

  findAllRejectedCandidates(): Observable<any> {
    return this.http.get(`${baseURL}/find-rejected`)
  }

  findAllAcceptedCandidates(): Observable<any> {
    return this.http.get(`${baseURL}/find-accepted`)
  }


  saveRejectedCandidates(): Observable<any> {
    return this.http.get(`${baseURL}/save-rejected`)
  }

  saveAcceptedCandidates(): Observable<any> {
    return this.http.get(`${baseURL}/save-accepted`)
  }

  saveAllCandidates(): Observable<any> {
    return this.http.get(`${baseURL}/save-all`)
  }

}

