function UI() {

	var thesesUrl = "http://192.168.1.76:4000/api/theses";
	var argumentsDisplayLimit = 2;


	this.showAllTheses = function () {
		$.getJSON(thesesUrl, function() {})
		.done(function(data) {

			$.each(data, function(index, value) {
				var container = $('#container')
				var thesisContainer = $('<div/>', {'class': 'thesis-container' + (index == 0 ? ' sub' : '')});
				var list = $('<ul/>');

				var thesisItem = $('<li/>', {'class': 'thesis'});
				thesisItem.text(this['Text']);
				list.append(thesisItem);

				$.each(this['Arguments'], function(index, value){
					if(index < argumentsDisplayLimit) {
						var argumentItem = $('<li/>', {'class': 'argument ' + (this['Contra'] ? 'con' : 'pro')});
						argumentItem.text(cutText(this['Text'], 250));

						var votes = $('<span/>', {'class': 'votes'});
						votes.html(' <a href="#">+' + this['Votes'] + "</a>");
						argumentItem.append(votes);

						list.append(argumentItem);
					}
				});
				
				thesisContainer.append(list);
				container.append(thesisContainer);
			});

		})
		.fail(function(error) {
			console.log("Request failed because of the following error: ");
			console.log(error);
			
			var errText = $('<div/>', {'class': 'error'});
			errText.text("Sorry, arguments! ist momentan nicht erreichbar. Falls du dir sicher bist, dass deine Internetverbindung funktioniert, versuche es bitte erneut.");
			$('#container').append(errText);
		});
	}

	var cutText = function(text, length) {
		if(text.length > length) {
			return text.substring(0, length) + String.fromCharCode(8230);
		}
		return text;
	}

}
