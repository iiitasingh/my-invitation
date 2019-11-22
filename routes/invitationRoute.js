const mongoose = require('mongoose');
const router = require('express').Router();
require('../model/invitation');
require('../mongo');

const Invitation = mongoose.model("invitations");

router.get('/', (req, res) => {
    Invitation.find().then(data =>
        res.send(data)).catch(err => {
            throw err;
        });
});

router.get('/all/:status', (req, res) => {
    Invitation.find({ status: req.params.status }).then(data => {
        res.send(data);
    }).catch(err => {
        throw err;
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    const Item = new Invitation({
        name: req.body.name,
        address: req.body.address,
        status: req.body.status
    });
    Item.save().then(data => {
        res.send(data);
    }).catch(err => {
        throw err;
    })
});

router.put("/update/:id", (req, res) => {
    Invitation.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, todo) => {
        if (err) return res.status(500).send(err);
        return res.send(todo);
    })
});

router.delete('/delete/:id', (req, res) => {
    Invitation.findByIdAndRemove(req.params.id, (err, todo) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "Todo successfully deleted",
            id: todo._id
        };
        return res.status(200).send(response);
    });
})

module.exports = router;
