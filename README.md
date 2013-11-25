jquery-highlighter
==================

A simple highlighter tool based on Jquery


It achieves the following Effect:-

[![Screen Shot](https://raw.github.com/vi3k6i5/jquery-highlighter/master/demo/highlight.gif)](http://vi3k6i5.blogspot.in/2013/11/highlight-html-element-on-page.html)

# Features #
* Lightweight
* Is a Jquery Plugin
* Very simple to use

# Using JqueryHighlighterJS - A Brief Example #

    $("div").highlight();

This will highlight all the div elements present on the page

You can highlight elements based and any jquery supported selectors

# Parameter Options #
    
    Default : 
	{
		shadow: {
			sInside: true,
			sOutside: true,
			sHshadow: '0px',
			sVshadow: '0px',
			sBlur: '5px',
			sSpread: '0px',
			sColor: '#0000FF'
		},
		customShadow: '',
		transition: 'box-shadow',
		period: '1s'
	}

#### Time Period of transition can be set as :

    var options = {period: '2s'};

    $("div").highlight(options);

#### setting customShadow will completely ignore shadow options:

    var options = {customShadow: '0px 0px 1px 0px #000'};

    $("div").highlight(options);

#### setting shadow will only work if customShadow is not provided:

    var options = { shadow: {sInside:false, sColor:'red'}};

    $("div").highlight(options);
    
    //Shadow options:
    shadow:{sInside: false} //will disable inset shadow
    shadow:{sOutside = false} //will disable outside shadow
    shadow:{sHshadow = value} //position of the horizontal shadow
    shadow:{sVshadow = value} //position of the vertical shadow
    shadow:{sBlur = value} //blur distance
    shadow:{sSpread = value} //shadow size
    shadow:{sColor = value} //for Shadow color


# Disclaimer #
This code is provided with no warranty.

# Copyright and Licensing #
Copyright (c) 2013 vi3k6i5, released under the MIT license.
