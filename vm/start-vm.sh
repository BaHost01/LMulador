#!/usr/bin/env bash
set -euo pipefail
qemu-system-x86_64 -machine accel=kvm -cpu host -m 2048 -hda vm.img -net nic -net user -nographic &
echo "VM Started
