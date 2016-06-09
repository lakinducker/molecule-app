import { Component } from '@angular/core';
import { Router, OnActivate, RouteSegment } from '@angular/router';

import { IMolecule } from './molecule';
import { MoleculeService } from './molecule.service';
import { MoleculeDiagramComponent } from '../shared/molecule-diagram.component';

@Component({
    templateUrl: 'app/molecules/molecule-detail.component.html',
    directives: [MoleculeDiagramComponent]
})
export class MoleculeDetailComponent implements OnActivate {
    pageTitle: string = 'Molecule Detail';
    molecule: IMolecule;
    errorMessage: string;

    constructor(private _moleculeService: MoleculeService,
                private _router: Router) {
    }

    routerOnActivate(curr: RouteSegment): void {
        let id = +curr.getParam('id');
        this.getMolecule(id);
    }

    getMolecule(id: number) {
        this._moleculeService.getMolecule(id)
            .subscribe(
            molecule => this.molecule = molecule,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/']);
    }

}
