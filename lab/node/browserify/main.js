
// Troubleshoot for browserify module
// https://www.youtube.com/watch?v=Uk2bgp8OLT8

// import $ from 'jquery';
var $ = require('jquery');


$(document).ready(() => {
    const $div = $('.hello-world');
    $div.mouseenter((e) => {
        $(e.currentTarget).addClass('hello-world-hover');
    });
    $div.mouseleave((e) => {
        $(e.currentTarget).removeClass('hello-world-hover');
    });
});

/***
 * 
1) 
import $ from 'jquery';

2) 
var $ = require('jquery');

package.json
{
    "dependencies": {
        "jquery": "^3.4.1",
            "styledot": "^0.1.566"
    },
    "devDependencies": {
        "babel-preset-es2015": "^6.24.1"
    },
    "browserify": {
        "transform": [["babelify", { "presets": ["es2015"] }]]
    }
}


 */