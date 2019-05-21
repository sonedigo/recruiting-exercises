const InventoryAllocator  = require('./solution');

const inventory = new InventoryAllocator();

describe('', () => {
	test('have all the same properties', () => {
		const data = inventory.implementCalculator({ apple: 1 }, [{ name: 'owd', inventory: { apple: 1 } }]);
		expect(data.owd.apple).toEqual(1);
	});

	test('Not enough inventory -> no allocations!', () => {	
		const data = inventory.implementCalculator({ apple: 1 }, [{ name: 'owd', inventory: { apple: 0 } }]);
		expect(data).toEqual([]);
	})

	test('Should split an item across warehouses if that is the only way to completely ship an item', () => {
		const data = inventory.implementCalculator({ apple: 10 }, [{ name: 'owd', inventory: { apple: 5 } }, { name: 'dm', inventory: { apple: 5 }}]);
		expect(data.owd.apple).toEqual(5);
		expect(data.dm.apple).toEqual(5);
		
	})

	test('Should split an item across warehouses and cost least', () =>{
		const data = inventory.implementCalculator({ apple: 10 }, [{ name: 'owd', inventory: { apple: 6 } }, { name: 'dm', inventory: { apple: 6 }}]);
		expect(data.owd.apple).toEqual(6);
		expect(data.dm.apple).toEqual(4);
	})

	test('Multiple type of fruits and from multiple warehouses', () =>{
		const data = inventory.implementCalculator({ apple: 10, banana: 5}, [{ name: 'owd', inventory: { apple: 6, banana: 4} }, { name: 'dm', inventory: { apple: 6 , banana: 4}}]);
		expect(data.owd.apple).toEqual(6);
		expect(data.dm.apple).toEqual(4);
		expect(data.owd.banana).toEqual(4);
		expect(data.dm.banana).toEqual(1);
	})

	test('null input', () => {
		const data = inventory.implementCalculator({}, []);
		expect(data).toEqual([]);
	})



});

