/*
Hai Nama saya Kaze dan di sini
saya coba buat base sendiri tapi base ini
kumpulan dari semua sc jadi kalau anda
bilang ada yang mirip ama sc lain maklumin
base ini hasil copas:v

Thanks To

Tuhanku
Keluargaku
Kaze(base)
fardan/fax
haris/hanz
Ridho
all creator bot

*/

// CONST \\
const { generateMessageID, downloadContentFromMessage, proto, generateWAMessageFromContent, prepareWAMessageMedia, areJidsSameUser, getLastMessageInChat, jidDecode } = require('@adiwajshing/baileys');
const colors = require('colors');
const axios = require('axios');
const util = require('util');
const chalk = require('chalk');
const { times, fetchJson, isUrl, getBuffer, getRandom, sleep, getGroupAdmins, downloadMediaMessage, runtime, jsonformat, formatDate, tanggal, formatp } = require('../library/function');
const fs = require('fs');
const os = require('os');
const { color, mylog, infolog } = require("../library/color")
const moment = require('moment-timezone');
const clph = require("caliph-api");
const ffmpeg = require('fluent-ffmpeg');
const PhoneNumber = require('awesome-phonenumber');
const readline = require('readline');
const { performance } = require('perf_hooks');
const speed = require('performance-now')
const { exec, spawn } = require('child_process');
const toMs = require("ms")
global.prem = require("../library/premium")
let { allmenu, BData } = require('./config')
let { pinterest, styletext, cerpen } = require('../library/scraper')
// -------[ END ]------- \\

let print = console.log;

// FUNCTION TIME \\
function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);

//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
// -------[ END ]------- \\

// MODULE, CONST \\
module.exports = index = async(conn, m, store, warn) =>{
try {
	var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
	var budy = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.text : ''
	var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
	const args = body.trim().split(/ +/).slice(1)
	const arg = body.substring(body.indexOf(" ") + 1);
	const isCmd = body.startsWith(prefix)
	const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
	const from = m.key.remoteJid ? m.key.remoteJid : m.key.participant
	const sender = m.key.participant ? m.key.participant : m.key.remoteJid
	const senderName = m.pushName ? m.pushName : ''
	const pushname = m.pushName || "No Name"
	const text = q = args.join(" ")
	const fatkuns = (m.quoted || m)
	const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
	const mime = (quoted.msg || quoted).mimetype || ''
	const qmsg = (quoted.msg || quoted)
	const isMedia = /image|video|sticker|audio/.test(mime)

	const isGroup = from.endsWith('@g.us')
	const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
	const groupName = isGroup ? groupMetadata.subject : ''
	const groupDesc = isGroup ? groupMetadata.desc : ''
	const groupId = isGroup ? groupMetadata.id : ''
	const number = [`global.owner@s.whatsapp.net`]
	const botNumber = await conn.decodeJid(conn.user.id)
	const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
	const groupMembers = isGroup ? groupMetadata.participants : ''
	const groupAdmins = isGroup ? await getGroupAdmins(groupMembers) : ''
	const isGroupAdmins = isGroup ? await groupAdmins.includes(sender) : false
	const isBotGroupAdmins = isGroup ? await groupAdmins.includes(sender) : false
	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	const participants = m.isGroup ? await groupMetadata.participants : ''
	let who = m.mentions && m.mentions[0] ? m.mentions : m.fromMe ? this.user : m.sender 
// -------[ END ]------- \\

	require('./config');
	
// BUFFER \\
const downloadContentFromMediaMessage = async(m) => {
let mime = (m.msg || m).mimetype || ''
const stream = await downloadContentFromMessage(m.quoted ? m.quoted : m.msg, mime.split("/")[0])
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}
// -------[ END ]------- \\

	// FAKE \\
	
	// fake reply 
	const fake = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6283102650464-1589321480@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `*Halo* _${pushname} 👋_\n	╰≻ ${prefix + command}`,
                 "title": `Hmm`,
                 'jpegThumbnail': global.thumb
                        }
	                  } 
                     }
      // end

// fake doc
const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `*HIDETAG!*`,jpegThumbnail: global.thumb}}}
	const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6283102650464-1589321480@g.us","inviteCode": "m","groupName": NameBot, "caption": global.footer, 'jpegThumbnail': global.thumb}}}
    const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6283102650464-1589321480@g.us" } : {}) },message: { "videoMessage": { "title":`*AUTO DOWNLOAD AUDIO YOUTUBE*`, "h": `Hmm`,'seconds': '10000000⁰0', 'caption': `*AUTO DOWNLOAD AUDIO YOUTUBE*`, 'jpegThumbnail': global.thumb}}}
    // end
// -------[ END ]------- \\

	

		//TEMPLATE BUTTON!
		const buttonsDefault = [
			//{ callButton: { displayText: `Call Owner!`, phoneNumber: `+6282217590187` } },
			{ urlButton: { displayText: `github!`, url : `https://github.com/KazeDevID` } },
			{ quickReplyButton: { displayText: `🧑 owner`, id: `${prefix}owner` } },
			{ quickReplyButton: { displayText: `💰 donate`, id: `${prefix}donate` } },
			{ quickReplyButton: { displayText: `🗼 ping bot`, id: `${prefix}pingbot` } }
		]
// -------[ END ]------- \\

		// PREMEXP \\
		prem.expiredCheck(conn, m, premium);
		// -------[ END ]------- \\
		

   // Push Message To Console && Auto Read
        if (m.message) {
            conn.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ MSG ]')), chalk.white(chalk.bgGreen(new Date)) + '\n          ' + chalk.white(chalk.bgMagenta(budy || m.mtype)) + '\n' + chalk.green('=> By'), chalk.magenta(pushname), chalk.yellow(m.sender) + '\n' + chalk.green('=> In'), chalk.blueBright(m.isGroup ? pushname : 'Private Chat', from) + '\n' + chalk.magenta('──────────────────────────────────────────────────────'))
        }
        // -------[ END ]------- \\
        
// COMMANDS \\


switch(command){



// START \\
			case'menu':
			case'help': {
var teks = allmenu(m.sender, prefix, m.pushName)
,
					btn = [{
                                urlButton: {
                                    displayText: 'INSTAGRAM',
                                    url: Uig
                                }
                            }, {
                                urlButton: {
                                    displayText: 'GROUP BOT',
                                    url: Ugc
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'SCRIPT BOT',
                                    id: 'sc'
                                }
                            }]

				conn.send5ButLoc(from, teks, Mfooter, global.thumb, btn)
				/*conn.sendMessage(from, {text : `JANGAN LUPA FOLLOW GITHUB OWNER`}, {quoted :{
				key: { fromMe: false,
				participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6283102650464-1589321480@g.us" } : {})},
				message: { "extendedTextMessage": {
				"text": `*Hallo* _${pushname} 👋_`,
				"title": Titlenyo,
				'jpegThumbnail': global.thumb}}}}
				)*/
 				 }                      
				break

case 'ping': case 'botstatus': case 'statusbot': {
           	  const used = process.memoryUsage()
           	  const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
           	  })
           	  const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
        	     }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
           	  }
         	    })
           	  let timestamp = speed()
        	     let latensi = speed() - timestamp
          	   neww = performance.now()
      	       oldd = performance.now()
       	      respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
       	     }
         	   break

case 'owner':
case 'creator': {
sections = [
                {
                title: `Hai ${pushname} 👋`,
                rows: [
                {title: "Biodata", rowId: `.biodata`, description: `Menampilkan Biodata Owner`},
                {title: "Nomor", rowId: `.nomorown`, description: `Menampilkan Nomor Owner`},
                {title: "Script Bot", rowId: `.sc`, description: `Menampilkan Script Bot`}
                ]
                },
                ]
conn.sendListMsg(from, `Silahkan click tombol dibawah ini`, global.footer, `Hai ${pushname} 👋`, `Click Here`, sections, fake)
      }
break

case 'sc':
case 'script':
m.reply("https://github.com/KazeDevID")
break

case 'nomorown': { 
cok = {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "status@broadcast" })}, message: { 'contactMessage': { 'displayName': NameBot, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Akaeru Bot,;;;\nFN:AkaeruBotz,\nitem1.TEL;waid=0:0\nitem1.X-ABLabell:Ponsel\nEND:VCARD`} }}
conn.sendContact(from, global.owner, cok)
}
break

case 'biodata': {
var ngisor = BData(),

btnm = [{buttonId: `nomorown`, buttonText: {displayText: 'Owner Number'}, type: 1}]
for (let i of profilebio) {
try {
ppne = await conn.profilePictureUrl(i + "@s.whatsapp.net", 'image')
} catch {
ppne = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
conn.sendMessage(from, { caption: ngisor, image: { url: ppne }, buttons: btnm, footer: Mfooter })
}
}
break
		
// -------[ END ]------- \\


// OWNER MENU \\
case 'linkgroup': case 'linkgc': {
               if (!m.isGroup) return m.reply(act.gc)
               let response = await conn.groupInviteCode(from)
               conn.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
      	      }
     	       break

case 'setstatus': case 'setbiobot': case 'setbotbio': {
            	if (!isCreator) return m.reply(act.owner)
         	  if (!text) return m.reply(`this is a WhatsApp Bot named conn-Morou`)
        	   let name = await conn.updateProfileStatus(text)
           	m.reply(`Successfully changed bot bio status to ${name}`)
         	  }
           	break

			case 'setnamabot': case 'setnamebot': {
				if (!isCreator) return m.reply(act.owner)
        	   if (!text) return m.reply( `Example : ${prefix + command} WhatsApp ✅`)
       	    let name = await conn.updateProfileName(text)
        	   m.reply(`Successfully renamed bot to ${name}`)
      	     }
       	    break

			case 'block': {
				if (!isCreator) return m.reply(act.owner)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await conn.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break

      	  case 'unblock': {
				if (!isCreator) return m.reply(act.owner)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await conn.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break

          case 'setppbot': {
                if (!isCreator) return m.reply(act.owner)
                if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                await conn.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break

           case 'join': {
                if (!isCreator) return m.reply(act.owner)
                if (!text) return m.reply(act.nurl)
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply(act.urlerr)
                m.reply('wait bg...')
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await conn.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
        	    }
           	 break

          case 'leave': {
                if (!isCreator) return m.reply(act.owner)
                await conn.groupLeave(from).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                console.log()
            	}
             break

          case 'anticall': {
           	 if (!isCreator) return m.reply(act.owner)
                let asuuu = JSON.parse(fs.readFileSync('../metadata/anticall.json'));
                if (args[0] === "on") {
                if (asuuu.setting.anticall == true) return m.reply(`Sudah Aktif Sebelumnya`)
                asuuu.setting.anticall = true
				fs.writeFileSync('../metadata/anticall.json', JSON.stringify(asuuu))
                m.reply(`AntiCall Aktif !`)
                } else if (args[0] === "off") {
                if (asuuu.setting.anticall == false) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                asuuu.setting.anticall = false
				fs.writeFileSync('../metadata/anticall.json', JSON.stringify(asuuu))
                m.reply(`AntiCall Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'anticall on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'anticall off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await conn.sendButtonText(from, buttons, `Mode AntiCall`, global.footer, m)
                }
          	   }
       	      break

         case 'addprem':
				if (!isCreator) return m.reply(act.owner)
				{ q, args } {
				if (args.length < 2)
				return m.reply(
				`Penggunaan :\n*#addprem* @tag waktu\n*#addprem* nomor waktu\n\nContoh : #addprem @tag 30d`
				);
				if (m.mentionedJid.length !== 0) {
				for (let i = 0; i < m.mentionedJid.length; i++) {
				prem.addPremiumUser(m.mentionedJid[0], args[1], premium);
						}
				m.reply("Sukses");
					} else {
				prem.addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
				m.reply("Sukses via nomor");
						}
					}
				break

			case 'delprem':
				if (!isCreator) return m.reply(act.owner)
				{ q, args, arg } {
				if (args.length < 1) return reply(`Penggunaan :\n*#delprem* @tag\n*#delprem* nomor`);
				if (m.mentionedJid.length !== 0) {
					for (let i = 0; i < m.mentionedJid.length; i++) {
						premium.splice(prem.getPremiumPosition(m.mentionedJid[i], premium), 1);
						fs.writeFileSync("./metadata/premium.json", JSON.stringify(premium));
					}
					m.reply(act.success);
				} else {
				premium.splice(prem.getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
				fs.writeFileSync("./metadata/premium.json", JSON.stringify(premium));
				m.reply("sukses via nomor");
				}
				}
				break
// -------[ END ]------- \\

// DOWNLOADER MENU \\

            case 'tiktoknowm':
			case 'tiktok':
			case 'tt':
			    if (!text) return m.reply(act.nurl)
				let p = await clph.downloader.tiktok(q)
				let nih = ` *TIKTOK DOWNLOADER*

				📌 *Title:* ${p.title}
				👤 *Author:* ${p.author}
				`
				let buttons = [
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: p.nowm },
                    caption: nih,
                    title: 'TIKTOK DOWNLOADER',
                    footer: global.footer,
                    buttons: buttons,
                    headerType: 5
                }
                conn.sendMessage(from, buttonMessage, { quoted: m })
            
			    break

			case 'tiktokmp3': 
			case 'tiktokaudio': {
				if (!text) return m.reply(act.url)
				let aud = await clph.downloader.tiktok(text)
				let cap = ` *TIKTOK AUDIO*

				📌 *Title:* ${aud.title}
				👤 *Author:* ${aud.author}
				`
				conn.sendMessage(from, { caption: cap, image: {url: aud.thumbnail}})
				conn.sendMessage(from, { audio: { url: aud.audio }, mimetype: 'audio/mpeg'}, { quoted: m })
				}
				break

case 'ytmp3': 
case 'ytaudio': {
let { yta } = require('../library/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return anjay('File Melebihi Batas '+util.format(media))
conn.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
conn.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
}
break

case 'ytmp4': 
case 'ytvideo': {
let { ytv } = require('../library/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return anjay('File Melebihi Batas '+util.format(media))
conn.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
// -------[ END ]------- \\

// SEARCH MENU \\
            case 'play':
			case 'ytplay': {
                if (!text) return m.reply(`Example : ${prefix + command} story wa anime`)
                m.reply(act.wait)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                	{ urlButton: { displayText: `SUBSCRIBE`, url : `https://youtube.com/channel/UCbbWYVvhTHz3AzfgYz4fMgg` } },
                    { quickReplyButton: { displayText: `AUDIO`, id: `ytmp3 ${anu.url}` } },
                    { quickReplyButton: { displayText: `VIDEO`, id: `ytmp4 ${anu.url}` } }
                ]
                let buttonMessage = {
                    image : { url: anu.thumbnail },
                    caption : `YOUTUBE PLAY`,
                    footer : `⊳ Title : ${anu.title}
⊳ Ext : Search
⊳ ID : ${anu.videoId}
⊳ Duration : ${anu.timestamp}
⊳ Viewers : ${anu.views}
⊳ Upload At : ${anu.ago}
⊳ Author : ${anu.author.name}
⊳ Channel : ${anu.author.url}
⊳ Description : ${anu.description}
⊳ Url : ${anu.url}`,
                    templateButtons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: m })
                console.log(anu)
      	      }
      	      break

            case 'yts':
			case 'ytsearch': {
                if (!text) m.reply(`Example : ${prefix + command} story wa anime`)
                m.reply(act.wait)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
				var list = []

                let no = 1
                for (let i of search.all) {
                	list.push({

				title: `*${no++} ${i.title}*`, rowId: `dariytskunci ${i.url}`, description: `\n\n▢ Judul : ${i.title}\n▢ ID : ${i.videoId}\n▢ Channel : ${i.author.name}\n▢ Upload : ${i.ago}\n▢ Ditonton : ${i.views}\n▢ Duration : ${i.timestamp}\n▢ URL : ${i.url}`})

				}

				var sections = [{title: `Hallo *${pushname}* 👋 Silahkan pilih dibawah ini`, rows:list}]

				var listms = { text: `*YOUTUBE SEARCH*\n\nBerhasil Menemukan Data\nHasil Pencarian : ${q}\nSilahkan Pilih Dibawah Ini`, footer: footer, buttonText: "Click Here", sections }

				conn.sendMessage(from, listms, m)

               }
          	  break

			case 'pinterest': {
               	 m.reply(act.wait)
               	 anu = await pinterest(text)
               	 result = anu[Math.floor(Math.random() * anu.length)]
              	  conn.sendMessage(from, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
         		   }
          		  break
// -------[ END ]------- \\


// GROUP MENU\\
case 'kick': {
				if (!m.isGroup) return m.reply(act.gc)
        		if (!isBotAdmins) return m.reply(act.botadm)
        		if (!isAdmins) return m.reply(act.admin)
				let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
				await conn.groupParticipantsUpdate(from, users, 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break

			case 'add': {
				if (!m.isGroup) return m.reply(act.gc)
        		if (!isBotAdmins) return m.reply(act.botadm)
        		if (!isAdmins) return m.reply(act.gc)
				let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
				await conn.groupParticipantsUpdate(from, users, 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break

			case 'promote': {
				if (!m.isGroup) return m.reply(act.gc)
        		if (!isBotAdmins) return m.reply(act.botadm)
       		 if (!isAdmins) return m.reply(act.admin)
				let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
				await conn.groupParticipantsUpdate(from, users, 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break

			case 'demote': {
				if (!m.isGroup) return m.reply(act.gc)
      		  if (!isBotAdmins) return m.reply(act.botadm)
       		 if (!isAdmins) return m.reply(act.admin)
				let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
				await conn.groupParticipantsUpdate(from, users, 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break

case 'tagall': {
                if (!m.isGroup) return m.reply(act.gc)
                if (!isBotAdmins) return m.reply(act.botadm)
                if (!isAdmins) return m.reply(act.admin)
				let teks = `─────✪〘 *👥 Tag All* 〙✪─────
 
 ≻ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `╰≻ @${mem.id.split('@')[0]}\n`
                }
                conn.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break

case 'setname': case 'setsubject': {
                if (!m.isGroup) return m.reply(act.gc)
                if (!isBotAdmins) return m.reply(act.botadm)
                if (!isAdmins) return m.reply(act.admin)
                if (!text) return m.reply(act.ntext)
                await conn.groupUpdateSubject(from, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
       	     }
          	  break
           case 'setdesc': case 'setdesk': {
                if (!m.isGroup) return m.reply(act.gc)
                if (!isBotAdmins) return m.reply(act.botadm)
                if (!isAdmins) return m.reply(act.admin)
                if (!text) return m.reply(act.ntext)
                await conn.groupUpdateDescription(from, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
          	  }
       	     break
            case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) return m.reply(act.gc)
                if (!isAdmins) return m.reply(act.admin)
                if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                await conn.updateProfilePicture(from, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(act.success)
                }
                break
			case 'hidetag': {
           	 if (!m.isGroup) return m.reply(act.gc)
            	if (!isBotAdmins) return m.reply(act.botadm)
          	  if (!isAdmins) return m.reply(act.admin)
         	   conn.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
         	   }
            	break
            case 'totag': {
               if (!m.isGroup) return m.reply(act.gc)
               if (!isBotAdmins) return m.reply(act.botadm)
               if (!isAdmins) return m.reply(act.admin)
               if (!m.quoted) return m.reply(`Reply pesan dengan caption ${prefix + command}`)
               conn.sendMessage(from, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
// -------[ END ]------- \\

// TOOLS MENU \\
case 'sticker': case 's': case 'stickergif': case 'sgif': {
        	   if (/image/.test(mime)) {
        	   m.reply(act.proc)
              	  let media = await conn.downloadMediaMessage(qmsg)
            	    let encmedia = await conn.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
             	   await fs.unlinkSync(encmedia)
         	   } else if (/video/.test(mime)) {
        	    m.reply(act.proc)
        	        if (qmsg.seconds > 11) return m.reply('Maksimal 10 detik!')
             	   let media = await conn.downloadMediaMessage(qmsg)
             	   let encmedia = await conn.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
        	        await fs.unlinkSync(encmedia)
      	      } else {
       	         m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
       	         }
        	    }
        	    break

			case 'stickerwm':
			case 'swm':
			case 'stickergifwm':
			case 'sgifwm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) return m.reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
                if (!teks2) return m.reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
            	m.reply(act.proc)
                if (/image/.test(mime)) {
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendImageAsSticker(from, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendVideoAsSticker(from, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
        	    }
        	    break

			case 'toimage': case 'toimg': {
                if (!/webp/.test(mime)) return m.reply(`Reply sticker dengan caption *${prefix + command}*`)
                m.reply('Wait bang...')
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return m.reply(err)
                    let buffer = fs.readFileSync(ran)
                    conn.sendMessage(from, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
       	     }
     	       break

case 'copystyle':
				if (args.length < 2) return m.reply(`khusus button`)
				let judul = q.split('|')[0] ? q.split('|')[0] : q
				let style = q.split('|')[1] ? q.split('|')[1] : ''
				var captionnye = `copy hasilnya dibawah ya!\n\nName : ${judul}\nStyle : ${style}`
				var copynye = `${style}`
				const menuButa = [
    				{index: 1, urlButton: {displayText: `Copy Here`, url: 'https://www.whatsapp.com/otp/copy/'+copynye}}
				]
  			  await conn.sendMessage(from, { text: `${captionnye}`, templateButtons: menuButa, footer: global.footer })
				break

	  	  case 'style': case 'styletext': {
				if (!text) return m.reply(act.ntext)
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                var list = []
                for (let i of anu) {
                list.push({
				title: i.name, rowId: `copystyle ${i.name} | ${i.result}`, description: `${i.result}`})
				}
				var sections = [{title: `Pilih salah satu lalu kirim.`, rows:list}]
				var listms = { text: `*Srtle Text*\n\nBerhasil menemukan sytle font\nSilahkan pilih font yang anda suka.`, footer: global.footer, buttonText: "Click Here", sections }
				conn.sendMessage(from, listms, {quoted:m})
	  		  }
	  		  break

case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	       	 if (!/image/.test(mime)) return m.reply(`Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`)
      	      if (!text) return m.reply(`Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`)
	   	     m.reply(act.wait)
       	     atas = text.split('|')[0] ? text.split('|')[0] : '-'
      	      bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	  	      let dwnld = await conn.downloadMediaMessage(qmsg)
	 	       let { floNime } = require('../library/uploader')
	  	      let fatGans = await floNime(dwnld)
	       	 let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	  	      let has = await conn.sendImageAsSticker(from, smeme, m, { packname: global.packname, author: global.auhor })
	  	      await fs.unlinkSync(has)
       	     }
	  	      break     
	  	      
	  	   case 'ebinary': {
        	    if (!text) return m.reply(`Example : ${prefix + command} text`)
           	 let { eBinary } = require('../library/binary')
          	  let eb = await eBinary(text)
           	 m.reply(eb)
       		 }
       		 break

            case 'dbinary': {
          	  if (!text) return m.reply(`Example : ${prefix + command} text`)
          	  let { dBinary } = require('../library/binary')
          	  let db = await dBinary(text)
            	m.reply(db)
       		 }
      	  	break

case 'tomp4': case 'tovideo': {
                if (!/webp/.test(mime)) return m.reply(`Reply stiker dengan caption *${prefix + command}*`)
                m.reply(act.wait)
		        let { webp2mp4File } = require('../library/uploader')
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
        	    }
           	 break

            case 'toaud': case 'toaudio': {
        	    if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
        	    m.reply(act.wait)
          	  let media = await conn.downloadMediaMessage(qmsg)
          	  let { toAudio } = require('../library/converter')
         	   let audio = await toAudio(media, 'mp4')
          	  conn.sendMessage(from, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
          	  }
           	 break

            case 'tomp3': {
          	  if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
          	  m.reply(act.wait)
           	 let media = await conn.downloadMediaMessage(qmsg)
           	 let { toAudio } = require('../library/converter')
            	let audio = await toAudio(media, 'mp4')
           	 conn.sendMessage(from, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${conn.user.name}.mp3`}, { quoted : m })
           	 }
           	 break

            case 'tovn': case 'toptt': {
         	   if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
          	  m.reply(act.wait)
          	  let media = await conn.downloadMediaMessage(qmsg)
          	  let { toPTT } = require('../library/converter')
          	  let audio = await toPTT(media, 'mp4')
         	   conn.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
           	 }
          	  break

            case 'togif': {
                if (!/webp/.test(mime)) return m.reply(`Reply stiker dengan caption *${prefix + command}*`)
                m.reply(act.wait)
		        let { webp2mp4File } = require('../library/uploader')
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
         	   }
          	  break

	        case 'tourl': {
                m.reply(act.wait)
				let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../library/uploader')
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            	}
          	  break
// -------[ END ]------- \\			

// FUN MENU \\
case 'menfess':
			case 'menfes':
			case 'confes':
			case 'confess':
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (!text) return m.reply(`*Cara Penggunaan*\n\nKirim perintah ${prefix}${command} nomer|pengirim|pesan\n\nContoh ${prefix}${command} 62831xxxxxxx|ini nama samaran ya|I have a crush on you\n\nContoh 2 : ${prefix}${command} 62831xxxxxxx|crush mu|I have s crush on you\n\nTenang aja privasi aman kok><`)
				let nomor = q.split('|')[0] ? q.split('|')[0] : q
				let saking = q.split('|')[1] ? q.split('|')[1] : q
				let pesan = q.split('|')[2] ? q.split('|')[2] : ''
				if (pesan.length < 1) return m.reply(`Harus di isi semua! ex : menfess 62831xxxxxxxx|orang|hallo kamu`)
				 let teksnya = `Hai kak ada Menfess nih!!\n─────────────\n*Akaeru Md*\n─────────────\n\nDari : _${saking}_ \nPesan : _${pesan}_ `
				header = 'hayyy'
					gambar = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`

				 but = [
					{ urlButton: { displayText: `SUBSCRIBE`, url : `https://youtube.com/channel/UCbbWYVvhTHz3AzfgYz4fMgg` } },
                    { quickReplyButton: { displayText: `TERIMA MENFESS`, id: `menfesconfirm ${m.sender}` } },
                    { quickReplyButton: { displayText: `KIRIM MENFESS KM`, id: `Menfess` } }
                		]
					conn.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`}, templateButtons: but, footer: global.footer })
				m.reply(`Sukses Mengirim Menfess!!`)
				break

			case 'menfesconfirm':
 				 conn.sendMessage(q, {text: `Sudah Di Confirmasi Nih Menfess nyaa🤭`})
				  m.reply(`Terimakasih Menfess Telah Diterima.`)
				break

case 'jodohku': {
           	 if (!m.isGroup) return m.reply(act.gc)
          	  let member = participants.map(u => u.id)
          	  let me = m.sender
          	  let jodoh = member[Math.floor(Math.random() * member.length)]
          	  let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
           	 let ments = [me, jodoh]
          	  let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await conn.sendButtonText(from, buttons, jawab, global.footer, m, {mentions: ments})
          	  }
           	 break

            case 'jadian': {
           	 if (!m.isGroup) return m.reply(act.gc)
          	  let member = participants.map(u => u.id)
           	 let orang = member[Math.floor(Math.random() * member.length)]
          	  let jodoh = member[Math.floor(Math.random() * member.length)]
            	let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
         	   let menst = [orang, jodoh]
          	  let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
                    ]
                    await conn.sendButtonText(from, buttons, jawab, global.footer, m, {mentions: menst})
       	     }
        	    break
// -------[ END ]------- \\			


// OTHER MENU \\
			case 'request': case 'requestfitur':{
				if (!text) return m.reply(`Text mana?\n\nExample : ${prefix + command} Tambahin fitur tiktok downloader dong`)
				conn.sendMessage(`6282217590187@s.whatsapp.net`, {text: `*Hallo owner ada yang request fitur nih*\n\nPesan : ${text}\nPengirim : ${m.sender}`}, {quoted: {key: { fromMe: false,
				participant: `${m.sender}`, ...(from ? { remoteJid: "6283102650464-1589321480@g.us" } : {})},
				message: { "extendedTextMessage": {
				"text": `Request Fitur!`,
				"title": Titlenyo,
				'jpegThumbnail': global.thumb}}}})
				m.reply('suksess request')
				}
				break 
// -------[ END ]------- \\			

// RANDOM CERITA \\ BY ATAK
case 'cerpen-anak':{
m.reply (act.wait) 
let cerpe = await cerpen(`anak`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasadaerah':{
m.reply (act.wait) 
let cerpe = await cerpen(`bahasa daerah`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasainggris':{
m.reply (act.wait) 
let cerpe = await cerpen(`bahasa Inggris`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasajawa':{
m.reply (act.wait) 
let cerpe = await cerpen(`bahasa jawa`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasasunda':{
m.reply (act.wait) 
let cerpe = await cerpen(`bahasa sunda`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-budaya':{
m.reply (act.wait) 
let cerpe = await cerpen(`budaya`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cinta':{
m.reply (act.wait) 
let cerpe = await cerpen(`cinta`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintaislami':{
m.reply (act.wait) 
let cerpe = await cerpen(`cinta islami`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintapertama':{
m.reply (act.wait) 
let cerpe = await cerpen(`cinta pertama`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintaromantis':{
m.reply (act.wait) 
let cerpe = await cerpen(`cinta romantis`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasedih':{
m.reply (act.wait) 
let cerpe = await cerpen(`cinta sedih`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasegitiga':{
m.reply (act.wait) 
let cerpe = await cerpen(`Cinta segitiga`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasejati':{
m.reply (act.wait) 
let cerpe = await cerpen(`cinta sejati`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-galau':{
m.reply (act.wait) 
let cerpe = await cerpen(`galau`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-gokil':{
m.reply (act.wait) 
let cerpe = await cerpen(`gokil`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-inspiratif':{
m.reply (act.wait) 
let cerpe = await cerpen(`inspiratif`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-jepang':{
m.reply (act.wait) 
let cerpe = await cerpen(`jepang`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kehidupan':{
m.reply (act.wait) 
let cerpe = await cerpen(`kehidupan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-keluarga':{
m.reply (act.wait) 
let cerpe = await cerpen(`keluarga`)
mreply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kisahnyata':{
m.reply (act.wait) 
let cerpe = await cerpen(`kisah nyata`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-korea':{
m.reply (act.wait) 
let cerpe = await cerpen(`korea`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kristen':{
m.reply (act.wait) 
let cerpe = await cerpen(`kristen`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-liburan':{
m.reply (act.wait) 
let cerpe = await cerpen(`liburan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-malaysia':{
m.reply (act.wait) 
let cerpe = await cerpen(`malaysia`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-mengharukan':{
m.reply (act.wait) 
let cerpe = await cerpen(`mengharukan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-misteri':{
m.reply (act.wait) 
let cerpe = await cerpen(`misteri`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-motivasi':{
m.reply (act.wait) 
let cerpe = await cerpen(`motivasi`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-nasihat':{
m.reply (act.wait) 
let cerpe = await cerpen(`nasihat`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-nasionalisme':{
m.reply (act.wait) 
let cerpe = await cerpen(`nasionalisme`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-olahraga':{
m.reply (act.wait) 
let cerpe = await cerpen(`olahraga`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-patahhati':{
m.reply (act.wait) 
let cerpe = await cerpen(`patah hati`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-penantian':{
m.reply (act.wait) 
let cerpe = await cerpen(`penantian`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pendidikan':{
m.reply (act.wait) 
let cerpe = await cerpen(`pendidikan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pengalaman':{
m.reply (act.wait) 
let cerpe = await cerpen(`pengalaman pribadi`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pengorbanan':{
m.reply (act.wait) 
let cerpe = await cerpen(`pengorbanan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-penyesalan':{
m.reply (act.wait) 
let cerpe = await cerpen(`penyesalan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-perjuangan':{
m.reply (act.wait) 
let cerpe = await cerpen(`perjuangan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-perpisahan':{
m.reply (act.wait) 
let cerpe = await cerpen(`perpisahan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-persahabatan':{
m.reply (act.wait) 
let cerpe = await cerpen(`persahabatan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-petualangan':{
m.reply (act.wait) 
let cerpe = await cerpen(`petualangan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-ramadhan':{
m.reply (act.wait) 
let cerpe = await cerpen(`ramadhan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-remaja':{
m.reply (act.wait) 
let cerpe = await cerpen(`remaja`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-rindu':{
m.reply (act.wait) 
let cerpe = await cerpen(`rindu`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-rohani':{
m.reply (act.wait) 
let cerpe = await cerpen(`rohani`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-romantis':{
m.reply (act.wait) 
let cerpe = await cerpen(`romantis`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sastra':{
m.reply (act.wait) 
let cerpe = await cerpen(`sastra`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sedih':{
m.reply (act.wait) 
let cerpe = await cerpen(`sedih`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sejarah':{
m.reply (act.wait) 
let cerpe = await cerpen(`sejarah`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break

// -------[ END ]------- \\		
  

            

//++++++++++++++ END CASE +++++++++++++++
default:

if ((m.mtype === 'reactionMessage') && m.isGroup) {
    conn.sendMessage(from, {text: `Terdeteksi *${m.pushName} @${m.sender.split("@")[0]}* Mengirim Reaction.`, mentions: [m.sender]}, {quoted: fake})
        }
        
        if ((m.mtype === 'groupInviteMessage' || budy.startsWith('https://chat') || budy.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        	let buttons = [
                    {buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1}
                ]
			conn.sendMessage(from, {text:`INVITE DETECT\n\nMau masukin bot ini ke group kamu?`, title: 'LINK GROUP DECTETED', footer: global.footer, buttons: buttons, headerType: 5})
		}
      
      
if (budy.startsWith("$") && isCreator) {
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) m.reply(`${stdout}`.trim())
})
}
if (budy.startsWith(`>`)) {
try {
	if (!isCreator) return m.reply(act.owner)
conn.sendMessage(m.key.remoteJid, { text: JSON.stringify(eval(body.slice(2)), null, 2)}, { quoted: m})
} catch (e) {
print(e)
conn.sendMessage(from, { text: String(e)}, { quoted: m})}
}
if (budy.startsWith(`=>`)) {
try {
	if (!isCreator) return m.reply(act.owner)
conn.sendMessage(from, { text: util.format(eval(`( async () => { return ${body.slice(3)}})()`))}, { quoted: m})
} catch (e) {
print(e)
conn.sendMessage(`${NomorOwner}@s.whatsapp.net`, { text: String(e) }, { quoted: m})
}
}
}
} catch(e) {
print(`[x] Error: ${e}`.red)
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update!`), chalk.yellow(`${__filename}`))
	delete require.cache[file]
	require(file)
})
