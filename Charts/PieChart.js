/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
export class PieChart {
    constructor (data, element, width, height, colors, strokeWidth) {
        // to show highest val first
        //TODO . Not sure about this. Nice for static view, but would I like to change when data relations change?
        this.data = data.sort((a,b) => b - a);
        this.width = width;
        this.height = height;
        this.strokeWidth = strokeWidth;
        this.colors = colors;
        this.svg = null;
        
        this.element = element;
    }


    // Render method that creates and updates the pie chart
    render() {
    //     // Create the SVG element and set its dimensions
    //     this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    //     this.svg.setAttribute('width', this.width);
    //     this.svg.setAttribute('height', this.height);
    //     this.bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    //     this.bg.setAttribute('width', '100%');
    //     this.bg.setAttribute('height', '100%');
    //     this.bg.setAttribute('fill', '#e2e2e2');
    //    

        // Calculate the total value of the data
        const total = this.data.reduce((sum, value) => sum + value, 0);

        // Calculate the starting angle of the first pie chart segment
        let startAngle = 0;

        // Create the <g> element that will hold the pie chart
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        
        // TODO this transform to position and resize pie
        g.setAttribute('transform', `translate(${this.width / 2}, ${this.height / 2}) rotate(-90) scale(2,2)`);
        // Create the <path> elements that will represent the pie chart segments
        
      
        for (let i = 0; i < this.data.length; i++) {
            // adjust to fix outer r
            const radius = 100 - this.strokeWidth / 2;
            
            // Calculate the ending angle of the pie chart segment
            let endAngle = startAngle + (this.data[ i ] / total) * 2 * Math.PI
           
            // Calculate the starting and ending points of the pie chart segment
            const startPoint = { x: Math.cos(startAngle) * radius , y: Math.sin(startAngle) * radius };
            const endPoint = { x: Math.cos(endAngle) * radius, y: Math.sin(endAngle) * radius };
            // Determine whether a long or short arc should be drawn
            const arcFlag = Math.abs(endAngle - startAngle) >= Math.PI ? 1 : 0;
           
            // Generate the path data for the pie chart segment
            const pathData = `M ${startPoint.x} ${startPoint.y} A ${radius} ${radius} 0 ${arcFlag} 1 ${endPoint.x} ${endPoint.y} `;
            
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', pathData);
            path.setAttribute('stroke', this.colors[ i ]);
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke-width', this.strokeWidth || 10);


            // Append the <path> element to the <g> element
            g.appendChild(path);

            // Update the starting angle for the next pie chart segment
            startAngle = endAngle;
        }

        // Append background and g with slices to the SVG element
        this.svg.appendChild(this.bg);
        this.svg.appendChild(g);

        // Append the SVG element to the chart container element
        this.element.appendChild(this.svg);
    }
}
