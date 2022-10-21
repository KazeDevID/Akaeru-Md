/*

Mau ngapain? di sini cuman ada FUNCTION dll
kalau mau recode edit di message/config

*/
require('./message/config')//config

// CONST \\
const { default: _makeWaSocket, AnyMessageContent, delay, DisconnectReason, fetchLatestBaileysVersion, useSingleFileAuthState, downloadContentFromMessage, jidDecode, makeInMemoryStore } = require('@adiwajshing/baileys')
const colors = require('colors')
const figlet = require("figlet")
const { color, mylog, infolog } = require("./library/color")
const PhoneNumber = require('awesome-phonenumber')
const pino = require('pino')
const path = require('path')
const spin = require('spinnies')
const fileType = require('file-type')
const FileType = require('file-type')
const { sleep, getSizeMedia } = require('./library/function.js');
// -------[ END ]------- \\

// FUNCTION CONSOLE LOG FRIENDS \\
var _0x593f0d=_0x1a1a;function _0x1a1a(_0x532392,_0x37822d){var _0x42e139=_0x42e1();return _0x1a1a=function(_0x1a1a66,_0x1acb9f){_0x1a1a66=_0x1a1a66-0x1ab;var _0xedee68=_0x42e139[_0x1a1a66];return _0xedee68;},_0x1a1a(_0x532392,_0x37822d);}(function(_0x47ae8a,_0x33e36c){var _0x2530c1=_0x1a1a,_0x3b70dc=_0x47ae8a();while(!![]){try{var _0x1ca977=parseInt(_0x2530c1(0x1b1))/0x1+-parseInt(_0x2530c1(0x1be))/0x2*(parseInt(_0x2530c1(0x1bb))/0x3)+parseInt(_0x2530c1(0x1c1))/0x4*(-parseInt(_0x2530c1(0x1ad))/0x5)+-parseInt(_0x2530c1(0x1ab))/0x6*(-parseInt(_0x2530c1(0x1b8))/0x7)+-parseInt(_0x2530c1(0x1b7))/0x8*(parseInt(_0x2530c1(0x1bc))/0x9)+parseInt(_0x2530c1(0x1c2))/0xa+-parseInt(_0x2530c1(0x1b3))/0xb;if(_0x1ca977===_0x33e36c)break;else _0x3b70dc['push'](_0x3b70dc['shift']());}catch(_0x462690){_0x3b70dc['push'](_0x3b70dc['shift']());}}}(_0x42e1,0x46622));function Person(_0xbda7cc,_0x16a0da){var _0x166f1b=_0x1a1a;this[_0x166f1b(0x1b6)]=_0xbda7cc,this['BOT']=_0x16a0da;}var friend={};friend['Base']=new Person(_0x593f0d(0x1b2),_0x593f0d(0x1bd)),friend[_0x593f0d(0x1c0)]=new Person(_0x593f0d(0x1ae),_0x593f0d(0x1ac)),friend[_0x593f0d(0x1b5)]=new Person(_0x593f0d(0x1bf),_0x593f0d(0x1b9)),friend[_0x593f0d(0x1b4)]=new Person(_0x593f0d(0x1b0),'AtakBotz');function _0x42e1(){var _0x1b3e83=['4442735ginWfs','Friends3','Friends2','OWNER','40NnTBXC','14KOjxkp','HanzBotz','lastName','23799xPcbYH','409653BVLKty','Akaeru\x20Bot','2LPNzis','Haris\x20Ganz','Friends','7036whHpkr','3702970pAmfSO','1670034Luqfqp','Fax\x20Bot','95SSyZhd','Fardan','Owner','Ridho','34139LdDffl','KazeDevID'];_0x42e1=function(){return _0x1b3e83;};return _0x42e1();}function Person(_0x449d,_0x443264){var _0xd8fc2b=_0x593f0d;this['firstName']=_0x449d,this[_0xd8fc2b(0x1ba)]=_0x443264;}function Person(_0x2248a2,_0x292f4b){var _0x284c09=_0x593f0d;this[_0x284c09(0x1af)]=_0x2248a2,this['BotName']=_0x292f4b;}
// -------[ END ]------- \\

// FUNCTION LOG GERAK
var _0x12bf18=_0x3698;function _0x2d0f(){var _0x31a2ad=['Menunggu\x20Pesan.','3OSAEYx','Menung','6711450lKtlLg','Menunggu\x20Pe','Menungg','18200GkhFia','Menunggu\x20Pesan','15Ylgyth','55408tuXgmO','Men','Menunggu\x20Pesan...','963cdFlzs','Menunggu\x20P','Menunggu\x20Pesa','Menunggu\x20Pes','876010Czlcac','10162009tpJIdk','Menun','Menunggu\x20Pesan..','add','649410NUgPtq','1778420VjdjdR','2784HfblHK','blue','Menunggu','Menu'];_0x2d0f=function(){return _0x31a2ad;};return _0x2d0f();}function _0x3698(_0x2aef94,_0xb6327){var _0x2d0f72=_0x2d0f();return _0x3698=function(_0x369844,_0x175ddf){_0x369844=_0x369844-0xaa;var _0x19c1b7=_0x2d0f72[_0x369844];return _0x19c1b7;},_0x3698(_0x2aef94,_0xb6327);}(function(_0x40f81f,_0x4410be){var _0x183d0a=_0x3698,_0x23c066=_0x40f81f();while(!![]){try{var _0x34c3d1=parseInt(_0x183d0a(0xb0))/0x1+parseInt(_0x183d0a(0xb5))/0x2*(-parseInt(_0x183d0a(0xbc))/0x3)+-parseInt(_0x183d0a(0xb6))/0x4*(-parseInt(_0x183d0a(0xc3))/0x5)+parseInt(_0x183d0a(0xb7))/0x6*(parseInt(_0x183d0a(0xc1))/0x7)+-parseInt(_0x183d0a(0xc4))/0x8*(parseInt(_0x183d0a(0xac))/0x9)+-parseInt(_0x183d0a(0xbe))/0xa+-parseInt(_0x183d0a(0xb1))/0xb;if(_0x34c3d1===_0x4410be)break;else _0x23c066['push'](_0x23c066['shift']());}catch(_0x4d05e7){_0x23c066['push'](_0x23c066['shift']());}}}(_0x2d0f,0xb8712));var spinner={'interval':0x78,'frames':['','M','Me',_0x12bf18(0xaa),_0x12bf18(0xba),_0x12bf18(0xb2),'Menung',_0x12bf18(0xc0),'Menunggu\x20','Menunggu\x20P',_0x12bf18(0xaf),_0x12bf18(0xae),_0x12bf18(0xc2),_0x12bf18(0xbb),'Menunggu\x20Pesan..',_0x12bf18(0xab),_0x12bf18(0xb3),'Menunggu\x20Pesan.',_0x12bf18(0xb3),_0x12bf18(0xab),'Menunggu\x20Pesan..',_0x12bf18(0xbb),_0x12bf18(0xb3),_0x12bf18(0xab),'Menunggu\x20Pesan..',_0x12bf18(0xbb),_0x12bf18(0xb3),_0x12bf18(0xab),'Menunggu\x20Pesan..',_0x12bf18(0xbb),_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),_0x12bf18(0xbb),_0x12bf18(0xb3),_0x12bf18(0xab),'Menunggu\x20Pesan..','Menunggu\x20Pesan.',_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),_0x12bf18(0xbb),_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),_0x12bf18(0xbb),_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),_0x12bf18(0xbb),_0x12bf18(0xb3),_0x12bf18(0xab),'Menunggu\x20Pesan..','Menunggu\x20Pesan.',_0x12bf18(0xb3),_0x12bf18(0xab),'Menunggu\x20Pesan..','Menunggu\x20Pesan.',_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),'Menunggu\x20Pesan.',_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),_0x12bf18(0xbb),_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),_0x12bf18(0xbb),_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),'Menunggu\x20Pesan.',_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),_0x12bf18(0xbb),_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),'Menunggu\x20Pesan.',_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),_0x12bf18(0xbb),_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),_0x12bf18(0xbb),_0x12bf18(0xb3),_0x12bf18(0xab),'Menunggu\x20Pesan..',_0x12bf18(0xbb),_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),_0x12bf18(0xbb),_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),'Menunggu\x20Pesan.','Menunggu\x20Pesan..',_0x12bf18(0xab),'Menunggu\x20Pesan..','Menunggu\x20Pesan.',_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),_0x12bf18(0xbb),_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),_0x12bf18(0xbb),_0x12bf18(0xb3),_0x12bf18(0xab),'Menunggu\x20Pesan..',_0x12bf18(0xbb),'Menunggu\x20Pesan..',_0x12bf18(0xab),_0x12bf18(0xb3),_0x12bf18(0xbb),_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),_0x12bf18(0xbb),_0x12bf18(0xb3),'Menunggu\x20Pesan...',_0x12bf18(0xb3),'Menunggu\x20Pesan.',_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),_0x12bf18(0xbb),_0x12bf18(0xb3),'Menunggu\x20Pesan...',_0x12bf18(0xb3),_0x12bf18(0xbb),_0x12bf18(0xb3),'Menunggu\x20Pesan...',_0x12bf18(0xb3),_0x12bf18(0xbb),_0x12bf18(0xb3),'Menunggu\x20Pesan...','Menunggu\x20Pesan..',_0x12bf18(0xbb),_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),_0x12bf18(0xbb),_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),_0x12bf18(0xbb),_0x12bf18(0xb3),'Menunggu\x20Pesan...',_0x12bf18(0xb3),_0x12bf18(0xbb),_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),_0x12bf18(0xbb),_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),'Menunggu\x20Pesan.','Menunggu\x20Pesan..','Menunggu\x20Pesan...','Menunggu\x20Pesan..','Menunggu\x20Pesan.','Menunggu\x20Pesan..',_0x12bf18(0xab),_0x12bf18(0xb3),_0x12bf18(0xbb),_0x12bf18(0xb3),'Menunggu\x20Pesan...',_0x12bf18(0xb3),'Menunggu\x20Pesan.',_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),_0x12bf18(0xbb),_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),'Menunggu\x20Pesan.',_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),_0x12bf18(0xbb),_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),_0x12bf18(0xbb),_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),'Menunggu\x20Pesan.',_0x12bf18(0xb3),_0x12bf18(0xab),_0x12bf18(0xb3),_0x12bf18(0xbb),'Menunggu\x20Pesan..',_0x12bf18(0xab),_0x12bf18(0xb3),'Menunggu\x20Pesan.',_0x12bf18(0xc2),_0x12bf18(0xae),_0x12bf18(0xaf),_0x12bf18(0xbf),_0x12bf18(0xad),_0x12bf18(0xb9),'Menungg',_0x12bf18(0xbd),'Menun','Menu','Men','Me','M','']};let globalSpinner;var getGlobalSpinner=(_0x569684=![])=>{var _0x2904df=_0x12bf18;if(!globalSpinner)globalSpinner=new spin({'color':_0x2904df(0xb8),'succeedColor':'green','spinner':spinner,'disableSpins':_0x569684});return globalSpinner;};spins=getGlobalSpinner(![]);var forks=(_0x300f99,_0x51d3c9)=>{var _0xbe44f0=_0x12bf18;spins[_0xbe44f0(0xb4)](_0x300f99,{'text':_0x51d3c9});};
// -------[ END ]------- \\

let spc1 = ' '
let spc2 = '\n              '
let spc3 = '           '
let spc4 = '  '

// FUNCTION & CONSOLE LOG \\\
function title() {
      console.clear()    
	  console.log(color(figlet.textSync(NameBot, {
        font: 'Standard',
        horizontalLayout: 'default',
        vertivalLayout: 'default',
        width: 80,
        whitespaceBreak: false
        }), 'aqua'))  
       		  	  
console.table(friend);

}
// -------[ END ]------- \\

// COLOR THEME \\
colors.setTheme({
warn:'yellow',
error:'red',
deb:'green'
})
// -------[ END ]------- \\


let print = console.log;


// CONST2 \\
const { smsg, getBuffer } = require('./library/function.js')
const { state, saveState } = useSingleFileAuthState('./session.json')
const fs = require('fs')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./library/exif')
const chalk = require('chalk')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
// -------[ END ]------- \\

// WA SOCKET \\
const startHandler = async() =>{
const conn = _makeWaSocket({
logger: pino({ level: 'silent'}),
printQRInTerminal: true,
auth: state
})
title()

conn.ev.on('chats.set', item => console.log(`recv ${item.chats.length} chats (is latest: ${item.isLatest})`))
conn.ev.on('messages.set', item => console.log(`recv ${item.messages.length} messages (is latest: ${item.isLatest})`))
conn.ev.on('contacts.set', item => console.log(`recv ${item.contacts.length} contacts`))
	

conn.ev.on('messages.upsert', async mek =>{
try {
const msg = mek.messages[0]
m = smsg(conn, msg, mek)
require('./message/kaze')(conn, m)
} catch (e) {
print(`${e}`.error)
}
})
// -------[ END ]------- \\

// OTHER \\
	conn.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
// -------[ END ]------- \\
    
// ANTICALL \\
    conn.ev.on('call', async (anticoll) => {
    let botNumber = await conn.decodeJid(conn.user.id)
    let anj = JSON.parse(fs.readFileSync('./metadata/anticall.json'));
    if (!anj.setting.anticall) return
    console.log(anticoll)
    for (let Dolly of anticoll) {
    if (Dolly.isGroup == false) {
    if (Dolly.status == "offer") {
    let asu = await conn.sendTextWithMentions(Dolly.from, `Maaf Bot Tidak Dapat menerima panggilan ${Dolly.isVideo ? `video` : `suara`}. Maaf @${Dolly.from.split('@')[0]} kamu akan diblockir. Jika tidak sengaja silahkan hubungi Owner untuk dibuka !`)
    conn.sendContact(Dolly.from, global.owner, asu)
    await sleep(8000)
    await conn.updateBlockStatus(Dolly.from, "block")
    }
    }
    }
    })
// -------[ END ]------- \\

// GETNAME \\
    conn.getName = (jid, withoutContact  = false) => {
        id = conn.decodeJid(jid)
        withoutContact = conn.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = conn.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === conn.decodeJid(conn.user.id) ?
            conn.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
// -------[ END ]------- \\
  

// SENDCONTACT \\
	conn.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await conn.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await conn.getName(i + '@s.whatsapp.net')}\nFN:${await conn.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET: inikahsiapa@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/lordagam23_\nitem3.X-ABLabel:Instagram\nitem4.ADR:;; Japanese;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	conn.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }
/** Resize Image
      *
      * @param {Buffer} Buffer (Only Image)
      * @param {Numeric} Width
      * @param {Numeric} Height
      */
      conn.reSize = async (image, width, height) => {
       let jimp = require('jimp')
       var oyy = await jimp.read(image);
       var kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
       return kiyomasa
      }
      // Siapa yang cita-citanya pakai resize buat keliatan thumbnailnya

	/** Send List Messaage
      *
      *@param {*} jid
      *@param {*} text
      *@param {*} footer
      *@param {*} title
      *@param {*} butText
      *@param [*] sections
      *@param {*} quoted
      */
        conn.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
        let sections = sects
        var listMes = {
        text: text,
        footer: footer,
        title: title,
        buttonText: butText,
        sections
        }
        conn.sendMessage(jid, listMes, { quoted: quoted })
        }

	/** Send Button 5 Message
     * 
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} button
     * @returns 
     */
        conn.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
        let templateButtons = but
        var templateMessage = {
        text: text,
        footer: footer,
        templateButtons: templateButtons
        }
        conn.sendMessage(jid, templateMessage)
        }

    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    conn.send5ButImg = async (jid , text = '' , footer = '', img, but = [], buff, options = {}) =>{
    conn.sendMessage(jid, { image: img, caption: text, footer: footer, templateButtons: but, ...options })
    }

	/** Send Button 5 Video
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} Video
     * @param [*] button
     * @param {*} options
     * @returns
     */
    conn.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], buff, options = {}) =>{
    let lol = await conn.reSize(buf, 300, 150)
    conn.sendMessage(jid, { video: vid, jpegThumbnail: lol, caption: text, footer: footer, templateButtons: but, ...options })
    }

    /** Send Button 5 Gif
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} Gif
     * @param [*] button
     * @param {*} options
     * @returns
     */
    conn.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], buff, options = {}) =>{
    let ahh = await conn.reSize(buf, 300, 150)
    let a = [1,2]
    let b = a[Math.floor(Math.random() * a.length)]
    conn.sendMessage(jid, { video: gif, gifPlayback: true, gifAttribution: b, caption: text, footer: footer, jpegThumbnail: ahh, templateButtons: but, ...options })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    conn.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        conn.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
/** Send Button 5 Location
       *
       * @param {*} jid
       * @param {*} text
       * @param {*} footer
       * @param {*} location
       * @param [*] button
       * @param {*} options
       */
      conn.send5ButLoc = async (jid , text = '' , footer = '', lok, but = [], options = {}) =>{
      let bb = await conn.reSize(lok, 300, 150)
      conn.sendMessage(jid, { location: { jpegThumbnail: bb }, caption: text, footer: footer, templateButtons: but, ...options })
      }
      
      /** Send Location
       *
       * @param {*} jid
       * @param {*} text
       * @param {*} footer
       * @param {*} location
       * @param [*] button
       * @param {*} options
       */
      conn.sendLoc = async (jid , text = '' , lok, options = {}) =>{
      let bb = await conn.reSize(lok, 300, 150)
      conn.sendMessage(jid, { location: { jpegThumbnail: bb }, ...options })
      }
      
	/**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    conn.sendText = (jid, text, quoted = '', options) => conn.sendMessage(jid, { text: text, ...options }, { quoted, ...options })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    conn.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    conn.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await conn.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} filename
     * @param {*} caption
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    conn.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await conn.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./library/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await conn.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }

	/**
     * 
     * @param {*} path 
     * @returns 
     */
    conn.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }
	
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    conn.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await conn.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    conn.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await conn.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    conn.sendTextWithMentions = async (jid, text, quoted, options = {}) => conn.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })

   
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    conn.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
    
    conn.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    /**
* 
* @param {*} message 
* @param {*} filename 
* @param {*} attachExtension 
* @returns 
*/
conn.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = mime.split('/')[0].replace('application', 'document') ? mime.split('/')[0].replace('application', 'document') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await fileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
print(trueFileName)
return trueFileName
}

conn.ev.on('connection.update', async(update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut ? startHandler() : print('[!] Connection lost'.warn)
}
print('[ ! ] connecting'.warn, update)
})
forks('2',colors.bold.white(Log)); 
conn.ev.on('creds.update', saveState)	
return conn
}

startHandler()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
