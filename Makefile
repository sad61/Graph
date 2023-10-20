build:
    tsc graph/index.ts graph/graph.ts

run:
    node graph/index.js ./graphs_txt/pcv4.txt

test:
    node graph/index.js ./graphs_txt/pcv10.txt
	node graph/index.js ./graphs_txt/pcv4.txt
	node graph/index.js ./graphs_txt/pcv50.txt
	node graph/index.js ./graphs_txt/pcv10.txt
	node graph/index.js ./graphs_txt/pcv177.txt

all: build run