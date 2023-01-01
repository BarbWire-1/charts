/*
 *   Copyright (c) 2022 
 *   All rights reserved.
 */

import { PieChart } from "./Pie.js";
// Model class representing the data for the chart table
class ChartTableModel {
    constructor (data) {
        this.data = data;
    }
}

// View class responsible for rendering the chart table
class ChartTableView {
    constructor (element) {
        this.element = element;
    }

    render(data) {
        // Render the chart table using the provided data
        //this.element.innerHTML = data
        console.log(data)
    }
}

// Viewmodel class that acts as a bridge between the model and the view
class ChartTableViewModel {
    constructor (model, view, element) {
        this.model = model;
        this.view = view;
        this.element = element;
    }

    // Builder methods
    // Method that sets the chart type and creates a new chart instance
    withType(type) {
        console.log(`Setting chart type: ${type}`); // Debugging line - ok
        this.type = type;
        return this;
    }

    // Method that updates the model with new data
    withData(data) {
        console.log(`Setting data: ${data}`); // Debugging line - ok
        this.model.data = data;
        return this;
    }

    // Method that updates the view with new element
    withElement(element) {
        console.log(`Setting element: ${JSON.stringify(element)}`); // Debugging line - UNDEFINED
        this.view.element = element;
        return this;
    }

    // Method that updates the view with new dimensions
    withDimensions(width, height, strokeWidth) {
        console.log(`Setting dimensions: ${width} x ${height}, strokeWidth: ${strokeWidth}`); // Debugging line - ok
        this.view.width = width;
        this.view.height = height;
        this.view.strokeWidth = strokeWidth || 10;
        
        return this;
    }

    withColors(colors) {
        console.log(`Setting colors: ${colors}`); // Debugging line -ok
        this.colors = colors;
        return this;
    }


    // Getter and setter functions for the type property
    get type() {
        console.log('Getting type:', this.view.type); // Debugging line - ok
        return this.view.type;
    }
    set type(value) {
        console.log('Setting type:', value); // Debugging line
        this.view.type = value;
    }
    
    // Method that creates a new chart based on the given type
    createChart(type, data, element, width, height, colors, strokeWidth) {
        switch (type) {
            case 'pie':
                return new PieChart(data, element, width, height, colors, strokeWidth);
            case 'bar':
                return new BarChart(data, element, width, height, colors, strokeWidth);
            case 'line':
                return new LineChart(data, element, width, height, colors, strokeWidth);
            default:
                throw new Error(`Unsupported chart type: ${type}`);
        }
    }


    // Build method that returns the constructed object
    build() {
        console.log('Building chart table:', this); // Debugging line // this includes all
        return this;
    }


    // Method that updates the model data and re-renders the chart table
    updateData(data) {
        this.model.data = data;
        this.view.render(this.model.data, this.view.element);
    }
    // Method that updates the type of the chart table and re-renders it
    updateType(type) {
        this.view.type = type;
        this.view.render(this.model.data, this.view.element);
    }

}

// Define the element variable
const element = document.getElementById('chart-table');

// Create a new chart table viewmodel using the builder pattern
const chartTable = new ChartTableViewModel(new ChartTableModel(), new ChartTableView())
    .withType('pie')
    .withData([ 1, 2, 3 ])
    .withElement(element)
    .build();

// Create a new pie chart using the viewmodel
const pieChart = chartTable.createChart(
    'pie', // Type of chart to create
    [ 1, 2, 3 ], // Data
    element, // Element for rendering the pie chart
    400, // Width
    400, // Height
    [ 'red', 'green', 'blue' ], // Colors
    20 // Stroke width
);

// Render the pie chart
pieChart.render();

// Console.log the SVG element
// console.log(pieChart.getElement());
