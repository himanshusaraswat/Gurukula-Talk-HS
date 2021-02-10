"use strict";
exports.__esModule = true;
exports.log = void 0;
var tick = Date.now();
var log = function (v) { return console.log(v + " \n Elapsed: " + (Date.now() - tick) + "ms"); };
exports.log = log;
var codeBlocker = function () {
    // Blocking
    // let i = 0;
    // while(i < 1000000000) { i++;}
    // return '🐷 billion loops done';
    // Async blocking
    // return new Promise((resolve, reject) => {
    //     let i = 0;
    //     while(i < 1000000000) { i++;}
    //     resolve('🐷 billion loops done');
    // })
    // Non-blocking
    return Promise.resolve().then(function (v) {
        var i = 0;
        while (i < 1000000000) {
            i++;
        }
        return '🐷 billion loops done';
    });
};
exports.log('🥪 Synchronous 1');
codeBlocker().then(exports.log);
exports.log('🥪 Synchronous 2');
