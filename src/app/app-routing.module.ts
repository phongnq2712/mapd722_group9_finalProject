import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  {
    path: 'groupnine',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'patientdetail/:id',
    loadChildren: () => import('./patientdetail/patientdetail.module').then( m => m.PatientdetailPageModule)
  },
  {
    path: 'addpatient',
    loadChildren: () => import('./addpatient/addpatient.module').then( m => m.AddpatientPageModule)
  },
  {
    path: 'viewclinicalrecords',
    loadChildren: () => import('./viewclinicalrecords/viewclinicalrecords.module').then( m => m.ViewclinicalrecordsPageModule)
  },
  {
    path: 'addtask',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}