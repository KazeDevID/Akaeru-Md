const { times, runtime, sender, pushname, formatDate, tanggal } = require('../library/function')

exports.simplemenu = (sender, prefix, pushname) => {
	return `Hi ${m.pushName} ๐
โญโโโฒ *${NameBot}* โณ	
โ	
โโโโโญ *INFO*
โโ
โโโญ *Nama :* _ใ ${pushname} ใ_
โโโญ *Nomer :* _ใ ${m.sender.split("@")[0]} ใ_
โโโญ *Jam :* _ใ ${times(new Date)} ใ_
โโโญ *Tanggal :* _ใ ${tanggal(new Date)} ใ_
โโโญ *Runtime :* _ใ ${runtime(process.uptime())} ใ_
โโ
โโโโโโโโโโญ
โ
โโซบ ${prefix}ping 
โโซบ ${prefix}menu
โโซบ ${prefix}script
โ
โโโโโญ *Simple Menu*
โโ
โโ _โซนโซบ ownermenu_
โโ _โซนโซบ downloadermenu_
โโ _โซนโซบ searchmenu_
โโ _โซนโซบ groupmenu_
โโ _โซนโซบ toolsmenu_
โโ _โซนโซบ funmenu_
โโ _โซนโซบ othermenu_
โโ _โซนโซบ cerpenmenu_
โโ 
โโฐโป
โฐโโโโโโโโโโโโโโโโโฑ
`
}



exports.ownermenu = (sender, prefix, pushname) => {
	return `Hi ${m.pushName} ๐
โญโโโฒ *${NameBot}* โณ	
โ	
โโโโโญ *INFO*
โโ
โโโญ *Nama :* _ใ ${pushname} ใ_
โโโญ *Nomer :* _ใ ${m.sender.split("@")[0]} ใ_
โโโญ *Jam :* _ใ ${times(new Date)} ใ_
โโโญ *Tanggal :* _ใ ${tanggal(new Date)} ใ_
โโโญ *Runtime :* _ใ ${runtime(process.uptime())} ใ_
โโ
โโโโโโโโโโญ
โ
โโซบ ${prefix}ping 
โโซบ ${prefix}menu
โโซบ ${prefix}script
โ
โโโโโญ *Owner Menu*
โโ
โโโซนโซบ ${prefix}block @tag
โโโซนโซบ ${prefix}unblock @tag
โโโซนโซบ ${prefix}setppbot _reply_
โโโซนโซบ ${prefix}join _link_
โโโซนโซบ ${prefix}leave 
โโโซนโซบ ${prefix}anticall 
โโโซนโซบ ${prefix}addprem @tag _jumlah_
โโโซนโซบ ${prefix}delprem @tag
โโโซนโซบ ${prefix}setbotbio
โโโซนโซบ ${prefix}setnamabot
โโโซนโซบ > 
โโโซนโซบ => 
โโโซนโซบ $ 
โโ
โโฐโป
โฐโโโโโโโโโโโโโโโโโฑ
`
}


exports.downloadmenu = (sender, prefix, pushname) => {
	return `Hi ${m.pushName} ๐
โญโโโฒ *${NameBot}* โณ	
โ	
โโโโโญ *INFO*
โโ
โโโญ *Nama :* _ใ ${pushname} ใ_
โโโญ *Nomer :* _ใ ${m.sender.split("@")[0]} ใ_
โโโญ *Jam :* _ใ ${times(new Date)} ใ_
โโโญ *Tanggal :* _ใ ${tanggal(new Date)} ใ_
โโโญ *Runtime :* _ใ ${runtime(process.uptime())} ใ_
โโ
โโโโโโโโโโญ
โ
โโซบ ${prefix}ping 
โโซบ ${prefix}menu
โโซบ ${prefix}script
โ
โโโโโญ *Downloader Menu*
โโ
โโโซนโซบ ${prefix}tiktok _url_ 
โโโซนโซบ ${prefix}tiktokaudio _url_ 
โโโซนโซบ ${prefix}ytmp3 _url_ ๐ซ
โโโซนโซบ ${prefix}ytmp4 _url_ ๐ซ
โโ
โโฐโป
โฐโโโโโโโโโโโโโโโโโฑ
`
}


exports.searchmenu = (sender, prefix, pushname) => {
	return `Hi ${m.pushName} ๐
โญโโโฒ *${NameBot}* โณ	
โ	
โโโโโญ *INFO*
โโ
โโโญ *Nama :* _ใ ${pushname} ใ_
โโโญ *Nomer :* _ใ ${m.sender.split("@")[0]} ใ_
โโโญ *Jam :* _ใ ${times(new Date)} ใ_
โโโญ *Tanggal :* _ใ ${tanggal(new Date)} ใ_
โโโญ *Runtime :* _ใ ${runtime(process.uptime())} ใ_
โโ
โโโโโโโโโโญ
โ
โโซบ ${prefix}ping 
โโซบ ${prefix}menu
โโซบ ${prefix}script
โ
โโโโโญ *Search Menu*
โโ
โโโซนโซบ ${prefix}play [query] 
โโโซนโซบ ${prefix}ytsearch [query] 
โโโซนโซบ ${prefix}pinterest 
โโ				
โโฐโป
โฐโโโโโโโโโโโโโโโโโฑ
`
}


exports.groupmenu = (sender, prefix, pushname) => {
	return `Hi ${m.pushName} ๐
โญโโโฒ *${NameBot}* โณ	
โ	
โโโโโญ *INFO*
โโ
โโโญ *Nama :* _ใ ${pushname} ใ_
โโโญ *Nomer :* _ใ ${m.sender.split("@")[0]} ใ_
โโโญ *Jam :* _ใ ${times(new Date)} ใ_
โโโญ *Tanggal :* _ใ ${tanggal(new Date)} ใ_
โโโญ *Runtime :* _ใ ${runtime(process.uptime())} ใ_
โโ
โโโโโโโโโโญ
โ
โโซบ ${prefix}ping 
โโซบ ${prefix}menu
โโซบ ${prefix}script
โ
โโโโโญ *Group Menu*
โโ
โโโซนโซบ ${prefix}linkgc
โโโซนโซบ ${prefix}add _num_
โโโซนโซบ ${prefix}kick @tag
โโโซนโซบ ${prefix}tagall _text_
โโโซนโซบ ${prefix}promote @tag
โโโซนโซบ ${prefix}demote @tag
โโโซนโซบ ${prefix}setname _text_
โโโซนโซบ ${prefix}setppgroup _reply_ 
โโโซนโซบ ${prefix}setdesk _text_
โโโซนโซบ ${prefix}hidetag _text_
โโโซนโซบ ${prefix}totag _reply_ 
โโโซนโซบ ${prefix}linkgroup 
โโ
โโฐโป
โฐโโโโโโโโโโโโโโโโโฑ
`
}


exports.toolsmenu = (sender, prefix, pushname) => {
	return `Hi ${m.pushName} ๐
โญโโโฒ *${NameBot}* โณ	
โ	
โโโโโญ *INFO*
โโ
โโโญ *Nama :* _ใ ${pushname} ใ_
โโโญ *Nomer :* _ใ ${m.sender.split("@")[0]} ใ_
โโโญ *Jam :* _ใ ${times(new Date)} ใ_
โโโญ *Tanggal :* _ใ ${tanggal(new Date)} ใ_
โโโญ *Runtime :* _ใ ${runtime(process.uptime())} ใ_
โโ
โโโโโโโโโโญ
โ
โโซบ ${prefix}ping 
โโซบ ${prefix}menu
โโซบ ${prefix}script
โ
โโโโโญ *Tools Menu*
โโ
โโโซนโซบ ${prefix}sticker/s 
โโโซนโซบ ${prefix}stickergif 
โโโซนโซบ ${prefix}swm [q|q] 
โโโซนโซบ ${prefix}toimg _reply_ 
โโโซนโซบ ${prefix}style _text_
โโโซนโซบ ${prefix}smeme [q|q] 
โโโซนโซบ ${prefix}ebinary _text_
โโโซนโซบ ${prefix}dbinary [code] 
โโโซนโซบ ${prefix}tomp4 [send/reply] 
โโโซนโซบ ${prefix}toaud [send/reply] 
โโโซนโซบ ${prefix}tomp3 [send/reply] 
โโโซนโซบ ${prefix}tovn [send/reply] 
โโโซนโซบ ${prefix}togif [send/reply] 
โโโซนโซบ ${prefix}tourl [send/reply] 
โโ
โโฐโป
โฐโโโโโโโโโโโโโโโโโฑ
`
}


exports.funmenu = (sender, prefix, pushname) => {
	return `Hi ${m.pushName} ๐
โญโโโฒ *${NameBot}* โณ	
โ	
โโโโโญ *INFO*
โโ
โโโญ *Nama :* _ใ ${pushname} ใ_
โโโญ *Nomer :* _ใ ${m.sender.split("@")[0]} ใ_
โโโญ *Jam :* _ใ ${times(new Date)} ใ_
โโโญ *Tanggal :* _ใ ${tanggal(new Date)} ใ_
โโโญ *Runtime :* _ใ ${runtime(process.uptime())} ใ_
โโ
โโโโโโโโโโญ
โ
โโซบ ${prefix}ping 
โโซบ ${prefix}menu
โโซบ ${prefix}script
โ
โโโโโญ *Fun Menu*
โโ
โโโซนโซบ ${prefix}menfes 
โโโซนโซบ ${prefix}jadian 
โโโซนโซบ ${prefix}jodohku 
โโ
โโฐโป
โฐโโโโโโโโโโโโโโโโโฑ
`
}


exports.othermenu = (sender, prefix, pushname) => {
	return `Hi ${m.pushName} ๐
โญโโโฒ *${NameBot}* โณ	
โ	
โโโโโญ *INFO*
โโ
โโโญ *Nama :* _ใ ${pushname} ใ_
โโโญ *Nomer :* _ใ ${m.sender.split("@")[0]} ใ_
โโโญ *Jam :* _ใ ${times(new Date)} ใ_
โโโญ *Tanggal :* _ใ ${tanggal(new Date)} ใ_
โโโญ *Runtime :* _ใ ${runtime(process.uptime())} ใ_
โโ
โโโโโโโโโโญ
โ
โโซบ ${prefix}ping 
โโซบ ${prefix}menu
โโซบ ${prefix}script
โ
โโโโโญ *Other Menu*
โโ
โโโซนโซบ ${prefix}requestfitur _text_
โโ
โโฐโป
โฐโโโโโโโโโโโโโโโโโฑ
`
}


exports.cerpenmenu = (sender, prefix, pushname) => {
	return `Hi ${m.pushName} ๐
โญโโโฒ *${NameBot}* โณ	
โ	
โโโโโญ *INFO*
โโ
โโโญ *Nama :* _ใ ${pushname} ใ_
โโโญ *Nomer :* _ใ ${m.sender.split("@")[0]} ใ_
โโโญ *Jam :* _ใ ${times(new Date)} ใ_
โโโญ *Tanggal :* _ใ ${tanggal(new Date)} ใ_
โโโญ *Runtime :* _ใ ${runtime(process.uptime())} ใ_
โโ
โโโโโโโโโโญ
โ
โโซบ ${prefix}ping 
โโซบ ${prefix}menu
โโซบ ${prefix}script
โ
โโโโโญ *Cerpen Menu*
โโ
โโโซนโซบ ${prefix}cerpen-anak
โโโซนโซบ ${prefix}cerpen-bahasadaerah
โโโซนโซบ ${prefix}cerpen-bahasainggris
โโโซนโซบ ${prefix}cerpen-bahasajawa
โโโซนโซบ ${prefix}cerpen-budaya
โโโซนโซบ ${prefix}cerpen-cinta
โโโซนโซบ ${prefix}cerpen-cintaislami
โโโซนโซบ ${prefix}cerpen-cintapertama
โโโซนโซบ ${prefix}cerpen-cintaromantis
โโโซนโซบ ${prefix}cerpen-cintasedih
โโโซนโซบ ${prefix}cerpen-cintasegitiga
โโโซนโซบ ${prefix}cerpen-cintasejati
โโโซนโซบ ${prefix}cerpen-galau
โโโซนโซบ ${prefix}cerpen-gokil
โโโซนโซบ ${prefix}cerpen-inspiratif
โโโซนโซบ ${prefix}cerpen-jepang
โโโซนโซบ ${prefix}cerpen-kehidupan
โโโซนโซบ ${prefix}cerpen-keluarga
โโโซนโซบ ${prefix}cerpen-kisahnyata
โโโซนโซบ ${prefix}cerpen-korea
โโโซนโซบ ${prefix}cerpen-kristen
โโโซนโซบ ${prefix}cerpen-liburan
โโโซนโซบ ${prefix}cerpen-malaysia
โโโซนโซบ ${prefix}cerpen-mengharukan
โโโซนโซบ ${prefix}cerpen-misteri
โโโซนโซบ ${prefix}cerpen-motivasi
โโโซนโซบ ${prefix}cerpen-nasihat
โโโซนโซบ ${prefix}cerpen-nasionalisme
โโโซนโซบ ${prefix}cerpen-olahraga
โโโซนโซบ ${prefix}cerpen-patahhati
โโโซนโซบ ${prefix}cerpen-penantian
โโโซนโซบ ${prefix}cerpen-pendidikan
โโโซนโซบ ${prefix}cerpen-pengalaman
โโโซนโซบ ${prefix}cerpen-pengorbanan
โโโซนโซบ ${prefix}cerpen-penyesalan
โโโซนโซบ ${prefix}cerpen-perjuangan
โโโซนโซบ ${prefix}cerpen-perpisahan
โโโซนโซบ ${prefix}cerpen-persahabatan
โโโซนโซบ ${prefix}cerpen-petualangan
โโโซนโซบ ${prefix}cerpen-ramadhan
โโโซนโซบ ${prefix}cerpen-remaja
โโโซนโซบ ${prefix}cerpen-rindu
โโโซนโซบ ${prefix}cerpen-rohani
โโโซนโซบ ${prefix}cerpen-romantis
โโโซนโซบ ${prefix}cerpen-sastra
โโโซนโซบ ${prefix}cerpen-sedih
โโโซนโซบ ${prefix}cerpen-sejarah
โโ 
โโฐโป
โฐโโโโโโโโโโโโโโโโโฑ
`
}


exports.allmenu = (sender, prefix, pushname) => {
	return `Hi ${m.pushName} ๐
				
โญโโโฒ *${NameBot}* โณ	
โ	
โโโโโญ *INFO*
โโ
โโโญ *Nama :* _ใ ${pushname} ใ_
โโโญ *Nomer :* _ใ ${m.sender.split("@")[0]} ใ_
โโโญ *Jam :* _ใ ${times(new Date)} ใ_
โโโญ *Tanggal :* _ใ ${tanggal(new Date)} ใ_
โโโญ *Runtime :* _ใ ${runtime(process.uptime())} ใ_
โโ
โโโโโโโโโโญ
โ
โโซบ ${prefix}ping 
โโซบ ${prefix}menu
โโซบ ${prefix}script
โ
โโโโโญ *OWNERMENU*
โโ
โโโซนโซบ ${prefix}block @tag
โโโซนโซบ ${prefix}unblock @tag
โโโซนโซบ ${prefix}setppbot _reply_
โโโซนโซบ ${prefix}join _link_
โโโซนโซบ ${prefix}leave 
โโโซนโซบ ${prefix}anticall 
โโโซนโซบ ${prefix}addprem @tag _jumlah_
โโโซนโซบ ${prefix}delprem @tag
โโโซนโซบ ${prefix}setbotbio
โโโซนโซบ ${prefix}setnamabot
โโโซนโซบ > 
โโโซนโซบ => 
โโโซนโซบ $ 
โโ
โโฐโป
โ
โโโโโญ *DOWNLOADERMENU*
โโ 
โโโซนโซบ ${prefix}tiktok _url_ 
โโโซนโซบ ${prefix}tiktokaudio _url_ 
โโโซนโซบ ${prefix}ytmp3 _url_ ๐ซ
โโโซนโซบ ${prefix}ytmp4 _url_ ๐ซ
โโ
โโฐโป
โ
โโโโโญ *SEARCHMENU*
โโ
โโโซนโซบ ${prefix}play [query] 
โโโซนโซบ ${prefix}ytsearch [query] 
โโโซนโซบ ${prefix}pinterest 
โโ				
โโฐโป
โ
โโโโโญ *GROUPMENU*
โโ
โโโซนโซบ ${prefix}linkgc
โโโซนโซบ ${prefix}add _num_
โโโซนโซบ ${prefix}kick @tag
โโโซนโซบ ${prefix}tagall _text_
โโโซนโซบ ${prefix}promote @tag
โโโซนโซบ ${prefix}demote @tag
โโโซนโซบ ${prefix}setname _text_
โโโซนโซบ ${prefix}setppgroup _reply_ 
โโโซนโซบ ${prefix}setdesk _text_
โโโซนโซบ ${prefix}hidetag _text_
โโโซนโซบ ${prefix}totag _reply_ 
โโโซนโซบ ${prefix}linkgroup 
โโ
โโฐโป
โ
โโโโโญ *TOOLMENU*
โโ
โโโซนโซบ ${prefix}sticker/s 
โโโซนโซบ ${prefix}stickergif 
โโโซนโซบ ${prefix}swm [q|q] 
โโโซนโซบ ${prefix}toimg _reply_ 
โโโซนโซบ ${prefix}style _text_
โโโซนโซบ ${prefix}smeme [q|q] 
โโโซนโซบ ${prefix}ebinary _text_
โโโซนโซบ ${prefix}dbinary [code] 
โโโซนโซบ ${prefix}tomp4 [send/reply] 
โโโซนโซบ ${prefix}toaud [send/reply] 
โโโซนโซบ ${prefix}tomp3 [send/reply] 
โโโซนโซบ ${prefix}tovn [send/reply] 
โโโซนโซบ ${prefix}togif [send/reply] 
โโโซนโซบ ${prefix}tourl [send/reply] 
โโ
โโฐโป
โ
โโโโโญ *FUNMENU*
โโ 
โโโซนโซบ ${prefix}menfes 
โโโซนโซบ ${prefix}jadian 
โโโซนโซบ ${prefix}jodohku 
โโ
โโฐโป
โ
โโโโโญ *OTHERMENU*
โโ 
โโโซนโซบ ${prefix}requestfitur _text_
โโ
โโฐโป
โ
โโโโโญ *CERPENMENU*
โโ 
โโโซนโซบ ${prefix}cerpen-anak
โโโซนโซบ ${prefix}cerpen-bahasadaerah
โโโซนโซบ ${prefix}cerpen-bahasainggris
โโโซนโซบ ${prefix}cerpen-bahasajawa
โโโซนโซบ ${prefix}cerpen-budaya
โโโซนโซบ ${prefix}cerpen-cinta
โโโซนโซบ ${prefix}cerpen-cintaislami
โโโซนโซบ ${prefix}cerpen-cintapertama
โโโซนโซบ ${prefix}cerpen-cintaromantis
โโโซนโซบ ${prefix}cerpen-cintasedih
โโโซนโซบ ${prefix}cerpen-cintasegitiga
โโโซนโซบ ${prefix}cerpen-cintasejati
โโโซนโซบ ${prefix}cerpen-galau
โโโซนโซบ ${prefix}cerpen-gokil
โโโซนโซบ ${prefix}cerpen-inspiratif
โโโซนโซบ ${prefix}cerpen-jepang
โโโซนโซบ ${prefix}cerpen-kehidupan
โโโซนโซบ ${prefix}cerpen-keluarga
โโโซนโซบ ${prefix}cerpen-kisahnyata
โโโซนโซบ ${prefix}cerpen-korea
โโโซนโซบ ${prefix}cerpen-kristen
โโโซนโซบ ${prefix}cerpen-liburan
โโโซนโซบ ${prefix}cerpen-malaysia
โโโซนโซบ ${prefix}cerpen-mengharukan
โโโซนโซบ ${prefix}cerpen-misteri
โโโซนโซบ ${prefix}cerpen-motivasi
โโโซนโซบ ${prefix}cerpen-nasihat
โโโซนโซบ ${prefix}cerpen-nasionalisme
โโโซนโซบ ${prefix}cerpen-olahraga
โโโซนโซบ ${prefix}cerpen-patahhati
โโโซนโซบ ${prefix}cerpen-penantian
โโโซนโซบ ${prefix}cerpen-pendidikan
โโโซนโซบ ${prefix}cerpen-pengalaman
โโโซนโซบ ${prefix}cerpen-pengorbanan
โโโซนโซบ ${prefix}cerpen-penyesalan
โโโซนโซบ ${prefix}cerpen-perjuangan
โโโซนโซบ ${prefix}cerpen-perpisahan
โโโซนโซบ ${prefix}cerpen-persahabatan
โโโซนโซบ ${prefix}cerpen-petualangan
โโโซนโซบ ${prefix}cerpen-ramadhan
โโโซนโซบ ${prefix}cerpen-remaja
โโโซนโซบ ${prefix}cerpen-rindu
โโโซนโซบ ${prefix}cerpen-rohani
โโโซนโซบ ${prefix}cerpen-romantis
โโโซนโซบ ${prefix}cerpen-sastra
โโโซนโซบ ${prefix}cerpen-sedih
โโโซนโซบ ${prefix}cerpen-sejarah
โโ 
โโฐโป
โฐโโโโโโโโโโโโโโโโโฑ
`
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})