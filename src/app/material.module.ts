import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material';



@NgModule({
    imports: [MatButtonModule, CommonModule, MatToolbarModule,MatFormFieldModule,MatInputModule,MatIconModule,MatCardModule,MatTabsModule,MatDialogModule],
    exports: [MatButtonModule, CommonModule, MatToolbarModule,MatFormFieldModule,MatInputModule,MatIconModule,MatCardModule,MatTabsModule,MatDialogModule]
  })
  export class MaterialModule { }