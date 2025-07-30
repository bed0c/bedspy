# 🕵️‍♂️ bedspy

> **Advanced IP Intelligence & Geolocation Tool**

A powerful browser-based tool that captures and analyzes IP addresses through WebRTC connections, providing detailed geolocation information, security analysis, and network intelligence.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Made with](https://img.shields.io/badge/made%20with-JavaScript-yellow.svg)

## ✨ Features

- 🔍 **Real-time IP Detection**: Captures IP addresses through WebRTC connections
- 🌍 **Advanced Geolocation**: Detailed location information with coordinates
- 🛡️ **Security Analysis**: VPN/Proxy detection with confidence scoring
- 📊 **Network Intelligence**: ISP, ASN, and connection type analysis
- 🗺️ **Interactive Maps**: Google Maps integration for visual location
- 🎨 **Modern UI**: Sleek, professional interface with dark theme
- 📱 **Responsive Design**: Works on all modern browsers
- ⚡ **Lightweight**: No external dependencies required

## 🚀 Quick Start

### Method 1: Browser Console (Recommended)

1. Open any website in your browser
2. Press `F12` to open Developer Tools
3. Go to the **Console** tab
4. Copy and paste the entire code from `bedspy.js`
5. Press `Enter` to execute

The tool will automatically start monitoring for IP addresses and display results in a draggable panel.

### Method 2: Bookmarklet

1. Create a new bookmark in your browser
2. Set the URL to:
   ```
   javascript:(function(){/* Copy bedspy.js content here */})();
   ```
3. Click the bookmark on any website to activate

## 🎯 How It Works

bedspy utilizes WebRTC's `RTCPeerConnection` API to intercept ICE (Interactive Connectivity Establishment) candidates. When a WebRTC connection is established, it captures the server reflexive candidate (`srflx`) which contains the real public IP address.

### Technical Process

1. **Interception**: Overrides the native `RTCPeerConnection` constructor
2. **Capture**: Monitors `addIceCandidate` calls for IP addresses
3. **Analysis**: Queries multiple geolocation APIs for comprehensive data
4. **Display**: Presents results in a modern, interactive interface

## 📊 Data Collection

The tool collects and analyzes:

### Location Information
- Country, Region, City, District
- GPS Coordinates (Latitude/Longitude)
- Postal Code, Street Address
- Timezone, Currency, Calling Code

### Network Intelligence
- Internet Service Provider (ISP)
- Autonomous System Number (ASN)
- Connection Type and Organization
- Network Speed and Reliability

### Security Analysis
- VPN/Proxy Detection
- Risk Level Assessment
- Confidence Scoring
- Detailed Security Indicators

## 🛠️ API Services

bedspy uses multiple geolocation services for accurate results:

- **ipapi.co** - Primary location data
- **ipwhois.app** - Additional geolocation
- **ip-api.com** - Network information
- **extreme-ip-lookup.com** - Enhanced data
- **ipwho.is** - Alternative location service
- **freeipapi.com** - Backup service
- **ipapi.is** - Fallback provider

## 🎨 Interface Features

### Modern Design
- **Dark Theme**: Professional slate color scheme
- **Gradient Elements**: Modern visual appeal
- **Smooth Animations**: Enhanced user experience
- **Responsive Layout**: Adapts to different screen sizes

### Interactive Elements
- **Draggable Panel**: Move anywhere on screen
- **Minimize/Maximize**: Collapsible interface
- **Copy Functionality**: One-click IP copying
- **Map Integration**: Direct Google Maps access

### Status Indicators
- **Security Badges**: VPN/Proxy status
- **Risk Levels**: Color-coded risk assessment
- **Progress Bars**: Confidence level visualization
- **Real-time Updates**: Live data refresh

## 🔧 Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 80+ | ✅ Full Support |
| Firefox | 75+ | ✅ Full Support |
| Safari | 13+ | ✅ Full Support |
| Edge | 80+ | ✅ Full Support |

## 📋 Requirements

- Modern web browser with JavaScript enabled
- Active internet connection for geolocation services
- WebRTC support (enabled by default in most browsers)

## 🚨 Important Notes

### Privacy & Security
- This tool is for educational and security testing purposes
- Always obtain proper authorization before testing
- Respect privacy laws and regulations in your jurisdiction
- Use responsibly and ethically

### Limitations
- Requires WebRTC connections to capture IPs
- Some networks may block geolocation services
- VPN detection accuracy varies by provider
- Results depend on available API data

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**bed0c**

- GitHub: [@bed0c](https://github.com/bed0c)
- Project: [bedspy](https://github.com/bed0c/bedspy)

## 🙏 Acknowledgments

- WebRTC community for the underlying technology
- Geolocation API providers for data services
- Open source community for inspiration and tools

---

<div align="center">

**Made with ❤️ by [bed0c](https://github.com/bed0c)**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/bed0c)

</div> 