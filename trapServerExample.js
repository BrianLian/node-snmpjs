#! /usr/bin/env node
/*
 * Copyright (c) 2013, Joyent, Inc. All rights reserved.
 */
var snmp = require('./lib/index.js');
var util = require('util');

tl = snmp.createTrapListener()

tl.on('trap', function (msg) {
	console.log(util.inspect(snmp.message.serializer(msg), false, null));
});
tl.bind({ family: 'udp4', port: 162 });
