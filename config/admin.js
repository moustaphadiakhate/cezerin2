// config used by dashboard client side only
module.exports = {
	// dashboard UI language
	language: 'fr',
	apiBaseUrl: process.env.apiBaseUrl || 'http://localhost:3001/api/v1',
	apiWebSocketUrl: process.env.apiWebSocketUrl || 'ws://localhost:3001',
	developerMode: true
};
