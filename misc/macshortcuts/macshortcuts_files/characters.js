/*                                ___
 *                               /\_ \
 *       _ __    ___ ___     ___ \//\ \
 *      /\`'__\/' __` __`\ /' _ `\ \ \ \
 *      \ \ \/ /\ \/\ \/\ \/\ \/\ \ \_\ \_
 *       \ \_\ \ \_\ \_\ \_\ \_\ \_\/\____\
 *        \/_/  \/_/\/_/\/_/\/_/\/_/\/____/
 *
 * -----> (c) 2007 Roel Meurders (RMNL) & Heliotrope B.V.
 */

/* 
 * -----> Heliotrope initialization functions.
 */


window.onDomReady( function () {
	$each($$('.result'), function (el) {
		specialchars = el.innerHTML.split(' ');
		normalchars = el.getPrevious().innerHTML.split(' ');
		altchars = el.getNext().innerHTML.split(' ');
		var newHTML = new String();
		for (var i=0; i < specialchars.length; i++){
			if ('&nbsp;' == specialchars[i]) {
				newHTML += '&nbsp; ';
			} else {
				newHTML += '<acronym title="Type: ';
				if (el.hasClass('shift'))
	 				newHTML += '«option» «shift» ' + altchars[i];
				else
					newHTML += '«option» ' + normalchars[i];
				if ('' == specialchars[i])
					newHTML += '«b»Every Mac fan boy should know this one by heart! ;)«/b»';
				if ('€' == specialchars[i])
					newHTML += '«b»There\'s more to life than money, or isn\'t there?«/b»';
				if ('…' == specialchars[i])
					newHTML += '«b»The character that made me make this page«/b»';
				newHTML +='">' + specialchars[i] + '</acronym> ';
			}
		}
		el.innerHTML = newHTML;
	});
	
	var charTips = new Tips($$('acronym'), { 
		offsets: { 'x': 0, 'y': 10 },
		onShow: function (tip) {
			var el = $E('span', tip);
			var txt = el.innerHTML
				.replace(/«b»/g, '<b>')
				.replace(/«\/b»/g, '</b>')
				.replace(/«option»/g, '<img src="option.gif" />')
				.replace('«shift»', '<img src="shift.gif" />');
			el.innerHTML = txt;
			tip.setStyle('visibility', 'visible');
		}
	});
	
	var linkTips = new Tips($$('a'), {
		offsets: { 'x': 0, 'y': 1 },
		className: 'title'
	});
});
