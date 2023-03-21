import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./container/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'wizard',
    pathMatch: 'full'
  },
  {
    path: 'wizard',
    loadChildren: () => import('./container/wizard/wizard.module').then( m => m.WizardPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
