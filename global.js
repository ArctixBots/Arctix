const fs = require('fs');
global.reloadFile = (file, options = {}) => {
    nocache(file, module => {
    console.log(`File "${file}" has updated!\nRestarting!`)
    process.send("reset")
    })
}
const{isLimit:isLimit,limitAdd:limitAdd,getLimit:getLimit,giveLimit:giveLimit,addBalance:addBalance,kurangBalance:kurangBalance,getBalance:getBalance,isGame:isGame,gameAdd:gameAdd,givegame:givegame,cekGLimit:cekGLimit}=require("./lib/limit");global.prem=require("./lib/premium"),global.limit=JSON.parse(fs.readFileSync("./database/limit.json")),global.glimit=JSON.parse(fs.readFileSync("./database/glimit.json")),global.balance=JSON.parse(fs.readFileSync("./database/balance.json")),global.premium=JSON.parse(fs.readFileSync("./database/premium.json")),global.isLimit=isLimit,global.limitAdd=limitAdd,global.getLimit=getLimit,global.giveLimit=giveLimit,global.addBalance=addBalance,global.kurangBalance=kurangBalance,global.getBalance=getBalance,global.isGame=isGame,global.gameAdd=gameAdd,global.givegame=givegame,global.cekGLimit=cekGLimit;
const IkyyClient = require("ikyy");
const { ikyEvent } = require("./lib/Event")
global.ikyEvent = ikyEvent
global.rzky = new IkyyClient();
global.response = require("./lib/response.json");
global.config = require("./config.json");
const Database = require('./lib/Database')
global.db = new Database()

function nocache(module, cb = () => {}) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
