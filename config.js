const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "923356070105"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'zuli73782@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://www.instagram.com/qarni147a?igsh=MWR1MzVxdXNjc2dyZA==' // add your username
global.sudo = process.env.SUDO || '923184070915' 
global.devs = '923184070915';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1BGNnN3dFZSNW5jbk1QNTlhQ1AxVmxhRFdGbmxOQW1iUjN6aHgvMnQwdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZnd3M25Wakx5T3ZPZWsrSFBtcnNwWmlGdWEveS9LYXlaMFhwWElPUVZFST0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSW45TjdDMzlWaTFpTWNrMnF2NXg2dER6Y3dZOG1pOVZvbnhDN2JuMVgwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkVTZkcHNGVEJPWTV5aWlnYU9oVHRtMURVc2ZqNW5VQ2F1RXl2MGM5a1hVPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZMRjFaOEZGQXpYNkRxSDYxM2tCcmxXT1FKeFRMMDZiakMyT1JYUHBVWEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZ0MkFHOWJ5cDBhUk9CK3QvVXdsWGFqWnlhenR3cmhmUG9jVVAxcGVZVzQ9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLOGdDZjVXRm1pNW9oTFlPaHduOC9VaTcvUXRTM0ZFQTlpTVBOVDNVRGt3ekhZZjdRbStKUlZ5S1gySlFhbUt5ajdwVDIwUUhLMzdKKzFVdjZjRXBpUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEzNCwiYWR2U2VjcmV0S2V5IjoidVRDNktLNk1wTFI5Q3A1S3pUQjN3MjZTQ2xndU50eTBSNGNiRmV1THh0VT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiV1lySmlsQmtTX0tjSTZQR05OdlZHQSIsInBob25lSWQiOiI5OTJlOTY0NC0xYjBjLTQ4MGMtYjExNy1hYTVmMDUyOGM4MjYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkYrS0xPcUZCM3FXQ2NZNjd4dVMrRWN6MllFPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkaFZjZDV5d1RDU3Y5NnN6TVUwajdaRHlucXc9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNKT1E0ZUlFRUtUUXM2d0dHQU09IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjV2dVM2eEp0cktkaTdmQnVEUEllbk43SU9GRnpFQ2FqMXNxTFh1ZGl5UVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImFvMnVPYVdVQ0VQbjAySEpFZm1hYWY1Ly9Cd2lPT0xZMndoMkJsZnVhN1NvL2FtVzJ2U28zZ2FCUXpqbmt1Z1g3ajFLUFZiOHg3ZGg4TWw0MUJQTkR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI1d091Vjh3TFFyU0V2Zk43ajRCbjFWeU8xbnZvK1UwMzhOcDh5dFBvVGdtOExnbXFOVDA3WmZYeUN2MVhGdlZlWkhJSjh2Q29JU1UvOGE3K2xWdUxoQT09In0sIm1lIjp7ImlkIjoiOTIzMzU2MDcwMTA1OjU2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlFhcm5pIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzM1NjA3MDEwNTo1NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlYjdrdXNTYmF5bll1M3diZ3p5SHB6ZXlEaFJjeEFtbzliS2kxN25Zc2tHIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAzNzMzMjg4fQ== ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "Qarni-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Qarni' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'alive' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
