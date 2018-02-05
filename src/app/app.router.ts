import { Route } from '@angular/router';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'channels'},
  { loadChildren: 'app/channel/channel.module#ChannelModule', path: 'channels' }
];
