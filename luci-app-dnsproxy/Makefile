include $(TOPDIR)/rules.mk

PKG_NAME:=luci-app-dnsproxy
PKG_VERSION:=2026.05.31
PKG_RELEASE:=1
PKG_LICENSE:=MIT
PKG_LICENSE_FILES:=LICENSE

LUCI_TITLE:=LuCI Support for DNS Proxy
LUCI_DESCRIPTION:=OpenWrt 24+ DNS Proxy plugin.
LUCI_DEPENDS:=+luci-base +dnsproxy

include $(TOPDIR)/feeds/luci/luci.mk

# call BuildPackage - OpenWrt buildroot signature
