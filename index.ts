import { Graph } from "./graph";
import * as fs from 'fs'

if (process.argv.length < 3) {
  console.error("Você deve especificar o caminho do arquivo do grafo como argumento.");
  process.exit(1);
}

const filePath = process.argv[2];

function loadFrom(fileName: string): Graph {
  const data = fs.readFileSync(fileName, 'utf-8');
  const lines = data.split('\n');
  const n = parseInt(lines[0], 10);

  const g = new Graph(n);

  let l = 0;
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    const numbers = line.split('\t');
    let c = 0;
    for (const num of numbers) {
      if (c === g.numVertices) {
        break;
      }
      const value: number = parseInt(num, 10);
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


const gr: Graph = loadFrom(filePath);
gr.print();

const source = 173;
const target = 170;

const bfsPath = gr.bfs(gr, source, target);
if (bfsPath.length === 0) {
  console.log("Não há caminho entre os vértices.");
} else {
  console.log("Caminho BFS:", bfsPath.join(" -> "));
}

const dfsPath = gr.dfs(gr, source, target);
if (dfsPath.length === 0) {
  console.log("Não há caminho entre os vértices.");
} else {
  console.log("Caminho DFS:", dfsPath.join(" -> "));
}

