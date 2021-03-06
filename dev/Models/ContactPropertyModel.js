/* RainLoop Webmail (c) RainLoop Team | Licensed under CC BY-NC-SA 3.0 */

/**
 * @param {number=} iType = Enums.ContactPropertyType.Unknown
 * @param {string=} sValue = ''
 * @param {boolean=} bFocused = false
 * @param {string=} sPlaceholder = ''
 *
 * @constructor
 */
function ContactPropertyModel(iType, sValue, bFocused, sPlaceholder)
{
	this.type = ko.observable(Utils.isUnd(iType) ? Enums.ContactPropertyType.Unknown : iType);
	this.focused = ko.observable(Utils.isUnd(bFocused) ? false : !!bFocused);
	this.value = ko.observable(Utils.pString(sValue));

	this.placeholder = ko.observable(sPlaceholder || '');

	this.placeholderValue = ko.computed(function () {
		var sPlaceholder = this.placeholder();
		return sPlaceholder ? Utils.i18n(sPlaceholder) : '';
	}, this);
}
