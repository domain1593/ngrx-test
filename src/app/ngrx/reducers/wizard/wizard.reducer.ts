import { createReducer, on } from '@ngrx/store';

import { WizardActions } from '../../actions/wizard/wizard.actions';
import { Wizardinterface } from 'src/app/interfaces/wizard-interface';

export const initialState: Array<Wizardinterface> = [];

export const wizardReducer = (option: string) => {
    
   let selectOption = {}
   // let wizardFunction = (wizardItem: string) => {

   //  return option[wizardItem]
    

   // }



}