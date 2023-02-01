fx_version 'cerulean'
games { 'gta5' }
author 'D7y'

ui_page "html/index.html"
files { "html/index.html", "html/main.js", "html/style.css", "html/icons/*", "html/weapons/*" }

shared_script 'Config.lua'
client_scripts { "client/main.lua" }

server_scripts { '@vrp/lib/utils.lua', "server/main.lua" }
