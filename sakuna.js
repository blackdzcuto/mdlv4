module.exports.config = {
  name: "sukuna",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Drasew",
  description: "AÌnh sukuna",
  commandCategory: "Random-IMG",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://api-sukuna.badboyminh.repl.co/').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `ðÌð»ðµ ððð¸ðð»ð® ð»ð²Ì <ð¯\nð¦ð¼ÌÌ ð®Ìð»ðµ ðµð¶ð²Ì£Ìð» ð°ð¼Ì: ${count} ð®Ìð»ðµ`,
            attachment: fs.createReadStream(__dirname + `/cache/1.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/1.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/1.${ext}`)).on("close", callback);
      })
}