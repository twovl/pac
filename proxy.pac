function FindProxyForURL(url, host) {
	if(shExpMatch(url,"*.google.*")){
		return "PROXY 127.0.0.1:9666";
	}
	if(shExpMatch(url,"*.googleusercontent*")){
	   return "PROXY 127.0.0.1:9666"
	}
	return "DIRECT";
}
