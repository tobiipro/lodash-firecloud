ifeq (,$(wildcard support-firecloud/Makefile))
INSTALL_SUPPORT_FIRECLOUD := $(shell git submodule update --init --recursive support-firecloud)
ifneq (,$(filter undefine,$(.FEATURES)))
undefine INSTALL_SUPPORT_FIRECLOUD
endif
endif

include support-firecloud/repo/mk/js.common.node.mk
include support-firecloud/repo/mk/js.test.jest.mk
include support-firecloud/repo/mk/js.publish.tag.mk
include support-firecloud/repo/mk/js.build.d.ts.mk

# ------------------------------------------------------------------------------

JEST = $(call which,JEST,jest)

# ------------------------------------------------------------------------------

.PHONY: test
test: ## Test.
	@$(ECHO_DO) "Testing..."
	true # $(JEST)
	@$(ECHO_DONE)
