require('jquery');
require('font-awesome/css/font-awesome.css');
require('bulma/css/bulma.css');
require('github-fork-ribbon-css/gh-fork-ribbon.css');
require('babel-polyfill');
require('github-embed/npm/css/github-embed.css');
const githubEmbed = require('github-embed');

require('../css/main.css');

require('./version.js');
$(document).ready(function() {

    // Propagate version
    $('#version').html(__version__);

    // Embed things from GitHub
    githubEmbed('.github-gafam-poster-translations', {
        "owner": "gafam",
        "repo": "gafam-poster-translations",
        "ref": "master",
        "embed": [
            /*
            {
                "type": "htmlpage",
                "label": "Embedded HTML page",
                "url": "https://github.com/gafam/gafam-poster-translations"
            },
            */
            {
                "type": "po",
                "label": "French",
                "path": "po/fr.po"
            }, {
                "type": "po",
                "label": "English",
                "path": "po/en.po"
            }, {
                "type": "po",
                "label": "German",
                "path": "po/de.po"
            }, {
                "type": "po",
                "label": "Japanese",
                "path": "po/jp.po"
            }, {
                "type": "eo",
                "label": "Esperanto",
                "path": "po/eo.po"
            }, {
                "type": "ru",
                "label": "Russian",
                "path": "po/ru.po"
            }, {
                "type": "cmn",
                "label": "Mandarin Chinese",
                "path": "po/cmn.po"
            }, {
                "type": "it",
                "label": "Italian",
                "path": "po/it.po"
            }, {
                "type": "pl",
                "label": "Polish",
                "path": "po/pl.po"
            }
        ]
    });


    // Initialize video player
    require('flowplayer/dist/skin/skin.css')
    var flowplayer = require('flowplayer/dist/flowplayer.js');

    // Disable Chromecast
    // https://github.com/flowplayer/flowplayer/commit/cb784d2a
    flowplayer.set({chromecast: false});

    flowplayer('#lqdn-gafam-posters-paris-video', {
        swf: require('flowplayer/dist/flowplayer.swf'),
        clip: {
            sources: [{
                type: 'video/mp4',
                src: 'https://ptrace.gafam.info/2017-12-22_lqdn-gafam-paris.mp4'
            }]
        }
    });

});
