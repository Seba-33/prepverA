export class Rent {
    tipo : string
    descrizione : string
    tariffa : string
    valutazionemedia : string
    noleggi : string

    constructor(tipo : string, descrizione: string, tariffa : string, valutazionemedia: string, noleggi : string){
        this.tipo = tipo
        this.descrizione = descrizione
        this.tariffa = tariffa
        this.valutazionemedia = valutazionemedia
        this.noleggi = noleggi

    }
}