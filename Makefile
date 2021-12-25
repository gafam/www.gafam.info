# ===============
# local webserver
# ===============
webserver:
	cd htdocs; python3 -m http.server 8001; cd ..


# ===========
# bumpversion
# ===========

$(eval venvpath     := .venv)
$(eval pip          := $(venvpath)/bin/pip)
$(eval python       := $(venvpath)/bin/python)
$(eval bumpversion  := $(venvpath)/bin/bump2version)

virtualenv:
	@test -e $(python) || python3 -m venv --system-site-packages $(venvpath)

bumpversion: virtualenv
	@$(pip) install bump2version
	$(bumpversion) $(bump)


# =======
# release
# =======

push:
	git push && git push --tags
	git push lqdn && git push lqdn --tags


release: bumpversion push


# =======
# upgrade
# =======

upgrade:
	git stash save
	git pull
	git stash pop
	yarn install
	yarn run release


# ======
# ptrace
# ======

# Don't commit media assets (screenshots, other large files etc.) to the repository
# or send them using email or instant messaging.
# Instead, upload them to https://ptrace.gafam.info/
ptrace_target := root@ptrace.gafam.info:/srv/www/organizations/gafam/ptrace.gafam.info/htdocs/
ptrace_http   := https://ptrace.gafam.info/
ptrace: check-ptrace-options
	$(eval prefix := $(shell date --iso-8601))
	$(eval name   := $(shell basename $(source)))
	$(eval id     := $(prefix)_$(name))

	@# debugging
	@#echo "name: $(name)"
	@#echo "id:   $(id)"

	@scp '$(source)' '$(ptrace_target)$(id)'

	$(eval url    := $(ptrace_http)$(id))
	@echo "Access URL: $(url)"

check-ptrace-options:
	@if test "$(source)" = ""; then \
		echo "ERROR: 'source' not set"; \
		exit 1; \
	fi
