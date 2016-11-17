const plumber = require('gulp-plumber');
const util = require ('gulp-util');
const faustaoErrou  = require('faustao-errou');

function errorFaustao() {
	return plumber({ errorHandler: errou })
}

function errou(error) {
	util.log('[' + util.colors.red('ERROR') + ']', error.message)
	faustaoErrou();
}

function handleError(stream) {
	return stream.on('error', function(error) {
		errou(error)
		this.emit('end')
	})
}

module.exports = errorFaustao
module.exports.errou = errou
module.exports.handleError = handleError
