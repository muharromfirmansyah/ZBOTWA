exports.donate = (id, ZBOT, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

╔════════════════════
║ *Donasi Ke ${ZBOT}*
╠════════════════════
║├≽️⚜ *PULSA* : _0887433082564_
║├≽️⚜ *DANA* : _0887433082564_
╠════════════════════
║  *${ZBOT}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${ZBOT}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ _*MADE BY MuhaFrmn*_
╠════════════════════
║ゞ📆 *${tampilTanggal}*
║ゞ⏱️ *${tampilWaktu}*
║ゞ📢 Bot Aktif ; *${aktif}*
╚════════════════════`
}

