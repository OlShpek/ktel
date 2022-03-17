import {Note} from './note.js'

export class Person extends Note
{
  //full name, sex, telophones
  constructor (fll_name, sx, tel)
  {
    super();
    this.org = false;
    this.add_tel(tel);
    this.nme = fll_name;
    this.sex = sx;
  }

  set sex(sx)
  {
    this._sex = sx;
  }

  get sex()
  {
    return this._sex;
  }
}
