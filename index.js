"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graph_1 = require("./graph");
var fs = require("fs");
if (process.argv.length < 3) {
    console.error("Você deve especificar o caminho do arquivo do grafo como argumento.");
    process.exit(1);
}
var filePath = process.argv[2];
function loadFrom(fileName) {
    var data = fs.readFileSync(fileName, 'utf-8');
    var lines = data.split('\n');
    var n = parseInt(lines[0], 10);
    var g = new graph_1.Graph(n);
    var l = 0;
    for (var i = 1; i < lines.length; i++) {
        var line = lines[i].trim();
        var numbers = line.split('\t');
        var c = 0;
        for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
            var num = numbers_1[_i];
            if (c === g.numVertices) {
                break;
            }
            var value = parseInt(num, 10);
            if (l < n && c < g.numVertices) {
                if (value > 0) {
                    g.addEdge(l, c);
                }
            }
            c++;
        }
        l++;
    }
    return g;
}
var gr = loadFrom(filePath);
gr.print();
var source = 173;
var target = 170;
var bfsPath = gr.bfs(gr, source, target);
if (bfsPath.length === 0) {
    console.log("Não há caminho entre os vértices.");
}
else {
    console.log("Caminho BFS:", bfsPath.join(" -> "));
}
var dfsPath = gr.dfs(gr, source, target);
if (dfsPath.length === 0) {
    console.log("Não há caminho entre os vértices.");
}
else {
    console.log("Caminho DFS:", dfsPath.join(" -> "));
}
