#! /usr/bin/env node
/*
 * Copyright (c) 2013, Joyent, Inc. All rights reserved.
 */
var TrapListener = require('./lib/trap_listener');
var message = require('./lib/protocol/message');
var util = require('util');

tl = new TrapListener({
	log: console
})

tl.on('trap', function (msg) {
	console.log(util.inspect(message.serializer(msg), false, null));
});
tl.bind({ family: 'udp4', port: 162 });