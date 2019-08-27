const middleware = {}

middleware['device'] = require('..\\middleware\\device.js');
middleware['device'] = middleware['device'].default || middleware['device']

export default middleware
