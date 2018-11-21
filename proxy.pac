function FindProxyForURL(url, host) {
	if(shExpMatch(host,"*.google.*")){
		return "PROXY 127.0.0.1:9666";
	}
	return "DIRECT";
}