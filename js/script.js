$(function() {
  $.getJSON('js/sliders.json').done(function(data) {
    console.log(data);
     slide = data;
     console.log(slide[0]);
     var i = 0;
     $('#roller').html('<div class="right"><img src="'+slide[i].value+'" /></div><div class="left"><h1>'+slide[i].title+'</h1><p>'+slide[i].description+'</p><p id="readmore">Read More  </p><ul id="navigation"><li id="prev"></li>  <li id="next"></li></ul>');
     document.getElementById('next').onclick = function () { nextSlide(slide,i); }
     document.getElementById('prev').onclick = function () { prevSlide(slide,i); }
     document.getElementById('prev').style.opacity = "0.5";

  }).error(function(err1, err2) {
    console.log(err2);
    console.log('something is wrong with the json call');
  }).success(function() {

  });
});
function nextSlide(obj,index) {
	var length = obj.length;
	if(index == (length-1)) {
		document.getElementById('next').style.opacity = "0.5";
	}
	else {
		var i = index + 1;
    $('#roller').html('<div class="right"><img src="'+slide[i].value+'" /></div><div class="left"><h1>'+slide[i].title+'</h1><p>'+slide[i].description+'</p><p id="readmore">Read More  </p><ul id="navigation"><li id="prev"></li>  <li id="next"></li></ul>');
		document.getElementById('next').onclick = function () { nextSlide(obj,i); }
    	document.getElementById('prev').onclick = function () { prevSlide(obj,i); }
		if(i == (length-1)) {
			document.getElementById('next').style.opacity = "0.5";
		}
	}
}
function prevSlide(obj,index) {
	var length = obj.length;
	if(index == 0) {
		document.getElementById('prev').style.opacity = "0.5";
	}
	else {
		var i = index - 1;
    $('#roller').html('<div class="right"><img src="'+slide[i].value+'" /></div><div class="left"><h1>'+slide[i].title+'</h1><p>'+slide[i].description+'</p><p id="readmore">Read More  </p><ul id="navigation"><li id="prev"></li>  <li id="next"></li></ul>');
		document.getElementById('next').onclick = function () { nextSlide(obj,i); }
    	document.getElementById('prev').onclick = function () { prevSlide(obj,i); }
		if(i == 0) {
			document.getElementById('prev').style.opacity = "0.5";
		}
	}
}
