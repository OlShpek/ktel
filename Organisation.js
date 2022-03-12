import { Note } from "./note";

export class Organisation extends Note
{
    constructor(nm, td, ld)
    {
        super();
        this._org = true;
        this.nme = nm;
        this.to_do = td;
        this.lider = ld;
    }

    set nme(nm)
    {
        this.#name = nm;
    }

    get nme()
    {
        return this.#name;
    }

    set to_do(td)
    {
        this.#to_do = td;
    }

    get to_do()
    {
        return this.#to_do;
    }

    set lider(ld)
    {
        this.#lider = ld;
    }

    get lider()
    {
        return this.#lider;
    }
}