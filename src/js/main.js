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
    githubEmbed('.gafam-l10n', {
        "owner": "gafam",
        "repo": "gafam-l10n",
        "ref": "master",
        "embed": [
            /*
            {
                "type": "htmlpage",
                "label": "Embedded HTML page",
                "url": "https://github.com/gafam/gafam-l10n"
            },
            */
            {
                "type": "po",
                "label": "French original",
                "path": "po/fr.po"
            }, {
                "type": "po",
                "label": "English translation",
                "path": "po/en.po"
            }
        ]
    });

});
