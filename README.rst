##############
www.gafam.info
##############


About
=====
This repository contains the sources of the `gafam.info`_ web page.

It is about collecting, maintaining and promoting translations of the
`GAFAM poster campaign`_ by `La Quadrature du Net`_.

The web page and its accompanying repository `gafam-poster-translations`_
are intended to support the lovely people of LQDN in spreading
the word about their campaign.

Contributions are always welcome!

.. _gafam.info: https://gafam.info/
.. _GAFAM poster campaign: https://twitter.com/laquadrature/status/942764007286591490
.. _La Quadrature du Net: https://www.laquadrature.net/
.. _gafam-poster-translations: https://github.com/gafam/gafam-poster-translations


How to work with it
===================
Bundle Javascript and CSS assets using webpack::

    yarn install
    yarn run build

Watch files for rebundling::

    yarn run watch

Have a look::

    open ./htdocs/index.html

