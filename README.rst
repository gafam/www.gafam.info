.. image:: https://img.shields.io/github/tag/gafam/www.gafam.info.svg
    :target: https://github.com/gafam/www.gafam.info

|

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


Usage
=====

Create development sandbox in ``.venv`` folder::

    {apt,brew,yum,zypper} install python3 git
    export NODEJS_VERSION=14.20.0
    export NPM_VERSION=6.14.17
    export YARN_VERSION=1.22.19
    source /dev/stdin <<<"$(curl -s https://raw.githubusercontent.com/cicerops/supernode/main/supernode)"

Bundle Javascript and CSS assets using webpack::

    yarn install
    yarn run build

Watch files for rebundling::

    yarn run watch

Have a look::

    open ./htdocs/index.html


Create thumbnail image from poster PDF
======================================
::

    # Just a workbench
    mkdir tmp; cd tmp

    # Acquire PDF file
    wget https://ptrace.gafam.info/upstream/pdf/lqdn-gafam-poster-de.pdf

    # Layout multiple pages in matrix
    pdfnup --nup 2x3 --landscape=true --no-tidy lqdn-gafam-poster-de.pdf

    # Convert to GIF format appropriately
    convert -units PixelsPerInch lqdn-gafam-poster-de-nup.pdf -density 72 -trim +repage -resize 595x gafam-german-card.gif

    # Copy to target directory
    cp gafam-german-card.gif ../htdocs/static/img/


Download MP4 video from Twitter
===============================
::

    # Just a workbench
    mkdir tmp; cd tmp

    # youtube-dl does it all ;]
    youtube-dl --output 'lqdn-gafam-paris.mp4' https://twitter.com/laquadrature/status/944148790684069888

    # Upload to content web space
    make ptrace source=lqdn-gafam-paris.mp4

