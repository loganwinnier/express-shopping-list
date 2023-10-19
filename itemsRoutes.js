const express = require("express");

const { items } = require("./fakeDb");
const { BadRequestError } = require("./expressError");
const router = new express.Router();


/**
 *
 */
router.get("", function (req, res) {

    return res.json({ items: items });

});


/**
 *
 */
router.post("", function (req, res) {
    const item = req.body;

    item.name = item.name.replace(' ', '-');

    items.push(item);
    res.json({ added: item });
});


/**
 *
 */
router.get("/:name", function (req, res) {
    const name = req.params.name;
    const item = items.find(item => item === item[name]);

    if (!item) {
        throw new BadRequestError('Item not found :(');
    }

    return res.json({ items: items });

});


/**
 *
 */
router.patch("/:name", function (req, res) {
    const name = req.params.name;

    const itemIndex = items.findIndex(itm => name === itm['name']);

    if (itemIndex === -1) {
        throw new BadRequestError('Item not found :(');
    }

    const item = req.body;

    items[itemIndex] = item;

    return res.json({ updated: items[itemIndex] });

});


/**
 *
 */
router.delete('/:name', function (req, res) {
    const name = req.params.name;

    const itemIndex = items.findIndex(itm => name === itm['name']);

    if (itemIndex === -1) {
        throw new BadRequestError('Item not found :(');
    }

    items.splice(itemIndex, 1);

    return res.json({ message: "Deleted" });
});


//Bottom of file
module.exports = router;