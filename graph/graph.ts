export class Graph {
  numVertices: number;
  matrix: number[][];
  list: number[][];

  constructor(numVertices: number) {
    this.numVertices = numVertices;
    this.matrix = new Array(numVertices).fill(0).map(() => new Array(numVertices).fill(0));
    this.list = new Array(numVertices).fill(0).map(() => []);
  }

  addEdge(source: number, destination: number) {
    this.matrix[source][destination] = 1;
    this.list[source].push(destination);
  }

  print() {
    console.log("Matrix de Adjacência:");
    for (let i = 0; i < this.numVertices; i++) {
      console.log(this.matrix[i].join(" "));
    }
    console.log("Lista de Adjacência:");
    for (let i = 0; i < this.numVertices; i++) {
      console.log(i + " -> " + this.list[i].join(" "));
    }
  }

  dfs(g: Graph, source: number, target: number): number[] {
  const stack: number[] = [];
  const visited: boolean[] = new Array(g.numVertices).fill(false);
  const parent: number[] = new Array(g.numVertices).fill(-1);

  stack.push(source);

  while (stack.length > 0) {
    const vertex = stack.pop();
    if (vertex !== undefined && vertex <= this.numVertices) {
      if (vertex === target) {
        // Encontrou o destino, retornar o caminho.
        const path: number[] = [];
        let current = vertex;
        while (current !== source) {
          path.unshift(current);
          current = parent[current];
        }
        path.unshift(source);
        return path;
      }

      if (!visited[vertex]) {
        visited[vertex] = true;

        for (const neighbor of g.list[vertex]) {
          if (!visited[neighbor]) {
            stack.push(neighbor);
            parent[neighbor] = vertex;
          }
        }
      }
    }
  }

  return [];
  }

  bfs(g: Graph, source: number, target: number): number[] {
  const dist: number[] = new Array(g.numVertices).fill(-1);
  const ant: number[] = new Array(g.numVertices).fill(-1);
  const isVisited: boolean[] = new Array(g.numVertices).fill(false);
  const Q: number[] = [];

  Q.push(source);
  isVisited[source] = true;
  dist[source] = 0;

  while (Q.length > 0) {
    const p = Q.shift();
    if (p !== undefined && p <= this.numVertices) {
      for (const v of g.list[p]) {
        if (!isVisited[v]) {
          dist[v] = dist[p] + 1;
          ant[v] = p;
          Q.push(v);
          isVisited[v] = true;
          if (v === target) {
            // Encontrou o destino, retornar o caminho.
            const path: number[] = [];
            let current = v;
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
  }
}