/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */

// import { chartTable } from "./MVVM/Controller.js";
// 
// 
// // Define the element variable
// const myPie = document.getElementById('chart-table');
// 
// //TODO make this a function with an object passed as args in controller?
// // Create a new pie chart using the viewmodel
// // const pieChart = chartTable(
// //     'pie', // Type of chart to create
// //     [ 1, 2, 3, 4, 5 ], // Data
// //     myPie, // Element for rendering the pie chart
// //     // TODO add x,y for pie itself and scale to resize?
// //     800, // Width - only for svg/rect
// //     800, // Height - only for svg/rect
// //     [ '#4a4e4d', '#0e9aa7', '#3da4ab', '#f6cd61', '#fe8a71' ], // Colors
// //     50 // Stroke width
// // );
// 
// const pieChart = chartTable(
//     'pie', // Type of chart to create
//     [ 1, 2, 3, 4, 5 ], // Data
//     myPie, // Element for rendering the pie chart
//     
//     // TODO add x,y for pie itself and scale to resize?
//     800, // Width - only for svg/rect
//     800, // Height - only for svg/rect
//     50, // Stroke width
//     [ '#4a4e4d', '#0e9aa7', '#3da4ab', '#f6cd61', '#fe8a71' ], // Colors
//     // 
// );
// 
// 
// 
// //TODO YIKES.... why element is undefined again?
// //TODO where to implement update/rerender??
// // without stack overflow? needs a flag to only run once?
// // Console.log the SVG element
// console.log(myPie);
// //console.log(pieChart.data)// undefined
// myPie.data = [ 4, 5, 6 ]// => should be passed to controller => which forces a re-render with passing to pieChart ???

window.onload = () => {
class ChartTable {
    constructor (obj) {
        this.type = obj.type;
        this.element = obj.element;
        this.data = obj.data;
        this.background = {
            width: obj.background.width,
            height: obj.background.height,
            fill: obj.background.fill,
        };
        this.colors = obj.colors;
       
        this.count = 0;
        this.id = `chartTable${this.count}`
        
        
        // CREATE SVG CONTAINER AND COLORED RECT
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.svg.setAttribute('width', this.width);
        this.svg.setAttribute('height', this.height);
        this.bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        this.bg.setAttribute('width', '100%');
        this.bg.setAttribute('height', '100%');
        this.bg.setAttribute('fill', '#e2e2e2');
       
        this.svg.appendChild(this.bg);
    
        //this.svg.appendChild(g);

        // Append the SVG element to the chart container element
        this.element.appendChild(this.svg);
        
        
       this.proxy = new Proxy(this, {
           set: (target, property, value) => {

                // if (property === 'width' || 'height') {
                //    target.svg.setAttribute(property, value);  
                // }
                // if (property === 'fill') {
                //    target.bg.setAttribute('fill', value);
                // }
                target[ property ] = value;
                return true;
            },
            get: (target, property) => {
                return target[ property ];
            },
        });
    
        
        
    }
    get width() {
        console.log(`Getting width: ${this.background.width}`);
        return this.background.width;
    }
    set width(nv) {
        console.log(`Setting width: ${nv}`);
        this.svg.setAttribute('width', nv)
    }
    get height() {
        console.log(`Getting height: ${this.background.height}`);
        return this.background.height;
    } 
    set height(nv) {
        console.log(`Setting height: ${nv}`);
        this.svg.setAttribute('height', nv)
    }
    get fill() {
        console.log(`Getting fill: ${this.background.fill}`);
        return this.background.fill;
    }
    set fill(nv) {
        console.log(`Setting height: ${nv}`);
        this.bg.setAttribute('fill', nv)
    }
}
    
 
    let testElement = document.getElementById('chart-table')
    let testObject = new ChartTable(
        {
            type: 'pie',
            element: testElement,
            data: [ 1, 2, 3 ],
            background: { width: 600, height: 600, fill: 'grey' },
            colors: [ '#4a4e4d', '#0e9aa7', '#3da4ab', '#f6cd61', '#fe8a71' ]
        }
    )

    console.log(testObject)
    console.log(testObject);

    testObject.data = [ 5, 6, 7 ];
    console.log(testObject.proxy.data);

    testObject.fill = 'orange';
    testObject.width = 1000;
    testObject.data = [ 6, 7, 8, 9 ]
    console.log(testObject)
}