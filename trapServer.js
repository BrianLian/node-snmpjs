#! /usr/bin/env node
/*
 * Copyright (c) 2013, Joyent, Inc. All rights reserved.
 */
var TrapListener = require('./lib/trap_listener');
var message = require('./lib/protocol/message');

module.exports = function setup(cb) {
	var tl = new TrapListener({
		log: console
	})

	tl.on('trap', function (msg) {
		cb(message.serializer(msg))
	});

	tl.bind({ family: 'udp4', port: 162 });

}
