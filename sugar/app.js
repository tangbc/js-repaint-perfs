var App = Sugar.Component.extend({
	init: function (config) {
		this.Super('init', config, {
			target: '#app',
			model: {
				databases: []
			}
		});
	}
});

var app = Sugar.core.create('app', App);


function loadSamples () {
	app.vm.$data.databases = ENV.generateData(true).toArray();
	Monitoring.renderRate.ping();
	setTimeout(loadSamples, ENV.timeout);
}

loadSamples();