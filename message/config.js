const fs = require('fs')
const chalk = require('chalk')
const { times, runtime, sender, pushname, formatDate, tanggal } = require('../library/function')


// Website Api
global.Api = {
	ampibi: 'https://ampibismm.my.id',
}

// Apikey Website Api
global.ApiKey = 'coderevolution' 

NameOwner = 'KazeDevID'// Nama lu
NameBot = 'Akaeru Md'// Nama bot lu
NomorOwner = '6282217590187'// Nomor Owner
Log = '\n『々Lord』KAZE☆☆☆'//console log gerak nya:v
Titlenyo = 'SUBSRIBE CHANNEL KAZEDEVID'// Titlenya

// FOOTER/WM
Mfooter = 'Peringatan: Dilarang keras spam command.\n\n© KazeDevID'// footer menu/biodata

Uig = 'https://instagram.com/lordagam23_'// link ig lu
Ugc = 'https://chat.whatsapp.com/KX1gNmG96RHC2oUlNy3Wdz'// link gc lu

// Other
global.owner = ['6282217590187']// Nomor lu
global.premium = ['6282217590187']// User Prem
global.profilebio = ['6282217590187'] // ini ganti nomor lu ntar bisa nampilin pp lu
global.packname = 'Akaeru Bot'// Packname
global.sessionName = 'session'// session Bot
global.footer = '© KazeDevID'// footer biasa
global.author = 'KazeDevID || ig: @lordagam23_'
global.prefa = ['','!','.','🐦','🐤','🗿']// Prefix
global.act = {
		wait: 'Permintaan di proses...',// Proses
		urlerr: 'Link Error',// Link Error
		nurl: 'Harap Masukan Url',// No Url
		ntext: 'Harap Masukan Parameter',// No Text
		error:'Error :(',// Error
		success:'Success !',// Sukses
		botadm:'Fitur ini bisa digunakan saat bot sudah menjadi admin!',// Ketika Bot Bukan admin
		admin:'Fitur Ini Cuman untuk admin group!',// Ketika Fitur khusus admin
		done:'Done!',// Sukses
		gc:'Fitur ini hanya bisa digunakan di dalam group chat!',
		owner:'Fitur ini khusus owner bot!'// Khusus Owner/Pemilik Bot
}


exports.BData = () => {
	return `┍┈–––• *BIODATA OWNER*
┆⫹⫺ Nama : KAZE DEV ID
┆⫹⫺ Hobby : NGODING & ART
┆⫹⫺ Status : SINGLE
┆⫹⫺ Birthday : 23 - 03 - 2004
┆⫹⫺ Address : ISEKAI
└––––––––––––––––––·•

┍┈––––––• *SKILLS*
┆> JavaScript [50%]
┆> Html [98%]
┆> CSS [98%]
└––––––––––––––––––·•\n`
}

global.thumb = fs.readFileSync('./media/me.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})