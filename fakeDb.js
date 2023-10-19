const { BadRequestError } = require("./expressError");


class Items {
    static items = []

    static addItem(item) {
        item.name = item.name.replace(' ', '-');

        if (!this.items.includes(item)) {
            this.items.push(item)
        } else {
            throw BadRequestError(`List already includes ${item.name}`)
        }
    }

    static getItem(name) {
        const item = this.items.find(itm => name === itm['name']);
        return item
    }

    static updateItem(name) {
        const itemIndex = items.findIndex(itm => name === itm['name']);

        if (itemIndex === -1) {
            throw new BadRequestError('Item not found :(');
        }

        const item = req.body;

        items[itemIndex] = item;
    }

}

module.exports = { Items };