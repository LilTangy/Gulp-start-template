// "use sctrict"

import calc from "./modules/calc";
import tabs from "./modules/tabs";

window.addEventListener("DOMContentLoaded", function() {
	calc();
	tabs('.tabs', '.tabs__title', '.tabs__body', 'active');
});