// "use sctrict"

import calc from "./modules/calc";
import tabs from "./modules/tabs";
import popup from "./modules/popup";

window.addEventListener("DOMContentLoaded", function() {
	popup();
	calc();
	tabs('.tabs', '.tabs__title', '.tabs__body', 'active');
});