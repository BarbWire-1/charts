/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */


window.onload = () => {
    
    class ChartTable {
        //PRIVATES
        #svg;
        #bg;
        #element;
        
        constructor (obj) {
            
            this.type = obj.type;
            this.#element = obj.element;
            this.data = obj.data;
            this.style = obj.style
            //this._style = obj.style
            this.colors = obj.colors;
            
            // CREATE AND APPEND SVG CONTAINER AND COLORED RECT
            // SAME FOR ALL TYPES - DON'T RE-RENDER FOR CHANGED CHART
            this.#svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            this.#svg.setAttribute('width', this.style.width);
            this.#svg.setAttribute('height', this.style.height);
            
            this.#bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            this.#bg.setAttribute('width', '100%');
            this.#bg.setAttribute('height', '100%');
            this.#bg.setAttribute('fill', this.style.fill);
            
            //TODO <g> element to hold the graphs : element.id+chart
        
           
            
            this.#svg.appendChild(this.#bg);
            this.#element.appendChild(this.#svg);
           
        }
       
       
        //         // DEFINE STYLE-PROPS FOR HOLDING BACKGROUND
        //         get style() { // returns wrong values as setter not working on style
        //                 console.log('Getting style: ' + JSON.stringify(this._style));
        //                 return this._style;
        //             }
        //         set style(newValue) { // not called
        //                 console.log('Setting style: ' + JSON.stringify(newValue));
        //
        //                 this._style = newValue;
        //                 this.#svg.setAttribute('width', this._style.width);
        //                 this.#svg.setAttribute('height', this._style.height);
        //                 this.#bg.setAttribute('fill', this._style.fill);
        //             }
        
        get style() {
            return {
                get width() { return this.style.width },
                get height() { return this.style.height },
                get fill() { return this.style.fill },
                get x() { return this.style.x },
                get y() { return this.style.y },
            }
        };
        set style(newValue) {
            style.width = {
                this.style.width = newValue;
                this.#svg.setAttribute('width', newValue)
            }
        }
        
        
        
        get width() { return this.style.width };
        set width(newValue) {
            this.style.width = newValue;
            this.#svg.setAttribute('width', newValue)
        };
        get height() { return this.style.height };
        set height(newValue) {
            this.style.height = newValue;
            this.#svg.setAttribute('height', newValue)
        };
        get fill() { return this.style.fill };
        set fill(newValue) {
            this.style.fill = newValue;
            this.#bg.setAttribute('fill', newValue)
        };
        get x() { return this.style.x };
        set x(newValue) {
            this.style.x = newValue;
            this.#element.style.left = newValue + 'px'
        };
        get y() { return this.style.y };
        set y(newValue) {
            this.style.y = newValue;
            this.#element.style.top = newValue + 'px'
        }
        
    }
    
    
    // USAGE
    let testElement = document.getElementById('chart-table')
    let testObject = new ChartTable(
        {
            type: 'pie',
            element: testElement,
            data: [ 1, 2, 3 ],
            style: { x: 300, y: 300, width: 600, height: 600, fill: 'grey' },
            colors: [ '#4a4e4d', '#0e9aa7', '#3da4ab', '#f6cd61', '#fe8a71' ]
        }
    )

    console.log(`testObject: ${JSON.stringify(testObject)}`)
    console.log(`style: ${JSON.stringify(testObject.style)}`);
    //WHY??? not applied?
    testObject.style.fill = 'orange'

    testObject.data = [ 5, 6, 7 ];
    testObject.fill = 'blue';
    testObject.style.width = 30;// not applied
    testObject.width = 700;
    testObject.height = 200;
    testObject.data = [ 6, 7, 8, 9 ]
    testObject.type = 'bars'
    testObject.x = 200
    testObject.y = 100
   
    console.log(testObject.style.width)// can read but not write here. check the structure!
    console.log(testObject.style)
    
    // position and dimensions of the background can currently be set on object and/or on element!
    testElement.style.top = '300px'
    console.log(testElement)
}