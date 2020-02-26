import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'my-team',
    loadChildren: () => import('./../my-team/my-team.module').then(mod => mod.MyTeamModule),
  },
  {
    path: 'create-league',
    loadChildren: () => import('../create-league/create-league.module').then(mod => mod.CreateLeagueModule),
  },
  {
    path: 'join-auction',
    loadChildren: () => import('../join-league/join-league.module').then(mod => mod.JoinAuctionModule),
  },
  {
    path: 'live-auction',
    loadChildren: () => import('./../live-auction/live-auction.module').then(mod => mod.LiveAuctionModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./../profile/profile-routing.module').then(mod => mod.ProfileRoutingModule),
  },
  {
    path: 'my-account',
    loadChildren: () => import('./../my-account/my-account.module').then(mod => mod.MyAccountModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
