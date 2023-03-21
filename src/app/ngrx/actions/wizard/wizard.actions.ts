import { createActionGroup, props } from '@ngrx/store';
 
export const WizardActions = createActionGroup({
  source: 'WIZARD',
  events: {
    'ADD_WIZARD_STEP': props<{ stepNumber: number }>(),
    'REMOVE_WIZARD_STEP': props<{ stepNumber: number }>(),
  },
});
 
