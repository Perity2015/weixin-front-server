const ContentResponse = require('./server/model/ContentResponse');

function init() {
   ContentResponse.sync()
}

init();