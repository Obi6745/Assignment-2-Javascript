class Smoothie {
    constructor (base,fruits, addons, size) {
        this.base = base; 
        this.fruits = fruits; 
        this.addons = addons; 
        this.size = size
        this.prices = {
            base: {
                water: 0,
                coconut_water: 1.00, 
                almond_milk: 1.50,
                oat_milk: 1.50
            },
            fruits: {
                banana: 1.00,
                strawberry: 1.50,
                blueberry: 2.00, 
                mango: 1.75,  
                pineapple: 1.50
            },
            addons: {
                protein: 2.00,
                honey: 0.50, 
                chia: 1.00,
                spinach: 0.75
            },
            size: {
                small: 1,
                medium: 1.5, 
                large: 2

            }
        };

    }

    //Calculate the total price
    calculatePrice() {
        let total= 0; 
    //add base price 
        total+= this.prices.base[this.base]; 
    //add fruit price
        this.fruits.forEach(fruit => {
            total += this.prices.fruits[fruit];
        })
    //add addons price
    this.addons.forEach(addon => {
        total += this.prices.addons[addon];
    });

    //multiply by size multiplier 
    total *= this.prices.size[this.size];

    return total.toFixed(2); 
    }

    //generale a description of the smoothie 
    getDescription() {
        const sizeText = {
            small: '12oz',
            medium: '16oz', 
            large: '20oz'
        };

        let let description = `A ${sizeText[this.size]} smoothie with ${this.base.replace('_', ' ')} as the base.`;
        if (this.fruits.length > 0) {
            description += `\nFruits: ${this.fruits.join(', ')}.`;
    
        }
        if (this.addons.length > 0) {
            description += `\nAdd-ons: ${this.addons.join(', ')}.`;
        }
        return description;
    }

    //get a color based on the fruits selected 
    getColor() {
        const fruitColors = {
            banana: 'FFD700',
            strawberry: '#FF4444',
            blueberry: '4444FF', 
            mango: '#FFA500', 
            pineapple: '#FFD700'

        };

        if (this.fruits.length ===0) return '#FFFFFF'

        //mix the colors of selected fruits 
        let r = 0, g = 0, b= 0;
        this.fruits.forEach(fruit => {
            const color =fruitColors [fruit];
            r += parseInt(color.substr(1,2), 16); 
            g += parseInt(color.substr(3,2), 16);
            b += paseInt (color.substr(5,2), 16); 

        }); 

        const count = this.fruits.length; 
        return `rgb(${Math.round(r/count)}, ${Math.round(g/count)}, ${Math.round(b/count)})`;
    }
}

//Handle form submission 
document.getElementById('smoothieForm').addEventListener('submit', function (e) {
    e.preventDefault();

    //get form values 
    const base = document.getElementById('base').value;
    const fruits = Array.from(document.querySelectorAll('input[name="fruits"]:checked')).map(cb => cb.value);
    const addons = Array.from(document.querySelectorAll) ('input[name="addons"]:checked')).map(cb => cb.value);
    const size = document.querySelector('input[name="size"]:checked').value;

    //Create smoothie object 
    const smoothie = new Smoothie(base, fruits, addons, size); 

    //display smoothie information 
    const output = document.getElementById('smoothieOutput'); 
    const description = document.getElementById('smoothieDescription'); 
    const price = document.getElementById('smoothiePrice'); 
    const image = document.getElementById('smoothieImage'); 

    description.textcontent = smoothie.getDescription(); 
    price.textContent = `Total Price : $${smoothie.calculatePrice()}`;

    //create visuals 

    image.innerHTML = `
    <div style="
    width: 200px; 
    height: 300px; 
    margin: 0 auto; 
    background: ${smoothie.getColor()}; 
    border-radius: 20px; 
    position: relative; 
    box-shadow 0 4px 8px rgba(0,0,0,0.1); 
    "> 
        <div style=" 
            position: absolute; 
            top: 50%; 
            left: 50%; 
            transform: translate(-50%, -50%); 
            font-size: 24px; 
            color: white; 
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5); 
            ">🍹</div>
        </div>
    `;

    output.classList.remove('hidden');
}); 
    
    
    
    
    
    
    
    
    
    
    `


