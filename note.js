export class Note
{
  #is_org;
  _tel = [];
  _email = [];


  //tel is an array of telephones
  add_tel(tel)
  {
    this._tel.push(tel);
  }

  //email is an arraz of emails
  add_email(email)
  {
    this._email.push(email);
  }

  find_tel(tel)
  {
    return this.#find_el(tel, this._tel);
  }

  find_email(email)
  {
    return this.#find_el(email, this._email);
  }

  is_this_name(name)
  {
    if (this._name == name)
    {
      return true;
    }
    return false;
  }

  is_the_part_of_name(name)
  {
    let str = this._name.split(' ');
    let val = str.find((el) => {return el == name;});
    if (typeof val == 'undefined')
    {
      return false;
    }
    return true;
  }
  

  get email()
  {
    return this._email;
  }

  get tel()
  {
    return this._tel;
  }

  set _org(_b)
  {
    this.#is_org = _b;
  }

  get is_org()
  {
    return this.#is_org;
  }

  set nme(nm)
  {
    this._name = nm;
  }

  get nme()
  {
    return this._name;
  }


  #find_el(el, arr)
  {
    let und = arr.find((el1) => { return el == el1;});
    if (typeof und !== 'undefined')
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
