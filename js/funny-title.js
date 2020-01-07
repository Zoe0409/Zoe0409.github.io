/**
 * Author:CC11001100
 * 
 * Funny title
 * 
 * 
 * 
 */

$(function(){
	
	var vendorPrefix=getBrowserPrefix();
	var eventName=visibilityEvent(vendorPrefix);
	document.addEventListener(eventName,visibilityEventCallback);
	
	var oldTitle=document.title;
	function visibilityEventCallback(){
		if(document.hidden){
			oldTitle=document.title;
			document.title="(●—●)"+oldTitle;
		}else{
			document.title=oldTitle;
		}
	}
	

	
	// Get Browser-Specifc Prefix
	function getBrowserPrefix() {
	
	  	// Check for the unprefixed property.  
	  	if ('hidden' in document) {
	    	return null;
		}
	
		// All the possible prefixes.  
		var browserPrefixes = ['moz', 'ms', 'o', 'webkit'];
		 
		for (var i = 0; i < browserPrefixes.length; i++) {
		    var prefix = browserPrefixes[i] + 'Hidden';
		    if (prefix in document) {
		      return browserPrefixes[i];
		    }  
		}
	
	 	// The API is not supported in browser.  
	 	return null;
	}
	
	// Get Browser Specific Hidden Property
	function hiddenProperty(prefix) {
		if (prefix) {
			return prefix + 'Hidden';
		} else {
			return 'hidden';
		}
	}
	
	// Get Browser Specific Visibility State
	function visibilityState(prefix) {
	  if (prefix) {
	    return prefix + 'VisibilityState';
	  } else {
	    return 'visibilityState';
	  }
	}
	
	// Get Browser Specific Event
	function visibilityEvent(prefix) {
	  if (prefix) {
	    return prefix + 'visibilitychange';
	  } else {
	    return 'visibilitychange';
	  }
	}

});
