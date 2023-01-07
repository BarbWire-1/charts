/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */


window.onload = () => {
   
    
    class ChartTable {
        //PRIVATES
        #element;
        #svg;
        #background
        
        constructor (obj) {
            
            this.type = obj.type;
            this.#element = obj.element;
            this.data = obj.data;
            this.style = obj.background
            this.colors = obj.colors;
            
            // CREATE AND APPEND SVG CONTAINER AND COLORED RECT
            // SAME FOR ALL TYPES - DON'T RE-RENDER FOR CHANGED CHART
            this.#svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            this.#element.appendChild(this.#svg);
            
            
            //TODO <g> element to hold the graphs : element.id+chart
        
           this.renderBackground(this.style)
            
            
           
        }
        renderBackground(style) {
            this.#element.style.left = style.x + 'px';
            this.#element.style.top = style.y + 'px';
            this.#element.style.width = style.width+'px';
            this.#element.style.height = style.height +'px';
            this.#element.style.backgroundColor =style.fill;
            
        }
        
//         get style() {
//             console.log(`Getting this._style: ${JSON.stringify(this._style)}`)
//             return this._style;
//         }
// 
//      
//         set style(newValue) {
//             this._style = newValue
//             
//             // let styleObj = this._style
//             //
//             // for (const property in styleObj) {
//             //     console.log(this.style[ property ])
//             //     this.style[property] = newValue;
//             //     this.renderBackground(this.style)
//             // }
//            
//             return this._style
//         }
        
        
        get width() { return obj.style.width };
        set width(newValue) {
            this.style.width = newValue;
            this.renderBackground(this.style)
        };
        get height() { return this.style.height };
        set height(newValue) {
            this.style.height = newValue;
            // console.log('Setting height: '+ this.style.height)
            this.renderBackground(this._style)
        };
        get fill() { return this.style.fill };
        set fill(newValue) {
            this.style.fill = newValue;
            this.renderBackground(this.style);
        };
        get x() { return this.style.x };
        set x(newValue) {
            this.style.x = newValue;
            this.renderBackground(this.style);
        };
        get y() { return this.style.y };
        set y(newValue) {
            this.style.y = newValue;
           this.renderBackground(this.style);
        }
        
    }
    
    
    // USAGE
    let testElement = document.getElementById('chart-table')
    let testObject = new ChartTable(
        {
            type: 'pie',
            element: testElement,
            data: [ 1, 2, 3 ],
            background: { x: 300, y: 300, width: 600, height: 600, fill: 'grey' },
            colors: [ '#4a4e4d', '#0e9aa7', '#3da4ab', '#f6cd61', '#fe8a71' ]
        }
    )

    console.log(`testObject: ${JSON.stringify(testObject)}`)
    console.log(`style: ${JSON.stringify(testObject.style)}`);
    //WHY??? not applied?
    testObject.fill = 'orange'

        //  testObject.data = [ 5, 6, 7 ];
        // testObject.fill = 'blue';
//      testObject.style.width = 30;
     testObject.width = 100;
    //   testObject.style.height= 600;
// //     testObject.data = [ 6, 7, 8, 9 ]
// //     testObject.type = 'bars'
//      testObject.style.x = 200
      testObject.y = 100
  
    console.log(testObject.style.width)// can read but not write here. check the structure!
    console.log(testObject.style)
    
    // position and dimensions of the background can currently be set on object and/or on element!
    //testElement.style.top = '300px'
    console.log(testElement)
}