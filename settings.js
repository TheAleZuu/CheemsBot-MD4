<<<<<<< HEAD
//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Cheems Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
//recode kar ke youtube pe upload kar rhe hai ya
//codes copy kar ke apne script me dal rhe
//hai to, description me xeon ka yt channel
// ka link paste kr dena as a cradit or github 
//repo me bhi tag kardena baki jo
//bhi karna hai apki marzi, thank you!🦄
//════════════════════════════//
//If you recode and uploading on your channel
//or copy pasting the codes in ur script, 
//i give permission to do as long as you
//put Xeons youtube channel link in the video
//description and tag me on githuh repo, 
//thank you🦄
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}


//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./XeonMedia/theme/Cheems-bot.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['5492996557871'] //ur owner number
global.ownername = "✞ 𝑻𝒉𝒆𝑨𝒍𝒆𝒛𝒖𝒖 ✞" //ur owner name
global.ytname = "𝒀𝒐𝒖𝑻𝒖𝒃𝒆: 𝑻𝒉𝒆𝑨𝒍𝒆𝒛𝒖𝒖" //ur yt chanel name
global.socialm = "𝑻𝒘𝒊𝒕𝒄𝒉: 𝒕𝒉𝒆𝒂𝒍𝒆𝒛𝒖𝒖𝒚𝒕" //ur github or insta name
global.location = "𝒆𝒏 𝒍𝒂 𝒓𝒆 𝒄𝒐𝒏𝒄𝒉𝒂 𝒅𝒆 𝒕𝒖 𝒎𝒂𝒅𝒓𝒆" //ur location

//bot bomdy 
global.owner = ['5492996557871']
global.ownertag = '6287735223384' //ur tag number
global.botname = '𝙎𝙠𝙮𝙯𝙚𝙚乃ㄖㄒ' //ur bot name
global.linkz = "https://twitch.tv/thealezuuyt" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtube.com/alexmine" //ur website to be displayed
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD4' //script link
global.reactmoji = "🥵" //ur menu react emoji
global.themeemoji = "💀" //ur theme emoji
global.packname = "𝘭𝘰𝘻 𝘦𝘻𝘵𝘪𝘬𝘦𝘳𝘴 𝘥𝘦𝘭 𝘱𝘢𝘱𝘶 :𝘷" //ur sticker watermark packname
global.author = "𝙎𝙠𝙮𝙯𝙚𝙚𝓑𝓞𝓣" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//damtabase
global.premium = ['6287735223384', '5492996557871'] //ur premium numbers
global.ntiflood = JSON.parse(fs.readFileSync('./database/ntiflood.json'))
global.ntilinkytvid = JSON.parse(fs.readFileSync('./database/ntilinkytvid.json'))
global.ntilinkytch = JSON.parse(fs.readFileSync('./database/ntilinkytch.json'))
global.ntilinkig = JSON.parse(fs.readFileSync('./database/ntilinkig.json'))
global.ntilinkfb = JSON.parse(fs.readFileSync('./database/ntilinkfb.json'))
global.ntilinktg = JSON.parse(fs.readFileSync('./database/ntilinktg.json'))
global.ntilinktt = JSON.parse(fs.readFileSync('./database/ntilinktt.json'))
global.ntilinktwt = JSON.parse(fs.readFileSync('./database/ntilinktwt.json'))
global.ntilinkall = JSON.parse(fs.readFileSync('./database/ntilinkall.json'))
global.nticall = JSON.parse(fs.readFileSync('./database/nticall.json'))
global.ntwame = JSON.parse(fs.readFileSync('./database/ntwame.json'))
global.nttoxic = JSON.parse(fs.readFileSync('./database/nttoxic.json'))
global.ntnsfw = JSON.parse(fs.readFileSync('./database/ntnsfw.json'))
global.ntvirtex = JSON.parse(fs.readFileSync('./database/ntvirtex.json'))
global.rkyt = JSON.parse(fs.readFileSync('./database/rkyt.json'))
global.wlcm = JSON.parse(fs.readFileSync('./database/wlcm.json'))
global.gcrevoke = JSON.parse(fs.readFileSync('./database/gcrevoke.json'))
global.autorep = JSON.parse(fs.readFileSync('./database/autorep.json'))
global.ntilink = JSON.parse(fs.readFileSync('./database/ntilink.json'))
global.autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
global._autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'))
global.banUser = JSON.parse(fs.readFileSync('./database/banUser.json'))
global.banchat = JSON.parse(fs.readFileSync('./database/banChat.json'))
global.bad = JSON.parse(fs.readFileSync('./src/toxic/bad.json'))

//omther
global.sessionName = 'session'
global.antitags = false
global.prefa = "#"
global.sp = '⭔'
global.mess = {
    success: '𝙷𝙴𝙲𝙷𝙾 ✓',
    admin: '𝙳𝙸𝚂𝙲𝚄𝙻𝙿Á 𝙵𝙻𝙰𝙲𝙾, 𝙲𝙰𝚁𝙴𝙲𝙴𝚂 𝙳𝙴 𝙿𝙴𝚁𝙼𝙸𝚂𝙾𝚂 𝙿𝙰𝚁𝙰 𝙰𝙲𝙲𝙴𝙳𝙴𝚁 𝙰 𝙳𝙸𝙲𝙷𝙰 𝙵𝚄𝙽𝙲𝙸Ó𝙽',
    botAdmin: '𝙽𝙴𝙲𝙴𝚂𝙸𝚃𝙾 𝙰𝙳𝙼𝙸𝙽 𝙿𝙰𝚁𝙰 𝙳𝙸𝙲𝙷𝙰 𝙵𝚄𝙽𝙲𝙸Ó𝙽 :)',
    owner: '𝙳𝙸𝚂𝙲𝚄𝙻𝙿Á 𝙵𝙻𝙰𝙲𝙾, 𝙲𝙰𝚁𝙴𝙲𝙴𝚂 𝙳𝙴 𝙿𝙴𝚁𝙼𝙸𝚂𝙾𝚂 𝙿𝙰𝚁𝙰 𝙰𝙲𝙲𝙴𝙳𝙴𝚁 𝙰 𝙳𝙸𝙲𝙷𝙰 𝙵𝚄𝙽𝙲𝙸Ó𝙽',
    group: '𝙴𝚂𝚃𝙰 𝙵𝚄𝙽𝙲𝙸Ó𝙽 𝚂𝙾𝙻𝙾 𝙴𝚂𝚃Á 𝙳𝙸𝚂𝙿𝙾𝙽𝙸𝙱𝙻𝙴 𝙿𝙰𝚁𝙰 𝙲𝙷𝙰𝚃𝚂 𝙶𝚁𝚄𝙿𝙰𝙻𝙴𝚂',
    private: '𝙴𝚂𝚃𝙰 𝙵𝚄𝙽𝙲𝙸Ó𝙽 𝚂𝙾𝙻𝙾 𝙴𝚂𝚃Á 𝙳𝙸𝚂𝙿𝙾𝙽𝙸𝙱𝙻𝙴 𝙿𝙰𝚁𝙰 𝙲𝙷𝙰𝚃𝚂 𝙿𝚁𝙸𝚅𝙰𝙳𝙾𝚂',
    bot: '𝙳𝙸𝚂𝙲𝚄𝙻𝙿Á 𝙵𝙻𝙰𝙲𝙾, 𝙲𝙰𝚁𝙴𝙲𝙴𝚂 𝙳𝙴 𝙿𝙴𝚁𝙼𝙸𝚂𝙾𝚂 𝙿𝙰𝚁𝙰 𝙰𝙲𝙲𝙴𝙳𝙴𝚁 𝙰 𝙳𝙸𝙲𝙷𝙰 𝙵𝚄𝙽𝙲𝙸Ó𝙽',
    wait: '𝚃𝚁𝙰𝙱𝙰𝙹𝙰𝙽𝙳𝙾...',
    linkm: '¿𝚈 𝙴𝙻 𝙻𝙸𝙽𝙺, 𝙿𝙰? ¿𝚂𝙾𝚈 𝙰𝙳𝙸𝚅𝙸𝙽𝙾?',
    error: '𝙴𝚁𝚁𝙾𝚁 :(',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: '𝚄𝚈, 𝙴𝚂𝚃𝙰𝚂 𝚁𝙴 𝙱𝙰𝙽𝙴𝙰𝙳𝙾 𝙲𝚁𝙰𝙲𝙺, 𝚀𝚄𝙴 𝚃𝙴𝙽𝙶𝙰 𝚄𝙽 𝙱𝚄𝙴𝙽 𝙳Í𝙰 ;)',
    nsfw: '𝙴𝙿𝙰𝙰 𝙱𝚄𝙴𝙽𝙾... 𝙿𝙰𝚁𝙰 𝙰𝙲𝙲𝙴𝙳𝙴𝚁 𝙰𝙻 𝙿𝙾𝚁𝙽𝙰𝚉𝙾, 𝚄𝙽 𝙰𝙳𝙼𝙸𝙽 𝙳𝙴𝙱𝙴 𝙷𝙰𝙱𝙸𝙻𝙸𝚃𝙰𝚁𝙻𝙾',
    banChat: '𝙻𝙰𝙼𝙴𝙽𝚃𝙰𝙼𝙾𝚂 𝙲𝙾𝙼𝚄𝙽𝙸𝙲𝙰𝚁𝚃𝙴 𝚀𝚄𝙴 𝚂𝙴 𝙷𝙰 𝚁𝙴𝚂𝚃𝚁𝙸𝙽𝙶𝙸𝙳𝙾 𝙴𝙻 𝙱𝙾𝚃 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾.\n\n𝘌𝘭 𝘰𝘸𝘯𝘦𝘳 𝘣𝘶𝘴𝘤𝘢 𝘦𝘷𝘪𝘵𝘢𝘳 𝘤𝘪𝘦𝘳𝘵𝘰𝘴 𝘢𝘴𝘱𝘦𝘤𝘵𝘰𝘴 𝘤𝘰𝘯𝘧𝘭𝘪𝘤𝘵𝘪𝘷𝘰𝘴, 𝘥𝘦 𝘭𝘰𝘴 𝘤𝘶𝘢𝘭𝘦𝘴, 𝘱𝘰𝘯𝘦𝘳 𝘦𝘯 𝘳𝘪𝘦𝘴𝘨𝘰 𝘭𝘢 𝘧𝘶𝘯𝘤𝘪𝘰𝘯𝘢𝘭𝘪𝘥𝘢𝘥 𝘥𝘦𝘭 𝘣𝘰𝘵 𝘰 𝘱𝘳𝘰𝘮𝘰𝘷𝘦𝘳 𝘦𝘭 𝘮𝘢𝘭 𝘶𝘴𝘰 𝘥𝘦 𝘭𝘢 𝘮𝘪𝘴𝘮𝘢. 𝘚𝘪 𝘤𝘳𝘦𝘦𝘴 𝘲𝘶𝘦 𝘦𝘴𝘵𝘰 𝘱𝘶𝘥𝘰 𝘩𝘢𝘣𝘦𝘳 𝘴𝘪𝘥𝘰 𝘶𝘯 𝘦𝘳𝘳𝘰𝘳, 𝘤𝘰𝘯𝘵á𝘤𝘵𝘢𝘵𝘦 𝘤𝘰𝘯 𝘦𝘭 𝘰𝘸𝘯𝘦𝘳 𝘈𝘭𝘦𝘻𝘶𝘶.'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`UPDATE: '${__filename}'`))
	delete require.cache[file]
	require(file)
})
=======
//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Cheems Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
//recode kar ke youtube pe upload kar rhe hai ya
//codes copy kar ke apne script me dal rhe
//hai to, description me xeon ka yt channel
// ka link paste kr dena as a cradit or github 
//repo me bhi tag kardena baki jo
//bhi karna hai apki marzi, thank you!🦄
//════════════════════════════//
//If you recode and uploading on your channel
//or copy pasting the codes in ur script, 
//i give permission to do as long as you
//put Xeons youtube channel link in the video
//description and tag me on githuh repo, 
//thank you🦄
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}


//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./XeonMedia/theme/Cheems-bot.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['5492996557871'] //ur owner number
global.ownername = "✞ 𝑻𝒉𝒆𝑨𝒍𝒆𝒛𝒖𝒖 ✞" //ur owner name
global.ytname = "𝒀𝒐𝒖𝑻𝒖𝒃𝒆: 𝑻𝒉𝒆𝑨𝒍𝒆𝒛𝒖𝒖" //ur yt chanel name
global.socialm = "𝑻𝒘𝒊𝒕𝒄𝒉: 𝒕𝒉𝒆𝒂𝒍𝒆𝒛𝒖𝒖𝒚𝒕" //ur github or insta name
global.location = "𝒆𝒏 𝒍𝒂 𝒓𝒆 𝒄𝒐𝒏𝒄𝒉𝒂 𝒅𝒆 𝒕𝒖 𝒎𝒂𝒅𝒓𝒆" //ur location

//bot bomdy 
global.owner = ['5492996557871']
global.ownertag = '6287735223384' //ur tag number
global.botname = '𝙎𝙠𝙮𝙯𝙚𝙚乃ㄖㄒ' //ur bot name
global.linkz = "https://twitch.tv/thealezuuyt" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtube.com/alexmine" //ur website to be displayed
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD4' //script link
global.reactmoji = "🥵" //ur menu react emoji
global.themeemoji = "💀" //ur theme emoji
global.packname = "𝘭𝘰𝘻 𝘦𝘻𝘵𝘪𝘬𝘦𝘳𝘴 𝘥𝘦𝘭 𝘱𝘢𝘱𝘶 :𝘷" //ur sticker watermark packname
global.author = "𝙎𝙠𝙮𝙯𝙚𝙚𝓑𝓞𝓣" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//damtabase
global.premium = ['6287735223384', '5492996557871'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = false
global.prefa = "#"
global.sp = '⭔'
global.mess = {
    success: '𝙷𝙴𝙲𝙷𝙾 ✓',
    admin: '𝙳𝙸𝚂𝙲𝚄𝙻𝙿Á 𝙵𝙻𝙰𝙲𝙾, 𝙲𝙰𝚁𝙴𝙲𝙴𝚂 𝙳𝙴 𝙿𝙴𝚁𝙼𝙸𝚂𝙾𝚂 𝙿𝙰𝚁𝙰 𝙰𝙲𝙲𝙴𝙳𝙴𝚁 𝙰 𝙳𝙸𝙲𝙷𝙰 𝙵𝚄𝙽𝙲𝙸Ó𝙽',
    botAdmin: '𝙽𝙴𝙲𝙴𝚂𝙸𝚃𝙾 𝙰𝙳𝙼𝙸𝙽 𝙿𝙰𝚁𝙰 𝙳𝙸𝙲𝙷𝙰 𝙵𝚄𝙽𝙲𝙸Ó𝙽 :)',
    owner: '𝙳𝙸𝚂𝙲𝚄𝙻𝙿Á 𝙵𝙻𝙰𝙲𝙾, 𝙲𝙰𝚁𝙴𝙲𝙴𝚂 𝙳𝙴 𝙿𝙴𝚁𝙼𝙸𝚂𝙾𝚂 𝙿𝙰𝚁𝙰 𝙰𝙲𝙲𝙴𝙳𝙴𝚁 𝙰 𝙳𝙸𝙲𝙷𝙰 𝙵𝚄𝙽𝙲𝙸Ó𝙽',
    group: '𝙴𝚂𝚃𝙰 𝙵𝚄𝙽𝙲𝙸Ó𝙽 𝚂𝙾𝙻𝙾 𝙴𝚂𝚃Á 𝙳𝙸𝚂𝙿𝙾𝙽𝙸𝙱𝙻𝙴 𝙿𝙰𝚁𝙰 𝙲𝙷𝙰𝚃𝚂 𝙶𝚁𝚄𝙿𝙰𝙻𝙴𝚂',
    private: '𝙴𝚂𝚃𝙰 𝙵𝚄𝙽𝙲𝙸Ó𝙽 𝚂𝙾𝙻𝙾 𝙴𝚂𝚃Á 𝙳𝙸𝚂𝙿𝙾𝙽𝙸𝙱𝙻𝙴 𝙿𝙰𝚁𝙰 𝙲𝙷𝙰𝚃𝚂 𝙿𝚁𝙸𝚅𝙰𝙳𝙾𝚂',
    bot: '𝙳𝙸𝚂𝙲𝚄𝙻𝙿Á 𝙵𝙻𝙰𝙲𝙾, 𝙲𝙰𝚁𝙴𝙲𝙴𝚂 𝙳𝙴 𝙿𝙴𝚁𝙼𝙸𝚂𝙾𝚂 𝙿𝙰𝚁𝙰 𝙰𝙲𝙲𝙴𝙳𝙴𝚁 𝙰 𝙳𝙸𝙲𝙷𝙰 𝙵𝚄𝙽𝙲𝙸Ó𝙽',
    wait: '𝚃𝚁𝙰𝙱𝙰𝙹𝙰𝙽𝙳𝙾...',
    linkm: '¿𝚈 𝙴𝙻 𝙻𝙸𝙽𝙺, 𝙿𝙰? ¿𝚂𝙾𝚈 𝙰𝙳𝙸𝚅𝙸𝙽𝙾?',
    error: '𝙴𝚁𝚁𝙾𝚁 :(',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: '𝚄𝚈, 𝙴𝚂𝚃𝙰𝚂 𝚁𝙴 𝙱𝙰𝙽𝙴𝙰𝙳𝙾 𝙲𝚁𝙰𝙲𝙺, 𝚀𝚄𝙴 𝚃𝙴𝙽𝙶𝙰 𝚄𝙽 𝙱𝚄𝙴𝙽 𝙳Í𝙰 ;)',
    nsfw: '𝙴𝙿𝙰𝙰 𝙱𝚄𝙴𝙽𝙾... 𝙿𝙰𝚁𝙰 𝙰𝙲𝙲𝙴𝙳𝙴𝚁 𝙰𝙻 𝙿𝙾𝚁𝙽𝙰𝚉𝙾, 𝚄𝙽 𝙰𝙳𝙼𝙸𝙽 𝙳𝙴𝙱𝙴 𝙷𝙰𝙱𝙸𝙻𝙸𝚃𝙰𝚁𝙻𝙾',
    banChat: '𝙻𝙰𝙼𝙴𝙽𝚃𝙰𝙼𝙾𝚂 𝙲𝙾𝙼𝚄𝙽𝙸𝙲𝙰𝚁𝚃𝙴 𝚀𝚄𝙴 𝚂𝙴 𝙷𝙰 𝚁𝙴𝚂𝚃𝚁𝙸𝙽𝙶𝙸𝙳𝙾 𝙴𝙻 𝙱𝙾𝚃 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾.\n\n𝘌𝘭 𝘰𝘸𝘯𝘦𝘳 𝘣𝘶𝘴𝘤𝘢 𝘦𝘷𝘪𝘵𝘢𝘳 𝘤𝘪𝘦𝘳𝘵𝘰𝘴 𝘢𝘴𝘱𝘦𝘤𝘵𝘰𝘴 𝘤𝘰𝘯𝘧𝘭𝘪𝘤𝘵𝘪𝘷𝘰𝘴, 𝘥𝘦 𝘭𝘰𝘴 𝘤𝘶𝘢𝘭𝘦𝘴, 𝘱𝘰𝘯𝘦𝘳 𝘦𝘯 𝘳𝘪𝘦𝘴𝘨𝘰 𝘭𝘢 𝘧𝘶𝘯𝘤𝘪𝘰𝘯𝘢𝘭𝘪𝘥𝘢𝘥 𝘥𝘦𝘭 𝘣𝘰𝘵 𝘰 𝘱𝘳𝘰𝘮𝘰𝘷𝘦𝘳 𝘦𝘭 𝘮𝘢𝘭 𝘶𝘴𝘰 𝘥𝘦 𝘭𝘢 𝘮𝘪𝘴𝘮𝘢. 𝘚𝘪 𝘤𝘳𝘦𝘦𝘴 𝘲𝘶𝘦 𝘦𝘴𝘵𝘰 𝘱𝘶𝘥𝘰 𝘩𝘢𝘣𝘦𝘳 𝘴𝘪𝘥𝘰 𝘶𝘯 𝘦𝘳𝘳𝘰𝘳, 𝘤𝘰𝘯𝘵á𝘤𝘵𝘢𝘵𝘦 𝘤𝘰𝘯 𝘦𝘭 𝘰𝘸𝘯𝘦𝘳 𝘈𝘭𝘦𝘻𝘶𝘶.'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
>>>>>>> dee326019b1e41df08e068d0cfdab5b59d08e1ab
