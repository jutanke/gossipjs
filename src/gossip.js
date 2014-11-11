/**
 * Created by Julian on 11/11/2014.
 */
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'src',
    paths: {
        jQuery : "//code.jquery.com/jquery-2.0.3.min",
        underscore : "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min",
        peer : "//cdn.peerjs.com/0.3/peer"
    }
});

define([
    "jQuery",
    "underscore",
    "peer",
    "utils",
    "config",
    "externals",
    "LocalPeer",
    "gui"],
function (a,b,c, Utils, Config, d, LocalPeer, gui) {

    Config.debug(true);

    gui.init();

});