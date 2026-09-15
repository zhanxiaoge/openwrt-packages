include $(TOPDIR)/rules.mk

PKG_NAME:=dnsproxy
PKG_VERSION:=2026.05.31
PKG_RELEASE:=1
PKG_LICENSE:=MIT
PKG_LICENSE_FILES:=LICENSE

include $(INCLUDE_DIR)/package.mk

define Package/$(PKG_NAME)
  SECTION:=net
  CATEGORY:=Network
  TITLE:=OpenWrt Support for DNS Proxy
  DEPENDS:=+BUSYBOX_DEFAULT_GREP +BUSYBOX_DEFAULT_SED
endef

define Package/$(PKG_NAME)/conffiles
/etc/config/dnsproxy
endef

define Package/$(PKG_NAME)/install
	$(INSTALL_DIR) $(1)/usr/sbin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/$(PKG_NAME) $(1)/usr/sbin/$(PKG_NAME)
	$(INSTALL_DIR) $(1)/etc/init.d
	$(INSTALL_BIN) ./files/etc/init.d/$(PKG_NAME) $(1)/etc/init.d/$(PKG_NAME)
	$(SED) "s|^\(readonly PKG_NAME\).*|\1='$(PKG_NAME)'|" $(1)/etc/init.d/$(PKG_NAME)
	$(SED) "s|^\(readonly PKG_VERSION\).*|\1='$(PKG_VERSION)-r$(PKG_RELEASE)'|" $(1)/etc/init.d/$(PKG_NAME)
	$(INSTALL_DIR) $(1)/etc/config
	$(INSTALL_CONF) ./files/etc/config/$(PKG_NAME) $(1)/etc/config/$(PKG_NAME)
endef

$(eval $(call BuildPackage,$(PKG_NAME)))
