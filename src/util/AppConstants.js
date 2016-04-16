const BASE_URL = 'http://localhost:8080/';
var idbSupported = false;
 
if("indexedDB" in window) {
	idbSupported = true;
}

const AppConstants = {
	BASE_URL: BASE_URL,
	SITE_TITLE: 'Bible Exchange',
	IDB_SUPPORTED: idbSupported
};

export default AppConstants;