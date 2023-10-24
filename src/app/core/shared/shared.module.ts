import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextEditComponent } from './text-edit/text-edit.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, QuillModule],
  declarations: [TextEditComponent],
  exports: [TextEditComponent],
})
export class SharedModule {}
