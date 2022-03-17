export class Notebook
{
    #notebook = [];
    add(note)
    {
        this.#notebook.push(note);
    }

    find_tel(tel)
    {
        //console.log(this.#notebook);
        let val = this.#notebook.find((el) => {return el.find_tel(tel);});
        //console.log(val);
        return this.#check_meth(val, "no_number");
    }


    find_email(em)
    {
        let val = this.#notebook.find((el) => {return el.find_email(em);});
        return this.#check_meth(val, "no_email");
    }
    
    #to_obj(cls)
    {
        let obj = {
            teleph: cls.tel,
            email: cls.email,
            nme: cls.nme
        };
        if (cls._org)
        {
            obj.doing = cls.to_do;
            obj.lider = cls.lider;
        }
        else
        {
            obj.sex = cls.sex;
        }
        console.log(obj);
        return obj;
    }

    #check_meth(val, exp_s)
    {
        if (typeof val == 'undefined')
        {
            return exp_s;
        }
        else
        { 
            return this.#to_obj(val);
        }
    }
    print()
    {
        for (let i = 0; i < this.#notebook.length; i++)
        {
            console.log(this.#notebook[i]);
        }
    }
}