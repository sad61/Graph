build:
    tsc index.ts graph.ts

run:
    node index.js ./graphs_txt/pcv4.txt

test:
    node index.js ./graphs_txt/pcv10.txt
	node index.js ./graphs_txt/pcv4.txt
	node index.js ./graphs_txt/pcv50.txt
	node index.js ./graphs_txt/pcv10.txt
	node index.js ./graphs_txt/pcv177.txt

all: build run