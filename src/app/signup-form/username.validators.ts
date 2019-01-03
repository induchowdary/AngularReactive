import { AbstractControl, ValidationErrors } from '@angular/forms';
import { resolve, reject } from 'q';

export class UsernameValidators{
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null{

        if((control.value as String).indexOf(' ')>=0)
            return {cannotContainSpace: true}
        return null;
    }
    static findTheRequiredLength(control: AbstractControl) : ValidationErrors | null{

        if((control.value as string).length<2)
            return {findTheRequiredLength: {
                reqLength: 3,
                actualLength: control.value.length
            }}
        return null;
    }
    static checkUniqueName(control: AbstractControl) : Promise<ValidationErrors | null>{

        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                if(control.value === 'Indu')
                    resolve ({checkUniqueName: true});
                else resolve(null);
            }, 2000)
        });
        

    }
   
}