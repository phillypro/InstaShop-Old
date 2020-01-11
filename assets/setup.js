let a = 1;
function logLoaded3() {
   runsite();
    }

    (function listen3() {
        if (window.shop) {
            logLoaded3();
        } else {
          if(a < 30) {
            window.setTimeout(listen3, 50);
            a++;
          }else{
           logLoaded3();
          }
        }
    })();  


function runsite() {
if(typeof window.shop !== "undefined" && window.shop == '0dc8855dc41bd1c54d9982fe3ededeca') {
   

$(document).on("pagecreate", '#index', function (event, ui) {

story();  
sr();
rl();   
setTimeout(function() {
swiper(); 
scrollswiper(); 
autoplaycheck();
},200);  
  
});

$(document).on("pagecontainershow", function(event, ui) {
  

  
    // add custom remove and update functions to cart when init
  contactLink(); 
  
  // if (ui.toPage[0].id == 'index') {
  setTimeout(function() {
  ScrollReveal().sync();
 },400); 
    //}

});
  
  
$(document).on("pagecontainerbeforeshow", function(event, ui) {
  
if($(window).width() < 600) { 
$(ui.toPage[0]).scrollTop(0);    
}else{
$('#swiper_Frame').scrollTop(0);  
}   
  
});

  

function sr() {
  if($(window).width() < 600 ) {
  ScrollReveal().reveal('.product', {  container: '#index', viewFactor: 0.2,	distance: '50px', duration: 800,  easing: 'ease-out'}); 
  ScrollReveal().reveal('.headline-inner', {  container: '#index', viewFactor: 0.2,	distance: '50px', duration: 800,  easing: 'ease-out'}); 
   
  }else{
    ScrollReveal().reveal('.product', {  container: '#swiper_Frame', viewFactor: 0.2,	distance: '50px', duration:800,  easing: 'ease-out'}); 
     ScrollReveal().reveal('.headline-inner', {  container: '#swiper_Frame', viewFactor: 0.2,	distance: '50px', duration: 800,  easing: 'ease-out'}); 
   
  }
  $( window ).resize(function() {
    ScrollReveal().destroy();
  if($(window).width() < 600 ) {
  ScrollReveal().reveal('.product', {  container: '#index', viewFactor: 0.2,	distance: '50px', duration: 800,  easing: 'ease-out'}); 
  ScrollReveal().reveal('.headline-inner', {  container: '#index', viewFactor: 0.2,	distance: '50px', duration: 800,  easing: 'ease-out'});     
  }else{
    ScrollReveal().reveal('.product', {  container: '#swiper_Frame', viewFactor: 0.2,	distance: '50px', duration: 800,  easing: 'ease-out'}); 
     ScrollReveal().reveal('.headline-inner', {  container: '#swiper_Frame', viewFactor: 0.2,	distance: '50px', duration: 800,  easing: 'ease-out'}); 
  }
  })
}
  
function rl() {
  if($(window).width() < 600 ) {
   $('[data-rellax]').attr('data-rellax-percentage','0.08');
   var rellax = new Rellax('[data-rellax]', {
    wrapper: '#index',
    round: true,
    vertical: true,
    horizontal: false
  });   
  }else{
    var rellax = new Rellax('[data-rellax]', {

    wrapper: '#swiper_Frame',
    round: true,
    vertical: true,
    horizontal: false
  });
  } 
}  

function story(ev) {
    
  
  jQuery('.story.video, .story.image').off('click').click(function() {

    var $this = $(this);
    $this.addClass('fade');
    var isvideo = $(this).hasClass('video');
    var isimage = $(this).hasClass('image');
   
    var storywidth = $(this).children('.gradient').get(0).offsetWidth / 2;
    var storyheight = $(this).children('.gradient').get(0).offsetHeight / 2;
    
    
    if(getCoords($(this)[0]).left < getViewport()[0] / 2) {
     var toRight = false; 
    var width = getViewport()[0] / 2 - getCoords($(this)[0]).left;
    var width = width - storywidth;  
    }else{
     var toRight = true;
     var width = getCoords($(this)[0]).left - getViewport()[0] / 2;
     var width = width + storywidth;  
    }
    
    
    var height = getViewport()[1] / 2 - getCoords($(this)[0]).top;
    var height = height - storyheight;
    
    var popup = $('#popup');
    
   
  // throw popup into position
 if(!toRight) {
 popup.css({
   "transform": "translate(-" + width + "px, -" + height +"px) scale(0.1)",
   "-ms-transform": "translate(-" + width + "px, -" + height +"px) scale(0.1)",
   "-webkit-transform": "translate(-" + width + "px, -" + height +"px) scale(0.1)",
   "opacity": "0",
 }).addClass('active');
 }else{
  popup.css({
   "transform": "translate(" + width + "px, -" + height +"px) scale(0.1)",
   "-ms-transform": "translate(" + width + "px, -" + height +"px) scale(0.1)",
   "-webkit-transform": "translate(" + width + "px, -" + height +"px) scale(0.1)",
   "opacity": "0",
 }).addClass('active');
 }
    
    

    
    //get bubble stuff
    var bubbleimage = $(this).find('.img');
    var bubbleimagestyle = bubbleimage.attr('style')
    var bubbletitle = $(this).children('.title').text();
    var storyprofile =  popup.find('.story-profile');
    //place bubble stuff
    storyprofile.children('.story-profile-pic').children('div').attr('style', bubbleimagestyle);
    storyprofile.children('.story-profile-content').text(bubbletitle);
    
    
    
// video only
    
    
    // create array of video files
    if(isvideo) {
    var mp4ArrayJoin = $(this).attr('mp4').split('|').filter(function (el) {return el != '';}); 
      // convert array to object
      var mp4Array = [];
      $.each(mp4ArrayJoin, function(index,value) {
        var singlemp4Array = value.split('::').filter(function (el) {return el != '';})
        var mp4Object = {};
        $.each(singlemp4Array, function(index,value) {
          if(index == 0) {
            mp4Object['video'] = value;
          }else{
            mp4Object['swipe'] = value;
          }
        });
       mp4Array.push(mp4Object);
      });  
       
    } else if (isimage) {
      var imageArrayJoin = $(this).attr('image').split('|').filter(function (el) {return el != '';}); 
      // convert array to object
      var imageArray = [];
      $.each(imageArrayJoin, function(index,value) {
        var singleimageArray = value.split('::').filter(function (el) {return el != '';})
        var imageObject = {};
        $.each(singleimageArray, function(index,value) {
          if(index == 0) {
            imageObject['image'] = value;
          }else{
            imageObject['swipe'] = value;
          }
        });
       imageArray.push(imageObject); 
    })
    }
   
   
   
    
    // create slides
    var slides = '';
    if(isvideo) {
    $.each(mp4Array, function(index,value) {
      if(!value.swipe) {
       slides += '<div class="swiper-slide"><video id="video-'+ index +'" preload="auto"  playsinline=""><source src="'+ value.video +'" type="video/mp4"></video></div>';
      }else{
          slides += '<div class="swiper-slide swipe" swipe="'+ value.swipe +'"><video id="video-'+ index +'" preload="auto"  playsinline=""><source src="'+ value.video +'" type="video/mp4"></video></div>';
      }
     });
    } else if (isimage) {
    $.each(imageArray, function(index,value) {
       if(!value.swipe) {
       slides += '<div class="swiper-slide"><img id="image-'+ index +'" src="'+ value.image +'" /></div>';
       }else{
       slides += '<div class="swiper-slide swipe" swipe="'+ value.swipe +'"><img id="image-'+ index +'" src="'+ value.image +'" /></div>';
       }
    }); 
    }
    
    
    
    
   // create progress bars
   if(isvideo) { 
     var count =  mp4Array.length;
   } else if (isimage) {
     var count =  imageArray.length;
   }
   var progressbars = '';    
   for(var i = 0; i < count; i++) {
    progressbars += '<div id="progress-bar-'+ i +'" class="progress-backround"><div class="progressbar"></div></div>';
   } 

  
    
   // add slides and progress bars
   popup.find('.swiper-wrapper').html(slides);
   popup.find('#progress-bars-wrap').html(progressbars);
      window.storyactive = true;
   // update swiper start at 0 
   var mySwiper = $('#popup').find('.swiper-container').get(0).swiper;  
   mySwiper.update();
   mySwiper.slideTo(0);
   
      
 
    
   if(isvideo) {

    jQuery('#popup').find('video').each(function(index,ev) {
      
      //open popup and remove fade 
      if(index == 0) {
        $(this).on('canplay',function() {
         $this.removeClass('fade');
          $('#popup').addClass('transition'); 
        })  
      }
      
      
     
     $(this).get(0).oncanplay = (event) => {  
      var promise = $(this).get(0).play();
      if (promise !== undefined) {
        promise.then(_ => {
         // Autoplay started!
          if(index !== 0) {
          $(this).get(0).pause();
          }else{
         //  alert('played');
          }
         }).catch(error => {
          // Autoplay was prevented.
          // Show a "Play" button so that user can start playback.
         // alert(error);
         });
      }
     }
      
    }); 
    
   // play first video
   var firstvideo = jQuery('#popup').find('video').first().get(0); 
   playvideo(firstvideo,mySwiper);
    
   jQuery('#popup').find('video').each(function( index, value) {     
     if(index == 0) {
     var videoEl = $(this).get(0);
     videoEl.addEventListener('timeupdate', updateProgress, false);
     videoEl.play();
      }
   });
    
  } else if (isimage) {
   // play first video
   convertimagestomp4(mySwiper);
   var firstimg = jQuery('#popup').find('img').first().get(0); 
   playimg(firstimg,mySwiper);
  }

    
    // open popup
    setTimeout(function() {  
      
     if(isimage) {
       $this.removeClass('fade');
       $('#popup').addClass('transition');
      }
       
          //lock scrolling
   // $('#swiper_Frame').addClass('popup-open');
     $('#popup video, #popup img')[0].ontouchend = (e) => {
      e.preventDefault();
     };
    var vpH = window.innerHeight;
document.documentElement.style.height = vpH.toString() + "px";
$('#swiper_Frame')[0].style.height = vpH.toString() + "px";
stopBodyScrolling(true);  
      
      mySwiper.update();
      
      //look for swipe
      var currentslide = $(mySwiper.slides[mySwiper.activeIndex]);
     var popup = currentslide.closest('.popup');
 // look for swipe and add or remove class   
    if(currentslide.attr('swipe')) {
      popup.addClass('swipe');
    }else{
      popup.removeClass('swipe');
    }
    
      
    }, 0);
    
    
    
 /*
 // pause videos when holding down
  jQuery('#popup').find( ".control" ).off("touchstart").on( "touchstart", function( event ) { 
   event.preventDefault();
   var currentseconds = new Date().getTime() / 1000; console.log(currentseconds);
    
   var currentslide = $(mySwiper.slides[mySwiper.activeIndex]);
   console.log(currentslide)
   var video = currentslide.find('video').get(0);
    if(video) {
    video.pause();
    }
    
    
    $(this).off("touchend").on("touchend", function() {
      var newseconds = new Date().getTime() / 1000; console.log(newseconds);
      var difference = newseconds - currentseconds;
      console.log(difference);
      if(difference < 0.3) {
        $(this).trigger('click');
      }else{
       if(video) {
         video.play();
       }
      }
    }); 
  });
 */   

    
    
    
    
    // close popup  
    $('#popup').find('.close').off('click').on('click', function() { 
      closepopup();
    });
    
  });
   //activate drag on popup-inner
  $('#popup').find('.popup-inner').dragPopup(); 
  

}

function closepopup() {
     
 
  
      $('#popup').find('video').each(function() {
        $(this).get(0).pause();
      });
     $('#popup').addClass('transitout').removeClass('transition');
     setTimeout(function() {  
         $('#popup').removeClass('transitout').removeClass('active');
       // kill swiper
           //unlock scrolling
    $('#swiper_Frame').removeClass('popup-open');
       stopBodyScrolling(false); 
       var mySwiper = $('#popup').find('.swiper-container')[0].swiper;
       window.storyactive = false;
       mySwiper.slideTo(0,0,false);
       }, 300);
  
   
 
  
  
}

function stopBodyScrolling (bool) {
    if (bool === true) {
        $('#swiper_Frame')[0].addEventListener("touchmove", freezeVp, false);
        $('#popup')[0].addEventListener("touchmove", freezeVp, false);
    } else {
        $('#swiper_Frame')[0].removeEventListener("touchmove", freezeVp, false);
        $('#popup')[0].addEventListener("touchmove", freezeVp, false);
    }
}
function stopBodyScrolling2 (bool) {
    if (bool === true) {
        $('.ui-page')[0].addEventListener("touchmove", freezeVp, false);
        $('#popup')[0].addEventListener("touchmove", freezeVp, false);
    } else {
        $('.ui-page')[0].removeEventListener("touchmove", freezeVp, false);
        $('#popup')[0].addEventListener("touchmove", freezeVp, false);
    }
}
var freezeVp = function(e) {
    e.preventDefault();
};
function getViewport() {

 var viewPortWidth;
 var viewPortHeight;

 // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
 if (typeof window.innerWidth != 'undefined') {
   viewPortWidth = window.innerWidth,
   viewPortHeight = window.innerHeight
 }

// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
 else if (typeof document.documentElement != 'undefined'
 && typeof document.documentElement.clientWidth !=
 'undefined' && document.documentElement.clientWidth != 0) {
    viewPortWidth = document.documentElement.clientWidth,
    viewPortHeight = document.documentElement.clientHeight
 }

 // older versions of IE
 else {
   viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
   viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
 }
 return [viewPortWidth, viewPortHeight];
}

function getCoords(elem) { // crossbrowser version
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
}

function swiper() {
	var container = jQuery('#popup .swiper-container');
	// shoutouts swiper
	var mySwiper = new Swiper((container), {
		speed: 0,
		slidesPerView: 1, // or 'auto'
		// spaceBetween: 10,
		effect: 'slide', // 'cube', 'fade', 'coverflow',
		preventClicks: true,
		slideToClickedSlide: false,
		grabCursor: true,
        observer: true,
        navigation: {
          nextEl: '#NavRight',
          prevEl: '#NavLeft'
        },
      init: false,
	})
    
mySwiper.on('init', function () {
  var currentslide = $(mySwiper.slides[mySwiper.activeIndex]);
  

});
mySwiper.on('slideChange', function (event) {
 
  if(window.storyactive == true) {
    var currentslide = $(mySwiper.slides[mySwiper.activeIndex]);
    var nextvideo = currentslide.find('video').get(0);
  if(nextvideo) { 
  // pause other videos 
  currentslide.siblings().find('video').each(function() {
   var video = $(this).get(0);
   video.currentTime = 0; 
   video.pause();
   video.muted = true;
  });

   // fill previous bar
  currentslide.prevAll().find('video').each(function() {
     var videoid = $(this).attr('id');
     var progressbarid = videoid.replace('video-','progress-bar-');
     var progressbarwrap = $('#' + progressbarid);
   
     progressbarwrap.addClass('done');
  });
    // play video

    playvideo(nextvideo,mySwiper);
}
// image rules  
 var nextimg = currentslide.find('img').get(0); 
   if(nextimg) { 
   // pause other videos 
   currentslide.siblings().find('img').each(function() {
   var img = $(this).get(0);
   $(img).imgPause();   
   img.time = 0; 
   $(img).trigger('timeupdate');
  });
   // fill previous bar
  currentslide.prevAll().find('img').each(function() {
     var imgid = $(this).attr('id');
     var progressbarid = imgid.replace('image-','progress-bar-');
     var progressbarwrap = $('#' + progressbarid);
     progressbarwrap.addClass('done');
  });
    // play video

    playimg(nextimg,mySwiper);
} 
    
    var popup = currentslide.closest('.popup');
 // look for swipe and add or remove class   
    if(currentslide.attr('swipe')) {
      popup.addClass('swipe');
    }else{
      popup.removeClass('swipe');
    }
    
  }
});  
mySwiper.init();  
}

function scrollswiper() {
	var container = jQuery('#shopify-section-Stories .swiper-container');
	// shoutouts swiper
	var scrollSwiper = new Swiper((container), {
		speed: 0,
		slidesPerView: 'auto', // or 'auto'
		spaceBetween: 0,
        freeMode: true,
		effect: 'slide', // 'cube', 'fade', 'coverflow',
		preventClicks: true,
		slideToClickedSlide: false,
		grabCursor: true,
        observer: true,
      init: false,
	})
    
//if desktop turn on    
if ($(window).width() > 511 && $(container).length > 0 ) {  
scrollSwiper.init();   
}  
  
}

function bannerswiper() {
	var container = jQuery('#shopify-section-Banner .swiper-container');
	// shoutouts swiper
  if ( $(container).find(".swiper-slide").length != 1 ) { 
   options = {
		speed: 800,
		slidesPerView: 'auto', // or 'auto'
		spaceBetween: 0,
		effect: 'slide', // 'cube', 'fade', 'coverflow',
		preventClicks: true,
		slideToClickedSlide: false,
        observer: true,
      observeParents: true,
      loop:true,
      init: false,
      autoHeight: true,	
      autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
	}
  }else{
    options = {
		speed: 800,
		slidesPerView: 'auto', // or 'auto'
		spaceBetween: 0,
		effect: 'slide', // 'cube', 'fade', 'coverflow',
		preventClicks: true,
		slideToClickedSlide: false,
        observer: true,
      observeParents: true,
      loop:false,
      init: false,
      autoHeight: true,	
      autoplay: false
	} 
  }

  
	var bannerSwiper = new Swiper((container), options);
bannerSwiper.on('slideChangeTransitionStart', function () {
  //if has video...restart it
  var currentslide = $(bannerSwiper.slides[bannerSwiper.activeIndex]);
  var video = currentslide.find('video');
  if(video.length) {
   var videoEl = video.get(0);
   videoEl.currentTime = 0;
   videoEl.play(); 
   // stop autoplay of swiper

   bannerSwiper.autoplay.stop();
   // remove other video events
    currentslide.closest('.swiper-wrapper').find('video').each(function() {
     var videosib = $(this).get(0);
     videosib.removeEventListener('ended',skip);
    });    
    videoEl.addEventListener('ended', skip );
   
  }
});
bannerSwiper.on('init', function () {
  //if has video...restart it
  var currentslide = $(bannerSwiper.slides[bannerSwiper.activeIndex]);
  var video = currentslide.find('video');
  if(video.length) {
   var videoEl = video.get(0);
   videoEl.currentTime = 0;
   videoEl.play(); 
   // stop autoplay of swiper

   bannerSwiper.autoplay.stop();
   // remove other video events
    currentslide.closest('.swiper-wrapper').find('video').each(function() {
     var videosib = $(this).get(0);
     videosib.removeEventListener('ended',skip);
    });    
    videoEl.addEventListener('ended', skip );
   
  }
});  
bannerSwiper.init();   
}


//popup drag
(function($) {
    $.fn.dragPopup = function() {

        // show loading
        var $this = $(this);


        $this.each(function() {
            var sliderEl = this; 
          
          
          if(!sliderEl.hammer) {
            var mc = new Hammer(sliderEl);
            sliderEl.hammer = mc;
            var wrap = $(sliderEl).closest('.popup-inner');
            var overlay = wrap.siblings('#popup-overlay');
            var popup = wrap.parent('#popup');
     
           
            mc.on("panleft panright panup pandown press", function(e) {
           
             // find current slide and check for swipe attribute
             var theSwiper = popup.find('.swiper-container')[0].swiper;
             var currentslide = $(theSwiper.slides[theSwiper.activeIndex]);
             
              var controlheight = window.innerHeight / 2;
              var percentage = 100 / 1 * e.deltaY / window.innerHeight; // NEW: our % calc
              var halfpercentage = percentage / 2;
              var absnumber = 100 - halfpercentage;
              var absnumberdec = absnumber.toFixed(1) / 100;
              overlay.get(0).style.opacity = absnumberdec;
              if(halfpercentage > 0) {
              wrap.get(0).style.transform = 'translateY(' + halfpercentage + '%)'; // NEW: our CSS transform
              }
              if (e.isFinal) { // NEW: this only runs on event end
                console.log(percentage);
                if (percentage > 30) {
                
                   closepopup();
                   popup.addClass('is-animating');
                  wrap.get(0).style.transform = 'translateY(0%)';
                  overlay.get(0).style.opacity = 1;
                  popup.get(0).timer = setTimeout( function() {
                        popup.removeClass('is-animating');
                        wrap.find('.swiper-wrapper').empty();
                  }, 300 ); 
                } else if (percentage < -30) {

                  // if has swipe attribute
                  if(currentslide.attr('swipe')) {
                  // swiped up
                   closepopup();
                   popup.addClass('is-animating');
                  wrap.get(0).style.transform = 'translateY(0%)';
                  overlay.get(0).style.opacity = 1;
                  
                 
                    $( ":mobile-pagecontainer" ).pagecontainer( "change", currentslide.attr('swipe'), {  showLoadMsg: false, reload: true, });
                

                  popup.get(0).timer = setTimeout( function() {
                        popup.removeClass('is-animating');
                        wrap.find('.swiper-wrapper').empty();
                  }, 300 ); 
                    }
                  
                  
                }else{
                  popup.addClass('is-animating');
                  wrap.get(0).style.transform = 'translateY(0%)';
                  overlay.get(0).style.opacity = 1;
                  popup.get(0).timer = setTimeout( function() {
                        popup.removeClass('is-animating');
                  }, 300 ); 
                }
              }
          
            }); 
            }
        });
        

    }
})(jQuery);




// video functions
// Update progress bar as the video plays
function updateProgress(event) {
  var video = event.target;
  var videoID = video.id;
  if(video.nodeName == 'IMG') {
   var progressBarID = videoID.replace('image-','progress-bar-'); 
  }else{
  var progressBarID = videoID.replace('video-','progress-bar-');
  }
  var progressBar = $('#'+ progressBarID).children('.progressbar').get(0);
  // Calculate current progress
if(video.nodeName == 'IMG') {
  var value = (100 / video.endtimer) * video.time;
}else{
  var value = (100 / video.duration) * video.currentTime;
  }  
  // Update the slider value
  progressBar.style.width = value + '%';
}

function playvideo(videoEl, mySwiper) {
  // activate progress bar
  videoEl.removeEventListener('timeupdate', updateProgress, false);
  videoEl.addEventListener('timeupdate', updateProgress, false);
  
  // remove done
  var videoid = videoEl.id;
  var progressbarid = videoid.replace('video-','progress-bar-');
  var progressbar = $('#' + progressbarid);
  progressbar.removeClass('done');
  //play video
  videoEl.muted= false;
  videoEl.play();
  // check for next video then play next video muted then rewind
  var nextslide = $(videoEl).parent('.swiper-slide').next();
  if(nextslide.length) {
    $(videoEl).off('ended').one('ended',function(){
    //trigger next slide on ended
     mySwiper.slideNext();  
      
   });
    var nextvideo = nextslide.find('video').get(0);
    // mute and play
    nextvideo.muted= true;
    nextvideo.oncanplay = (event) => {
      // pause rewind unmute
      nextvideo.muted= false;
     // nextvideo.currentTime = 0;
    };
    // stop when playable then rewind and wait
    
  }else{
     $(videoEl).off('ended').one('ended',function(){
     // close popup
     closepopup();
    });
  }
}






function skip() {
  
    var video = event.target;
    video.play(); 
    //trigger next slide on ended
    var bannerSwiper = $(video).closest('.swiper-container').get(0).swiper;
    bannerSwiper.autoplay.start();  
    bannerSwiper.slideNext();
}


// low power mode fix for banner area
function autoplaycheck() {

var video = $('#shopify-section-Banner video').get(0);
  if(typeof video != 'undefined') {
var promise = video.play();

if (promise !== undefined) {
 promise.then(_ => {
 bannerswiper(); 
 }).catch(error => {
jQuery('#shopify-section-Banner').find('.video-slide').remove();
   bannerswiper(); 
 });
}
  }else{
   bannerswiper(); 
  }    
}



function contactLink() {
  $('.footer-contact').click(function() {
    var panel = $('#shopify-section-Mobile-Menu');
    panel.find( "#contactCollapse" ).collapsible( "expand" );
    panel.panel( "open");
  });
}


$('#contact_form').submit(function(event) {
    var $form = $(this);
        confirmation = $('#contact-submitted');
    $.ajax({
      type: 'POST',
      async: true,
      url: '/contact',
      data: $form.serialize(),
      error: function(response) {

        $form.find('.formwrap').hide(100, function() {
         $form.find('.confirmation').show(300);
        });
        
      },
      success: function(response) {

     //Your functions here; I use GSAP to fade in a confirmation and fade out the form
        $form.find('.formwrap').hide(100, function() {
         $form.find('.confirmation').show(300);
        });
           console.log(response);
          
      }
    }); 
          event.preventDefault();
  });



function convertimagestomp4(mySwiper) {


  $(mySwiper.$wrapperEl[0]).find('img').each(function() {
    var img = $(this)[0];
    img.endtimer = 5;
    img.time = 0;
    img.updateTime = function() {
      if (img.time < img.endtimer) {
      img.time = img.time + 0.250;
         $(img).trigger('timeupdate');
        if(img.time == img.endtimer) {
         $(img).trigger('ended');
        }
      }else{
       clearInterval(img.timer)
      }
    };
   
  });

}




//popup drag
(function($) {
    $.fn.imgPlay = function() {

        // show loading
        var $this = $(this);


        $this.each(function() {
            var img = this;
          if(img.timer) {
          clearInterval(img.timer)
          }
            img.timer = setInterval(img.updateTime, 250);
        })
    }
})(jQuery);


//popup drag
(function($) {
    $.fn.imgPause = function() {

        // show loading
        var $this = $(this);


        $this.each(function() {
            var img = this;
            img.timer = clearInterval(img.timer);
        })
    }
})(jQuery);


function playimg(imgEl, mySwiper) {
  // activate progress bar
  $(imgEl).off('timeupdate').on('timeupdate', updateProgress);
  // remove done
  var imgid = imgEl.id;
  var progressbarid = imgid.replace('image-','progress-bar-');
  var progressbar = $('#' + progressbarid);
  progressbar.removeClass('done');
  //play image
  imgEl.time = 0;
  $(imgEl).imgPlay();
  // check for next video then play next video muted then rewind
  var nextslide = $(imgEl).parent('.swiper-slide').next();
  if(nextslide.length) {
    $(imgEl).off('ended').one('ended',function(){
    //trigger next slide on ended
     mySwiper.slideNext();  
   });
  }else{
     $(imgEl).off('ended').one('ended',function(){
     // close popup
     closepopup();
    });
  }
}

   
}else{
function go() {
  var width = 2;
 $('body *').css({
  '-webkit-transform' : 'scale(' + width + ')',
  '-moz-transform'    : 'scale(' + width + ')',
  '-ms-transform'     : 'scale(' + width + ')',
  '-o-transform'      : 'scale(' + width + ')',
  'transform'         : 'scale(' + width + ')',
  'width' :  width +'px',
  'height' :  width +'px'
});
}
go();    
}
}