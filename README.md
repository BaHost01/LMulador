# LMulador

LMulador is a cross-platform Electron app embedding a lightweight Linux environment, custom shell UI, and game emulation support.

## Features
- Embedded Linux VM via QEMU or Docker
- Custom terminal with plugins (xterm.js)
- React/Tailwind UI shell
- CLI extension system
- Emulation: Wine for Windows apps, Proton for Steam games

## Getting Started

### Prerequisites
- Git, Node.js v16+, npm
- QEMU/KVM or Docker
- Wine & Winetricks
- Proton GE (optional)

### Clone & Install
```bash
git clone https://github.com/BaHost01/LMulador.git
cd LMulador
npm install
