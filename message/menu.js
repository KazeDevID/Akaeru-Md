const { times, runtime, sender, pushname, formatDate, tanggal } = require('../library/function')

exports.simplemenu = (sender, prefix, pushname) => {
	return `Hi ${m.pushName} 👋
╭──❲ *${NameBot}* ❳	
│	
│┌──⭓ *INFO*
││
││⭔ *Nama :* _「 ${pushname} 」_
││⭔ *Nomer :* _「 ${m.sender.split("@")[0]} 」_
││⭔ *Jam :* _「 ${times(new Date)} 」_
││⭔ *Tanggal :* _「 ${tanggal(new Date)} 」_
││⭔ *Runtime :* _「 ${runtime(process.uptime())} 」_
││
│└───────⭓
│
│⫺ ${prefix}ping 
│⫺ ${prefix}menu
│⫺ ${prefix}script
│
│┌──⭓ *Simple Menu*
││
││ _⫹⫺ ownermenu_
││ _⫹⫺ downloadermenu_
││ _⫹⫺ searchmenu_
││ _⫹⫺ groupmenu_
││ _⫹⫺ toolsmenu_
││ _⫹⫺ funmenu_
││ _⫹⫺ othermenu_
││ _⫹⫺ cerpenmenu_
││ 
│╰≻
╰────────────────⊱
`
}



exports.ownermenu = (sender, prefix, pushname) => {
	return `Hi ${m.pushName} 👋
╭──❲ *${NameBot}* ❳	
│	
│┌──⭓ *INFO*
││
││⭔ *Nama :* _「 ${pushname} 」_
││⭔ *Nomer :* _「 ${m.sender.split("@")[0]} 」_
││⭔ *Jam :* _「 ${times(new Date)} 」_
││⭔ *Tanggal :* _「 ${tanggal(new Date)} 」_
││⭔ *Runtime :* _「 ${runtime(process.uptime())} 」_
││
│└───────⭓
│
│⫺ ${prefix}ping 
│⫺ ${prefix}menu
│⫺ ${prefix}script
│
│┌──⭓ *Owner Menu*
││
││⫹⫺ ${prefix}block @tag
││⫹⫺ ${prefix}unblock @tag
││⫹⫺ ${prefix}setppbot _reply_
││⫹⫺ ${prefix}join _link_
││⫹⫺ ${prefix}leave 
││⫹⫺ ${prefix}anticall 
││⫹⫺ ${prefix}addprem @tag _jumlah_
││⫹⫺ ${prefix}delprem @tag
││⫹⫺ ${prefix}setbotbio
││⫹⫺ ${prefix}setnamabot
││⫹⫺ > 
││⫹⫺ => 
││⫹⫺ $ 
││
│╰≻
╰────────────────⊱
`
}


exports.downloadmenu = (sender, prefix, pushname) => {
	return `Hi ${m.pushName} 👋
╭──❲ *${NameBot}* ❳	
│	
│┌──⭓ *INFO*
││
││⭔ *Nama :* _「 ${pushname} 」_
││⭔ *Nomer :* _「 ${m.sender.split("@")[0]} 」_
││⭔ *Jam :* _「 ${times(new Date)} 」_
││⭔ *Tanggal :* _「 ${tanggal(new Date)} 」_
││⭔ *Runtime :* _「 ${runtime(process.uptime())} 」_
││
│└───────⭓
│
│⫺ ${prefix}ping 
│⫺ ${prefix}menu
│⫺ ${prefix}script
│
│┌──⭓ *Downloader Menu*
││
││⫹⫺ ${prefix}tiktok _url_ 
││⫹⫺ ${prefix}tiktokaudio _url_ 
││⫹⫺ ${prefix}ytmp3 _url_ 🚫
││⫹⫺ ${prefix}ytmp4 _url_ 🚫
││
│╰≻
╰────────────────⊱
`
}


exports.searchmenu = (sender, prefix, pushname) => {
	return `Hi ${m.pushName} 👋
╭──❲ *${NameBot}* ❳	
│	
│┌──⭓ *INFO*
││
││⭔ *Nama :* _「 ${pushname} 」_
││⭔ *Nomer :* _「 ${m.sender.split("@")[0]} 」_
││⭔ *Jam :* _「 ${times(new Date)} 」_
││⭔ *Tanggal :* _「 ${tanggal(new Date)} 」_
││⭔ *Runtime :* _「 ${runtime(process.uptime())} 」_
││
│└───────⭓
│
│⫺ ${prefix}ping 
│⫺ ${prefix}menu
│⫺ ${prefix}script
│
│┌──⭓ *Search Menu*
││
││⫹⫺ ${prefix}play [query] 
││⫹⫺ ${prefix}ytsearch [query] 
││⫹⫺ ${prefix}pinterest 
││				
│╰≻
╰────────────────⊱
`
}


exports.groupmenu = (sender, prefix, pushname) => {
	return `Hi ${m.pushName} 👋
╭──❲ *${NameBot}* ❳	
│	
│┌──⭓ *INFO*
││
││⭔ *Nama :* _「 ${pushname} 」_
││⭔ *Nomer :* _「 ${m.sender.split("@")[0]} 」_
││⭔ *Jam :* _「 ${times(new Date)} 」_
││⭔ *Tanggal :* _「 ${tanggal(new Date)} 」_
││⭔ *Runtime :* _「 ${runtime(process.uptime())} 」_
││
│└───────⭓
│
│⫺ ${prefix}ping 
│⫺ ${prefix}menu
│⫺ ${prefix}script
│
│┌──⭓ *Group Menu*
││
││⫹⫺ ${prefix}linkgc
││⫹⫺ ${prefix}add _num_
││⫹⫺ ${prefix}kick @tag
││⫹⫺ ${prefix}tagall _text_
││⫹⫺ ${prefix}promote @tag
││⫹⫺ ${prefix}demote @tag
││⫹⫺ ${prefix}setname _text_
││⫹⫺ ${prefix}setppgroup _reply_ 
││⫹⫺ ${prefix}setdesk _text_
││⫹⫺ ${prefix}hidetag _text_
││⫹⫺ ${prefix}totag _reply_ 
││⫹⫺ ${prefix}linkgroup 
││
│╰≻
╰────────────────⊱
`
}


exports.toolsmenu = (sender, prefix, pushname) => {
	return `Hi ${m.pushName} 👋
╭──❲ *${NameBot}* ❳	
│	
│┌──⭓ *INFO*
││
││⭔ *Nama :* _「 ${pushname} 」_
││⭔ *Nomer :* _「 ${m.sender.split("@")[0]} 」_
││⭔ *Jam :* _「 ${times(new Date)} 」_
││⭔ *Tanggal :* _「 ${tanggal(new Date)} 」_
││⭔ *Runtime :* _「 ${runtime(process.uptime())} 」_
││
│└───────⭓
│
│⫺ ${prefix}ping 
│⫺ ${prefix}menu
│⫺ ${prefix}script
│
│┌──⭓ *Tools Menu*
││
││⫹⫺ ${prefix}sticker/s 
││⫹⫺ ${prefix}stickergif 
││⫹⫺ ${prefix}swm [q|q] 
││⫹⫺ ${prefix}toimg _reply_ 
││⫹⫺ ${prefix}style _text_
││⫹⫺ ${prefix}smeme [q|q] 
││⫹⫺ ${prefix}ebinary _text_
││⫹⫺ ${prefix}dbinary [code] 
││⫹⫺ ${prefix}tomp4 [send/reply] 
││⫹⫺ ${prefix}toaud [send/reply] 
││⫹⫺ ${prefix}tomp3 [send/reply] 
││⫹⫺ ${prefix}tovn [send/reply] 
││⫹⫺ ${prefix}togif [send/reply] 
││⫹⫺ ${prefix}tourl [send/reply] 
││
│╰≻
╰────────────────⊱
`
}


exports.funmenu = (sender, prefix, pushname) => {
	return `Hi ${m.pushName} 👋
╭──❲ *${NameBot}* ❳	
│	
│┌──⭓ *INFO*
││
││⭔ *Nama :* _「 ${pushname} 」_
││⭔ *Nomer :* _「 ${m.sender.split("@")[0]} 」_
││⭔ *Jam :* _「 ${times(new Date)} 」_
││⭔ *Tanggal :* _「 ${tanggal(new Date)} 」_
││⭔ *Runtime :* _「 ${runtime(process.uptime())} 」_
││
│└───────⭓
│
│⫺ ${prefix}ping 
│⫺ ${prefix}menu
│⫺ ${prefix}script
│
│┌──⭓ *Fun Menu*
││
││⫹⫺ ${prefix}menfes 
││⫹⫺ ${prefix}jadian 
││⫹⫺ ${prefix}jodohku 
││
│╰≻
╰────────────────⊱
`
}


exports.othermenu = (sender, prefix, pushname) => {
	return `Hi ${m.pushName} 👋
╭──❲ *${NameBot}* ❳	
│	
│┌──⭓ *INFO*
││
││⭔ *Nama :* _「 ${pushname} 」_
││⭔ *Nomer :* _「 ${m.sender.split("@")[0]} 」_
││⭔ *Jam :* _「 ${times(new Date)} 」_
││⭔ *Tanggal :* _「 ${tanggal(new Date)} 」_
││⭔ *Runtime :* _「 ${runtime(process.uptime())} 」_
││
│└───────⭓
│
│⫺ ${prefix}ping 
│⫺ ${prefix}menu
│⫺ ${prefix}script
│
│┌──⭓ *Other Menu*
││
││⫹⫺ ${prefix}requestfitur _text_
││
│╰≻
╰────────────────⊱
`
}


exports.cerpenmenu = (sender, prefix, pushname) => {
	return `Hi ${m.pushName} 👋
╭──❲ *${NameBot}* ❳	
│	
│┌──⭓ *INFO*
││
││⭔ *Nama :* _「 ${pushname} 」_
││⭔ *Nomer :* _「 ${m.sender.split("@")[0]} 」_
││⭔ *Jam :* _「 ${times(new Date)} 」_
││⭔ *Tanggal :* _「 ${tanggal(new Date)} 」_
││⭔ *Runtime :* _「 ${runtime(process.uptime())} 」_
││
│└───────⭓
│
│⫺ ${prefix}ping 
│⫺ ${prefix}menu
│⫺ ${prefix}script
│
│┌──⭓ *Cerpen Menu*
││
││⫹⫺ ${prefix}cerpen-anak
││⫹⫺ ${prefix}cerpen-bahasadaerah
││⫹⫺ ${prefix}cerpen-bahasainggris
││⫹⫺ ${prefix}cerpen-bahasajawa
││⫹⫺ ${prefix}cerpen-budaya
││⫹⫺ ${prefix}cerpen-cinta
││⫹⫺ ${prefix}cerpen-cintaislami
││⫹⫺ ${prefix}cerpen-cintapertama
││⫹⫺ ${prefix}cerpen-cintaromantis
││⫹⫺ ${prefix}cerpen-cintasedih
││⫹⫺ ${prefix}cerpen-cintasegitiga
││⫹⫺ ${prefix}cerpen-cintasejati
││⫹⫺ ${prefix}cerpen-galau
││⫹⫺ ${prefix}cerpen-gokil
││⫹⫺ ${prefix}cerpen-inspiratif
││⫹⫺ ${prefix}cerpen-jepang
││⫹⫺ ${prefix}cerpen-kehidupan
││⫹⫺ ${prefix}cerpen-keluarga
││⫹⫺ ${prefix}cerpen-kisahnyata
││⫹⫺ ${prefix}cerpen-korea
││⫹⫺ ${prefix}cerpen-kristen
││⫹⫺ ${prefix}cerpen-liburan
││⫹⫺ ${prefix}cerpen-malaysia
││⫹⫺ ${prefix}cerpen-mengharukan
││⫹⫺ ${prefix}cerpen-misteri
││⫹⫺ ${prefix}cerpen-motivasi
││⫹⫺ ${prefix}cerpen-nasihat
││⫹⫺ ${prefix}cerpen-nasionalisme
││⫹⫺ ${prefix}cerpen-olahraga
││⫹⫺ ${prefix}cerpen-patahhati
││⫹⫺ ${prefix}cerpen-penantian
││⫹⫺ ${prefix}cerpen-pendidikan
││⫹⫺ ${prefix}cerpen-pengalaman
││⫹⫺ ${prefix}cerpen-pengorbanan
││⫹⫺ ${prefix}cerpen-penyesalan
││⫹⫺ ${prefix}cerpen-perjuangan
││⫹⫺ ${prefix}cerpen-perpisahan
││⫹⫺ ${prefix}cerpen-persahabatan
││⫹⫺ ${prefix}cerpen-petualangan
││⫹⫺ ${prefix}cerpen-ramadhan
││⫹⫺ ${prefix}cerpen-remaja
││⫹⫺ ${prefix}cerpen-rindu
││⫹⫺ ${prefix}cerpen-rohani
││⫹⫺ ${prefix}cerpen-romantis
││⫹⫺ ${prefix}cerpen-sastra
││⫹⫺ ${prefix}cerpen-sedih
││⫹⫺ ${prefix}cerpen-sejarah
││ 
│╰≻
╰────────────────⊱
`
}


exports.allmenu = (sender, prefix, pushname) => {
	return `Hi ${m.pushName} 👋
				
╭──❲ *${NameBot}* ❳	
│	
│┌──⭓ *INFO*
││
││⭔ *Nama :* _「 ${pushname} 」_
││⭔ *Nomer :* _「 ${m.sender.split("@")[0]} 」_
││⭔ *Jam :* _「 ${times(new Date)} 」_
││⭔ *Tanggal :* _「 ${tanggal(new Date)} 」_
││⭔ *Runtime :* _「 ${runtime(process.uptime())} 」_
││
│└───────⭓
│
│⫺ ${prefix}ping 
│⫺ ${prefix}menu
│⫺ ${prefix}script
│
│┌──⭓ *OWNERMENU*
││
││⫹⫺ ${prefix}block @tag
││⫹⫺ ${prefix}unblock @tag
││⫹⫺ ${prefix}setppbot _reply_
││⫹⫺ ${prefix}join _link_
││⫹⫺ ${prefix}leave 
││⫹⫺ ${prefix}anticall 
││⫹⫺ ${prefix}addprem @tag _jumlah_
││⫹⫺ ${prefix}delprem @tag
││⫹⫺ ${prefix}setbotbio
││⫹⫺ ${prefix}setnamabot
││⫹⫺ > 
││⫹⫺ => 
││⫹⫺ $ 
││
│╰≻
│
│┌──⭓ *DOWNLOADERMENU*
││ 
││⫹⫺ ${prefix}tiktok _url_ 
││⫹⫺ ${prefix}tiktokaudio _url_ 
││⫹⫺ ${prefix}ytmp3 _url_ 🚫
││⫹⫺ ${prefix}ytmp4 _url_ 🚫
││
│╰≻
│
│┌──⭓ *SEARCHMENU*
││
││⫹⫺ ${prefix}play [query] 
││⫹⫺ ${prefix}ytsearch [query] 
││⫹⫺ ${prefix}pinterest 
││				
│╰≻
│
│┌──⭓ *GROUPMENU*
││
││⫹⫺ ${prefix}linkgc
││⫹⫺ ${prefix}add _num_
││⫹⫺ ${prefix}kick @tag
││⫹⫺ ${prefix}tagall _text_
││⫹⫺ ${prefix}promote @tag
││⫹⫺ ${prefix}demote @tag
││⫹⫺ ${prefix}setname _text_
││⫹⫺ ${prefix}setppgroup _reply_ 
││⫹⫺ ${prefix}setdesk _text_
││⫹⫺ ${prefix}hidetag _text_
││⫹⫺ ${prefix}totag _reply_ 
││⫹⫺ ${prefix}linkgroup 
││
│╰≻
│
│┌──⭓ *TOOLMENU*
││
││⫹⫺ ${prefix}sticker/s 
││⫹⫺ ${prefix}stickergif 
││⫹⫺ ${prefix}swm [q|q] 
││⫹⫺ ${prefix}toimg _reply_ 
││⫹⫺ ${prefix}style _text_
││⫹⫺ ${prefix}smeme [q|q] 
││⫹⫺ ${prefix}ebinary _text_
││⫹⫺ ${prefix}dbinary [code] 
││⫹⫺ ${prefix}tomp4 [send/reply] 
││⫹⫺ ${prefix}toaud [send/reply] 
││⫹⫺ ${prefix}tomp3 [send/reply] 
││⫹⫺ ${prefix}tovn [send/reply] 
││⫹⫺ ${prefix}togif [send/reply] 
││⫹⫺ ${prefix}tourl [send/reply] 
││
│╰≻
│
│┌──⭓ *FUNMENU*
││ 
││⫹⫺ ${prefix}menfes 
││⫹⫺ ${prefix}jadian 
││⫹⫺ ${prefix}jodohku 
││
│╰≻
│
│┌──⭓ *OTHERMENU*
││ 
││⫹⫺ ${prefix}requestfitur _text_
││
│╰≻
│
│┌──⭓ *CERPENMENU*
││ 
││⫹⫺ ${prefix}cerpen-anak
││⫹⫺ ${prefix}cerpen-bahasadaerah
││⫹⫺ ${prefix}cerpen-bahasainggris
││⫹⫺ ${prefix}cerpen-bahasajawa
││⫹⫺ ${prefix}cerpen-budaya
││⫹⫺ ${prefix}cerpen-cinta
││⫹⫺ ${prefix}cerpen-cintaislami
││⫹⫺ ${prefix}cerpen-cintapertama
││⫹⫺ ${prefix}cerpen-cintaromantis
││⫹⫺ ${prefix}cerpen-cintasedih
││⫹⫺ ${prefix}cerpen-cintasegitiga
││⫹⫺ ${prefix}cerpen-cintasejati
││⫹⫺ ${prefix}cerpen-galau
││⫹⫺ ${prefix}cerpen-gokil
││⫹⫺ ${prefix}cerpen-inspiratif
││⫹⫺ ${prefix}cerpen-jepang
││⫹⫺ ${prefix}cerpen-kehidupan
││⫹⫺ ${prefix}cerpen-keluarga
││⫹⫺ ${prefix}cerpen-kisahnyata
││⫹⫺ ${prefix}cerpen-korea
││⫹⫺ ${prefix}cerpen-kristen
││⫹⫺ ${prefix}cerpen-liburan
││⫹⫺ ${prefix}cerpen-malaysia
││⫹⫺ ${prefix}cerpen-mengharukan
││⫹⫺ ${prefix}cerpen-misteri
││⫹⫺ ${prefix}cerpen-motivasi
││⫹⫺ ${prefix}cerpen-nasihat
││⫹⫺ ${prefix}cerpen-nasionalisme
││⫹⫺ ${prefix}cerpen-olahraga
││⫹⫺ ${prefix}cerpen-patahhati
││⫹⫺ ${prefix}cerpen-penantian
││⫹⫺ ${prefix}cerpen-pendidikan
││⫹⫺ ${prefix}cerpen-pengalaman
││⫹⫺ ${prefix}cerpen-pengorbanan
││⫹⫺ ${prefix}cerpen-penyesalan
││⫹⫺ ${prefix}cerpen-perjuangan
││⫹⫺ ${prefix}cerpen-perpisahan
││⫹⫺ ${prefix}cerpen-persahabatan
││⫹⫺ ${prefix}cerpen-petualangan
││⫹⫺ ${prefix}cerpen-ramadhan
││⫹⫺ ${prefix}cerpen-remaja
││⫹⫺ ${prefix}cerpen-rindu
││⫹⫺ ${prefix}cerpen-rohani
││⫹⫺ ${prefix}cerpen-romantis
││⫹⫺ ${prefix}cerpen-sastra
││⫹⫺ ${prefix}cerpen-sedih
││⫹⫺ ${prefix}cerpen-sejarah
││ 
│╰≻
╰────────────────⊱
`
}

