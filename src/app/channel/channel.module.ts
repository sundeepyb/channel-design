import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChannelComponent } from './channel.component';
import { routes } from './channel.router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ChannelComponent
  ],
  bootstrap: [
    ChannelComponent
  ]
})
export class ChannelModule {}
