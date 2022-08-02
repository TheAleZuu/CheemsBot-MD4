 /*\
|···| BIENVENIDA AL FILTRO E INTRUCCIONES
 \*/
const preIngress = (number, namegc) => `
┏─━─━─━ ❝ ✌ ❞ ━─━─━─┓
               ＢＩＥＮＶＥＮＩＤＯ
                @${number.split('@')[0]}
┗─━─━─━ ❝ ✨ ❞ ━─━─━─┛

┉┅━━━━━•:✵:•━━━━━┅┉
•❯ Ahora mismo te encuentras en la sección del "filtro" o "anti-raid" del ${namegc}, es decir, aún no estás dentro de la comunidad como tal.

•❯ Presiona el botón "COMENZAR" debajo del mensaje y continúa. Te esperamos con un recorrido lleno de torneos, regalos, juegos y, por supuesto, los _Skyzee Points_; pero qué pingo es eso? Ya verás...
┉┅━━━━━━•━━━━━━┅┉

Es importante pasar por esta fase antes de entrar para moderar el ingreso de infiltrados y proteger la comunidad. Hemos atravesado raideos y ataques de todo tipo, por lo que preferimos que no seas de esas mierdas!

*¡Gracias por interesarte!*
`

 /*\
|···| BIENVENIDA A LA COMUNIDAD EN EL CHAT GENERAL
 \*/
const ingress = (nmember, number, user, status, isOwner, isYoutuber) => `
┏─━─━─━ ❝ ✌ ❞ ━─━─━─┓
ㅤㅤ  *${nmember}ＴＨ ＭＥＭＢＥＲ：*
ㅤㅤㅤ*@${number.split('@')[0]}*
┗─━─━─━ ❝ ✨ ❞ ━─━─━─┛

┉┅━━━━━•:✵:•━━━━━┅┉
• Usuario: _${user}_
 • Teléfono: _+${number.split("@")[0]}_
  • Estado: _${status}_
   • Rango: _${isOwner ? '˗𝐎ˏ𝐖ˋ𝐍ˎ𝐄ˊ𝐑˗' : (isYouTuber ? 'Youtuber' : 'Miembro')}_
┉┅━━━━━━•━━━━━━┅┉

Recomendamos que a los grupos los mantengas silenciado ya que para la mayoría le resulta un poco molesto.

*Esperamos que disfrutes todo lo que tenemos para vos!*
`

 /*\
|···| BIENVENIDA A LA COMUNIDAD EN EL MD DEL USUARIO
 \*/
const ingressMd = (namegc, nmember) =>`
┏─━─━─━ ❝ ✌ ❞ ━─━─━─┓
ㅤㅤㅤㅤ*${namegc}*
ㅤㅤㅤㅤ*${nmember}ＴＨ ＭＥＭＢＥＲ*
┗─━─━─━ ❝ ✨ ❞ ━─━─━─┛

┉┅━━━━━•:✵:•━━━━━┅┉
•❯ Nos alegra muchísimo verte acá dentro!! Muchas gracias por firmar el contrato de transferencia de derechos humanos, si pronto ves una camioneta blanca en frente de tu casa seguramente somos nosotros en busca de tus órganos :)

•❯ Bueno... si a este punto te tomaste enserio lo anterior, *estamos al horno amigo*, esto lo del humor... no es para mí, supongo que ya te habrás dado cuenta (? Pero lo que sí estoy seguro que te diste cuenta fue que el ambiente del grupo no se relaciona mucho un nombre oscuro y siniestro, verdad? Bueno, solo tratamos de ponerle un poco de onda y a lo mejor encontrarás muchas más paradojas.

•❯ En fin, dejando de lado todo el cringe causado, recuerda que cualquier tipo de infracción será sancionada inmediatamente. ¡NO TE OLVIDES LAS REGLAAAASSSSSS!
┉┅━━━━━━•━━━━━━┅┉

*Esperamos que disfrutes de todo lo que tenemos para vos!*
`

 /*\
|···| BIENVENIDA NORMAL
 \*/
const normalIngress = (number, group, member, time) => `
┏─━─━─━ ❝ ✌ ❞ ━─━─━─┓
               *ＢＩＥＮＶＥＮＩＤＯ*
               *@${number.split('@')[0]}*
┗─━─━─━ ❝ ✨ ❞ ━─━─━─┛
    │✑  𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨 𝐚𝐥 ${group}
    │✑  𝐌𝐢𝐞𝐦𝐛𝐫𝐨 𝐍º${member}
    │✑ ${time}
    └─────────────┈ ⳹
`

module.exports = {
	preIngress,
	ingress,
	ingressMd,
	normalIngress
}