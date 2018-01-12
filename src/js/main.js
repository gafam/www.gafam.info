require('jquery');
require('font-awesome/css/font-awesome.css');
require('bulma/css/bulma.css');
require('github-fork-ribbon-css/gh-fork-ribbon.css');

require('../css/main.css');

require('./version.js');
$(document).ready(function() {
    $('#version').html(__version__);
});
