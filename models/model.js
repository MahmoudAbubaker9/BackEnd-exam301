'use strict'
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlowersSchema = new Schema({

    instructions: String,
    photo: String,
    name: String,
});

// This creates our model from the above schema, using mongoose's model method
const flowersModel = mongoose.model("flowers", FlowersSchema);

// Export the Article model
module.exports = flowersModel;
