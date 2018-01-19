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
            }
        ]
    });

});
