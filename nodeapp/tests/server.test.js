// tests/server.test.js

const ShoppingList = require('../index');

describe('ShoppingList Module', () => {
    let shoppingList;

    beforeEach(() => {
        shoppingList = new ShoppingList();
    });

    it('addItem_is_working', () => {
        shoppingList.addItem('Bananas', 1.5);
        expect(shoppingList.getItems().length).toBe(1);
        expect(shoppingList.getItems()[0].itemName).toBe('Bananas');
    });

    it('calculateTotalPrice_is_working', () => {
        shoppingList.addItem('Oranges', 2.0);
        shoppingList.calculateTotalPrice();
        expect(shoppingList.getTotalPrice()).toBe(2.0);
    });

    it('removeItem_is_working', () => {
        shoppingList.addItem('Bananas', 1.5);
        shoppingList.removeItem('Bananas');
        expect(shoppingList.getItems().length).toBe(0);
    });

    it('clearList_is_working', () => {
        shoppingList.addItem('Bananas', 1.5);
        shoppingList.clearList();
        expect(shoppingList.getItems().length).toBe(0);
        expect(shoppingList.getTotalPrice()).toBe(0);
    });

    it('getItems_is_working', () => {
        shoppingList.addItem('Apples', 1.2);
        const items = shoppingList.getItems();
        expect(items.length).toBe(1);
        expect(items[0].itemName).toBe('Apples');
    });

    it('getTotalPrice_is_working', () => {
        shoppingList.addItem('Grapes', 2.5);
        shoppingList.calculateTotalPrice();
        const totalPrice = shoppingList.getTotalPrice();
        expect(totalPrice).toBe(2.5);
    });

    it('addItem_multipleItems_is_working', () => {
        shoppingList.addItem('Bananas', 1.5);
        shoppingList.addItem('Apples', 2.0);
        expect(shoppingList.getItems().length).toBe(2);
    });

    it('calculateTotalPrice_multipleItems_is_working', () => {
        shoppingList.addItem('Bananas', 1.5);
        shoppingList.addItem('Apples', 2.0);
        shoppingList.calculateTotalPrice();
        expect(shoppingList.getTotalPrice()).toBe(3.5);
    });

    it('removeItem_notInList_is_working', () => {
        shoppingList.addItem('Bananas', 1.5);
        shoppingList.removeItem('Oranges');
        expect(shoppingList.getItems().length).toBe(1);
    });

    it('clearList_emptyList_is_working', () => {
        shoppingList.clearList();
        expect(shoppingList.getItems().length).toBe(0);
        expect(shoppingList.getTotalPrice()).toBe(0);
    });
});