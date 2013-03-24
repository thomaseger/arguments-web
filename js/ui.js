function UI() {

	var getThesesUrl = "http://192.168.1.40:4000/api/theses";

	this.showAllTheses = function () {
		$.getJSON(getThesesUrl, function() {})
		.done(function(data) {

			$.each(data, function() {
				var container = $('#container')
				var thesisContainer = $('<div/>', {'class': 'thesis-container'});
				var list = $('<ul/>');

				var thesisItem = $('<li/>', {'class': 'thesis'});
				thesisItem.text(this['Text']);
				list.append(thesisItem);

				$.each(this['Arguments'], function(){
					var argumentItem = $('<li/>', {'class': 'argument'}); //TODO: Differentiate between pros and cons.
					argumentItem.text(this['Text']);
					list.append(argumentItem);
				});

				thesisContainer.append(list);
				container.append(thesisContainer);
			});

		})
		.fail(function(error) {
			console.log("Request failed because of the following error: ");
			console.log(error);
		});
	}
}