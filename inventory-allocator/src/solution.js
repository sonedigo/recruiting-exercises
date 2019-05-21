
class InventoryAllocator{
	
	constructor() {
	}

	implementCalculator(orders, warehouses){
		let output = [];
		try{
			for(let fruitName in orders){

				this.processOrder(fruitName, orders[fruitName], warehouses, output);
			}
		}catch(err){
			throw new Error("order has error");
		}
		
		return output;
	}

	processOrder(fruitName, fruitNumber, warehouses, output){

		for(let i = 0; i < warehouses.length; i++){
			let warehouseName = warehouses[i].name;

			if(warehouses[i].inventory[fruitName]){
				if(output[warehouseName] === undefined){
					let inventory = {};
					output[warehouseName] = inventory;
				}
				if(output[warehouseName][fruitName] == undefined){
					output[warehouseName][fruitName] = 0;
				}
				output[warehouseName][fruitName] += Math.min(fruitNumber, warehouses[i].inventory[fruitName])
				fruitNumber -= warehouses[i].inventory[fruitName]
			}		
		}
	}
	
}

module.exports = InventoryAllocator;