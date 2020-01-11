
$(document).on("pagecontainerbeforeshow", function(event, ui) {
    // add custom remove and update functions to cart when init
    if (ui.toPage[0].id == 'cart') {
    var page = jQuery(ui.toPage[0]);  
    removeitem();

      
    // frequently bought together
    updatequantity();
    frequentlyboughtslider(page);

     if (typeof ui.prevPage[0] !== 'undefined') {
      if(ui.prevPage[0].id !== 'cart') {
        page.addClass('animate');
        page.get(0).timer = setTimeout( function() {
          page.removeClass('animate');
        }, 1400 );
      }
     }else{
        page.addClass('animate');
        page.get(0).timer = setTimeout( function() {
          page.removeClass('animate');
        }, 1400 );
     }
      
      

      page.find('.product-cart-wrap').slideCartControls(); 

 
     //activate all ajax add buttons
     jQuery('.frequently-add').frequentlyadd(); 
   
      
     $('#checkout-bar-button').off('click').on('click', function() {
       $.mobile.loading( "show");
        $('#checkoutnow').trigger('click');
    });
      
      

      
    }
    // if coming from cart page remove it
    if (ui.prevPage === undefined) {
    if (ui.prevPage[0].id == 'cart') {
        jQuery(ui.prevPage[0]).remove();
        //scroll back to previous position
        $.mobile.silentScroll(window.cartscrolltop);
    }
    }
});


$(document).on("pagecontainershow", function(event, ui) {
if (ui.toPage[0].id == 'cart') {
  var page = jQuery(ui.toPage[0]);  
   updateButtonsTotal();
} 
});



$(document).on("pagecontainerhide", function(event, ui) {
    // always remove cart from dom
    if (ui.prevPage[0].id == 'cart') {
      $(ui.prevPage[0]).remove();
    }
});





function updatequantity() {
    $('.btn-number').unbind().click(function(e) {
        e.preventDefault();




        fieldName = $(this).attr('data-field');
        type = $(this).attr('data-type');
        var input = $(this).closest('.quantity-wrap').find("input[type='number']");
        var currentVal = parseInt(input.val());
        if (!isNaN(currentVal)) {
            if (type == 'minus') {

                if (currentVal > input.attr('min')) {
                    input.val(currentVal - 1).change();
                }
                if (parseInt(input.val()) == input.attr('min')) {
                    $(this).attr('disabled', true);
                }

            } else if (type == 'plus') {
                if (currentVal < input.attr('max')) {
                    input.val(currentVal + 1).change();
                }
                if (parseInt(input.val()) == input.attr('max')) {
                    $(this).attr('disabled', true);
                }

            }
        } else {
            input.val(0);
        }
    });
    $('.input-number').focusin(function() {
        $(this).data('oldValue', $(this).val());
    });
    $('.input-number').change(function() {

        minValue = parseInt($(this).attr('min'));
        maxValue = parseInt($(this).attr('max'));
        valueCurrent = parseInt($(this).val());

        name = $(this).attr('id');
        if (valueCurrent >= minValue) {
            $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
        } else {
            alert('Sorry, the minimum value was reached');
            $(this).val($(this).data('oldValue'));
        }
        if (valueCurrent <= maxValue) {
            $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
        } else {
            alert('Sorry, the maximum value was reached');
            $(this).val($(this).data('oldValue'));
        }


    });
    $(".input-number").keydown(function(e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });




    $("#cartform input.quantity").change(function() {

         $.mobile.loading( "show");
      
        // get current scroll position 
        window.cartscrolltop = $(window).scrollTop();

        var item_id = $(this).attr('id').replace('updates_', '');
        var item_quantity = $(this).val();
        var updatestring = 'updates[' + item_id + ']=' + item_quantity;

      if(jQuery(this).val() == 0) {
        // reload cart page
        jQuery(this).closest('.product-cart-wrap').fadeOut(400, function() {
          
                 jQuery.ajax({
            type: 'POST',
            url: '/cart/update.js',
            data: updatestring,
            async: false,
            cache: false,
            dataType: 'json',
            success: function(data) {
                cartcall(data);
               $(document).one("pagecontainerbeforeshow", function(event, ui) {
                 $.mobile.loading( "hide");  
                });
                $( ":mobile-pagecontainer" ).pagecontainer( "change", "/cart", {  showLoadMsg: false, reload: true, transition: "none", changeHash: "false" });
            },
            error: Shopify.onError
        });
          
           
        });
      }else{
                       jQuery.ajax({
            type: 'POST',
            url: '/cart/update.js',
            data: updatestring,
            async: false,
            cache: false,
            dataType: 'json',
            success: function(data) {
                cartcall(data);
               $(document).one("pagecontainerbeforeshow", function(event, ui) {
                 $.mobile.loading( "hide");  
                });
                $( ":mobile-pagecontainer" ).pagecontainer( "change", "/cart", {  showLoadMsg: false, reload: true, transition: "none", changeHash: "false" });
      }
        // add function for updating cart icons
    });
   }
});
}













function triggerklaviyo() {
    function attachklaviyo(jsonObj) {
        KlaviyoSubscribe.attachToForms('#email_signup', jsonObj );
    }
    // create a JSON object with the success function
     var jsonObj = {
             extra_properties: {
                $source: 'CartPopUp'
            },
            success: function() {
                jQuery('#email_signup').hide(400, function() {
                    var discountcode = $(this).find('input[name="code"]').val();
                    jQuery(this).parent().siblings('h4').html('Success!');
                    jQuery('#advanced-abandoned-cart-link').html(discountcode);
                    $('#discount').val(discountcode); 
                    jQuery(this).after('Discount code' + ' "' + discountcode + '"');
                      setTimeout(function(){  $("#advanced-abandoned-cart").popup("close"); }, 3000);
                });
            } 
    }
     
    // now lets add extra properties 
    jQuery.getJSON('/cart.js', function(cart) {
      var items = cart.items;
      var price= ( cart.original_total_price / 100).toFixedDown(2);
     
      
      var discountprice = ( price / 100) * 10;
       console.log('discount price' + discountprice);
      var discountprice = discountprice.toFixedDown(2);
        console.log('discount price' + discountprice);
      var discountprice = price - discountprice;     
      var discountprice = Number(discountprice).toFixed(2);
      var price= price;
      jsonObj.extra_properties['cart_original_price'] = price;
      jsonObj.extra_properties['cart_discount_price'] = discountprice;
      jsonObj.extra_properties['cart_item_count'] = cart.item_count;
      for (var i = 0, len = items.length; i < len; i++) { 
        var newUser = "product_1" + i;
        var newValue = "value" + i;
        jsonObj.extra_properties['product_variant_id_' + i] = items[i].variant_id ;
        jsonObj.extra_properties['product_title_' + i]=items[i].title;
        jsonObj.extra_properties['product_quantity_' + i]=items[i].quantity;
        jsonObj.extra_properties['product_price_' + i]= ( items[i].price / 100);
        var image = imgURL2( items[i].image, 'medium');
        jsonObj.extra_properties['product_image_' + i]= image;
      }    
      console.log(jsonObj);
      attachklaviyo(jsonObj);
    });
}


Number.prototype.toFixedDown = function(digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};


// alternatively, if you don't want to use a polyfil
function imgURL2(src, size) {
    var src = src;
    // remove any current image size then add the new image size
    return src
        .replace(/_(pico|icon|thumb|small|compact|medium|large|grande|original|1024x1024|2048x2048|master)+\./g, '.')
        .replace(/\.jpg|\.png|\.gif|\.jpeg/g, function(match) {
            return '_' + size + match;
        });
}

















//review slider hompage
function frequentlyboughtslider(page) {
  
  var container = page.find('.frequently-swiper');
  // create the slider
            var swiper = new Swiper((container), {
                effect: 'slide',
    slidesPerView: 1.1,
    spaceBetween: 10,
                centeredSlides: true,
              loop: false,
                   speed: 600,
                   autoplay: {
        delay: 4000,
        disableOnInteraction: true,
      },   
                breakpoints: {
    // when window width is <= 320px
    480: {
      // speed: 300,
      //spaceBetween: 0,
      }
     }
                      
             
            });
   
  
}


function updateButtonsTotal() {
  var total = jQuery('#cart-total').text();
  var sup = jQuery('#cart-total').children('sup');

  if(sup.length) {
var len = total.length;
var total = total.substring(0, len-3) + "." + total.substring(len-3);
   }
  jQuery('#checkout-bar-total').text(total);
}






(function($) {
    $.fn.slideCartControls = function() {

        // show loading
        var $this = $(this);


        $this.each(function() {
            var sliderEl = jQuery(this).get(0);
            var mc = new Hammer(sliderEl);
            sliderEl.hammer = mc;
            mc.on("pan", function(e) {
                var windowwidth = $('#swiper_Frame').innerWidth();
                var controlwidth = windowwidth / 2;
                var percentage = 100 / 1 * e.deltaX / windowwidth; // NEW: our % calc
              
                if (!jQuery(sliderEl).hasClass('open')) {
                    if (percentage <= 0 && percentage >= -50) {
                        sliderEl.style.transform = 'translateX(' + percentage + '%)'; // NEW: our CSS transform
                    }
                } else {
                    
                    var matrix = $(sliderEl).css('transform').replace(/[^0-9\-.,]/g, '').split(',');
                    var x = matrix[12] || matrix[4];
                    var percentage = 100 / 1 * e.deltaX / windowwidth; // NEW: our % calc
                    var current = 100 / 1 * x / windowwidth; // NEW: our % calc
                    var newpos = current + percentage;
  
                    if (newpos >= -50 && newpos <= 0) {
                        sliderEl.style.transform = 'translateX(' + newpos + '%)'; // NEW: our CSS transform
                    }
                }

               
                if (e.isFinal) { // NEW: this only runs on event end
                    if (percentage < -15 && !jQuery(sliderEl).hasClass('open')) {
                        // add open class, start animation
                        jQuery(sliderEl).addClass('open is-animating');
                        sliderEl.style.transform = 'translateX(-50%)';
                        // end animation after 400 seconds
                        sliderEl.timer = setTimeout( function() {
                        jQuery(sliderEl).removeClass('is-animating');
                        }, 300 );
                        // close siblings
                      jQuery(sliderEl).siblings().each(function() {
                         var sliderSib = jQuery(this).get(0);
                         jQuery(sliderSib).addClass('is-animating').removeClass('open');
                         sliderSib.style.transform = 'translateX(0%)';
                         sliderSib.timer = setTimeout( function() {
                        jQuery(sliderSib).removeClass('is-animating');
                        }, 300 );
                      });
  
                    } else {
                        // remove open class, start animation
                        jQuery(sliderEl).addClass('is-animating').removeClass('open');
                        sliderEl.style.transform = 'translateX(0%)';
                        // end animation after 400 seconds
                        sliderEl.timer = setTimeout( function() {
                        jQuery(sliderEl).removeClass('is-animating');
                        }, 300 );
                       
                    }
                }
              

            });
        });


    }
})(jQuery);




// load ajaxadd
(function($) {
  
    $.fn.frequentlyadd = function() {

        // show loading

        var $this = jQuery(this);

      
      
      
       // update price on qunatity
       $this.siblings('.input-group').find('.input-number').change(function() {
         var currentotal = jQuery(this).closest('.quantity-wrap').find('#frequently-bought-total');
         var currentotalnum = currentotal.attr('price').replace("$", "");
         console.log(currentotalnum);
         var newprice = currentotalnum * jQuery(this).val(); 
           var newprice = newprice.toFixed(2);
           var newprice = newprice.replace(".", "");
           var finalprice = Shopify.formatMoney(newprice);
           var finalprice2 = finalprice.toString().replace('.00','');
           currentotal.text(finalprice2);
       });
             
       $this.off().on('click', function() {
         
        var $this = jQuery(this);
        var variant_id = $this.attr('variant-id');
        var quantity = $this.siblings('.input-group').find('.input-number').val();
        var updatestring = 'updates[' + variant_id + ']=' + quantity;
         
         
          $.mobile.loading( "show");  
           jQuery.post('/cart/update.js', updatestring , function(data) {
            $( ":mobile-pagecontainer" ).pagecontainer( "change", "/cart", {  showLoadMsg: false, reload: true, transition: "fade", changeHash: "false" });
            $(document).one("pagecontainerbeforeshow", function(event, ui) {
               $.mobile.loading( "hide");  
            });
             jQuery.ajax({
                type: 'GET',
                url: '/cart.js',
                async: false,
                cache: false,
                dataType: 'json',
                success: function(data) {
                    cartcall(data);
                }
            });
           // googletrack(data, collection);
        }, 'json');
      });
    }
})(jQuery);



function removeitem() {
    $("#cartform .remove").unbind().click(function(e) {
        e.preventDefault();
        $.mobile.loading( "show");
      
        var productid = jQuery(this).attr('product-id');

        // reload cart page
        jQuery(this).closest('.product-cart-wrap').fadeOut(400, function() {
           jQuery.ajax({
            type: 'POST',
            url: '/cart/update.js',
            data: 'updates[' + productid + ']=0',
            async: false,
            cache: false,
            dataType: 'json',
            success: function(data) {
                cartcall(data);
              $(document).one("pagecontainerbeforeshow", function(event, ui) {
               $.mobile.loading( "hide");  
              });
              $( ":mobile-pagecontainer" ).pagecontainer( "change", "/cart", {  showLoadMsg: false, reload: true, changeHash: "false", transition: "none" });
            },
            error: Shopify.onError
        });
        });

    });
}



function cartcall(data) {
    // refresh cart icons
    jQuery('.cart-count').html(data.item_count);
    // check for hasitem on zero
    if (data.item_count < 1) {
        $('.cart-target, body').removeClass('hasitem');
    } else {
        $('.cart-target, body').addClass('hasitem');
    }
}


function loadJSONcollection() {
	console.log("triggered");
	$.ajax({
		url:	"/collections/all?view=json",
		type:	'GET',
     // dataType: "json"
	})
    .done(function(data) {
      var data = data.replace('<!-- BEGIN template --><!-- collection.json -->','');    
      var data = data.replace('<!-- END template -->',''); 
      var data = data.trim(); 
      var product = $.parseJSON(data);
      var updatestring = updatestring + '&updates[' + product.variant + ']=1';
        jQuery.post('/cart/update.js', updatestring , function(data) {
          
            jQuery.ajax({
                type: 'GET',
                url: '/cart.js',
                async: false,
                cache: false,
                dataType: 'json',
                success: function(data) {
                    cartcall(data);
                    $( ":mobile-pagecontainer" ).pagecontainer( "change", "/cart", {  showLoadMsg: !0, reload: !0, transition: "none" });    
                }
            });
        }, 'json');
      
      
	})
	.fail(function(data) {})
	.always(function(data) {});
}


/* for editing purposes */
$(document).on("pagecontainerbeforecreate", function(event, ui) {
    // add custom remove and update functions to cart when init
    var url = event.currentTarget.URL;
  if(url.includes('cart') && url.includes('theme')) {
    //check cart if empty
    jQuery.getJSON('/cart.js', function(cart) {
    // now have access to Shopify cart object
      if(cart.item_count < 1) {
        loadJSONcollection();
      }
    });
  }
});