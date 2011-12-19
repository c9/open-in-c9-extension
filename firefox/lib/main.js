const data = require("self").data;

require("page-mod").PageMod({
	include: ['https://github.com/*'],
	contentScriptFile: data.url('githubc9.js')
});
