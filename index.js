/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */

import { chartTable } from "./MVVM/Controller.js";


// Define the element variable
const myPie = document.getElementById('chart-table');

//TODO make this a function with an object passed as args in controller?
// Create a new pie chart using the viewmodel
const pieChart = chartTable.createChart(
    'pie', // Type of chart to create
    [ 1, 2, 3, 4, 5 ], // Data
    myPie, // Element for rendering the pie chart
    400, // Width
    400, // Height
    [ '#4a4e4d', '#0e9aa7', '#3da4ab', '#f6cd61', '#fe8a71' ], // Colors
    100 // Stroke width
).render();


//TODO YIKES.... why element is undefined again?
//TODO where to implement update/rerender??
// without stack overflow? needs a flag to only run once?
// Console.log the SVG element
console.log(myPie);
//console.log(pieChart.data)// undefined
myPie.data = [4,5,6]// => should be passed to controller => which forces a re-render with passing to pieChart ???
