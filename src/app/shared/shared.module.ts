import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ModalComponent,
    SearchPipe
  ],
  exports: [
    ModalComponent,
    SearchPipe,
    FormsModule
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class SharedModule { }
