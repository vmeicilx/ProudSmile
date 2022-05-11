import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EmailComponent } from './pages/email/email/email.component';

@NgModule({
    declarations: [EmailComponent],
    imports: [],
    exports: [EmailComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
})
export class ComponentsModule {}