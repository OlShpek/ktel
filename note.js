export class Note
{
  _tel = [];
  _email = [];

  //tel is an array of telephones
  add_tel(tel)
  {
    this._tel = this._tel.concat(tel);
  }

  //email is an arraz of emails
  add_email(email)
  {
    this._email = this._email.concat(email);
  }

  find_tel(tel)
  {
    let val = this.#find_el(tel, this._tel);
    if (!val)
    {
      return val;
    }
    else
    {
      return "there isn't this number";
    }
  }

  find_email(email)
  {
    let val = this.#find_el(email, this._email);
    if (!val)
    {
      return val;
    }
    else
    {
      return "there isn't this email";
    }
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

  #find_el(el, arr)
  {
    let und = arr.find((el1) => {return el == el1;});
    if (typeof und !== 'undefined')
    {
      return und;
    }
    else
    {
      return false;
    }
  }
}
