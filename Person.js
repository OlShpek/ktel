import {Note} from './note.js'

class Person extends Note
{
  constructor (fll_name, sx, tel)
  {
    super();
    this.org = false;
    this.add_tel(tel);
    this.full_name = fll_name;
    this.sex = sx;
  }

  set full_name(full_name)
  {
    this._full_name = full_name;
  }

  set sex(sx)
  {
    this._sex = sx;
  }

  get full_name()
  {
    return this._full_name;
  }

  get sex()
  {
    return this._sex;
  }
}

let p1 = new Person("A A", "M", "4567890");
console.log(p1.full_name);
console.log(p1.sex);
console.log(p1.tel);
p1.add_tel("345678");
console.log(p1.tel);
p1.add_email("dfgh");
console.log(p1.email);
