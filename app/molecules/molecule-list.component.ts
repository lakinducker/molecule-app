import { Component, OnInit }  from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { IMolecule } from './molecule';
import { MoleculeFilterPipe } from './molecule-filter.pipe';
import { MoleculeService } from './molecule.service';

@Component({
    templateUrl: 'app/molecules/molecule-list.component.html',
    styleUrls: ['app/molecules/molecule-list.component.css'],
    pipes: [MoleculeFilterPipe],
    directives: [ROUTER_DIRECTIVES]
})
export class MoleculeListComponent implements OnInit {
    pageTitle: string = 'Molecule List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '';
    errorMessage: string;
    molecules: IMolecule[];


    constructor(private _moleculeService: MoleculeService) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
           this._moleculeService.getMolecules()
                     .subscribe(
                       molecules => this.molecules = molecules,
                       error =>  this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Molecule List: ' + message;
    }
}
