#!/usr/bin/env bash
set -euo pipefail
sudo dpkg --add-architecture i386
sudo apt update
sudo apt install -y wine64 wine32 winetricks
echo "Wine & Winetricks Installed"
