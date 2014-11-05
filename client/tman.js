/**
 * Created by Julian on 11/4/2014.
 */
(function(Gossip){

    /**
     * This profile will be used for the ranking
     * function
     * @type {Object}
     */
    var profile = null;

    /**
     * This function must be defined by the user
     * @type {function}
     */
    var rankingFunction = null;

    /**
     * Size of the partial view of other nodes
     * @type {number}
     */
    var c = 0;

    Gossip.TMan = {

        /**
         *
         * @param options
         * {
         *      profile : xxx,
         *
         *      // @param x       - my own {profile}
         *      // @param nodes   - {Array} of { profile: {profile}, address: "addr", .. }
         *      //                  Objects
         *      rankingFunction : function(x,nodes) {
         *
         *      }
         * }
         * @returns {object}
         */
        init : function(options){
            if (typeof options === "undefined") throw "options must be defined";
            if (!("profile" in options)) throw "options must contain a profile";
            if (!("rankingFunction" in options)) throw "options must contain a ranking function";
            if (!("partialViewSize" in options)) options.partialViewSize = 5;

            profile = options.profile;
            rankingFunction = options.rankingFunction;
            c = options.partialViewSize;

            return {



            }
        }



    };

})(typeof window.Gossip === 'undefined'?
    window.Gossip = {} : window.Gossip);