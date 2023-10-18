const express = require("express");

const { items } = require("./fakeDb");
const router = new express.Router();

router.get("", function (req, res) {

    return res.json({ items: items });

})

router.post("", function (req, res) {
    const item = req.body;
    console.log(items)
    items.push(item);
    res.json({ added: item });
})

router.get("/:name", function (req, res) {
    const name = req.params.name;
    const item = items.find(item => item === item[name])
    if (item) {

    }
    res.json({ items: items })

})


//Bottom of file
module.exports = router;