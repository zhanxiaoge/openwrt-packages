include $(TOPDIR)/rules.mk

PKG_NAME:=luci-app-dockerman
PKG_VERSION:=2026.05.31
PKG_RELEASE:=1
PKG_LICENSE:=MIT
PKG_LICENSE_FILES:=LICENSE

LUCI_TITLE:=LuCI Support for Docker Manager
LUCI_DESCRIPTION:=OpenWrt 24+ Docker Manager plugin.
LUCI_DEPENDS:=+luci-base +dockerd +docker-compose +kmod-br-netfilter +kmod-nft-bridge

include $(TOPDIR)/feeds/luci/luci.mk

# call BuildPackage - OpenWrt buildroot signature
