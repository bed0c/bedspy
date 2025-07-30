(function() {
    // Modern color palette
    const colors = {
        primary: '#6366f1',
        primaryHover: '#4f46e5',
        secondary: '#8b5cf6',
        accent: '#06b6d4',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        dark: {
            bg: '#0f172a',
            surface: '#1e293b',
            border: '#334155',
            text: '#f8fafc',
            textSecondary: '#94a3b8'
        },
        light: {
            bg: '#ffffff',
            surface: '#f8fafc',
            border: '#e2e8f0',
            text: '#1e293b',
            textSecondary: '#64748b'
        }
    };

    // Create modern overlay with gradient
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'linear-gradient(135deg, rgba(99, 102, 241, 0.9), rgba(139, 92, 246, 0.9))';
    overlay.style.zIndex = '10000';
    overlay.style.opacity = '0';
    overlay.style.animation = 'overlayFade 5s ease-in-out forwards';
    overlay.style.backdropFilter = 'blur(10px)';
    document.body.appendChild(overlay);

    // Enhanced particles with modern design
    const particlesContainer = document.createElement('div');
    particlesContainer.style.position = 'fixed';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.zIndex = '10001';
    particlesContainer.style.opacity = '0';
    particlesContainer.style.animation = 'overlayFade 5s ease-in-out forwards';
    document.body.appendChild(particlesContainer);

    // Create modern floating particles
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `linear-gradient(45deg, ${colors.primary}, ${colors.accent})`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.animation = `particle ${3 + Math.random() * 3}s ease-in-out infinite`;
        particle.style.boxShadow = `0 0 10px ${colors.primary}`;
        particlesContainer.appendChild(particle);
    }

    // Modern welcome screen
    const welcomeElement = document.createElement('div');
    welcomeElement.style.position = 'fixed';
    welcomeElement.style.top = '50%';
    welcomeElement.style.left = '50%';
    welcomeElement.style.transform = 'translate(-50%, -50%)';
    welcomeElement.style.zIndex = '10002';
    welcomeElement.style.textAlign = 'center';
    welcomeElement.style.background = 'rgba(30, 41, 59, 0.95)';
    welcomeElement.style.backdropFilter = 'blur(20px)';
    welcomeElement.style.borderRadius = '24px';
    welcomeElement.style.padding = '40px';
    welcomeElement.style.border = '1px solid rgba(99, 102, 241, 0.3)';
    welcomeElement.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.5)';
    welcomeElement.innerHTML = `
        <div style="margin-bottom: 20px;">
            <div style="width: 80px; height: 80px; margin: 0 auto 20px; background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary}); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
            </div>
        </div>
        <div style="font-size: 32px; font-weight: 700; color: #ffffff; margin-bottom: 8px; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;">Welcome to bedspy</div>
        <div style="font-size: 16px; color: ${colors.textSecondary}; margin-bottom: 20px; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;">
            Advanced IP Intelligence & Geolocation Tool
        </div>
        <div style="font-size: 14px; color: ${colors.accent}; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;">
            Made by <a href="https://github.com/bed0c" target="_blank" style="color: ${colors.accent}; text-decoration: none; font-weight: 600;">bed0c</a>
        </div>
    `;
    welcomeElement.style.opacity = '0';
    welcomeElement.style.animation = 'welcomeFade 5s ease-in-out forwards';
    document.body.appendChild(welcomeElement);

    // Enhanced CSS animations
    const welcomeStyle = document.createElement('style');
    welcomeStyle.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        @keyframes overlayFade {
            0% { opacity: 0; }
            12% { opacity: 1; }
            88% { opacity: 1; }
            100% { opacity: 0; }
        }
        
        @keyframes welcomeFade {
            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.8);
            }
            12% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            88% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(1.1);
            }
        }
        
        @keyframes particle {
            0% {
                transform: translate(0, 0) scale(1);
                opacity: 0;
            }
            50% {
                opacity: 0.8;
            }
            100% {
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0);
                opacity: 0;
            }
        }
        
        @keyframes slideIn {
            0% {
                transform: translateY(-30px);
                opacity: 0;
            }
            100% {
                transform: translateY(0);
                opacity: 1;
            }
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateX(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
        }
        
        .modern-button {
            background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
            border: none;
            color: white;
            padding: 12px 24px;
            border-radius: 12px;
            font-weight: 600;
            font-size: 14px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }
        
        .modern-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
        }
        
        .modern-button.secondary {
            background: linear-gradient(135deg, ${colors.dark.surface}, ${colors.dark.border});
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        
        .modern-button.secondary:hover {
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }
        
        .modern-card {
            background: ${colors.dark.surface};
            border: 1px solid ${colors.dark.border};
            border-radius: 16px;
            padding: 20px;
            margin-bottom: 16px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        }
        
        .modern-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        
        .status-badge {
            display: inline-flex;
            align-items: center;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .status-badge.success {
            background: rgba(16, 185, 129, 0.1);
            color: ${colors.success};
            border: 1px solid rgba(16, 185, 129, 0.2);
        }
        
        .status-badge.danger {
            background: rgba(239, 68, 68, 0.1);
            color: ${colors.danger};
            border: 1px solid rgba(239, 68, 68, 0.2);
        }
        
        .status-badge.warning {
            background: rgba(245, 158, 11, 0.1);
            color: ${colors.warning};
            border: 1px solid rgba(245, 158, 11, 0.2);
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin: 16px 0;
        }
        
        .info-item {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        
        .info-label {
            font-size: 12px;
            color: ${colors.textSecondary};
            font-weight: 500;
        }
        
        .info-value {
            font-size: 14px;
            color: ${colors.text};
            font-weight: 600;
        }
    `;
    document.head.appendChild(welcomeStyle);

    setTimeout(() => {
        document.body.removeChild(welcomeElement);
        document.body.removeChild(overlay);
        document.body.removeChild(particlesContainer);
    }, 5000);

    // Modern main container
    const ipContainer = document.createElement('div');
    ipContainer.id = 'ip-container';
    ipContainer.style.position = 'fixed';
    ipContainer.style.top = '20px';
    ipContainer.style.right = '20px';
    ipContainer.style.width = '450px';
    ipContainer.style.maxHeight = '600px';
    ipContainer.style.overflowY = 'auto';
    ipContainer.style.background = colors.dark.surface;
    ipContainer.style.border = `1px solid ${colors.dark.border}`;
    ipContainer.style.borderRadius = '20px';
    ipContainer.style.padding = '0';
    ipContainer.style.zIndex = '10000';
    ipContainer.style.fontFamily = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
    ipContainer.style.fontSize = '14px';
    ipContainer.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
    ipContainer.style.color = colors.dark.text;
    ipContainer.style.resize = 'both';
    ipContainer.style.overflow = 'auto';
    ipContainer.style.animation = 'slideIn 0.6s ease-out';
    ipContainer.style.opacity = '0';
    ipContainer.style.backdropFilter = 'blur(20px)';
    
    ipContainer.innerHTML = `
        <div id="drag-handle" style="display: flex; justify-content: space-between; align-items: center; padding: 20px; border-bottom: 1px solid ${colors.dark.border}; cursor: move; background: linear-gradient(135deg, ${colors.dark.surface}, ${colors.dark.bg}); border-radius: 20px 20px 0 0;">
            <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary}); border-radius: 12px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                </div>
                <div>
                    <h3 style="margin: 0; color: ${colors.dark.text}; font-weight: 700; font-size: 18px;">bedspy</h3>
                    <p style="margin: 0; color: ${colors.textSecondary}; font-size: 12px; font-weight: 500;">IP Intelligence Tool</p>
                </div>
            </div>
            <div style="display: flex; gap: 8px;">
                <button id="clear-ip-list" class="modern-button secondary" style="padding: 8px 12px; font-size: 12px;">Clear</button>
                <button id="minimize-ip-container" class="modern-button secondary" style="padding: 8px 12px; font-size: 12px;">−</button>
                <button id="close-ip-container" class="modern-button secondary" style="padding: 8px 12px; font-size: 12px;">×</button>
            </div>
        </div>
        <div id="ip-content" style="padding: 20px; transition: all 0.3s ease;">
            <div id="ip-addresses"></div>
            <div style="margin-top: 20px; padding: 16px; background: linear-gradient(135deg, ${colors.dark.bg}, ${colors.dark.surface}); border-radius: 12px; border: 1px solid ${colors.dark.border};">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${colors.accent}" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                    <span style="color: ${colors.textSecondary}; font-size: 12px; font-weight: 500;">Developed by</span>
                </div>
                <a href="https://github.com/bed0c" target="_blank" style="color: ${colors.accent}; text-decoration: none; font-weight: 600; font-size: 14px;">bed0c</a>
            </div>
        </div>
    `;
    document.body.appendChild(ipContainer);

    // Enhanced event listeners
    document.getElementById('clear-ip-list').addEventListener('click', () => {
        const ipList = document.getElementById('ip-addresses');
        ipList.innerHTML = '';
    });

    document.getElementById('close-ip-container').addEventListener('click', () => {
        document.body.removeChild(ipContainer);
    });

    // Enhanced draggable functionality
    function makeDraggable(element, handle) {
        handle = handle || element;
        let posX = 0, posY = 0, mouseX = 0, mouseY = 0;

        handle.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e.preventDefault();
            mouseX = e.clientX;
            mouseY = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e.preventDefault();
            posX = mouseX - e.clientX;
            posY = mouseY - e.clientY;
            mouseX = e.clientX;
            mouseY = e.clientY;
            element.style.top = (element.offsetTop - posY) + "px";
            element.style.left = (element.offsetLeft - posX) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    makeDraggable(ipContainer, document.getElementById('drag-handle'));

    window.oRTCPeerConnection = window.oRTCPeerConnection || window.RTCPeerConnection;

    window.RTCPeerConnection = function(...args) {
        const pc = new window.oRTCPeerConnection(...args);

        pc.oaddIceCandidate = pc.addIceCandidate;

        pc.addIceCandidate = function(iceCandidate, ...rest) {
            const fields = iceCandidate.candidate.split(' ');

            if (fields[7] === 'srflx') {
                const ipAddress = fields[4];
                const currentTime = new Date().toLocaleTimeString();

                async function verifyIP(ip) {
                    const services = [
                        `https://ipapi.co/${ip}/json/`,
                        `https://ipwhois.app/json/${ip}`,
                        `https://ip-api.com/json/${ip}?fields=66846719`,
                        `https://extreme-ip-lookup.com/json/${ip}`,
                        `https://ipwho.is/${ip}`,
                        `https://freeipapi.com/api/json/${ip}`,
                        `https://ipapi.is/${ip}/json`
                    ];

                    try {
                        const responses = await Promise.all(services.map(url => 
                            fetch(url)
                            .then(res => res.json())
                            .catch(() => ({}))
                        ));

                        const isValidCoordinate = (coord) => {
                            const num = parseFloat(coord);
                            return !isNaN(num) && Math.abs(num) <= 180 && num !== 0;
                        };

                        let bestCoordinates = { latitude: '0', longitude: '0', accuracy: 'Unknown' };
                        for (let response of responses) {
                            let lat = response.lat || response.latitude;
                            let lon = response.lon || response.longitude;
                            
                            if (response.loc) {
                                [lat, lon] = response.loc.split(',');
                            }

                            if (isValidCoordinate(lat) && isValidCoordinate(lon)) {
                                bestCoordinates = {
                                    latitude: lat,
                                    longitude: lon,
                                    accuracy: response.accuracy_radius || 'High'
                                };
                                if (response.accuracy_radius && response.accuracy_radius < 100) {
                                    break;
                                }
                            }
                        }

                        const getBestValue = (key, sources, alternateKeys = []) => {
                            let values = [];
                            for (let source of sources) {
                                if (source && source[key] && source[key] !== 'Unknown' && source[key] !== '') {
                                    values.push(source[key]);
                                }
                                for (let altKey of alternateKeys) {
                                    if (source && source[altKey] && source[altKey] !== 'Unknown' && source[altKey] !== '') {
                                        values.push(source[altKey]);
                                    }
                                }
                            }
                            if (values.length > 0) {
                                const counts = values.reduce((acc, val) => {
                                    acc[val] = (acc[val] || 0) + 1;
                                    return acc;
                                }, {});
                                return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
                            }
                            return 'Unknown';
                        };

                        let locationDetails = {
                            continent: getBestValue('continent', responses, ['continent_name', 'location.continent']),
                            country: getBestValue('country', responses, ['country_name', 'location.country', 'countryCode']),
                            region: getBestValue('regionName', responses, ['region', 'location.region', 'subdivision', 'state']),
                            city: getBestValue('city', responses, ['cityName', 'location.city', 'municipality']),
                            district: getBestValue('district', responses, ['subdivision', 'location.district', 'area', 'neighborhood']),
                            street: getBestValue('street', responses, ['road', 'location.street', 'address', 'street_name']),
                            postal: getBestValue('zip', responses, ['postal', 'location.postal', 'postal_code', 'postcode']),
                            coordinates: bestCoordinates
                        };

                        const checkVPN = (responses) => {
                            let vpnIndicators = {
                                isVPN: false,
                                proxyType: 'None',
                                confidence: 0,
                                details: []
                            };

                            responses.forEach(r => {
                                if (r.proxy || r.security?.proxy || r.hosting || r.type === 'hosting') {
                                    vpnIndicators.confidence += 25;
                                    vpnIndicators.details.push('Direct proxy/VPN detection');
                                }

                                if (r.connection_type === 'Corporate' || r.connection_type === 'Hosting') {
                                    vpnIndicators.confidence += 15;
                                    vpnIndicators.details.push('Suspicious connection type');
                                }

                                const suspiciousHosts = ['Amazon', 'Digital Ocean', 'OVH', 'Cloudflare', 'Google Cloud', 'Microsoft Azure'];
                                if (r.org && suspiciousHosts.some(host => r.org.includes(host))) {
                                    vpnIndicators.confidence += 20;
                                    vpnIndicators.details.push('Hosting provider detected');
                                }

                                if (r.port && (r.port === '1080' || r.port === '8080' || r.port === '3128')) {
                                    vpnIndicators.confidence += 30;
                                    vpnIndicators.details.push('Proxy port detected');
                                }

                                if (r.datacenter || r.hosting || r.server) {
                                    vpnIndicators.confidence += 20;
                                    vpnIndicators.details.push('Datacenter IP detected');
                                }

                                if (r.network_type === 'VPN' || r.connection_type === 'VPN') {
                                    vpnIndicators.confidence += 35;
                                    vpnIndicators.details.push('VPN network type');
                                }

                                const vpnASNs = ['AS9009', 'AS12876', 'AS16276', 'AS29119', 'AS49981'];
                                if (r.asn && vpnASNs.includes(r.asn)) {
                                    vpnIndicators.confidence += 25;
                                    vpnIndicators.details.push('Known VPN ASN');
                                }

                                if (r.datacenter_range || r.hosting_range) {
                                    vpnIndicators.confidence += 15;
                                    vpnIndicators.details.push('Datacenter IP range');
                                }
                            });

                            if (vpnIndicators.confidence >= 60) {
                                vpnIndicators.isVPN = true;
                                if (vpnIndicators.confidence >= 80) {
                                    vpnIndicators.proxyType = 'VPN (High Confidence)';
                                } else {
                                    vpnIndicators.proxyType = 'Probable VPN/Proxy';
                                }
                            } else if (vpnIndicators.confidence >= 30) {
                                vpnIndicators.isVPN = true;
                                vpnIndicators.proxyType = 'Possible VPN/Proxy';
                            }

                            return vpnIndicators;
                        };

                        const vpnCheck = checkVPN(responses);

                        let risk = vpnCheck.isVPN ? 'high' : 'low';

                        return {
                            isp: getBestValue('org', [responses[0], responses[1]]) || getBestValue('isp', [responses[2]]),
                            city: locationDetails.city,
                            country: locationDetails.country,
                            region: locationDetails.region,
                            postal: locationDetails.postal,
                            timezone: getBestValue('timezone', responses),
                            latitude: locationDetails.coordinates.latitude,
                            longitude: locationDetails.coordinates.longitude,
                            vpn: vpnCheck.isVPN,
                            risk: risk,
                            connection: {
                                type: getBestValue('type', responses) || 'Unknown',
                                asn: getBestValue('asn', responses) || 'Unknown',
                                org: getBestValue('org', responses) || 'Unknown'
                            },
                            currency: getBestValue('currency', responses) || 'Unknown',
                            calling_code: getBestValue('country_calling_code', [responses[0]]) || getBestValue('calling_code', responses) || 'Unknown',
                            location: {
                                city: locationDetails.city,
                                district: locationDetails.district,
                                street: locationDetails.street,
                                region: locationDetails.region,
                                country: locationDetails.country,
                                continent: locationDetails.continent,
                                postal: locationDetails.postal,
                                coordinates: {
                                    latitude: locationDetails.coordinates.latitude,
                                    longitude: locationDetails.coordinates.longitude,
                                    accuracy: locationDetails.coordinates.accuracy
                                }
                            },
                            security: {
                                isVPN: vpnCheck.isVPN,
                                proxyType: vpnCheck.proxyType,
                                confidence: vpnCheck.confidence,
                                details: vpnCheck.details
                            }
                        };
                    } catch (error) {
                        console.error('Error verifying IP:', error);
                        return {
                            isp: 'Unknown ISP',
                            city: 'Unknown City',
                            country: 'Unknown Country',
                            region: 'Unknown Region',
                            postal: 'Unknown Postal',
                            timezone: 'Unknown Timezone',
                            latitude: '0',
                            longitude: '0',
                            vpn: false,
                            risk: 'unknown',
                            connection: {
                                type: 'Unknown',
                                asn: 'Unknown',
                                org: 'Unknown'
                            },
                            currency: 'Unknown',
                            calling_code: 'Unknown',
                            location: {
                                city: 'Unknown City',
                                district: 'Unknown District',
                                street: 'Unknown Street',
                                region: 'Unknown Region',
                                country: 'Unknown Country',
                                continent: 'Unknown Continent',
                                postal: 'Unknown Postal',
                                coordinates: {
                                    latitude: '0',
                                    longitude: '0',
                                    accuracy: 'Unknown'
                                }
                            },
                            security: {
                                isVPN: false,
                                proxyType: 'None',
                                confidence: 0,
                                details: []
                            }
                        };
                    }
                }

                verifyIP(ipAddress).then(data => {
                    const ipList = document.getElementById('ip-addresses');
                    const ipItem = document.createElement('div');
                    ipItem.className = 'modern-card';
                    ipItem.style.animation = 'fadeIn 0.5s ease-out';
                    ipItem.style.opacity = '0';
                    ipItem.style.animationFillMode = 'forwards';

                    const mapUrl = `https://maps.google.com/maps?q=${data.latitude},${data.longitude}&z=13&output=embed`;
                    
                    ipItem.innerHTML = `
                        <div style="display: flex; gap: 20px;">
                            <div style="flex: 1;">
                                <!-- Header with status -->
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                                    <div>
                                        <h4 style="color: ${colors.primary}; margin: 0 0 8px 0; font-weight: 700; font-size: 16px;">IP Address Detected</h4>
                                        <div style="color: ${colors.textSecondary}; font-size: 12px; font-weight: 500;">${currentTime}</div>
                                    </div>
                                    <div style="display: flex; gap: 8px;">
                                        <span class="status-badge ${data.vpn ? 'danger' : 'success'}">
                                            ${data.security.proxyType}
                                        </span>
                                        <span class="status-badge ${data.risk === 'high' ? 'danger' : 'success'}">
                                            ${data.risk.toUpperCase()} RISK
                                        </span>
                                    </div>
                                </div>

                                <!-- IP Address -->
                                <div style="background: linear-gradient(135deg, ${colors.dark.bg}, ${colors.dark.surface}); border-radius: 12px; padding: 16px; margin-bottom: 20px; border: 1px solid ${colors.dark.border};">
                                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${colors.primary}" stroke-width="2">
                                            <circle cx="12" cy="12" r="3"/>
                                            <path d="M12 1v6m0 6v6"/>
                                        </svg>
                                        <span style="color: ${colors.textSecondary}; font-size: 12px; font-weight: 500;">IP Address</span>
                                    </div>
                                    <div style="color: ${colors.dark.text}; font-size: 18px; font-weight: 700; font-family: 'Monaco', 'Menlo', monospace;">${ipAddress}</div>
                                </div>

                                <!-- Location Information -->
                                <div class="modern-card" style="margin-bottom: 16px;">
                                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${colors.accent}" stroke-width="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                            <circle cx="12" cy="10" r="3"/>
                                        </svg>
                                        <h5 style="margin: 0; color: ${colors.accent}; font-weight: 600;">Location Details</h5>
                                    </div>
                                    <div class="info-grid">
                                        <div class="info-item">
                                            <span class="info-label">Country</span>
                                            <span class="info-value">${data.location.country}</span>
                                        </div>
                                        <div class="info-item">
                                            <span class="info-label">City</span>
                                            <span class="info-value">${data.location.city}</span>
                                        </div>
                                        <div class="info-item">
                                            <span class="info-label">Region</span>
                                            <span class="info-value">${data.location.region}</span>
                                        </div>
                                        <div class="info-item">
                                            <span class="info-label">District</span>
                                            <span class="info-value">${data.location.district}</span>
                                        </div>
                                        <div class="info-item">
                                            <span class="info-label">Coordinates</span>
                                            <span class="info-value">${data.location.coordinates.latitude}, ${data.location.coordinates.longitude}</span>
                                        </div>
                                        <div class="info-item">
                                            <span class="info-label">Accuracy</span>
                                            <span class="info-value">${data.location.coordinates.accuracy}</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Network Information -->
                                <div class="modern-card" style="margin-bottom: 16px;">
                                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${colors.secondary}" stroke-width="2">
                                            <path d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/>
                                            <path d="M12 18h.01"/>
                                        </svg>
                                        <h5 style="margin: 0; color: ${colors.secondary}; font-weight: 600;">Network Information</h5>
                                    </div>
                                    <div class="info-grid">
                                        <div class="info-item">
                                            <span class="info-label">ISP</span>
                                            <span class="info-value">${data.isp}</span>
                                        </div>
                                        <div class="info-item">
                                            <span class="info-label">Connection Type</span>
                                            <span class="info-value">${data.connection.type}</span>
                                        </div>
                                        <div class="info-item">
                                            <span class="info-label">ASN</span>
                                            <span class="info-value">${data.connection.asn}</span>
                                        </div>
                                        <div class="info-item">
                                            <span class="info-label">Organization</span>
                                            <span class="info-value">${data.connection.org}</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Security Analysis -->
                                <div class="modern-card" style="margin-bottom: 20px;">
                                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${data.vpn ? colors.danger : colors.success}" stroke-width="2">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                        </svg>
                                        <h5 style="margin: 0; color: ${data.vpn ? colors.danger : colors.success}; font-weight: 600;">Security Analysis</h5>
                                    </div>
                                    <div style="margin-bottom: 12px;">
                                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                            <span style="color: ${colors.textSecondary}; font-size: 12px;">Confidence Level</span>
                                            <span style="color: ${colors.dark.text}; font-weight: 600;">${data.security.confidence}%</span>
                                        </div>
                                        <div style="width: 100%; height: 6px; background: ${colors.dark.border}; border-radius: 3px; overflow: hidden;">
                                            <div style="width: ${data.security.confidence}%; height: 100%; background: linear-gradient(90deg, ${data.vpn ? colors.danger : colors.success}, ${data.vpn ? colors.warning : colors.accent}); border-radius: 3px; transition: width 0.3s ease;"></div>
                                        </div>
                                    </div>
                                    ${data.security.details.length > 0 ? `
                                        <div>
                                            <span style="color: ${colors.textSecondary}; font-size: 12px; font-weight: 500;">Detection Details:</span>
                                            <ul style="margin: 8px 0 0 0; padding-left: 16px; color: ${colors.dark.text}; font-size: 12px;">
                                                ${data.security.details.map(detail => `<li style="margin-bottom: 4px;">${detail}</li>`).join('')}
                                            </ul>
                                        </div>
                                    ` : ''}
                                </div>

                                <!-- Action Buttons -->
                                <div style="display: flex; gap: 12px;">
                                    <button class="modern-button" style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px;">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                                        </svg>
                                        Copy IP
                                    </button>
                                    <button class="modern-button secondary" style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px;">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                            <circle cx="12" cy="10" r="3"/>
                                        </svg>
                                        View Map
                                    </button>
                                </div>
                            </div>
                            
                            <!-- Map Section -->
                            <div style="flex: 1; min-height: 400px;">
                                <div style="background: ${colors.dark.bg}; border-radius: 12px; overflow: hidden; border: 1px solid ${colors.dark.border}; height: 100%;">
                                    <iframe 
                                        width="100%" 
                                        height="100%" 
                                        frameborder="0" 
                                        style="border: none; min-height: 400px;" 
                                        src="${mapUrl}" 
                                        allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    `;
                    ipList.appendChild(ipItem);

                    // Enhanced copy functionality
                    const copyButton = ipItem.querySelector('.modern-button');
                    copyButton.addEventListener('click', () => {
                        navigator.clipboard.writeText(ipAddress).then(() => {
                            copyButton.innerHTML = `
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="20,6 9,17 4,12"/>
                                </svg>
                                Copied!
                            `;
                            copyButton.style.background = `linear-gradient(135deg, ${colors.success}, ${colors.accent})`;
                            setTimeout(() => {
                                copyButton.innerHTML = `
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                                    </svg>
                                    Copy IP
                                `;
                                copyButton.style.background = `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`;
                            }, 2000);
                        });
                    });

                    // Map view functionality
                    const mapButton = ipItem.querySelector('.modern-button.secondary');
                    mapButton.addEventListener('click', () => {
                        window.open(`https://maps.google.com/maps?q=${data.latitude},${data.longitude}&z=13`, '_blank');
                    });
                });
            }

            return pc.oaddIceCandidate(iceCandidate, ...rest);
        }

        return pc;
    }

    setTimeout(() => {
        ipContainer.style.opacity = '1';
    }, 100);

    // Enhanced minimize functionality
    let isMinimized = false;
    const minimizeButton = document.getElementById('minimize-ip-container');
    const ipContent = document.getElementById('ip-content');
    const originalHeight = ipContainer.style.height;

    minimizeButton.addEventListener('click', () => {
        isMinimized = !isMinimized;
        if (isMinimized) {
            ipContent.style.display = 'none';
            ipContainer.style.height = 'auto';
            minimizeButton.innerHTML = '□';
            minimizeButton.style.transform = 'rotate(180deg)';
        } else {
            ipContent.style.display = 'block';
            ipContainer.style.height = originalHeight;
            minimizeButton.innerHTML = '−';
            minimizeButton.style.transform = 'rotate(0deg)';
        }
    });
})();