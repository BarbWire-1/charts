/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */


window.onload = () => {
    
    class ChartTable {
        
        constructor (obj) {
            
            this.type = obj.type;
            this.element = obj.element;
            this.data = obj.data;
           
            this.style = obj.style
            
            this.colors = obj.colors;
            
            //TODO decide if this is obsolete
            this.count = 0;
            this.id = `chartTable${this.count}`
           
            
            // CREATE AND APPEND SVG CONTAINER AND COLORED RECT
            // SAME FOR ALL TYPES - DON'T RE-RENDER FOR CHANGED CHART
            this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            this.svg.setAttribute('width', this.style.width);
            this.svg.setAttribute('height', this.style.height);
            
            this.bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            this.bg.setAttribute('width', '100%');
            this.bg.setAttribute('height', '100%');
            this.bg.setAttribute('fill', this.style.fill);
            
            //TODO <g> element to hold the graphs
        
           
            
            this.svg.appendChild(this.bg);
            this.element.appendChild(this.svg);
        }
         
    



        // // DEFINE STYLE-PROPS FOR HOLDING BACKGROUND
        // get style() {
        //     console.log('Getting style: ' + JSON.stringify(this._style));
        //     return this._style;
        // }
        // set style(newValue) {
        //     console.log('Setting style: ' + JSON.stringify(newValue));
        //    
        //     this._style = newValue;
        //     this.svg?.setAttribute('width', this._style.width);
        //     this.svg?.setAttribute('height', this.style.height);
        //     this.bg?.setAttribute('fill', this.style.fill);
        // }

        
       
    }
    
    
   


    
    
    
   
    
    // WORKING BUT ON INSTANCE
    Object.defineProperty(ChartTable.prototype, 'width', {
        get() {
            // console.log(this.style)//{x: 300, y: 300, width: 600, height: 600, fill: 'orange'}
            console.log('Getting width: ' + this.style.width)
            return this.style.width
        },
        set(newValue) {
            console.log('Setting width: ' + newValue)
            this.style.width = newValue
            this.svg.setAttribute('width', newValue)
           
        }
    });
    
    Object.defineProperty(ChartTable.prototype, 'height', {
        get() {
            
            console.log('Getting height: ' + this.style.height)
            return this.style.height
        },
        set(newValue) {
            console.log('Setting height: ' + newValue)
            this.svg.setAttribute('height', newValue)
        }
    });
    
    Object.defineProperty(ChartTable.prototype, 'fill', {
        get() {
            console.log('Getting fill: ' + this.style.fill)
            return this.style.fill
        },
        set(newValue) {
            this.bg.setAttribute('fill', newValue)
        }
    });
    Object.defineProperty(ChartTable.prototype, 'x', {
        get() { return this.style.x },
        set(newValue) {
            this.element.style.left = newValue +'px'
        }
    });
    Object.defineProperty(ChartTable.prototype, 'y', {
        get() { return this.style.y },
        set(newValue) {
            this.element.style.top = newValue + 'px'
        }
    });
    
    
    
    // USAGE
    let testElement = document.getElementById('chart-table')
    let testObject = new ChartTable(
        {
            type: 'pie',
            element: testElement,
            data: [ 1, 2, 3 ],
            style: {x: 300, y: 300, width: 600, height: 600, fill: 'grey' },
            colors: [ '#4a4e4d', '#0e9aa7', '#3da4ab', '#f6cd61', '#fe8a71' ]
        }
    )

    console.log(testObject)
    console.log(testObject);
    //WHY??? not applied?
    testObject.style.fill= 'orange'

    testObject.data = [ 5, 6, 7 ];
    testObject.fill = 'blue';
    testObject.style.width = 30;// not applied
    testObject.width = 700;
    testObject.height = 200;
    testObject.data = [ 6, 7, 8, 9 ]
    testObject.type = 'bars'
    testObject.x = 100
    testObject.y = 100
    console.log(testObject.style)
    console.log(testObject.style.width)// can read but not write here. check the structure!
    console.log(testObject.style.fill)
    // testElement.style.top = '300px'
    //TODO this way the background-el IS background. Not sure whether to keep this or not
    //console.log(testObject.background.style.fill = 'green')
}