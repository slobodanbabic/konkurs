export class Kandidat {

    id: number;
    ime: String;
    prezime: String;
    jmbg: String;
    god_rodjenja: String;
    email: String;
    telefon: String;
    napomena: String;
    primljen: boolean;
    azuriran: String;

    constructor(obj?: any) {
        this.id = obj && obj.id || 0,
            this.ime = obj && obj.ime || "",
            this.prezime = obj && obj.prezime || "",
            this.jmbg = obj && obj.jmbg || "",
            this.god_rodjenja = obj && obj.god_rodjenja || "",
            this.email = obj && obj.email || "",
            this.telefon = obj && obj.telefon || "",
            this.napomena = obj && obj.napomena || "",
            this.primljen = obj && obj.primljen || false,
            this.azuriran = obj && obj.azuriran || ""
    }
}
