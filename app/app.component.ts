import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { MoleculeListComponent } from './molecules/molecule-list.component';
import { MoleculeService } from './molecules/molecule.service';
import { MoleculeDetailComponent } from './molecules/molecule-detail.component';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/']">Molecule List</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    directives: [ROUTER_DIRECTIVES],
    providers: [MoleculeService,
                HTTP_PROVIDERS,
                ROUTER_PROVIDERS]
})
@Routes([
    { path: '/', component: MoleculeListComponent },
    { path: '/molecule/:id', component: MoleculeDetailComponent }
])
export class AppComponent {
    pageTitle: string = 'Molecule Mania';
}
