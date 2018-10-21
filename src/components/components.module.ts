import { NgModule } from '@angular/core';
import { ComiteComponent } from './comite/comite';
import { PartenaireComponent } from './partenaire/partenaire';
@NgModule({
	declarations: [ComiteComponent,
    PartenaireComponent],
	imports: [],
	exports: [ComiteComponent,
    PartenaireComponent]
})
export class ComponentsModule {}
