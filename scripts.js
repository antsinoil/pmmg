// JavaScript Document

/*
                var slider_tracker = '1';
    
                function slider_changer(){
                    var slider_image = document.getElementById('banner_slider');
                        switch(slider_tracker){
                            case '1':
                                slider_image.src = "images/slider2.png";
                                slider_tracker = '2';
                                break;
                            case '2':
                                slider_image.src = "images/slider3.png";
                                slider_tracker = '3';
                                break;
                            case '3':
                                slider_image.src = "images/slider1.png";
                                slider_tracker = '1';
                                break;
                            }
                    }		
                setInterval('slider_changer()', '4000');
*/



function slider_function(){
 $('.slider_div #img1').show('fade',1500);
 $('.slider_div #img1').delay(4500).hide('slide',{direction:'left'},500);
 
 var sc = $('.slider_div img').size();
 var count = 2;
 
 setInterval(function(){
	$('.slider_div #img'+count).show('slide',{direction:'right'}, 500);
	$('.slider_div #img'+count).delay(5500).hide('slide',{direction:'left'},500);
	
	if(count==sc){
		count=1;
	}else{
		count=count+1;
	}
 },6500);
 
};