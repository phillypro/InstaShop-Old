






//$(document).on( "pagecreate", '#index', function( event, ui ) {
//$(document).one("pagecontainershow", function (event,ui) {
// window.scrollTo(0, 0);
//});
//});



$(document).on( "pagecreate", ".ui-page[data-url='/challenge']", function( event, ui ) {
$(document).one("pagecontainershow", function (event,ui) {
  console.log('fuck captcha');
  var page = ui.toPage[0];
  jQuery(page).find('form').attr('data-ajax','false');
});
});



/*
/////////////////////////////////////////////         remove cart updates from broswer history by storing global variable
*/


$(document).on("pagecontainerbeforechange", function(event, ui) {
  if(typeof ui.prevPage !== 'undefined' && typeof ui.toPage !== 'undefined') {
    if(ui.prevPage[0].id == 'cart' && ui.toPage[0].id == 'cart') {
      if(typeof window.cartRefresh == 'undefined') {
       window.cartRefresh = 0;
      }
      window.cartRefresh = window.cartRefresh + 1;
    } 
    if(ui.prevPage[0].id == 'cart' && ui.toPage[0].id !== 'cart') {
      delete window.cartRefresh;
    }  
  }
  
  //if no previous page...lets go hom
  
  
});


$(document).one("pagecontainerbeforechange", function(event, ui) {
  delete window.hasNoHistory;
  if(ui.toPage[0].id == 'cart') {
   window.hasNoHistory = true;
    console.log(window.hasNoHistory);
  }
});


function goBack() {
  if (window.hasNoHistory !== true) { 
  if(typeof window.cartRefresh == 'undefined') {
    window.cartRefresh = 0;
  }
  var backIndex = -Math.abs(1) + -Math.abs(window.cartRefresh);
  window.history.go(backIndex);
  }else{
   $( ":mobile-pagecontainer" ).pagecontainer( "change", "/", {  showLoadMsg: true, reload: true, });
    delete window.hasNoHistory;
  }
}

/*
/////////////////////////////////////////////         when collapsible expanded scroll to it
*/


$(document).on("collapsibleexpand", "[data-role=collapsible]:not(#contactCollapse)", function () {
  
  

  
  if($(window).width() < 1022)  {
  var page = $(this).closest('.ui-page');
  var position = $(this).offset().top + page.offset().top + page.scrollTop();
page.animate({
  scrollTop: Math.abs(position)
}, 400);
  }else{
    var position = $(this).offset().top;
    $('body,html').animate({
  scrollTop: position
}, 2000);
  }
  
  

  
});







/*
/////////////////////////////////////////////         Pause All Swipers and videos before transition starts
*/

$(document).on("pagecontainerbeforetransition", function(event, ui) {

  if(typeof ui.prevPage !== 'undefined') {
    var page = ui.prevPage[0];   
    
    // pause all swipers
    var myswiper = jQuery(page).find('.swiper-container.autoplay').each(function() {
      var myswiper = $(this).get(0);
      myswiper.swiper.autoplay.stop();
    });  
    
    // pause all videos
   jQuery(page).find('video').each(function() {
    $(this).get(0).pause();
   });
    
  // pause all sliders
  var slider = jQuery(page).find('.rev_slider');
  if(slider.hasClass('revslider-initialised')) {
  	slider.revpause();
  }
    
  }
  
  if(typeof ui.toPage !== 'undefined') {
    var page = ui.toPage[0]; 
     $(page).find('video').each(function() {
       $(this).get(0).play();
     });
  }
  
  
});

$(document).on("pagecontainertransition", function(event, ui) {

  if(typeof ui.toPage !== 'undefined' && typeof ui.prevPage !== 'undefined') {
    var page = ui.toPage[0];   
    
    // restart swipers
    var myswiper = jQuery(page).find('.swiper-container.autoplay').each(function() {
      var myswiper = $(this).get(0);
      myswiper.swiper.update();
      myswiper.swiper.autoplay.start();
    });    
    
    // restart sliders 
   var slider = jQuery(page).find('.rev_slider');
    if(slider.hasClass('revslider-initialised')) {
     	slider.revresume();
    }
    
    
  }
});



/*
/////////////////////////////////////////////         Restart videos on broswer refocus
*/

(function() {
  var hidden = "hidden";

  // Standards:
  if (hidden in document)
    document.addEventListener("visibilitychange", onchange);
  else if ((hidden = "mozHidden") in document)
    document.addEventListener("mozvisibilitychange", onchange);
  else if ((hidden = "webkitHidden") in document)
    document.addEventListener("webkitvisibilitychange", onchange);
  else if ((hidden = "msHidden") in document)
    document.addEventListener("msvisibilitychange", onchange);
  // IE 9 and lower:
  else if ("onfocusin" in document)
    document.onfocusin = document.onfocusout = onchange;
  // All others:
  else
    window.onpageshow = window.onpagehide
    = window.onfocus = window.onblur = onchange;

  function onchange (evt) {
    var v = "visible", h = "hidden",
        evtMap = {
          focus:v, focusin:v, pageshow:v, blur:h, focusout:h, pagehide:h
        };

    evt = evt || window.event;
    if (evt.type in evtMap)
      window.brosweractive = evtMap[evt.type];
    else
          
        if(this[hidden] !== undefined) {
           window.brosweractive = this[hidden] ? "hidden" : "visible";
          if(window.brosweractive == 'visible') {
            console.log($.mobile.activePage);
            var page = $.mobile.activePage;
            page.find('video').each(function() {
              $(this).get(0).play();
            });
          }
        }
       
    
  }

  // set the initial state (but only if browser supports the Page Visibility API)
  if( document[hidden] !== undefined )
    onchange({type: document[hidden] ? "blur" : "focus"});
})();


/*
/////////////////////////////////////////////        remove page
*/

$(document).on("pagecontainerhide", function(event, ui) {
    if (ui.prevPage[0].id) {
      $(ui.prevPage[0]).remove();
    }
});


/*
/////////////////////////////////////////////         Swap Active Link
*/

$(document).one("pagecontainerchange", function(event, ui) {
    changelinks(event, ui);
   // mobilepanelbind(); 
});
$(document).on("pagecontainerbeforeshow", function(event, ui) {
    changelinks(event, ui); 
});

function changelinks(event, ui) {
    //console.log($(ui.toPage[0]).attr("data-url"));
    var current = $(ui.toPage[0]).jqmData("title").toLowerCase();
    
    if (!current) {
      if($(ui.toPage[0]).attr("data-url").includes("collections")) {
        var current = $(ui.toPage[0]).attr("data-url");
      }else{
        var current = $(ui.toPage[0]).attr("data-title").toLowerCase();
      }
    }
    if (current.includes("–")) {
        var current = current.substring(0, current.indexOf('–')).trim();
    }
    $("[data-role = 'navbar'] a.ui-btn-active").removeClass("ui-btn-active");
    // Add active class to current nav button
 
    $("[data-role = 'navbar'] a").each(function() {
      
              if ($(this).attr('title') == null) {
              }else{
        //console.log($(this).attr('title'));
        
        var page = $(this).attr('title').toLowerCase();
        if (page.includes("–")) {
            var page = page.substring(0, page.indexOf('–')).trim();
        }
              }
        if (page === current) {
            if (!$(this).hasClass('ui-btn-active')) {
                $(this).addClass("ui-btn-active");
            }
        }
    });
}


function mobilepanelbind() {
	jQuery('#mobilepanellink').off('click').on('click', function() {
            jQuery('#mobilemenu').panel( "toggle" );
	});
}



/*
/////////////////////////////////////////////         FAST SWAP ACTIVE ON CLICK
*/

$(document).on("pagecreate", function (event, ui) {
  
  
  $('.ui-state-persist').on('click', function() {
     $('.ui-btn-active').not(this).removeClass('ui-btn-active');
     $(this).addClass("ui-btn-active");
   
  });
  
  
});


/*
/////////////////////////////////////////////          Swap body classes 
*/

$(document).on("pagecontainerbeforeshow", function (event, ui) {
  
  var eventid = ui.toPage[0].id;     
  if(eventid.indexOf('collection') != -1){
  var eventid = eventid.substring(0, eventid.indexOf('-'));
   }  
  if(eventid.indexOf('product') != -1){
  var eventid = eventid.substring(0, eventid.indexOf('-'));
   }    
  var dataPrev = ui.prevPage[0] ;
  if(typeof dataPrev != 'undefined') {
     var previd = dataPrev.id;  
   if(previd.indexOf('product') != -1){
    var previd = previd.substring(0, previd.indexOf('-'));
   } 
      jQuery(document.body).removeClass(previd).addClass(eventid);
  }else{
   jQuery(document.body).addClass(eventid);
  }
  
 
});




/* 
/////////////////////////////////////////                   transition class to body during transition
*/



$(document).on("pagecontainerbeforechange", function (event, ui) {
jQuery(document.body).addClass('transition');
});

$(document).on("pagecontainerchange", function (event, ui) {
jQuery(document.body).removeClass('transition');
});





/*
/////////////////////////////////////////////          Fix Page jump on Transition 
*/

$(document).on("pagecontainerbeforechange", function(e, data) {
    if (typeof data.prevPage !== 'undefined' && data.prevPage[0].baseURI == data.toPage[0].baseURI) {} else {
        if (typeof data.prevPage !== 'undefined' && data.prevPage[0].baseURI == data.toPage || typeof data.prevPage !== 'undefined' && data.toPage.indexOf(data.prevPage[0].baseURI + '?') != -1 ) {} else {
            if (data.options.stopRecursion != 1) {
                // prevent infinite recursion:
                data.options.stopRecursion = 1;
                // prevent pageChange before hiding current Page:
                e.preventDefault();
                var page = data.toPage;
                if (typeof page == 'string') {
                    if (page.indexOf('#') != -1) {
                        var hashash = true;
                    }
                }
                if (hashash != true) {
                    // get current ScrollPos and move PageDiv y pixel to top
                    // and scroll at the same time to the top
                    var y = $(document).scrollTop();
                    var h = $(data.prevPage).outerHeight();
                    //var h = $(data).scrollTop();  
                    $(data.options.fromPage).css({
                       // "margin-top": "-" + y + "px",
                        'min-height': h + "px"
                    });
                    $(data.options.fromPage).children('.ui-content').css({
                        "transform": "translateY(-" + y + "px)",
                       // 'min-height': h + "px"
                    });
                    $(document).scrollTop(0);
                 
                }
                //trigger changePage manualy - now Transition-Procedure can scrollTop
                //it will have no effect : we are already at Top ;-)
                $(":mobile-pagecontainer").pagecontainer("change", data.toPage, data.options);
            }
        }
    }
});

$(document).on( "pagecontainertransition", function( event, ui ) {
  if(typeof ui.prevPage !== 'undefined' && typeof ui.toPage !== 'undefined' && ui.prevPage[0].id !== ui.toPage[0].id) {
    $(ui.prevPage).removeAttr("style").children('.ui-content').removeAttr("style");
  }
});

/*
/////////////////////////////////////////////          Fix Going Back to misplaced div 
*/

// in case of navigating back without page-reload
// remove page-div displacement: 
/*
$(document).on("pagecontainerhide", function(e, data) {
    $(data.prevPage).css({
        "margin-top": "",
        'min-height': ""
    });
})
*/



