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
            this.background = {
                // x: obj.background.x,
                // y: obj.background.y,
                width: obj.background.width,
                height: obj.background.height,
                fill: obj.background.fill,
            };
            this.colors = obj.colors;
            
            //TODO decide if this is obsolete
            this.count = 0;
            this.id = `chartTable${this.count}`
            
            
            // CREATE AND APPEND SVG CONTAINER AND COLORED RECT
            // SAME FOR ALL TYPES - DON'T RE-RENDER FOR CHANGED CHART
            this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            this.element.appendChild(this.svg);
            
            this.svg.setAttribute('width', this.width);
            this.svg.setAttribute('height', this.height);
            this.background = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            this.svg.appendChild(this.background);
            
            this.background.setAttribute('width', '100%');
            this.background.setAttribute('height', '100%');
            this.background.setAttribute('fill', '#e2e2e2');
            
            // this.element.style.left = this.background.x +'px'
        
            //TODO <g> element to hold the graphs
            //TODO why is this.svg undefined without the use of the proxy????
            // although I don't even get/set them here?
            this.proxy = new Proxy(this, {
                set: (target, property, value) => {
                        target[ property ] = value;
                        return true;
                    },
                    get: (target, property) => {
                        return target[ property ];
                    },
                });
        
        }
    
    };
    
    // DEFINE STYLE-PROPS FOR HOLDING BACKGROUND
    Object.defineProperty(ChartTable.prototype, 'width', {
        get() { return this.background.width },
        set(newValue) {
            
            this.svg.setAttribute('width', newValue)
           
        }
    });
    
    Object.defineProperty(ChartTable.prototype, 'height', {
        get() { return this.background.height },
        set(newValue) {
            this.svg.setAttribute('height', newValue)
        }
    });
    
    Object.defineProperty(ChartTable.prototype, 'fill', {
        get() { return this.background.fill },
        set(newValue) {
            this.background.setAttribute('fill', newValue)
        }
    });
    // Object.defineProperty(ChartTable.prototype, 'x', {
    //     get() { return this.background.x },
    //     set(newValue) {
    //         this.element.style.left = newValue +'px'
    //     }
    // });
    
    
    
    // USAGE
    let testElement = document.getElementById('chart-table')
    let testObject = new ChartTable(
        {
            type: 'pie',
            element: testElement,
            data: [ 1, 2, 3 ],
            background: {x: 300, y: 300, width: 600, height: 600, fill: 'grey' },
            colors: [ '#4a4e4d', '#0e9aa7', '#3da4ab', '#f6cd61', '#fe8a71' ]
        }
    )

    console.log(testObject)
    console.log(testObject);

    testObject.data = [ 5, 6, 7 ];
    testObject.background.fill = 'green'// NOT APPLIED

    testObject.fill = 'orange';
    testObject.width = 600;
    testObject.height = 500;
    testObject.data = [ 6, 7, 8, 9 ]
    testObject.type = 'bars'
    testElement.style.left = '300px'
    testElement.style.top = '300px'
    //TODO this way the background-el IS background. Not sure whether to keep this or not
    //console.log(testObject.background.style.fill = 'green')
}