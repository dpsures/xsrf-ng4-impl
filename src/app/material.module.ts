import { NgModule } from '@angular/core';

import { 
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule
   } from "@angular/material";
  import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
    imports: [
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatListModule,
        MatGridListModule,
        MatButtonModule,
        FlexLayoutModule
    ],
    exports: [
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatListModule,
        MatGridListModule,
        MatButtonModule,
        FlexLayoutModule
    ],
    declarations: [],
    providers: [],
})
export class MaterialModule { }
