System.register(['@angular/core', '@angular/router', './molecule.service', '../shared/molecule-diagram.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, molecule_service_1, molecule_diagram_component_1;
    var MoleculeDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (molecule_service_1_1) {
                molecule_service_1 = molecule_service_1_1;
            },
            function (molecule_diagram_component_1_1) {
                molecule_diagram_component_1 = molecule_diagram_component_1_1;
            }],
        execute: function() {
            MoleculeDetailComponent = (function () {
                function MoleculeDetailComponent(_moleculeService, _router) {
                    this._moleculeService = _moleculeService;
                    this._router = _router;
                    this.pageTitle = 'Molecule Detail';
                }
                MoleculeDetailComponent.prototype.routerOnActivate = function (curr) {
                    var id = +curr.getParam('id');
                    this.getMolecule(id);
                };
                MoleculeDetailComponent.prototype.getMolecule = function (id) {
                    var _this = this;
                    this._moleculeService.getMolecule(id)
                        .subscribe(function (molecule) { return _this.molecule = molecule; }, function (error) { return _this.errorMessage = error; });
                };
                MoleculeDetailComponent.prototype.onBack = function () {
                    this._router.navigate(['/']);
                };
                MoleculeDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/molecules/molecule-detail.component.html',
                        directives: [molecule_diagram_component_1.MoleculeDiagramComponent]
                    }), 
                    __metadata('design:paramtypes', [molecule_service_1.MoleculeService, router_1.Router])
                ], MoleculeDetailComponent);
                return MoleculeDetailComponent;
            }());
            exports_1("MoleculeDetailComponent", MoleculeDetailComponent);
        }
    }
});
//# sourceMappingURL=molecule-detail.component.js.map