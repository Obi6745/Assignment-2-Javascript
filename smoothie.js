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

        total+=

    }
}