class ProductManager {

    #autoId = 1;

    constructor() {
        this.games = [];
    }


    addProduct(title, description, price, img, stock, code){

        if(title, description, price, img, stock, code) {

            const codeDuplicated =  this.games.some(game => game.code === code)

            if(!codeDuplicated) {

                const game = {
                    id: this.#autoId,
                    title: title,
                    description: description,
                    price: price,
                    img: img,
                    stock: stock,
                    code: code
                }
                this.games.push(game)

                this.#autoId++

                return "Saved game";
            }else{
                return `Code ${code} is duplicated`;
            };
        }else{
            return "Fields not found";
        };
    };


    getProducts(){
        return this.games;
    }

    getProductById(id) {

        const game = this.games.find(game => game.id === id)

        if(game){
            return game;
        }
        else{
            return "Not found";
        }
    };

}

const manager = new ProductManager();

manager.addProduct("Fifa 23", "sport", 30, "https://images.wallpapersden.com/image/download/fifa-23-gaming_bWplbWaUmZqaraWkpJRmZ21lrWxnZQ.jpg",100,"J01")
manager.addProduct("Gta 5", "action", 25, "https://images.wallpapersden.com/image/download/gta-v-grand-theft-auto-v-game_ZmdpaGmUmZqaraWkpJRmZ21lrWxnZQ.jpg",100,"J02")
manager.addProduct("Uncharted 4", "adventure", 20, "https://www.laps4.com/wp-content/uploads/2018/12/reportada-11005.jpg",100,"J03")

console.log(manager.getProductById(1))
console.log(manager.getProductById(2))
console.log(manager.getProductById(3))

