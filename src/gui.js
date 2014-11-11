/**
 * Created by Julian on 11/11/2014.
 */
define([
    "config",
    "utils",
    "LocalPeer",
    "protocol/t_man",
    "protocol/peerSamplingService"
], function (Config, Utils, LocalPeer, TMan, PeerSamplingService) {

    return {

        init : function(){
            $(function () {

                $("#connectBtn").on("click", function () {
                    var name = $("#me").val();
                    if (name.length > 0) {

                        Config.set({
                            name: name,
                            host : '85.25.215.113',
                            port: 9000,
                            bootstrapPort: 9001
                        });
                        var profile = Utils.randomInt(1,99);
                        $("#start").html(
                            "<h2>" + name + " [" + profile +"]</h2>"
                        );

                        LocalPeer.load(function (peer, bootstrap) {


                            TMan.init({
                                bootstrap: bootstrap,
                                profile : profile,
                                rankingFunc : function (x, list) {
                                    return _.sortBy(list, function (e) {
                                        if (!("profile" in e)) {
                                            return Math.MAX_VALUE;
                                        };
                                        return Math.abs(e.profile - x);
                                    })
                                }
                            });


                            setInterval(function () {
                                var peers = PeerSamplingService.getPeers();
                                var html = "";
                                for(var i = 0; i < peers.length; i++) {
                                    html += JSON.stringify(peers[i]) + "</br>";
                                }
                                $("#data").html(html);

                                // TMAN

                                peers = TMan.getPeers();
                                for(var i = 0; i < peers.length; i++) {
                                    if (!("profile" in peers[i])){
                                        peers[i].profile = Number.MAX_VALUE;
                                    }
                                }
                                peers = _.sortBy(peers, function (e) {
                                    return e.profile;
                                });

                                html = "<div>TMAN [" + peers.length +"]</div>";

                                for(var i = 0; i < peers.length; i++) {
                                    html += JSON.stringify(peers[i]) + "</br>";
                                }

                                $("#tman").html(html);

                            }, 900);



                        });

                    }
                });


            });
        }
    };

});