const axios = require("axios");
module.exports.config = {
    name: "keobo",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Araxy XD",
    description: "",
    commandCategory: "game2",
    usages: "",
    cooldowns: 0
};
module.exports.run = async ({ api, event, Threads, args, Currencies }) => {
const { threadID, messageID, senderID } = event;
  if(args[0] == "help"){
  let imag = (await axios.get("https://i.ibb.co/LdhS9J9/keobo-Banner.jpg", {
        responseType: "stream"
      })).data;
  var msg = { body: 'ðŪ==== [ ððĖð ððĖ ] ====ðŪ\n\nðĄðēĖĖð ðšððžĖĖðŧ ð°ðĩðžĖðķ ðŊðŪĖĢðŧ ðĩðŪĖð ðŧðĩðŪĖĢĖð― ðđðēĖĢĖðŧðĩ ðŧðĩðĖ ððŪð:\n/ðļðēðžðŊðž [ððžĖĖ ððķðēĖĖðŧ] (ððžĖĖðķ ððĩðķðēĖĖð ðđðŪĖ ðąðŽ$)\nððĖð ðĖ: ððķĖ ðđðēĖĢĖ ð°ðŪĖðŧðī ð°ðŪðž ððĩðķĖ ð°ðŪĖðŧðī ðąðēĖĖ ððŋðĖðŧðī ððĩðĖðžĖĖðŧðī âĪïļ',
attachment: imag 
}
    return api.sendMessage(msg, threadID, messageID)
  }
if(!args[0] || isNaN(args[0])){
    return api.sendMessage('ððĖĢð§ ððĄðŪĖð ð§ðĄðĖĢĖðĐ ðŽðĻĖĖ ð­ðĒðĖĖð§ ððŪĖðĻĖĖĢð ðĄðĻðĖĢĖð ðĪðĄðĻĖð§ð  ðĄðĻĖĖĢðĐ ðĨðĖĢĖ ðŦ', threadID, messageID)
    }
 else {
   if (await checkMoney(senderID, 50) == false){return api.sendMessage('ððĖðŪ ððĖĖðŪ ððĖĢð§ ððĖĖð§ ððĻĖ ðĒĖð­ ð§ðĄðĖĖð­ ðð$ ð§ðĖĖðŪ ðĶðŪðĻĖĖð§ ð­ðĄððĶ ð ðĒð ðĪðĖðĻ ððĻĖ ðŪ', threadID, messageID)}
     await Currencies.decreaseMoney(senderID, parseInt(args[0]));
var tile_1 = Math.floor(Math.random() * 100)
    var tile_2 = Math.floor(Math.random() * 100)
    var tile_3 = Math.floor(Math.random() * 100)
    var tile_4 = Math.floor(Math.random() * 100)
    var tile_5 = Math.floor(Math.random() * 100)
  var sotien_1 = args[0]
  var sotien_2 = args[0] * 2
  var sotien_3 = args[0] * 12
  var sotien_4 = args[0] * 144
  var sotien_5 = args[0] * 2880
let gif = (await axios.get("https://i.ibb.co/2dgF3vf/keobogif.gif", {
        responseType: "stream"
      })).data;
  const cuoc = parseInt(args[0])
  var msg = { body: `ðŪ==== [ ððĖð ððĖ ] ====ðŪ\n\nð­. ððžĖ ð­ (${sotien_1}$) || ð§ðĖ ððēĖĢĖ ${tile_1}\nðŪ. ððžĖ ðŪ (${sotien_2}$) || ð§ðĖ ððēĖĢĖ ${tile_2}\nðŊ. ððžĖ ðŊ (${sotien_3}$) || ð§ðĖ ððēĖĢĖ ${tile_3}\nð°. ððžĖ ð° (${sotien_4}$) || ð§ðĖ ððēĖĢĖ ${tile_4}\nðą. ððžĖ ðą (${sotien_5}$) || ð§ðĖ ððēĖĢĖ ${tile_5}\n\nðððĐðĨðē ð­ðĒð§ ð§ðĄðĖĖð§ ð§ðĖðē ðĪðĖðĶ ððð ððŪĖð ððĻð§ ððĻĖ ðĶðĖ ððĖĢð§ ðĶðŪðĻĖĖð§ ððĖĖð­ ð§ðĄðĖ ðŪ`,
   attachment: gif
}
return api.sendMessage(msg, threadID, (err, info) => {
        global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: senderID,
            cuoc
        });
    }, messageID)
}
   async function checkMoney(senderID, maxMoney) {
        var i, w;
        i = (await Currencies.getData(senderID)) || {};
        w = i.money || 0
        if (w < parseInt(maxMoney)) return false;
        else return true;
    }
}
module.exports.handleReply = async ({ api, Currencies, event, handleReply }) => {
const { threadID, senderID, messageID, body } = event;
  const { cuoc, author } = handleReply;
   const dataMoney = await Currencies.getData(senderID);
    const moneyUser = dataMoney.money;
if (author !== senderID) { return api.sendMessage('ððĖĢð§ ðĪðĄðĻĖð§ð  ðĐðĄðĖðĒ ðĨðĖ ð§ð ðŪĖðĻĖĖðĒ ððĄðĻĖðĒ ð§ðĖð§ ðĪðĄðĻĖð§ð  ð­ðĄðĖĖ ððĄðĻĖĢð§ ðŪ', threadID, messageID)};
 if(!("keobo" in global.client)) global.client.keobo = {}
 if(isNaN(body)) return api.sendMessage("ððĖĢð§ ðĐðĄðĖðĒ ð§ðĄðĖĢĖðĐ ðĶðĻĖĢĖð­ ðŽðĻĖĖ ðŪ", threadID);
if(1 > body || body > 5) return api.sendMessage("ððĖĢð§ ððĄðĒĖ ððĻĖ ð­ðĄðĖĖ ððĄðĻĖĢð§ ð­ðŪĖĖ ð ð­ðĻĖĖðĒ ð ðŪ", threadID, messageID);
  if(body == "1"){
    var tienan = cuoc,
    win = "https://i.imgur.com/gCVBt2m.jpg",
      losse = "https://i.imgur.com/2aLDp2l.jpg"
  }
  else if(body == "2"){
    var tienan = cuoc * 2,
    win = "https://i.imgur.com/JZlPizj.jpg",
      losse = "https://i.imgur.com/DGtAxqn.jpg"
  }
  else if(body == "3"){
    var tienan = cuoc * 12,
    win = "https://i.imgur.com/jOsSqV0.jpg",
      losse = "https://i.imgur.com/ESxi5p1.jpg"
  }
  else if(body == "4"){
    var tienan = cuoc * 144,
    win = "https://i.imgur.com/aodV8o8.jpg",
      losse = "https://i.imgur.com/Trt51zw.jpg"
  }
  else if(body == "5"){
    var tienan = cuoc * 2880,
    win = "https://i.imgur.com/kCcmQP3.jpg",
      losse = "https://i.imgur.com/zwGMSpH.jpg"
  }
  if( moneyUser < tienan){
    return api.sendMessage(`BášĄn KhÃīng Äáŧ§ Tiáŧn Äáŧ Cháŧn Con BÃē Sáŧ ${body} váŧi sáŧ tiáŧn lÃ  ${tienan} vÃ  bášĄn cÃēn thiášŋu ${tienan - moneyUser}`, threadID)
  } else {
  
var msg = `ððĖĢð§ ðŊðŪĖĖð ððĄðĻĖĢð§ ððĻĖ ${body} ðŊðĖ ðŽðĻĖĖ ð­ðĒðĖĖð§ ððĻĖ ð­ðĄðĖĖ ððĖĢð§ ð§ðĄðĖĢĖð§ ðŊðĖĖ ðĨðĖ ${tienan}\nððĄðĖĢĖðĐ "ðĪðĖðĻ" ð§ðĖĖðŪ ðĶðŪðĻĖĖð§ ððĖĖð­ ððĻð§ ððĻĖ\nððĖ ðĨðĒðĖð§ ð­ðŪĖĢð ð§ðĄðĖĢĖðĐ "ðĪðĖðĻ" ð­ðŦðĻð§ð  ðððŽ ðŽððŪ `;

const keobo = (msg, bo) => api.sendMessage(msg, threadID, (err, info) => {
        global.client.keobo[senderID] = {
            spam: 10,
            count: 0,
            bo,
            stt: body,
            author: senderID,
            tienan: tienan,
          win: win,
          lose: losse
        }
    })
keobo(msg, body.trim())
}
}
module.exports.handleEvent = async({ api, event, Currencies, Users }) => {
  const { threadID, senderID, body } = event;
    if(!("keobo" in global.client)) global.client.keobo = {};
    if (!([senderID] in global.client.keobo)) return;
    const { increaseMoney, decreaseMoney } = Currencies;
  if(body == "kÃĐo" || body == "KÃĐo") {
        global.client.keobo[senderID].count++;
     if (global.client.keobo[senderID].count > 1) return;
    setTimeout(async () => {
      let name1 = await Users.getNameUser(senderID)
      let reward = global.client.keobo[senderID].tienan * 2
      let type_bo = global.client.keobo[senderID].stt
       let type_bo_win = global.client.keobo[senderID].win
      let type_bo_lose = global.client.keobo[senderID].lose
      if( type_bo == '1'){
        var choose = ["true", "false"]
      var ans = choose[Math.floor(Math.random() * choose.length)]
      if( ans == "false" || global.client.keobo[senderID].count < 5){
        let imag = (await axios.get(type_bo_lose, {
        responseType: "stream"
      })).data;
        var msg = { body: `${name1} ððĖĢð§ ðŊðŪĖĖð ðĪðĖðĻ ðĄðŪĖĢð­ ðŊðĖ ððĒĖĢ ððĻĖ ðŠðŪðĖĢĖð­ ðĨðĖĢðĒ\nððĖĖð­ ${global.client.keobo[senderID].tienan}$ ðŪ`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
                delete global.client.keobo[senderID];
            })
      } else {
         let imag = (await axios.get(type_bo_win, {
        responseType: "stream"
      })).data;
        var msg = { body: `ððĄðŪĖð ðĶðŪĖĖð§ð  ${name1} ðŊðŪĖĖð ðĪðĖðĻ ð­ðŦðŪĖð§ð \nððĄðĖĢĖð§ ðŊðĖĖ ${reward}$ ðŪ`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
          await increaseMoney(senderID, parseInt(reward));
                delete global.client.keobo[senderID];
            })
      }  
      } else if( type_bo == '2'){
        var choose = ["true", "false", "false", "false","false","true"]
      var ans = choose[Math.floor(Math.random() * choose.length)]
      if( ans == "false" || global.client.keobo[senderID].count < 7){
         let imag = (await axios.get(type_bo_lose, {
        responseType: "stream"
      })).data;
        var msg = { body: `${name1} ððĖĢð§ ðŊðŪĖĖð ðĪðĖðĻ ðĄðŪĖĢð­ ðŊðĖ ððĒĖĢ ððĻĖ ðŠðŪðĖĢĖð­ ðĨðĖĢðĒ\nððĖĖð­ ${global.client.keobo[senderID].tienan}$ ðŪ`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
                delete global.client.keobo[senderID];
            })
      } else {
         let imag = (await axios.get(type_bo_win, {
        responseType: "stream"
      })).data;
        var msg = { body: `ððĄðŪĖð ðĶðŪĖĖð§ð  ${name1} ðŊðŪĖĖð ðĪðĖðĻ ð­ðŦðŪĖð§ð \nððĄðĖĢĖð§ ðŊðĖĖ ${reward}$ ðŪ`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
          await increaseMoney(senderID, parseInt(reward));
                delete global.client.keobo[senderID];
            })
      }  
      } 
      else if( type_bo == '3'){
        var choose = ["true", "false", "false", "false","false","true","false","false"]
      var ans = choose[Math.floor(Math.random() * choose.length)]
      if( ans == "false" || global.client.keobo[senderID].count < 8){
let imag = (await axios.get(type_bo_lose, {
        responseType: "stream"
      })).data;
        var msg = { body: `${name1} ððĖĢð§ ðŊðŪĖĖð ðĪðĖðĻ ðĄðŪĖĢð­ ðŊðĖ ððĒĖĢ ððĻĖ ðŠðŪðĖĢĖð­ ðĨðĖĢðĒ\nððĖĖð­ ${global.client.keobo[senderID].tienan}$ ðŪ`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
                delete global.client.keobo[senderID];
            })
      } else {
         let imag = (await axios.get(type_bo_win, {
        responseType: "stream"
      })).data;
        var msg = { body: `ððĄðŪĖð ðĶðŪĖĖð§ð  ${name1} ðŊðŪĖĖð ðĪðĖðĻ ð­ðŦðŪĖð§ð \nððĄðĖĢĖð§ ðŊðĖĖ ${reward}$ ðŪ`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
          await increaseMoney(senderID, parseInt(reward));
                delete global.client.keobo[senderID];
            })
      }  
      } else if( type_bo == '4'){
        var choose = ["true", "false", "false", "false","false","true","false","false","false","false","false","false","false","true"]
      var ans = choose[Math.floor(Math.random() * choose.length)]
      if( ans == "false" || global.client.keobo[senderID].count < 9){
      let imag = (await axios.get(type_bo_lose, {
        responseType: "stream"
      })).data;
        var msg = { body: `${name1} ððĖĢð§ ðŊðŪĖĖð ðĪðĖðĻ ðĄðŪĖĢð­ ðŊðĖ ððĒĖĢ ððĻĖ ðŠðŪðĖĢĖð­ ðĨðĖĢðĒ\nððĖĖð­ ${global.client.keobo[senderID].tienan}$ ðŪ`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
                delete global.client.keobo[senderID];
            })
      } else {
         let imag = (await axios.get(type_bo_win, {
        responseType: "stream"
      })).data;
        var msg = { body: `ððĄðŪĖð ðĶðŪĖĖð§ð  ${name1} ðŊðŪĖĖð ðĪðĖðĻ ð­ðŦðŪĖð§ð \nððĄðĖĢĖð§ ðŊðĖĖ ${reward}$ ðŪ`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
          await increaseMoney(senderID, parseInt(reward));
                delete global.client.keobo[senderID];
            })
      }  
      }
      else if( type_bo == '5'){
        var choose = ["true", "false", "false", "false","false","true","false","false","false","false","false","false","false","true","true","false","fale","fale"]
      var ans = choose[Math.floor(Math.random() * choose.length)]
      if( ans == "false" || global.client.keobo[senderID].count < 10){
       let imag = (await axios.get(type_bo_lose, {
        responseType: "stream"
      })).data;
        var msg = { body: `${name1} ððĖĢð§ ðŊðŪĖĖð ðĪðĖðĻ ðĄðŪĖĢð­ ðŊðĖ ððĒĖĢ ððĻĖ ðŠðŪðĖĢĖð­ ðĨðĖĢðĒ\nððĖĖð­ ${global.client.keobo[senderID].tienan}$ ðŪ`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
                delete global.client.keobo[senderID];
            })
      } else {
         let imag = (await axios.get(type_bo_win, {
        responseType: "stream"
      })).data;
        var msg = { body: `ððĄðŪĖð ðĶðŪĖĖð§ð  ${name1} ðŊðŪĖĖð ðĪðĖðĻ ð­ðŦðŪĖð§ð \nððĄðĖĢĖð§ ðŊðĖĖ ${reward}$ ðŪ`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
          await increaseMoney(senderID, parseInt(reward));
                delete global.client.keobo[senderID];
            })
        }}}, 10000);
    }
      }