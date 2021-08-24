const axios = require('axios'); // require the package
const { response } = require('express');
const { model } = require('mongoose');
const flowersModel = require("../models/model");

const allFlower = async (req ,res) => {
    await axios.get('https://flowers-api-13.herokuapp.com/getFlowers')
    .then(response => {
        res.send(response.data.flowerslist)
    })
    .catch(erorr => console.log(erorr.message) )
}

const addFav = async (req ,res) => {
    const {
        instructions,
        photo,
        name
    } =req.body
    flowersModel.find({name: name}),(error,data) => {
        if(data.length >0){
            flowersModel.find({}),(error,data) => {
                if(error){
                    res.send(error.message)
                }else{
                    res.send(data)
                }
        }
} else{
    const newFlowers = new flowersModel ({instructions,photo,name})
    newFlowers.save().then(
        flowersModel.find({}),(error,data) => {
        if(error){
            res.send(error.message)
        }else{
            res.send(data)
        }
})
}
}
}


const getFav = async (req ,res) => {
    flowersModels.find({}),(error,data) => {
        if(error){
            res.send(error.message)
        }else{
            res.send(data)
        }
}
}

const updataFav = async (req ,res) => {
    const {
        instructions,
        photo,
        name
    } =req.body
    flowersModel.find({name: name}),(error,data) => {
        if(error){
            res.send(error.message)
        }else{
            data.instructions = instructions
            data.photo = photo
            data.name = name
            data.save().then(
                flowersModels.find({}),(error,data) => {
                    if(error){
                        res.send(error.message)
                    }else{
                        res.send(data)
                    }
            }
            )
        }


    }


}

const deleteFav = async (req ,res) => {
    const idflower = req.query._id
    flowersModel.find({_id: _id}),(error,data) => {
        flowersModels.find({}),(error,data) => {
            if(error){
                res.send(error.message)
            }else{
                res.send(data)
            }
    }
}
}

module.exports = {allFlower , addFav , getFav , updataFav,deleteFav}