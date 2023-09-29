"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = void 0;
var Graph = /** @class */ (function () {
    function Graph(numVertices) {
        this.numVertices = numVertices;
        this.matrix = new Array(numVertices).fill(0).map(function () { return new Array(numVertices).fill(0); });
        this.list = new Array(numVertices).fill(0).map(function () { return []; });
    }
    Graph.prototype.addEdge = function (source, destination) {
        this.matrix[source][destination] = 1;
        this.list[source].push(destination);
    };
    Graph.prototype.print = function () {
        console.log("Matrix de Adjacência:");
        for (var i = 0; i < this.numVertices; i++) {
            console.log(this.matrix[i].join(" "));
        }
        console.log("Lista de Adjacência:");
        for (var i = 0; i < this.numVertices; i++) {
            console.log(i + " -> " + this.list[i].join(" "));
        }
    };
    Graph.prototype.dfs = function (g, source, target) {
        var stack = [];
        var visited = new Array(g.numVertices).fill(false);
        var parent = new Array(g.numVertices).fill(-1);
        stack.push(source);
        while (stack.length > 0) {
            var vertex = stack.pop();
            if (vertex !== undefined && vertex <= this.numVertices) {
                if (vertex === target) {
                    // Encontrou o destino, retornar o caminho.
                    var path = [];
                    var current = vertex;
                    while (current !== source) {
                        path.unshift(current);
                        current = parent[current];
                    }
                    path.unshift(source);
                    return path;
                }
                if (!visited[vertex]) {
                    visited[vertex] = true;
                    for (var _i = 0, _a = g.list[vertex]; _i < _a.length; _i++) {
                        var neighbor = _a[_i];
                        if (!visited[neighbor]) {
                            stack.push(neighbor);
                            parent[neighbor] = vertex;
                        }
                    }
                }
            }
        }
        return [];
    };
    Graph.prototype.bfs = function (g, source, target) {
        var dist = new Array(g.numVertices).fill(-1);
        var ant = new Array(g.numVertices).fill(-1);
        var isVisited = new Array(g.numVertices).fill(false);
        var Q = [];
        Q.push(source);
        isVisited[source] = true;
        dist[source] = 0;
        while (Q.length > 0) {
            var p = Q.shift();
            if (p !== undefined && p <= this.numVertices) {
                for (var _i = 0, _a = g.list[p]; _i < _a.length; _i++) {
                    var v = _a[_i];
                    if (!isVisited[v]) {
                        dist[v] = dist[p] + 1;
                        ant[v] = p;
                        Q.push(v);
                        isVisited[v] = true;
                        if (v === target) {
                            // Encontrou o destino, retornar o caminho.
                            var path = [];
                            var current = v;
                            while (current !== source) {
                                path.unshift(current);
                                current = ant[current];
                            }
                            path.unshift(source);
                            return path;
                        }
                    }
                }
            }
        }
        return [];
    };
    return Graph;
}());
exports.Graph = Graph;
