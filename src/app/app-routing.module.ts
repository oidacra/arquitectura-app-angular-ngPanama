import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'feature-a',
    loadChildren: () =>
      import('./features/feature-a/feature-a.module').then(
        (m) => m.FeatureAModule
      ),
  },
  {
    path: 'feature-b',
    loadChildren: () =>
      import('./features/feature-b/feature-b.module').then(
        (m) => m.FeatureBModule
      ),
  },
  {
    path: 'feature-c',
    loadChildren: () =>
      import('./features/feature-c/feature-c.module').then(
        (m) => m.FeatureCModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
