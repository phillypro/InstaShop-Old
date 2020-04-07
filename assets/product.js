

// activate SLider and Yotpo for product pages
jQuery(document).on('pagecontainershow', function (event, ui) {
   if (ui.toPage[0].className.includes('template-product')) {
     var page = jQuery(ui.toPage[0]);
    startSlider(event, page);
    Shopify.AjaxifyCart.init();  
    triggerCartAdd(page); 
   }
  if (ui.toPage[0].id == 'index') {
    var page = jQuery(ui.toPage[0]);
   Shopify.AjaxifyCart.init();
  }
});



jQuery(document).on('pagecontainerbeforeshow', function (event, ui) {
     if($(ui.toPage[0]).find('.multiselect_wrap').length == 0) {
     $('body').removeClass('multiselect');
     }
     if (ui.toPage[0].className.includes('template-product')) {
     var page = jQuery(ui.toPage[0]);  
     activateproduct(currentProduct);
     
     if(page.find('.multiselect_wrap').length == 0) {
     variantControl(page, currentProduct.id);
     }else{
     $('body').addClass('multiselect');
     }
  }
});





function triggerCartAdd(page) {
  $('#shopify-section-External-Add-To-Cart a').off('click').on('click', function() {
    page.find('[type="submit"]').click();
  })
}




function variantControl(page, product) {
  
var variant = page.find('#product-select-'+ product + '-option-0');
var parent = variant.closest('.product-variants');
  if(variant && !parent.hasClass('dontclone')) { 
	$('#variantcontroller').html(variant.clone());
	$("#variantcontroller select").change(function() {
	  variant.prop("selectedIndex", $(this)[0].selectedIndex).trigger('change');
	});  
  }else{
  $('#variantcontroller').empty();
  }
  
  page.find('.swatch :radio').change(function() {
     var optionIndex = jQuery(this).closest('.swatch').attr('data-option-index');
     var optionValue = jQuery(this).val();
     jQuery(this).closest('form').find('.single-option-selector').eq(optionIndex).val(optionValue).trigger('change');
  });
}






jQuery(document).on('pagecontainerbeforeshow', function (event, ui) {
   if (ui.toPage[0].className.includes('collection-page')) {
       var page = jQuery(ui.toPage[0]);  
     Shopify.queryParams = {};
  page.find('select.sort-by').val('best-selling').on('change', function() {
    console.log(Shopify.queryParams);
    Shopify.queryParams.sort_by = jQuery(this).val();
    var url = page.attr('data-url').replace('/collections/','') + '/' + jQuery.param(Shopify.queryParams).replace(/\+/g, '%20');
    console.log(url);
   location.search = jQuery.param(Shopify.queryParams).replace(/\+/g, '%20');
  });
  }
});







function startSlider(event, page) {
   
var container = page.find('.gallery-thumbs');
var container2 = page.find('.gallery-top');   
var pagination = page.find('.swiper-pagination');    

   var galleryThumbs = new Swiper((container), {
      spaceBetween: 10,
      slidesPerView: 'auto',
      loop: false,
       direction: 'horizontal',
         spaceBetween: 1,
      freeMode: true,
      loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true
    });
var container2 = page.find('.gallery-top');  
   var galleryTop = new Swiper((container2), {
      spaceBetween: 0,
      loop:false,
      effect: 'slide',
     autoHeight: true,
      zoom: true,
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        el: pagination,
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });    
}



function  activateproduct(productjson) {  
 

var add_to_cart =  'Add to cart';
var option_index = 0;  
  
$('#frontpage-' + productjson.id + '.selector-wrapper:eq(' + option_index + ')').hide(); 
$('#' + productjson.id + '.selector-wrapper:eq(' + option_index + ')').hide();      
  
var variants = productjson.variants;
variants.forEach(function (value, i) {
  if(value.available == true) {
   var valuehandle = Shopify.handleize(value.title);
jQuery('#frontpage-' + productjson.id + ' .swatch[data-option-index="' + option_index + '"] .' + valuehandle).removeClass('soldout').addClass('available').find(':radio').removeAttr('disabled');
jQuery('#' + productjson.id + ' .swatch[data-option-index="' + option_index + '"] .' + valuehandle).removeClass('soldout').addClass('available').find(':radio').removeAttr('disabled');  
  }
});
//if variant availble  
//jQuery('#frontpage-' + productjson.id + ' .swatch[data-option-index="' + option_index + '"] .{{ value | handle }}').removeClass('soldout').addClass('available').find(':radio').removeAttr('disabled');
//jQuery('#' + productjson.id + ' .swatch[data-option-index="' + option_index + '"] .{{ value | handle }}').removeClass('soldout').addClass('available').find(':radio').removeAttr('disabled');  
  
  
var selectCallback = function(variant, selector) {
  if (variant) {    
    var form = jQuery('#' + selector.domIdPrefix).closest('form');
    for (var i=0,length=variant.options.length; i<length; i++) {
      var radioButton = form.find('.swatch[data-option-index="' + i + '"] :radio[value="' + escape(variant.options[i]) +'"]');
      if (radioButton.length) {
        radioButton.get(0).checked = true;
      }
    }
    
    var external = $('#shopify-section-External-Add-To-Cart');
    // Selected a valid variant that is available.
    if (variant.available) {         
      // Enabling add to cart button.
      external.removeClass('sold-out');
      external.find('a #label').text('{{ settings.addtocarttext }}');  
      // If item is backordered yet can still be ordered, we'll show special message.
      if (variant.inventory_management && variant.inventory_quantity <= 0) {
        jQuery('#selected-variant-' + productjson.id + '-frontpage').html(productjson.title + ' - ' + variant.title);
        jQuery('#backorder-' + productjson.id + '-frontpage').removeClass("hidden");
      } else {
        jQuery('#backorder-' + productjson.id + '-frontpage').addClass("hidden");
      }
      
    } else {
  
      // Variant is sold out.
      jQuery('#backorder-' + productjson.id + '-frontpage').addClass('hidden');
      jQuery('#add-' + productjson.id + '-frontpage').val({{ sold_out | json }}).addClass('disabled').prop('disabled', true); 
      external.addClass('sold-out');
      external.find('a #label').text('out of stock');  
    }
    
    // Whether the variant is in stock or not, we can update the price and compare at price.
    if ( variant.compare_at_price > variant.price ) {
      jQuery('#product-price-' + productjson.id + '-frontpage').html('<span class="product-price on-sale">'+ Shopify.formatMoney(variant.price, "{{ shop.money_format }}") +'</span>'+'&nbsp;<s class="product-compare-price">'+Shopify.formatMoney(variant.compare_at_price, "{{ shop.money_format }}")+ '</s>');
      jQuery('#external-product-price').html(Shopify.formatMoney(variant.price, "{{ shop.money_format }}")); 
     } else {
      jQuery('#product-price-' + productjson.id + '-frontpage').html('<span class="product-price">'+ Shopify.formatMoney(variant.price, "{{ shop.money_format }}") + '</span>' );
      jQuery('#external-product-price').html(Shopify.formatMoney(variant.price, "{{ shop.money_format }}"));                                                                                                                     
    }
                                                                 
                                                                 
     {% if settings.quadpay %}   
      {% assign new_money_format = shop.money_format | remove: '$' %}
      jQuery('#product-price-{{ product.id }}').parent().find('quadpay-widget').attr('amount', Shopify.formatMoney(variant.price, "{{ new_money_format }}") );
      {% endif %}                                                                             

  } else {
    // variant doesn't exist.
    jQuery('#product-price-' + productjson.id + '-frontpage').empty();
    jQuery('#backorder-' + productjson.id + '-frontpage').addClass('hidden');
    jQuery('#add-' + productjson.id + '-frontpage').val({{ unavailable | json }}).addClass('disabled').prop('disabled', true);
  }

};
  

  new Shopify.OptionSelectors('product-select-' + productjson.id, { product: productjson, onVariantSelected: selectCallback, enableHistoryState: false });

}


Shopify.handleize = function (str) {
    return str.toLowerCase().replace(/[^\w\u00C0-\u024f]+/g, "-").replace(/^-+|-+$/g, "");
};
  
  
  
