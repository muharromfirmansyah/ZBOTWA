exports.info = (id, ZBOT, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `*MENU ${ZBOT}*
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

╔════════════════════
║ *Info ${ZBOT}*
╠════════════════════
║├≽️⚜ *AUTOR* : _MUHA_
║├≽️⚜ *DESIGNER* : _AMPIBI_
║├≽️⚜ *OWNER* : _MuhaFrmn_
╠════════════════════
║  *${XBOT}*
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
║ _*MADE BY Muharrom Firmansyah*_
╠════════════════════
║ゞ📆 *${tampilTanggal}*
║ゞ⏱️ *${tampilWaktu}*
║ゞ📢 Bot Aktif ; *${aktif}*
╚════════════════════`
}
