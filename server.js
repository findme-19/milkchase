import express from 'express'
import path from 'path'
import {
	createServer
} from 'http'
import {
	Server
} from 'socket.io'
import {
	toBuffer
} from 'qrcode'
import fetch from 'node-fetch'
import Helper from './lib/helper.js'

function connect(conn, PORT) {
	var app = global.app = express()
	var server = global.server = createServer(app)
	var _qr = 'invalid'

	conn.ev.on('connection.update', function appQR({
		qr
	}) {
		if (qr) _qr = qr
	})

	app.use(async (req, res) => {
		res.setHeader('content-type', 'image/png')
		res.end(await toBuffer(_qr))
	})
	app.use(express.static(path.join(Helper.__dirname(
		import.meta.url), 'views')))

	var io = new Server(server)
	io.on('connection', socket => {
		var {
			unpipeEmit
		} = pipeEmit(conn, socket, 'conn-')
		socket.once('disconnect', unpipeEmit)
	})

	server.listen(PORT, () => {
		console.log('App listened on port', PORT)
		if (opts['keepalive']) keepAlive()
	})
}

function pipeEmit(event, event2, prefix = '') {
	var old = event.emit
	event.emit = function(event, ...args) {
		old.emit(event, ...args)
		event2.emit(prefix + event, ...args)
	}
	return {
		unpipeEmit() {
			event.emit = old
		}
	}
}

function keepAlive() {
	var url = `https://${process.env.SPACE_HOST}`
	if (/(\/\/|\.)undefined\./.test(url)) return
	setInterval(() => {
		fetch(url, {headers: {'Authorization': 'Bearer ' + process.env.HF_TOKEN}}).then(v => console.log(v.status)).catch(console.error)
	}, 5 * 1000 * 60)
}


export default connect