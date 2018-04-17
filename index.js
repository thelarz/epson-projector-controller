#!/usr/bin/env node

// thanks:
// https://bretkikehara.wordpress.com/2013/05/02/nodejs-creating-your-first-global-module/

var controller = require("projector-controller");

var command = process.argv[2];

controller.config({
    name: "Epson",
    baudRate: 9600,
    on: ["PWR ON", 0x0D],
    off: ["PWR OFF", 0x0D],
    //settings: [0x00, 0x85, 0x00, 0x00, 0x01, 0x00, 0x86]  // 00h 85h 00h 00h 01h 00h 86h
    /* setup: [
        {
            kiosk: [
            ]
        }
    ]*/
}, () => {
    controller[command]((success) => {
        return;
    });
});