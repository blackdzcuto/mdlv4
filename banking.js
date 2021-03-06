module.exports.config = {
	name: "banking",
	version: "1.0.0",
	credits: "HungCho & Khรกnh Milo",
	description: "",
	usages: "",
    commandCategory: "ngรขn hร ng",
	cooldowns: 0,
	dependencies: {
        "fs-extra" : ""
    }
};
module.exports.onLoad = function () {
    const fs = global.nodemodule["fs-extra"];

	if (!fs.existsSync(__dirname + "/cache/bill.json")) {
		const requestList = [];
		fs.writeFileSync(__dirname + "/cache/bill.json", JSON.stringify(requestList));
	}
}
module.exports.handleReply = async function({ api, event, handleReply, Currencies }) {
    const fs = global.nodemodule["fs-extra"];
	const dirFile = __dirname + "/cache/bill.json";

	var getList = fs.readFileSync(dirFile);
	var getData = JSON.parse(getList);

    if (handleReply.author != event.senderID) return;
    var data = await Currencies.getData(handleReply.author);
    var exp =  data.exp;
    var money = data.money
    var d = new Date();
    var date = d.getDate()+'/'+(d.getMonth() + 1 )+'/'+d.getFullYear();
	var time = d.getHours() + ":" + d.getMinutes();
    switch (handleReply.type) {
        case "banking": {
            switch (event.body) {
                case "1": {
                    return api.sendMessage(
                        "๐๐ฎฬฃ๐ป ๐ฐ๐ผฬ ๐๐ต๐ฒฬฬ ๐ฟ๐ฒ๐ฝ๐น๐ ๐๐ผฬฬ ๐๐ถ๐ฒฬฬ๐ป ๐ฐ๐ฎฬฬ๐ป ๐ฐ๐ต๐๐๐ฒฬฬ๐ป ๐๐ฎ๐ป๐ด ๐ฒ๐๐ฝ ! ๐ญ๐ฌ ฤรด = ๐ญ ๐ฒ๐๐ฝ."
                  , event.threadID, (error, info) => {
                      global.client.handleReply.push({
                          name: this.config.name,
                          messageID: info.messageID,
                          author: event.senderID,
                          type: "money"
                      });
                  }, event.messageID);
                } 
                case "2": {
                    return api.sendMessage(
                        "๐๐ฎฬฃ๐ป ๐ฐ๐ผฬ ๐๐ต๐ฒฬฬ ๐ฟ๐ฒ๐ฝ๐น๐ ๐๐ผฬฬ ๐ฒ๐๐ฝ ๐ฐ๐ฎฬฬ๐ป ๐ฐ๐ต๐๐๐ฒฬฬ๐ป ๐๐ฎ๐ป๐ด ๐๐ถ๐ฒฬฬ๐ป ! ๐ฑ ๐ฒ๐๐ฝ = ๐ญ ฤรด."
                  , event.threadID, (error, info) => {
                      global.client.handleReply.push({
                          name: this.config.name,
                          messageID: info.messageID,
                          author: event.senderID,
                          type: "exp"
                      });
                  }, event.messageID);
                }
                default:
                    break;
            }
            return;
          }
          case "exp": {
            var content = event.body;
            if(content > exp) api.sendMessage("Exp cแปงa bแบกn khรดng ฤแปง ? vui lรฒng cร o phรญm nhiแปu hฦกn",event.threadID,event.messageID)
            else 
            {
            await Currencies.increaseMoney(handleReply.author, parseInt(content / 5));
            var exp = ((await Currencies.getData(handleReply.author)).exp) - parseInt(content);
            await Currencies.setData(handleReply.author, { exp })
            var msg = `๐ธ๐๐ถ๐ฎ๐ผ ๐ฑ๐ถฬฃ๐ฐ๐ต ๐๐ต๐ฎฬ๐ป๐ต ๐ฐ๐ผฬ๐ป๐ด !\n๐ง๐ต๐ผฬฬ๐ถ ๐ด๐ถ๐ฎ๐ป: ${time} - ${date}\n๐๐ต๐ถ ๐๐ถ๐ฒฬฬ๐: ๐๐ต๐๐๐ฒฬฬ๐ป ${content} exp ฤแป lแบฅy ${content / 5} ฤรด.`
            api.sendMessage(msg,handleReply.author);
            const suggest = msg;
            getData.push(suggest);
            api.sendMessage("๐๐ถ๐ฎ๐ผ ๐ฑ๐ถฬฃ๐ฐ๐ต ๐ฐ๐ฬ๐ฎ ๐ฏ๐ฎฬฃ๐ป ฤ๐ฎฬ ฤ๐ฬ๐ผฬฬฃ๐ฐ ๐น๐ฬ๐ ๐๐ฟ๐ฒฬ๐ป ๐ต๐ฒฬฃฬ ๐๐ต๐ผฬฬ๐ป๐ด !",event.threadID, () => fs.writeFileSync(dirFile, JSON.stringify(getData)),event.messageID);
          
            }
          break;
       }
       case "money": {
        var content = event.body;
        if(content > money) api.sendMessage("Tiแปn cแปงa bแบกn khรดng ฤแปง ? vui lรฒng theo thแบงy Huแบฅn bฦฐฦกm trแบฃi !",event.threadID,event.messageID)
        else 
        {
            await Currencies.increaseMoney(event.senderID, parseInt("-"+content))
        var exp = ((await Currencies.getData(handleReply.author)).exp) + parseInt(content / 10);
        await Currencies.setData(handleReply.author, { exp })
        var msg = `๐ธ๐๐ถ๐ฎ๐ผ ๐ฑ๐ถฬฃ๐ฐ๐ต ๐๐ต๐ฎฬ๐ป๐ต ๐ฐ๐ผฬ๐ป๐ด !\n๐ง๐ต๐ผฬฬ๐ถ ๐ด๐ถ๐ฎ๐ป: ${time} - ${date}\n๐๐ต๐ถ ๐๐ถ๐ฒฬฬ๐: ๐๐ต๐๐๐ฒฬฬ๐ป ${content} ฤรด ฤแป lแบฅy ${content / 10} exp.`
        api.sendMessage(msg,handleReply.author);
        const suggest = msg;
        getData.push(suggest);
        api.sendMessage("๐๐ถ๐ฎ๐ผ ๐ฑ๐ถฬฃ๐ฐ๐ต ๐ฐ๐ฬ๐ฎ ๐ฏ๐ฎฬฃ๐ป ฤ๐ฎฬ ฤ๐ฬ๐ผฬฬฃ๐ฐ ๐น๐ฬ๐ ๐๐ฟ๐ฒฬ๐ป ๐ต๐ฒฬฃฬ ๐๐ต๐ผฬฬ๐ป๐ด !",event.threadID, () => fs.writeFileSync(dirFile, JSON.stringify(getData)),event.messageID);
      
        }
      break;
   }
      }
    }
module.exports.run = async function({ api, event, args }) {
    const fs = global.nodemodule["fs-extra"];
	const dirFile = __dirname + "/cache/bill.json";

	var getList = fs.readFileSync(dirFile);
	var getData = JSON.parse(getList);

    if(!args[0])return api.sendMessage(
                "โโโโ ๐ ๐๐๐๐๐๐๐ โโโโ" +
                "\nยป ๐๐จฬฬ๐ข ๐๐ฬฃ๐ง ๐ง๐ก๐ฬฃฬ๐ฉ ๐ฅ๐ฎฬฬฃ๐ ๐๐ก๐จฬฃ๐ง ยซ" +
                "\n\n1. ๐๐ก๐ฎ๐ฒ๐ฬฬ๐ง ๐ญ๐ข๐ฬฬ๐ง ๐ฌ๐๐ง๐  ๐๐ฑ๐ฉ โ๏ธ." +
                "\n2. ๐๐ต๐๐๐ฒฬฬ๐ป ๐ฒ๐๐ฝ ๐๐ฎ๐ป๐ด ๐๐ถ๐ฒฬฬ๐ป ๐ฆ." +
                "\n3. ๐๐ฉ๐๐๐ญ๐ ๐ฌ๐๐ฎ โ." +
                "\n\nยป ๐๐ฬ๐ฒ ๐ซ๐๐ฉ๐ฅ๐ฒ ๐ญ๐ข๐ง ๐ง๐ก๐ฬฬ๐ง ๐ฏ๐ฬ ๐๐ก๐จฬฃ๐ง ๐ญ๐ก๐๐จ ๐ฌ๐จฬฬ ยซ"
            , event.threadID, (error, info) => {
                client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "banking"
                });
            }, event.messageID);
     
    if (args[0] == "check") {
        var workList = "";
			getData.map(item => workList += `\n ${item}`);
			return api.sendMessage(`${workList}`, event.threadID, event.messageID);
		}
        
  }