const heros = require('./db.json')
module.exports = {
    getAllHeros:(req,res)=> {
        res.status(200).send(heros)
    }

}