/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
class ChartTable {
    constructor (obj) {
        this.type = obj.type;
        this.element = obj.element;
        this.data = obj.data;
        this.background = obj.background;
        this.colors = obj.colors;
        this.svg = null;
    }
    // Create the SVG element and set its dimensions
    render() {
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.svg.setAttribute('width', this.width);
        this.svg.setAttribute('height', this.height);
        this.bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        this.bg.setAttribute('width', '100%');
        this.bg.setAttribute('height', '100%');
        this.bg.setAttribute('fill', '#e2e2e2');
        
        
    }
    
}


let testElement = document.getElementById('chart-table')
let testObject = new ChartTable(
    {
        type: 'pie',
        element: testElement,
        data: [ 1, 2, 3 ],
        background: { width: 600, height: 600, backgroundColor: 'grey' },
        colors: [ '#4a4e4d', '#0e9aa7', '#3da4ab', '#f6cd61', '#fe8a71' ]
    }
)