import { Kandidat } from "./kandidat";

export class KandidatList {
    results: Kandidat[];

    constructor(obj? :any){                
        this.results = obj && obj.map((x:any) => {return new Kandidat(x);}) || Array<Kandidat>();       
     }
}
