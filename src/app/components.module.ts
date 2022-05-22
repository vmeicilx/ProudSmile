import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BundallEmailComponent } from './pages/bundall-email/bundall-email.component';
import { EmailComponent } from './pages/email/email/email.component';

@NgModule({
    declarations: [EmailComponent, BundallEmailComponent],
    imports: [],
    exports: [EmailComponent, BundallEmailComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
})
export class ComponentsModule {}