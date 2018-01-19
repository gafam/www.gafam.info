====================
www.gafam.info tasks
====================

*******
Ongoing
*******
- [o] Implement "poster autolayout" proof of concept:

      Try to layout the poster in CSS/Javascript for easier reproduction
      of translated versions without having to do a manual layout step.

      Use Fitty (https://rikschennink.github.io/fitty/) for the job.

      Or have a look at FitText or FlowType:
      https://discourse.wicg.io/t/auto-sizing-text-to-fit-container/1053

  See https://github.com/posterkit. This is still pre-alpha! ;]


****
Todo
****
- [o] Add video from the Paris campaign
    > Also, here is a video of them spreading it in Paris:
    > https://twitter.com/laquadrature/status/944148790684069888

- [o] Use better og:image
- [o] Add documentation "How to clear Telegram's link preview cache"

    - Go to @webpagebot (https://telegram.me/webpagebot)
    - Send message ``/updatepreview``
    - Send URL ``https://gafam.info``
    - The Bot should respond with "Link previews was updated successfully. Check them out!"

- [o] Add separate "Gallery" page embedding images from ptrace.gafam.info
- [o] Popover inline anchor handles
- [o] Smooth scrolling to inline anchors
- [o] Link from footer to Changelog
- [o] Add "About LQDN" section. Footer?
- [o] Add "Alternatives" section with things like

    - PRISM Break

        - https://de.wikipedia.org/wiki/PRISM_Break
        - https://github.com/nylira/prism-break

    - Framasoft

        - https://framasoft.org/
        - https://framapack.org/

    - Educational / Why Open Source?

        - https://opensource.org/
        - https://opensource.guide/
        - https://www.gnu.org/software/software.en.html

    - Misc

        - https://opensourcesoftwaredirectory.com/
        - https://directory.fsf.org/
        - https://www.softwareheritage.org/
        - https://en.wikipedia.org/wiki/List_of_free_and_open-source_software_packages
        - https://en.wikipedia.org/wiki/List_of_free_and_open-source_software_organizations

- [o] Add logo for GitHub organization


****
Done
****
- [x] Add README.rst to gafam-translations repository
- [x] Make embedding on IM a richer experience (add og:image)
- [x] Add translations into German
- [x] Redaction/rewording/emphasis
- [x] Rename repository gafam-l10n to gafam-poster-translations
- [x] Add English PDF publication from "12:00 AM - 3 Jan 2018"

    - https://wiki.laquadrature.net/Fichier:LQDNgafamEN.pdf
    - https://wiki.laquadrature.net/images/f/f2/LQDNgafamEN.pdf

- [x] Add "How to reproduce" section
- [x] Get rid of the pull-left/pull-right stuff and properly move to
      flex things like "column » is-6/is-6" at https://gafam.info/#resources.
      Then, things might start working on mobile actually ;].

- [x] Add "What else?" section

    While all this is just about #GAFAM, we published all resources as public domain (CC0).
    In this spirit, we encourage you to apply the same to #BATX or ....

- [x] Add "About" section to both index.html and README.rst

    La Quadrature du Net started the GAFAM poster campaign around December 2017 in order
    to support their call for donations.

    After visiting the 34C3 congress, we picked this up in January 2018 to support
    the lovely people of LQDN in covering the whole world.

- [x] Content attributions

    - https://twitter.com/NabeelAdeni/status/943733947921518592
    - https://twitter.com/linto_ai/status/950756933199314945
    - https://twitter.com/mauddelavO/status/941602492521111552
    - https://twitter.com/vincib/status/946859282498314240
    - https://twitter.com/churchill58/status/952437523749404673

- [x] Use label "The GAFAM poster campaign" all over the place incl.
      files in the "gafam-poster-translations" repository.
