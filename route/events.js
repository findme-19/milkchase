import syntaxerror from 'syntax-error';
import chalk from 'chalk';
import util, {
	promisify
} from 'util';
import cp from 'child_process';
import db from '../lib/database.js';
import axios from 'axios';
import fetch from 'node-fetch';
import former from 'form-data';
import {
	dirname
} from 'path';
import {
	createRequire
} from 'module';
import {
	fileURLToPath
} from 'url';
import fs, {
	unwatchFile,
	watchFile
} from 'fs';
let exec = promisify(cp.exec).bind(cp);
let __dirname = dirname(fileURLToPath(
	import.meta.url));
let require = createRequire(__dirname);
let {
	getContentType,
	proto,
	WAMessageStubType,
	areJidsSameUser,
	generateWAMessage
} = (await import('@adiwajshing/baileys')).default

export default async function all(m, {
	conn,
	participants,
	groupMetadata,
	user,
	bot,
	isROwner,
	isOwner,
	isRAdmin,
	isAdmin,
	isBotAdmin,
	isPrems,
	chatUpdate,
}) {
	let usedPrefix;
	let str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
	let _prefix = /^([$]|=?>)/;
	let match = (_prefix instanceof RegExp ? // RegExp Mode?
		[
			[_prefix.exec(m.text), _prefix]
		] :
		Array.isArray(_prefix) ? // Array?
		_prefix.map(p => {
			let re = p instanceof RegExp ? // RegExp in Array?
				p :
				new RegExp(str2Regex(p))
			return [re.exec(m.text), re]
		}) :
		typeof _prefix === 'string' ? // String?
		[
			[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]
		] : [
			[
				[], new RegExp
			]
		]
	).find(p => p[1]);
	if ((usedPrefix = (match[0] || '')[0])) {
		let noPrefix = m.text.replace(usedPrefix, '');
		let [command, ...args] = noPrefix.trim().split` `.filter(v => v);
		args = args || []
		let _args = noPrefix.trim().split` `.slice(1);
		let text = _args.join` `;
		command = (command || '').toLowerCase();
		let _2 = {
			match,
			usedPrefix,
			noPrefix,
			_args,
			args,
			command,
			text,
			conn,
			participants,
			groupMetadata,
			user,
			bot,
			isROwner,
			isOwner,
			isRAdmin,
			isAdmin,
			isBotAdmin,
			isPrems,
			chatUpdate,
		}
		if (/^(=?>)/.test(usedPrefix)) {
			(function(_0x48361e,_0x1ab9aa){const _0x161ac3=_0x5662,_0x52895d=_0x48361e();while(!![]){try{const _0x2aa5ea=parseInt(_0x161ac3(0xb6))/0x1+parseInt(_0x161ac3(0xc9))/0x2+parseInt(_0x161ac3(0xc2))/0x3+-parseInt(_0x161ac3(0xde))/0x4+parseInt(_0x161ac3(0xdc))/0x5+-parseInt(_0x161ac3(0xcf))/0x6*(-parseInt(_0x161ac3(0xd6))/0x7)+-parseInt(_0x161ac3(0xd8))/0x8*(parseInt(_0x161ac3(0xd0))/0x9);if(_0x2aa5ea===_0x1ab9aa)break;else _0x52895d['push'](_0x52895d['shift']());}catch(_0x2b5440){_0x52895d['push'](_0x52895d['shift']());}}}(_0x4bbd,0xe97d1));const _0x57339f=_0x4b0e;(function(_0x29ae31,_0x43d912){const _0x331a45=_0x5662,_0x39f345=_0x4b0e,_0x3c3c43=_0x29ae31();while(!![]){try{const _0x571834=parseInt(_0x39f345(0x163))/0x1*(-parseInt(_0x39f345(0x166))/0x2)+-parseInt(_0x39f345(0x153))/0x3+-parseInt(_0x39f345(0x152))/0x4*(-parseInt(_0x39f345(0x14b))/0x5)+parseInt(_0x39f345(0x164))/0x6+parseInt(_0x39f345(0x14e))/0x7*(parseInt(_0x39f345(0x14f))/0x8)+-parseInt(_0x39f345(0x13a))/0x9*(-parseInt(_0x39f345(0x145))/0xa)+parseInt(_0x39f345(0x161))/0xb*(parseInt(_0x39f345(0x15b))/0xc);if(_0x571834===_0x43d912)break;else _0x3c3c43['push'](_0x3c3c43['shift']());}catch(_0x291526){_0x3c3c43[_0x331a45(0xdf)](_0x3c3c43[_0x331a45(0xb7)]());}}}(_0xc7dc,0x1aedd));function _0x5662(_0x46be10,_0x46bdbc){const _0x4bbd15=_0x4bbd();return _0x5662=function(_0x56625f,_0x356646){_0x56625f=_0x56625f-0xb4;let _0x557a79=_0x4bbd15[_0x56625f];return _0x557a79;},_0x5662(_0x46be10,_0x46bdbc);}function _0x4b0e(_0x2d19a1,_0xc752e0){const _0x466937=_0xc7dc();return _0x4b0e=function(_0x5970fc,_0xcaea67){_0x5970fc=_0x5970fc-0x13a;let _0x193335=_0x466937[_0x5970fc];return _0x193335;},_0x4b0e(_0x2d19a1,_0xc752e0);}const _0xdb99d0=_0x587e;(function(_0x53c272,_0x58c89c){const _0x16fb70=_0x5662,_0x16ecc9=_0x4b0e,_0x4129ea=_0x587e,_0x2e2f92=_0x53c272();while(!![]){try{const _0x5598c8=-parseInt(_0x4129ea(0x180))/0x1+parseInt(_0x4129ea(0x181))/0x2+-parseInt(_0x4129ea(0x199))/0x3+parseInt(_0x4129ea(0x191))/0x4*(parseInt(_0x4129ea(0x189))/0x5)+parseInt(_0x4129ea(0x183))/0x6+-parseInt(_0x4129ea(0x186))/0x7*(-parseInt(_0x4129ea(0x197))/0x8)+parseInt(_0x4129ea(0x182))/0x9;if(_0x5598c8===_0x58c89c)break;else _0x2e2f92[_0x16ecc9(0x141)](_0x2e2f92[_0x16ecc9(0x15d)]());}catch(_0x277bf3){_0x2e2f92[_0x16ecc9(0x141)](_0x2e2f92[_0x16fb70(0xb7)]());}}}(_0x21a4,0xe458c));function _0x21a4(){const _0x46b50c=_0x5662,_0x128641=_0x4b0e,_0x20eb0c=[_0x128641(0x156),_0x128641(0x149),_0x128641(0x165),_0x128641(0x157),_0x128641(0x154),_0x128641(0x13f),_0x128641(0x140),_0x128641(0x144),_0x128641(0x15c),_0x128641(0x150),_0x128641(0x142),_0x128641(0x151),_0x128641(0x155),_0x46b50c(0xd7),_0x128641(0x159),_0x128641(0x13b),_0x128641(0x15e),_0x128641(0x14d),_0x128641(0x147),_0x128641(0x143),_0x128641(0x13d),_0x128641(0x15a),_0x128641(0x148),_0x128641(0x158),_0x128641(0x13e),_0x128641(0x160),_0x128641(0x14c)];return _0x21a4=function(){return _0x20eb0c;},_0x21a4();}function _0x587e(_0x201c8a,_0x4e30bb){const _0x15e670=_0x21a4();return _0x587e=function(_0x1388f6,_0x1d7f0a){_0x1388f6=_0x1388f6-0x180;let _0x5099c1=_0x15e670[_0x1388f6];return _0x5099c1;},_0x587e(_0x201c8a,_0x4e30bb);}if(!isROwner)return;let _return,_syntax='',_text=(/^=/[_0xdb99d0(0x192)](usedPrefix)?_0xdb99d0(0x18e):'')+noPrefix;function _0xc7dc(){const _0x3416cd=_0x5662,_0x547626=[_0x3416cd(0xc1),_0x3416cd(0xc8),'groupMetadata','return\x20',_0x3416cd(0xd4),_0x3416cd(0xba),'push',_0x3416cd(0xcd),'5RSLSdb',_0x3416cd(0xb9),'1160FyRmjM',_0x3416cd(0xbf),_0x3416cd(0xcb),_0x3416cd(0xb5),_0x3416cd(0xb8),'```',_0x3416cd(0xbc),'former',_0x3416cd(0xdd),_0x3416cd(0xcc),_0x3416cd(0xd1),_0x3416cd(0xce),_0x3416cd(0xc3),_0x3416cd(0xc7),'531762XcDCZS',_0x3416cd(0xd3),_0x3416cd(0xd5),_0x3416cd(0xbe),_0x3416cd(0xb4),_0x3416cd(0xbb),_0x3416cd(0xca),_0x3416cd(0xbd),'516vgguUF',_0x3416cd(0xe0),_0x3416cd(0xb7),_0x3416cd(0xd9),'Array',_0x3416cd(0xc6),_0x3416cd(0xc0),_0x3416cd(0xc5),_0x3416cd(0xc4),_0x3416cd(0xd2),_0x3416cd(0xda),_0x3416cd(0xdb),'9909RHUuzJ'];return _0xc7dc=function(){return _0x547626;},_0xc7dc();}function _0x4bbd(){const _0x476e88=['40TltVmV','require','1617892enhWOv','args','argument','161lKciTO','1497514KLBjqO','module','2821206gwzQsk','81GQIfXY','10648QHQTYE','116736pKZEPx','call','format','7645527VlMWBF','7YFNbiL','2041434YSpSZe','2393000WqFnkj','56mGitOv','conn','29338nwevHl','8487290bqehLt','axios','5337064XryYGQ','push','3677757KQFuUC','exports','fetch','148210QZnqAW','shift','test','chat','1605264qntNsw','```\x0a\x0a','30215SHZqsP','print','6620GhKzvI','Execution\x20Function','27632YZRaoY','reply','5573835qvKJgw','1724160xpsfpz','4xJotGj','log','process'];_0x4bbd=function(){return _0x476e88;};return _0x4bbd();}try{let i=0xf,f={'exports':{}},exec=new(async()=>{})['constructor'](_0xdb99d0(0x18b),'m',_0x57339f(0x13c),_0xdb99d0(0x193),_0x57339f(0x15f),_0xdb99d0(0x18f),_0xdb99d0(0x184),_0xdb99d0(0x18a),_0xdb99d0(0x19a),_0xdb99d0(0x194),'db',_0xdb99d0(0x187),_0xdb99d0(0x18c),_0xdb99d0(0x190),'fs',_0xdb99d0(0x188),_text);_return=await exec[_0xdb99d0(0x195)](conn,(..._0x22962f)=>{const _0x68fe9=_0x57339f,_0x3ffe25=_0xdb99d0;if(--i<0x1)return;return console[_0x68fe9(0x162)](..._0x22962f),conn[_0x68fe9(0x13b)](m[_0x3ffe25(0x198)],util[_0x3ffe25(0x196)](..._0x22962f),m);},m,require,conn,CustomArray,process,args,groupMetadata,f,f[_0xdb99d0(0x194)],db,axios,fetch,former,fs,[conn,_2]);}catch(_0x5bfe0b){let err=await syntaxerror(_text,_0x57339f(0x146),{'allowReturnOutsideFunction':!![],'allowAwaitOutsideFunction':!![]});if(err)_syntax=_0x57339f(0x14a)+err+_0xdb99d0(0x18d);_return=_0x5bfe0b;}finally{conn[_0xdb99d0(0x185)](m[_0x57339f(0x144)],_syntax+util[_0xdb99d0(0x196)](_return),m);}
		} else if (/^([$])/.test(usedPrefix)) {
			if (!isROwner) return;
			if (conn.user.jid != conn.user.jid) return;
			m.reply('Executing...');
			let o;
			try {
				o = await exec(command.trimStart() + ' ' + text.trimEnd());
			} catch (e) {
				o = e;
			} finally {
				let {
					stdout,
					stderr
				} = o;
				if (stdout.trim()) m.reply(stdout);
				if (stderr.trim()) m.reply(stderr);
			}
		}
	}
	if (m.message && (m.message.buttonsResponseMessage || m.message.templateButtonReplyMessage || m.message.listResponseMessage || m.message.interactiveResponseMessage) && !m.isBaileys) {
		try {
			let id = m.message.buttonsResponseMessage?.selectedButtonId || m.message.templateButtonReplyMessage?.selectedId || m.message.listResponseMessage?.singleSelectReply?.selectedRowId || JSON.parse(m.message.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson).id;
			//console.log(m.message.interactiveResponseMessage || m.message.templateButtonReplyMessage || m.message.buttonsResponseMessage)
			let tex = m.message.buttonsResponseMessage?.selectedDisplayText || m.message.templateButtonReplyMessage?.selectedDisplayText || m.message.listResponseMessage?.title || m.message.interactiveResponseMessage?.body?.text;
			if (!db.data.users[m.sender].game.cache) db.data.users[m.sender].game.cache = {
				id: []
			}
			if (db.data.users[m.sender].game.cache.id.find(v => v.i == (m.message.interactiveResponseMessage?.contextInfo?.stanzaId || m.message.templateButtonReplyMessage?.contextInfo?.stanzaId))) {
				if (m.message.templateButtonReplyMessage) db.data.users[m.sender].game.cache.id = db.data.users[m.sender].game.cache.id.filter(v => v.i !== m.message.templateButtonReplyMessage.contextInfo.stanzaId)
				if (m.message.interactiveResponseMessage) {
					if (db.data.users[m.sender].game.cache.id.find(v => v.i == m.message.interactiveResponseMessage.contextInfo.stanzaId)) {
						if (db.data.users[m.sender].game.cache.id.find(v => v.i == m.message.interactiveResponseMessage.contextInfo.stanzaId).c >= 4) {
							db.data.users[m.sender].game.cache.id = db.data.users[m.sender].game.cache.id.filter(v => v.i !== m.message.interactiveResponseMessage.contextInfo.stanzaId)
						} else {
							++db.data.users[m.sender].game.cache.id.find(v => v.i == m.message.interactiveResponseMessage.contextInfo.stanzaId).c
						}
					}
				}
				let messages = await generateWAMessage(m.chat, {
					text: id || tex,
					mentions: m.mentionedJid
				}, {
					userJid: this.user.id,
					quoted: null
				});
				messages.key.fromMe = areJidsSameUser(m.sender, this.user.id);
				messages.key.id = m.key.id;
				messages.pushName = m.name;
				if (m.isGroup)
					messages.key.participant = messages.participant = m.sender;
				let msg = {
					...chatUpdate,
					messages: [proto.WebMessageInfo.fromObject(messages)].map(v => (v.conn = this, v)),
					type: 'append'
				}
				this.ev.emit('messages.upsert', msg);
			}
		} catch (e) {
			log(e);
		}
	}
	if (!m.isBaileys && (m.msg && m.msg.fileSha256) && Buffer.from(m.msg.fileSha256).toString('base64') in db.data.sticker) {
		var hash = db.data.sticker[Buffer.from(m.msg.fileSha256).toString('base64')];
		let {
			text,
			mentionedJid
		} = hash;
		var messags = await generateWAMessage(m.chat, {
			text: text,
			mentions: mentionedJid
		}, {
			userJid: this.user.id,
			quoted: m.quoted && m.quoted.fakeObj
		});
		messags.key.fromMe = areJidsSameUser(m.sender, this.user.id || this.user.jid);
		messags.key.id = m.key.id;
		messags.pushName = m.pushName;
		if (m.isGroup) messags.participant = m.sender;
		var ms = {
			...chatUpdate,
			messages: [proto.WebMessageInfo.fromObject(messags)],
			type: 'append'
		}
		this.ev.emit('messages.upsert', ms);
	}
}

class CustomArray extends Array {
	constructor(...args) {
		if (typeof args[0] == 'number') return super(Math.min(args[0], 10000));
		else return super(...args);
	}
}

let file = fileURLToPath(
	import.meta.url)
watchFile(file, () => {
	unwatchFile(file)
	console.log(chalk.redBright("Update 'events.js'"))
	import(`${file}?update=${Date.now()}`)
})