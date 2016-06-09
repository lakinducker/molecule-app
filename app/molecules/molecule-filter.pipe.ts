import {  PipeTransform, Pipe } from '@angular/core';
import { IMolecule } from './molecule';

@Pipe({
    name: 'moleculeFilter'
})
export class MoleculeFilterPipe implements PipeTransform {

    transform(value: IMolecule[], filter: string): IMolecule[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((molecule: IMolecule) =>
            molecule.moleculeName.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
