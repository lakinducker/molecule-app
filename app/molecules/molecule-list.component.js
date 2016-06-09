System.register(['@angular/core', '@angular/router', './molecule-filter.pipe', './molecule.service'], function(exports_1, context_1) {
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
    var core_1, router_1, molecule_filter_pipe_1, molecule_service_1;
    var MoleculeListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (molecule_filter_pipe_1_1) {
                molecule_filter_pipe_1 = molecule_filter_pipe_1_1;
            },
            function (molecule_service_1_1) {
                molecule_service_1 = molecule_service_1_1;
            }],
        execute: function() {
            MoleculeListComponent = (function () {
                function MoleculeListComponent(_moleculeService) {
                    this._moleculeService = _moleculeService;
                    this.pageTitle = 'Molecule List';
                    this.imageWidth = 50;
                    this.imageMargin = 2;
                    this.showImage = false;
                    this.listFilter = '';
                }
                MoleculeListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                MoleculeListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._moleculeService.getMolecules()
                        .subscribe(function (molecules) { return _this.molecules = molecules; }, function (error) { return _this.errorMessage = error; });
                };
                MoleculeListComponent.prototype.onRatingClicked = function (message) {
                    this.pageTitle = 'Molecule List: ' + message;
                };
                MoleculeListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/molecules/molecule-list.component.html',
                        styleUrls: ['app/molecules/molecule-list.component.css'],
                        pipes: [molecule_filter_pipe_1.MoleculeFilterPipe],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [molecule_service_1.MoleculeService])
                ], MoleculeListComponent);
                return MoleculeListComponent;
            }());
            exports_1("MoleculeListComponent", MoleculeListComponent);
        }
    }
});
//# sourceMappingURL=molecule-list.component.js.map