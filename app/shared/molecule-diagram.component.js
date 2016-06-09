System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var MoleculeDiagramComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MoleculeDiagramComponent = (function () {
                function MoleculeDiagramComponent() {
                    this.ratingClicked = new core_1.EventEmitter();
                }
                MoleculeDiagramComponent.prototype.ngOnChanges = function () {
                    var graph = this.structure;
                    // console.log(graph);
                    // var width = 960,
                    //     height = 500;
                    var width = 500, height = 400;
                    var color = d3.scale.category20();
                    var radius = d3.scale.sqrt()
                        .range([0, 6]);
                    var svg = d3.select(".molecule-diagram-area").append("svg")
                        .attr("width", width)
                        .attr("height", height);
                    var force = d3.layout.force()
                        .size([width, height])
                        .charge(-400)
                        .linkDistance(function (d) { return radius(d.source.size) + radius(d.target.size) + 20; });
                    force
                        .nodes(graph.nodes)
                        .links(graph.links)
                        .on("tick", tick)
                        .start();
                    var link = svg.selectAll(".link")
                        .data(graph.links)
                        .enter().append("g")
                        .attr("class", "link");
                    link.append("line")
                        .style("stroke-width", function (d) { return (d.bond * 2 - 1) * 2 + "px"; });
                    link.filter(function (d) { return d.bond > 1; }).append("line")
                        .attr("class", "separator");
                    var node = svg.selectAll(".node")
                        .data(graph.nodes)
                        .enter().append("g")
                        .attr("class", "node")
                        .call(force.drag);
                    node.append("circle")
                        .attr("r", function (d) { return radius(d.size); })
                        .style("fill", function (d) { return color(d.atom); });
                    node.append("text")
                        .attr("dy", ".35em")
                        .attr("text-anchor", "middle")
                        .text(function (d) { return d.atom; });
                    function tick() {
                        link.selectAll("line")
                            .attr("x1", function (d) { return d.source.x; })
                            .attr("y1", function (d) { return d.source.y; })
                            .attr("x2", function (d) { return d.target.x; })
                            .attr("y2", function (d) { return d.target.y; });
                        node.attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MoleculeDiagramComponent.prototype, "structure", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], MoleculeDiagramComponent.prototype, "ratingClicked", void 0);
                MoleculeDiagramComponent = __decorate([
                    core_1.Component({
                        selector: 'mm-molecule-diagram',
                        templateUrl: 'app/shared/molecule-diagram.component.html',
                        styleUrls: ['app/shared/molecule-diagram.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MoleculeDiagramComponent);
                return MoleculeDiagramComponent;
            }());
            exports_1("MoleculeDiagramComponent", MoleculeDiagramComponent);
        }
    }
});
//# sourceMappingURL=molecule-diagram.component.js.map