import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IMolecule } from './molecule';

@Injectable()
export class MoleculeService {
    private _moleculeUrl = 'api/molecules/molecules.json';

    constructor(private _http: Http) { }

    getMolecules(): Observable<IMolecule[]> {
        return this._http.get(this._moleculeUrl)
            .map((response: Response) => <IMolecule[]> response.json())
            // .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getMolecule(id: number): Observable<IMolecule> {
        return this.getMolecules()
            .map((molecules: IMolecule[]) => molecules.find(p => p.moleculeId === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
