// ==UserScript==
// @name           HTTPS All
// @namespace      httpsall
// @description    Converts all URLs to HTTPS
// @include        http://www.*
// @include		   http://*
// ==/UserScript==

//Released under GNU GPL 3
//Copyright (C) Alexander Spedding

//Function from
//https://www.igotitworking.com/problem/view/69/
function checkUrl(url) 
{
	var request = false;
	if (window.XMLHttpRequest) 
	{
		request = new XMLHttpRequest;
	} 
	else if (window.ActiveXObject) 
	{
		request = new ActiveXObject("Microsoft.XMLHttp");
	}

	if (request) 
	{
		request.open("GET", url);
		if (request.status == 200) 
			return true;
	}

	return false;
}


var originalLocation = location.href;
var httpsLocation = location.href.replace("http:", "https:");

//check if https url works
if (checkUrl(httpsLocation))
	location.href = httpsLocation;
else
	location.href = originalLocation;