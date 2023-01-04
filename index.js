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
            width: obj.background.width,
            height: obj.background.height,
            fill: obj.background.fill,
        };
        this.colors = obj.colors;
        
        //TODO decide if this is obsolete
        this.count = 0;
        this.id = `chartTable${this.count}`
        
        
        // CREATEAND APPEND SVG CONTAINER AND COLORED RECT
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.element.appendChild(this.svg);
        
        this.svg.setAttribute('width', this.width);
        this.svg.setAttribute('height', this.height);
        this.background = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        this.svg.appendChild(this.background);
        
        this.background.setAttribute('width', '100%');
        this.background.setAttribute('height', '100%');
        this.background.setAttribute('fill', '#e2e2e2');
       
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
   
    // get width() {
    //     //console.log(`Getting width: ${this.background.width}`);
    //     return this.background.width;
    // }
    // set width(nv) {
    //     //console.log(`Setting width: ${nv}`);
    //     this.background.width = nv
    //     this.svg.setAttribute('width', nv)
    // }
    get height() {
        //console.log(`Getting height: ${this.background.height}`);
        return this.background.height;
    } 
    set height(nv) {
        //console.log(`Setting height: ${nv}`);
        this.background.height = nv
        this.svg.setAttribute('height', nv)
    }
    get fill() {
        //console.log(`Getting fill: ${this.background.fill}`);
        return this.background.fill;
    }
    set fill(nv) {
        //console.log(`Setting height: ${nv}`);
        this.background.fill = nv
        this.background.setAttribute('fill', nv)
    }
}
    Object.defineProperty(ChartTable.prototype, 'width', {
        get() { return this.background.width },
        set(newValue) {
            
            this.svg.setAttribute('width', newValue)
           
        }
    })
    
    
    
 
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
    testObject.background.fill = 'green'// NOT APPLIED

    testObject.fill = 'orange';
    testObject.width = 1000;
    testObject.data = [ 6, 7, 8, 9 ]
    testObject.type = 'bars'
    //TODO this way the background-el IS background. Not sure whether to keep this or not
    // console.log(testObject.background.style.fill = 'green')
}