import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6281327327914', 'ᴹᴿ᭄ AkiraOfcོ', true],
  //['6281227144597']
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = ['6281327327914'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  dhnjing: 'https://dhnjing.xyz',
  bx: 'https://bx-hunter.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  bsbt: 'https://rest-beni.herokuapp.com/',
  botstyle: 'https://botstyle-api.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  hardianto: 'https://hardianto.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'MIMINETBOT',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://pencarikode.xyz': 'pais',
  'https://api.neoxr.eu.org': 'M1TjwTwAHZ',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://rest-beni.herokuapp.com/': 'benniismaelapikey',
  'https://botstyle-api.herokuapp.com': 'ZqqAVN5n',
  'https://api.zeks.xyz': 'apivinz',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://hardianto.xyz': 'hardianto'
}

// Sticker WM
global.packname = 'ᴹᴿ᭄ AkiraOfcོ'
global.author = '𝗔𝗞𝗜𝗥𝗔-𝗠𝗗'

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      health: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈',
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
