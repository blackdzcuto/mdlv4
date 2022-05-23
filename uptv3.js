
const fs = global.nodemodule["fs-extra"], axios = global.nodemodule["axios"], Canvas = global.nodemodule["canvas"], path = __dirname + "/cache/background.png", path2 = __dirname + "/cache/SplineSans-Light.ttf";
module.exports.config = {
	name: "uptv3",
	version: "2.0",
	hasPermssion: 2,
	credits: "Nam",
	description: "Xem thời gian bot đã online + ảnh",
	commandCategory: "hệ thống",
	usages: "",
	cooldowns: 0, 
dependencies: {
		"canvas": ""
}
};
var intag = "";
var github = "";
var face = "fb.me/DVFB.VanHuy2006";
function randomColor() {
var color = "";
for (var i = 0; i < 3; i++) {
var sub = Math.floor(Math.random() * 256).toString(16);
color += (sub.length == 1 ? "0" + sub : sub);
}
return "#" + color;
};
function checkTime(i) {
if (i < 10) {
i = "0" + i;
} return i;
};
module.exports.run = async function ({ api, event }) {
	var { threadID, messageID } = event, { credits: c, name } = this.config, { sendMessage: send } = api;
try {
var read = await axios.get("https://f6884a14-15bd-4717-bd7b-2394ef740c60.id.repl.co/banner");
var uptime = process.uptime(),
		 hours = Math.floor(uptime / (60 * 60)),
		 miutes = Math.floor((uptime % (60 * 60)) / 60),
		 seconds = Math.floor(uptime % 60); 
var upt = `${checkTime(hours)}:${checkTime(miutes)}:${checkTime(seconds)}`;
if (c != read.data.srcImg && read.data.status != true )return;
if (!fs.existsSync(path2)) { 
var getfont = (await axios.get(read.data.light, { responseType: "arraybuffer" })).data;
fs.writeFileSync(path2, Buffer.from(getfont, "utf-8"));
};
var baseImage = await Canvas.loadImage(read.data.url);
	var canvas = Canvas.createCanvas(1640, 924);
	var ctx = canvas.getContext("2d");
Canvas.registerFont(path2, {
family: "SplineSans-Light"
});
ctx.drawImage(baseImage, 0, 0, 1640, 924);
	ctx.font = "normal 100px SplineSans-Light";
	ctx.fillStyle = randomColor();
	ctx.textAlign = "left";
ctx.fillText(upt, 1011, 465);
ctx.font = "300 50px SplineSans-Light";
	ctx.fillStyle = randomColor();
	ctx.fillText(intag, 940, 545); 
ctx.fillStyle = randomColor();
	ctx.fillText(github, 940, 615);
ctx.fillStyle = randomColor();
	ctx.fillText(face, 940, 695);
ctx.beginPath();
	fs.writeFileSync(path, canvas.toBuffer());
const fetch = global.nodemodule["node-fetch"];
const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
return send({
body: `꧁࿇♥ᵁᵖᵗⁱᵐᵉ♥࿇꧂\n👾 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐥𝐚̀:   ${thu}||${time} \n𝐓𝐢𝐦𝐞 𝐨𝐧𝐥𝐢𝐧𝐞: ${upt} \nㅤ*•.¸♡ᴰᴬᵀᴬ♡¸.•*\n👬𝐔𝐒𝐄𝐑: ${global.data.allUserID.length}\n🦋𝐓𝐇𝐑𝐄𝐀𝐃: ${global.data.allThreadID\n❤𝐏𝐑𝐄𝐅𝐈𝐗: ${global.config.PREFIX}\n*•.¸♡𝐎𝐓𝐇𝐄𝐑♡¸.•* ╔═══════╗
  Thính:....
╚═══════╝
` ,
attachment: fs.createReadStream(path)}, 
threadID, () => {
fs.unlinkSync(path)}, messageID);
} 
catch (error) {
return send(
"lỗi rùi",
threadID, messageID)
}
