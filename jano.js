const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://spam-1-20.glitch.me/`);
}, 280000);

///////////// 100 acc vc
const Discord = require("discord.js");
const Canvas = require("canvas");
const fs = require("fs");
const cmd = require("node-cmd");
const config = require("./config.json");
const prefix = config.prefix;
const jano = new Discord.Client();
const jano2 = new Discord.Client();
const jano3 = new Discord.Client();
const jano4 = new Discord.Client();
const jano5 = new Discord.Client();
const jano6 = new Discord.Client();
const jano7 = new Discord.Client();
const jano8 = new Discord.Client();
const jano9 = new Discord.Client();
const jano10 = new Discord.Client();
const jano11 = new Discord.Client();
const jano12 = new Discord.Client();
const jano13 = new Discord.Client();
const jano14 = new Discord.Client();
const jano15 = new Discord.Client();
const jano16 = new Discord.Client();
const jano17 = new Discord.Client();
const jano18 = new Discord.Client();
const jano19 = new Discord.Client();
const jano20 = new Discord.Client();
const jano21 = new Discord.Client();
const jano22 = new Discord.Client();
const jano23 = new Discord.Client();
const jano24 = new Discord.Client();
const jano25 = new Discord.Client();
const jano26 = new Discord.Client();
const jano27 = new Discord.Client();
const jano28 = new Discord.Client();
const jano29 = new Discord.Client();
const jano30 = new Discord.Client();
const jano31 = new Discord.Client();
const jano32 = new Discord.Client();
const jano33 = new Discord.Client();
const jano34 = new Discord.Client();
const jano35 = new Discord.Client();
const jano36 = new Discord.Client();
const jano37 = new Discord.Client();
const jano38 = new Discord.Client();
const jano39 = new Discord.Client();
const jano40 = new Discord.Client();
const jano41 = new Discord.Client();
const jano42 = new Discord.Client();
const jano43 = new Discord.Client();
const jano44 = new Discord.Client();
const jano45 = new Discord.Client();
const jano46 = new Discord.Client();
const jano47 = new Discord.Client();
const jano48 = new Discord.Client();
const jano49 = new Discord.Client();
const jano50 = new Discord.Client();
const jano51 = new Discord.Client();
const jano52 = new Discord.Client();
const jano53 = new Discord.Client();
const jano54 = new Discord.Client();
const jano55 = new Discord.Client();
const jano56 = new Discord.Client();
const jano57 = new Discord.Client();
const jano58 = new Discord.Client();
const jano59 = new Discord.Client();
const jano60 = new Discord.Client();
const jano61 = new Discord.Client();
const jano62 = new Discord.Client();
const jano63 = new Discord.Client();
const jano64 = new Discord.Client();
const jano65 = new Discord.Client();
const jano66 = new Discord.Client();
const jano67 = new Discord.Client();
const jano68 = new Discord.Client();
const jano69 = new Discord.Client();
const jano70 = new Discord.Client();
const jano71 = new Discord.Client();
const jano72 = new Discord.Client();
const jano73 = new Discord.Client();
const jano74 = new Discord.Client();
const jano75 = new Discord.Client();
const jano76 = new Discord.Client();
const jano77 = new Discord.Client();
const jano78 = new Discord.Client();
const jano79 = new Discord.Client();
const jano80 = new Discord.Client();
const jano81 = new Discord.Client();
const jano82 = new Discord.Client();
const jano83 = new Discord.Client();
const jano84 = new Discord.Client();
const jano85 = new Discord.Client();
const jano86 = new Discord.Client();
const jano87 = new Discord.Client();
const jano88 = new Discord.Client();
const jano89 = new Discord.Client();
const jano90 = new Discord.Client();
const jano91 = new Discord.Client();
const jano92 = new Discord.Client();
const jano93 = new Discord.Client();
const jano94 = new Discord.Client();
const jano95 = new Discord.Client();
const jano96 = new Discord.Client();
const jano97 = new Discord.Client();
const jano98 = new Discord.Client();
const jano99 = new Discord.Client();
const jano100 = new Discord.Client();

const help = `**
       \`\`\`  زانیاری دەربارەی ئەکاونت   \`\`\`
                  

- ${config.prefix}setownerID [ID NEW OWNER] - ئایدی خۆت دابنێ
                  
- ${config.prefix}setserverID [ID SERVER] - ئایدی سێرڤەر دابنێ
                  
    ئەکاونتەکان بە ئایدی یەک کەس ئیش ئەکات ئەتوانی کۆماندی بۆ دابنێی     
**`;



//////////////// 
const dinfo = JSON.parse(fs.readFileSync("./data.json", "UTF8"));
jano.on("message", async msg => {
  if (!msg.guild) return;
  if (msg.author.bot) return;
  if (!dinfo)
    dinfo = {
      owner: config.id,
      serverid: "NONE",
  }
}); 

/////////////////// reset json
jano.on("message", async message => {
  if (message.content === prefix + "reset") {
    if (!dinfo.owner.includes(message.author.id)) return; 
    dinfo.serverid = "NONE";
    message.channel.send(`**⚠️ restsettings , <@${dinfo.owner}>**`);
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
    await cmd.run("refresh"); 
  }
});

///////////////// reload json
jano.on("message", async message => {
  if (message.author.id !== dinfo.owner) return;
  if (message.content === config.prefix + "reload") {
    await cmd.run("refresh");
    await message.channel.send("Done,");
  }
});
///////// 
jano.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano2.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano3.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano4.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano5.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano6.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano7.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano8.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano9.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano10.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano11.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano12.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano13.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano14.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano15.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano16.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano17.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano18.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano19.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano20.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano21.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano22.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano23.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano24.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano25.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano26.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano27.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano28.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano29.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano30.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano31.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano32.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano33.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano34.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano35.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano36.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano37.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano38.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano39.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano40.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano41.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano42.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano43.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano44.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano45.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano46.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano47.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano48.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano49.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano50.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano51.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano52.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano53.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano54.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano55.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano56.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano57.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano58.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano59.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano60.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano61.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano62.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano63.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano64.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano65.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano66.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano67.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano68.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano69.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano70.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano71.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano72.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano73.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano74.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano75.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano76.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano77.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano78.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano79.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano80.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano81.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano82.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano83.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano84.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano85.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano86.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano87.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano88.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano89.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano90.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano91.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano92.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano93.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano94.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano95.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano96.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano97.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano98.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano99.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
/////////

jano100.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**basha qashmar**");
        })
        .catch(console.log);
    } else {
      message.reply("**bro vc**");
    }
  }
});
//////// playing or dnd  streaming ////////

jano.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano2.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano2.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano3.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano3.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano4.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano4.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano5.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano5.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano6.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano6.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano7.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano7.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano8.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano8.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano9.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano9.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano10.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano10.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano11.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano11.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano12.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano12.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano13.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano13.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano14.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano14.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano15.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano15.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano16.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano16.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano17.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano17.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano18.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano18.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano19.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano19.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano20.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano20.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano21.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano21.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano22.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano22.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano23.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano23.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano24.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano24.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano25.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano25.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano26.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano26.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano27.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano27.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano28.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano28.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano29.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano29.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano30.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano30.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano31.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano31.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano32.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano32.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano33.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano33.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano34.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano34.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano35.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano35.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano36.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano36.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano37.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano37.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano38.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano38.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano39.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano39.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano40.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano40.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano41.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano41.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano42.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano42.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano43.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano43.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano44.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano44.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano45.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano45.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

//////// playing or dnd  streaming ////////

jano46.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano46.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano47.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano47.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano48.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano48.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

//////// playing or dnd  streaming ////////

jano49.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano49.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano50.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano50.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////


jano51.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano51.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano52.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano52.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano53.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano53.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano54.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano54.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano55.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano55.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano56.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano56.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano57.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano57.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano58.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano58.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano59.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano59.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano60.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano60.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano61.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano61.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano62.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano62.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano63.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano63.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano64.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano64.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano65.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano65.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano66.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano66.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano67.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano67.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano68.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano68.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano69.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano69.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano70.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano70.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano71.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano71.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano72.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano72.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano73.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano73.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano74.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano74.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano75.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano75.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano76.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano76.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano77.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano77.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano78.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano78.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano79.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano79.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano80.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano80.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano81.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano81.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano82.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano82.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano83.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano83.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano84.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano84.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano85.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano85.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano86.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano86.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano87.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano87.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano88.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano88.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano89.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano89.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano90.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano90.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano91.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano91.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano92.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano92.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano93.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano93.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano94.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano94.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano95.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano95.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano96.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano96.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano97.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano97.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano98.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano98.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano99.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano99.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////

jano100.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JUST ALLAH`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano100.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////// playing or dnd  streaming ////////



//////////////// tokn lera da bne 
jano.login("ODg5NTM3NjMxMDkwNzY5OTgx.YUismw.-1xNrdVyFMnIlK0Ydl6EM_iaUoE");
jano2.login("ODg5NTM3OTAxMTcwNDAxMzMw.YUis1A.BMcTN7H6duTbNujdedG3zVlQ83c");
jano3.login("ODg5NTM4MTYyMDQ3NzEzMzIy.YUitEw.76WDZsuIdFiFpiSoUB5PwoEUVXg");
jano4.login("ODg5NTM4MzY1MjUzMzYxNzA1.YUitew.vDuypaO3AsAmx4K8gN8mqiy2vTg");
jano5.login("ODg5NTM4ODUzODc3MTkwNzA3.YUituA.ghSxqxS0X8V9J7vw2Xj0YHs1jk0");
jano6.login("ODg5NTM5NTIwMTQ2NTk5OTQ2.YUiudQ.2JEa8ljVbCe3DiU693kWdIxInIw");
jano7.login("ODg5NTQwMDY5NjEyOTgyMzIz.YUiu6A.KPeo7Bq8b5g-nmPyMwuKZoeE1Zw");
jano8.login("ODg5NTQwMzcyMzQxMDkyMzky.YUivKw.-jEnq-w41ATUgpClolG802C4sZA");
jano9.login("ODg5NTQwNjY3MjIxNjIyODc1.YUivaQ.nGzWAnWGX_oIz6_GvPKxAvASdkg");
jano10.login("ODg5NTQxMDQ5NzA0Mzk4OTM5.YUiv_g.Loh7Wy-_TulQ7iz28X4TzoQr14w");
jano11.login("ODg5NTQxNTQ0NTI3NDEzMjYx.YUiwPw.qosp-7qXQQQBXXfef_5e4Geo3eA");
jano12.login("ODg5NTQyMjIxMDE0MTA2MTMy.YUiw5Q.C2hYT7bpIwuFVCbL9KmfMbx08rQ");
jano13.login("ODg5NTQyNDk4ODQwNjQxNTY2.YUixVw.Zc9meZkWRicITBdQDlNJcG075rM");
jano14.login("ODg5NTQzMDAxOTgwOTQwMjg4.YUixlQ.ICyZXeqZT9FSn5reSgsW-YgqZmk");
jano15.login("ODg5NTQ3MjA0MDY1MzYyMDAw.YUi1yg.z1OmzhUQFdoUbodwgXaCtMx9jMs");
jano16.login("ODg5NTQ3ODczMjEyMDU5Njg4.YUi2MA.y5pY0A58xxiHpzhfJMIEZDSKE1c");
jano17.login("ODg5NTQ4MTk1OTAwODQyMDE1.YUi2bw.tCPjISTUJf3cFpWcRk_QZCijXf4");
jano18.login("ODg5NTQ4NzYwNjEzNTM5OTIx.YUi28Q.wv1eBQ9utI2XqIe_5G9ruDbUrXg");
jano19.login("ODg5NTQ4OTY0MzY4NjIxNjI5.YUi3QQ.ANtdmpPyj3Bw4Ev2r1McLfH5lnk");
jano20.login("ODg5NTQ5MzIzNzQwNzc0NDgx.YUi3sw.8Td1uNsBNIQ3V26C_r8qNXbktuQ");
jano21.login("ODg5NTQ5OTU0MjI4NTgwNDIy.YUi4FA.KIgqdT8kIKlrECVUcuIb4VvV9u4");
jano22.login("ODg5NTUwMTk2NDI4NjY4OTI4.YUi4kA.8MfECA3aX6Uabi5ePs2pSF94wP0");
jano23.login("ODg5NTUwOTI3MTg5NjcyMDQ2.YUi4-A.QriCT4i26jF8enVWlAuPHSYjcXo");
jano24.login("ODg5NTUxMjEyMTIxMzAxMDQy.YUi5Pg.3gjrCUSMQwYVtjZCYPxny8WXcqs");
jano25.login("ODg5NTUxNDY1NDM2MzA3NTM3.YUi5xA._2NSRob0E6z0oSnhBlbIpZuYbdg");
jano26.login("ODg5NTUyMDAwNjc5ODE3MjY2.YUi6Aw.4tNOfb9Qi8wgjq6zf6h-R1h1shI");
jano27.login("ODg5NTUyNDAwMTg3MjYwOTY4.YUi6WA.ifz4FH3aTWOjopFgvY8hXwSltKg");
jano28.login("ODg5NTUyNjM5MDM2MTEyOTY2.YUi6sw.HYrWTX1ogVD3xI85S5bsaulNdf8");
jano29.login("ODg5NTUzMDA3MDA2NjEzNTc0.YUi69w.8QUdE_ecCaNDJbp5yL4CMYTTUIs");
jano30.login("ODg5NTUzMzAwMjg0ODk5MzM4.YUi7Ow.xmO546YKY0P0H_C_RFo67EAJn8Q");
jano31.login("ODg5NTUzNTg4Mzc5MDY2NDE5.YUi7dA.fKGrz4pPYRiS1R3iH5Pqr1tKA5w");
jano32.login("ODg5NTU0MDU2MzA0MDA5MzU4.YUi7-Q.lLhMscndGtrsCqAh9tVknLixQzE");
jano33.login("ODg5NTU0Mzg1NDA1ODk4Nzgy.YUi8IQ.4F0Umzfmi3ZPk1P-EjNHYp22X_4");
jano34.login("ODg5NTU0NTU0NDI3OTQ1MDAw.YUi88w.gwnHhi3OqKG53XDYB8oYXS76MMs");
jano35.login("ODg5NTU1NDg2NzA0MjcxNDEx.YUi9Zg.FOKXwnfmtwm6qE0pj6w7kHSWlWQ");
jano36.login("ODg5NTU1OTIwMDQyOTk1NzMy.YUi9ow.4QR7YGHw0ZbHXKUka_rqGUkCYGs");
jano37.login("ODg5NTU2MTc0ODY3OTQ3NjAx.YUi93Q.VEZx_7vJ_LMJ1wXbJlyPmO0XH4g");
jano38.login("ODg5NTU2NTAzNzg5NDQ5Mjk3.YUi-LQ.qRKrJ4MwKvCFmpH8YnJIcZJXMqg");
jano39.login("ODg5NTU2OTU5MTgxNzk5NTI0.YUi-mA.xsp0_2fV2-OAlU9zmP7MuHbPbu4");
jano40.login("ODg5NTU3OTUyNzQ5NTM1Mzgz.YUi_jQ.6OOy6TB4dmvfaSjP1EeQ2aNVcN4");
jano41.login("ODg5NTU4MzMzNzgxMDYxNjYy.YUjAeQ.lXISgYJIYUv2guTVwCXFdEbwJN4");
jano42.login("ODg5NTU5NDYwMTg2NTcwODIy.YUjA6w._0bjbr_i8tSG6-UEJeeBpn1e6ss");
jano43.login("ODg5NTU5NzE2ODY5NTkxMDgz.YUjBJg.lWb0zbbbNlA-bnjOchjC67BssKw");
jano44.login("ODg5NTYwMDM4OTIwODM1MTQy.YUjBeg.ZcdbCaLQsp8u9hGtcl-RXEveHv8");
jano45.login("ODg5NTYwMzExODgxOTQxMDAy.YUjB0w.4cPgUNHf8wDXevC6ZAj3YeNVwgQ");
jano46.login("ODg5NTYwOTc5NzQ1MTUzMDQ0.YUjC-w.f6v7H2m5R7vnt36z-TZtkJckW0c");
jano47.login("ODg5NTYyNDkzNzc5ODQxMDM1.YUjDpA.AyZm1ehkqKfRkE8HDTkE0UdCU74");
jano48.login("ODg5NTYzMDM3Njg0NjAwODMz.YUjEaw.o0rRJu8NK7DitbVLo-QhGU_dmN4");
jano49.login("ODg5NTYzNDQzMDAxMTg4Mzgy.YUjEkQ.zkqORpxa3tKfYEHqf5SEmT5O1YQ");
jano50.login("ODg5NTYzOTIwNTMxMDYyODk0.YUjE9w.ZfVkrls0WcgQC7Hu2n8CSrkPXE0");
jano51.login("ODg5NTY0MDM2MjgxMjk5MDU0.YUjFXw.giTDn6zRamYGo-A75WETuT_YmkQ");
jano52.login("ODg5NTY0NTA2NDY2OTYzNDk2.YUjFpA.KxN5EWaMvjE0lT8I6MTJFsPqFC4");
jano53.login("ODg5NTY0NzgwNjAyNDg2Nzg1.YUjF5w.5YAol7ep0LhYbu1tKjhihbFiZIs");
jano54.login("ODg5NTY1MTU2OTQ4OTg3OTA1.YUjGNw.jpyMkoyZYcezZ1nkSc6DL46-WrI");
jano55.login("ODg5NTY2MTExNDY3NzAwMjg1.YUjHAg.qgj7VDp7XkFI15i1vBpjEKXuOVo");
jano56.login("ODg5NTY2MjIwOTU1ODI0MTk4.YUjHWQ.lMDcf431-sPE1m-QhP7gZuGqXmw");
jano57.login("ODg5NTY2NTg4NTExMDgwNDg5.YUjHjQ.RcOd_lTIc2TktTSqxs8KQMK86AU");
jano58.login("ODg5NTY2ODI3NzIwNjA1NzY2.YUjHxQ._C0Dw6u_AUdhxeHon5L_vRQCkQU");
jano59.login("ODg5NTY3MjEzMzk1MjU1MzQ2.YUjILQ.fLxS6vos-LzPTIQsz_MD39CGtB8");
jano60.login("ODg5NTY3Njg4NTQyODEwMTEz.YUjIlA.nR_s2V_xU2Zri1fRnDbcWo1zsqk");
jano61.login("ODg5NTY4MzI3MzczMDU4MTY5.YUjJQg.3CEh0YSfM1mVCMUBzzDGFAT_PH8");
jano62.login("ODg5NTY4NjUzMTUzMDM0MjUw.YUjJfQ.IUJ9WQ2llW4svqd9Cml2py5RtpQ");
jano63.login("ODg5NTY4OTA5OTkxMjQzODE2.YUjJzA.yRVNEw5rLGixYTKnzh3wn4bsotc");
jano64.login("ODg5NTY5NTkxOTk3NjI4NDk3.YUjKWA.HKa5wNMwuLzwXtnte1ZrV26-PvI");
jano65.login("ODg5NTY5OTM1NzIwODUzNTE0.YUjKqg.Rcb-v1VbAicPQ2gD_7AgDNsU02k");
jano66.login("ODg5NTcwMTU5ODc3MDU0NTA1.YUjLEA.I5fZy2frvXMIkbSnXyPE-ZKlirk");
jano67.login("ODg5NTcwNzE3Njc3NTQzNDI1.YUjLbQ.roccrCeK511hT86Q9P-MbDLyWaw");
jano68.login("ODg5NTcwOTk0ODA3NzY3MDQw.YUjLww.iAuEagomzosOVKK7nuH6E_arMHc");
jano69.login("ODg5NTcxNDE5NDAxMzc1ODI0.YUjMUQ.iNYRjojI60HYXjccsXAZqGaVT40");
jano70.login("ODg5NTcxOTI3ODgxMDQ0MDgx.YUjMkg.OWFIEoEK9HtN1EfKMBSZSl5ZJDA");
jano71.login("ODg5NTcyMjE4NDcwODAxNDE4.YUjM1A.0cy01knr1EQ1Nj-IFcTJ3ozDHPU");
jano72.login("");
jano73.login("");
jano74.login("");
jano75.login("");
jano76.login("");
jano77.login("");
jano78.login("");
jano79.login("");
jano80.login("");
jano81.login("");
jano82.login("");
jano83.login("");
jano84.login("");
jano85.login("");
jano86.login("");
jano87.login("");
jano88.login("");
jano89.login("");
jano90.login("");
jano91.login("");
jano92.login("");
jano93.login("");
jano94.login("");
jano95.login("");
jano96.login("");
jano97.login("");
jano98.login("");
jano99.login("");
jano100.login("");
