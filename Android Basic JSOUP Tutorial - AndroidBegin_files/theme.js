jQuery(function($) {


    /****************
    **  SOCIAL POSTS LOAD
    *****************/

    var didScroll2,
        normalLayout = false;
    // if the layout isn't twocolumn or three column then load the posts that are already in view immediately
    if(!$('#content').hasClass('twocolumn') && !$('#content').hasClass('threecolumn') && !$('#content').hasClass('fourcolumn') && !$('#content').hasClass('fivecolumn')){
        normalLayout = true;
        didScroll2 = false;
    }else{
        didScroll2 = true;
    }
    jQuery(window).scroll(function() {
        didScroll2 = true;
    });
    setInterval(function() {
        if ( didScroll2 ) {
            didScroll2 = false;
            y2 = jQuery(window).scrollTop();

            if($('.facebook-store').length > 0){
                $('.facebook-store').each(function(e){
                    if((y2 > $(this).offset().top - 800 && y2 < $(this).offset().top + 200) && !$(this).data('loaded') ) {
                        $(this).data('loaded', '1');
                        console.log('thewidth: ' + $(this).width());
                        $(this).html($(this).data('code'));
                        FB.XFBML.parse($(this).get(0));
                        // if it's a column layout then remove the iframe and put in an icon with a link
                        if(!normalLayout){   
                            // $(this).find('iframe').remove();
                            $(this).html('<a class="facebook-fallback" href="'+$(this).find('.fb-post').data('href')+'"><i class="icon-facebook-1"></i></a>');
                        }
                    }
                });
            }
            if($('.twitter-store').length > 0){
                $('.twitter-store').each(function(e){
                    if((y2 > $(this).offset().top - 800 && y2 < $(this).offset().top + 200) && !$(this).data('loaded') ) {
                        $(this).data('loaded', '1');
                        $(this).html($(this).data('code'));
                        twttr.widgets.load();
                    }
                });
            }
            if($('.google-store').length > 0){
                $('.google-store').each(function(e){
                    if((y2 > $(this).offset().top - 800 && y2 < $(this).offset().top + 200) && !$(this).data('loaded') ) {
                        $(this).data('loaded', '1');
                        $(this).html($(this).data('code'));
                        gapi.follow.go();
                    }
                });
            }
        }
    }, 600);


    /****************
    **  MAILCHIMP
    *****************/
    // Newsletter widget
    $('.bl_newsletter button').click(function() {
        $that = $(this);
        $that.addClass('disabled');
        var email = $that.closest('.input-group').find('input').val();
        if(typeof email == 'undefined'){
            $('body').prepend('<div class="bl_alert"><h4 style="text-align:center"><i class="icon-cancel-circle"></i>&nbsp;'+blu.locale.no_email_provided+'</h4></div>');
            $('.bl_alert').slideDown().delay(3000).slideUp();   
            $that.removeClass('disabled');
            return false;
        }
        $.post(blu.ajaxurl, {email: email,action: 'blu_ajax_mailchimp'}, function(output){
            output = $.trim(output);
            var obj = $.parseJSON(output);
            if(obj.error){
                $('body').prepend('<div class="bl_alert"><h4 style="text-align:center"><i class="icon-cancel-circle"></i>&nbsp;'+obj.error+'</h4></div>');
                $('.bl_alert').slideDown().delay(3000).slideUp();                       
            }else if(obj.status == 'ok'){
                $('body').prepend('<div class="bl_alert"><h4 style="text-align:center"><i class="icon-ok-circle"></i>&nbsp;'+blu.locale.thank_you_for_subscribing+'</h4></div>');
                $('.bl_alert').slideDown().delay(3000).slideUp();
            }
        });     
        $that.removeClass('disabled');
        $that.closest('.input-group').find('input').val('');
        return false;
    });


    /****************
    **  MASONRY
    *****************/

    if($('#content').hasClass('twocolumn') || $('#content').hasClass('threecolumn') || $('#content').hasClass('fourcolumn') || $('#content').hasClass('fivecolumn')){

        var $container = $('#content .columns');
        // initialize
        $container.masonry({
            itemSelector: 'article'
        });

        var didTimeOut = false;
        $('#content .entry-content').resize(function() {
            $('#content .columns').masonry();
        });
    }


    // Fix video size
    if( $(".entry-video iframe").length > 0){
        if(!$('#content').hasClass('margin')){
            var $container  = $("#content article");
        }else{
            var $container  = $("#content");
        }
        console.log($container.width());
        var added_padding = 0;

        var $video  = $(".entry-video iframe"),
            did_resize  = false;

        var width = 16;
        var height = 9;

        $video.attr('data-aspectRatio', height / width).removeAttr('height').removeAttr('width');

        $(window).resize(function() {
            did_resize = true;
        }).resize();
         
        setInterval(function() {
            if(did_resize){
                did_resize = false;

                var newWidth = $container.width() + added_padding;
                $video.width(newWidth).height(newWidth * $video.attr('data-aspectRatio'));
                if($('#content').hasClass('twocolumn') || $('#content').hasClass('threecolumn') || $('#content').hasClass('fourcolumn') || $('#content').hasClass('fivecolumn')){

                    $('#content .columns').masonry();
                }
            }
        }, 300);
    }

    $('.share-post').click(function(e){ e.preventDefault(); });

    $('#searchform input[type="text"]').val('Search...');

    $('#searchform input[type="text"]').focus(function(){
    	if($(this).val() == "Search..."){
    		$(this).val('')
    	}
    })
    $('#searchform input[type="text"]').blur(function(){
    	if($(this).val() == ""){
    		$(this).val('Search...')
    	}
    });

    $('.searchform a').click(function(e){ 
      e.preventDefault(); 
      $('.bluth-navigation .nav-collapse').toggle();
      $('.bluth-navigation .mini-logo').toggle();
      $('#mobile-menu').css('z-index', '-100');
      $('.bl_search a').toggle();
      $('.bl_search input').toggle();
      $('.bl_search input').focus();
      $('.bl_search_overlay').toggle();
      // $('.bl_search input').toggleClass('focus'));
    });
    $('.bl_search_overlay').click(function(e){ 
      $('.bluth-navigation .nav-collapse').toggle();
      $('.bluth-navigation .mini-logo').toggle();
      $('#mobile-menu').css('z-index', '1');
      $('.bl_search a').toggle();
      $('.bl_search input').toggle();
      $('.bl_search_overlay').toggle();
    });
    var oldTop;
    $('.entry-video > iframe').mouseover(function(){
      // oldTop = $(this).closest('article').find('.post-format-badge').css('top');
      $(this).closest('article').find('.post-format-badge').stop();
      $(this).closest('article').find('.post-format-badge').animate({ opacity:'0' }, 500, 'swing');
    });
    $('.entry-video > iframe').mouseout(function(){
      $(this).closest('article').find('.post-format-badge').stop();
      $(this).closest('article').find('.post-format-badge').animate({ opacity:'1' }, 500, 'swing');
    });

    $('time.timeago').timeago();

    $('.tips').tooltip();

    $('.bl_popover').popover();

    if( $( '.lightbox').length > 0 ){
      $('.lightbox').magnificPopup({type:'image'});

      $('.entry-content p .lightbox').each(function(){
        $( this ).css('float', $( this ).children('img').css('float') );
      });
    }
    /****************
    **  Post Title fixes
    *****************/
    $('.format-quote .quote-area').each(function(e){
        var width = $(this).width();
        console.log(width);
        if(width < 410){ width = 410; }
        $(this).find('.quote-text').css('font-size', (width/16)+'px');
        var height = $(this).height();
        $(this).height(height);
        $(this).css('margin-top', '-'+($(this).height()/2)+'px');
        $(this).css('opacity', '1');
    });

    /****************
    **  Featured Posts Widget
    *****************/
    if($('.bl_featured_post').length > 0){
        slidesPerView = 1;

        // Init Instagram widget
        $('.swiper-container-featured').each(function(e){
          $swiper = $(this);

          $(this).swiper({
            loop: true,
            paginationClickable: true,
            slidesPerView: slidesPerView,
            onTouchEnd : function(element) { $('.swiper-container').removeClass('active'); },
            onTouchStart : function(element) { $('.swiper-container').addClass('active'); },
            onSlideChangeEnd : function(element) { $('.swiper-container').removeClass('active'); },       
            calculateHeight: true,
          });

          // enable pagination arrows
          $('.swiper-container-featured .arrow-left').on('click', function(e){
            e.preventDefault();
            $(this).closest('.swiper-container-featured').swiper().swipePrev();
            // featured_swiper.swipePrev();
          });
          $('.swiper-container-featured .arrow-right').on('click', function(e){
            e.preventDefault();
            $(this).closest('.swiper-container-featured').swiper().swipeNext();
            // featured_swiper.swipeNext();
          });

          $('.swiper-container-featured .swiper-slide a').each(function(e){
              var width = $(this).find('.post-title').width();
              if(width < 410){ width = 410; }
              if(width > 1000){ width = 1000; }
              $(this).find('.post-title').css('font-size', (width/15)+'px');
              if($(this).closest('#above-blog').length > 0){
                $(this).find('.post-title p').css('font-size', (width/35)+'px');
              }else{
                $(this).find('.post-title p').css('font-size', (width/25)+'px');
              }
              var height = $(this).height();
              $(this).height(height);
              $(this).find('.post-title').css('margin-top', '-'+($(this).find('.post-title').height()/2)+'px');
              $(this).find('.post-title').css('opacity', '1');
          });

          // $('.swiper-container-featured').reInit();
        });
    }

    // Lightbox Gallery
    suffixjpg = '.jpg';
    suffixjpeg = '.jpeg';
    suffixpng = '.png';
    suffixgif = '.gif';

    if( $( '.gallery').length > 0 ){
      if( $( '.gallery-item a' ).eq(0).attr( 'href' ).indexOf(suffixjpg, $( '.gallery-item a' ).eq(0).length - suffixjpg.length) !== -1 || $( '.gallery-item a' ).eq(0).attr( 'href' ).indexOf(suffixjpeg, $( '.gallery-item a' ).eq(0).length - suffixjpeg.length) !== -1 || $( '.gallery-item a' ).eq(0).attr( 'href' ).indexOf(suffixpng, $( '.gallery-item a' ).eq(0).length - suffixpng.length) !== -1 || $( '.gallery-item a' ).eq(0).attr( 'href' ).indexOf(suffixgif, $( '.gallery-item a' ).eq(0).length - suffixgif.length) !== -1){
        $( '.gallery' ).magnificPopup({
            delegate: '.gallery-item a', // the container for each your gallery items
            type: 'image',
            gallery:{ enabled:true }
        });
      }
    }
    // Jetpack Lightbox Gallery
    if( $( '.tiled-gallery').length > 0 ){
      if( $( '.tiled-gallery-item a' ).eq(0).attr( 'href' ).indexOf(suffixjpg, $( '.tiled-gallery-item a' ).eq(0).length - suffixjpg.length) !== -1 || $( '.tiled-gallery-item a' ).eq(0).attr( 'href' ).indexOf(suffixjpeg, $( '.tiled-gallery-item a' ).eq(0).length - suffixjpeg.length) !== -1 || $( '.tiled-gallery-item a' ).eq(0).attr( 'href' ).indexOf(suffixpng, $( '.tiled-gallery-item a' ).eq(0).length - suffixpng.length) !== -1 || $( '.tiled-gallery-item a' ).eq(0).attr( 'href' ).indexOf(suffixgif, $( '.tiled-gallery-item a' ).eq(0).length - suffixgif.length) !== -1){
        $( '.tiled-gallery' ).magnificPopup({
            delegate: '.tiled-gallery-item a', // the container for each your gallery items
            type: 'image',
            gallery:{ enabled:true }
        });
      }
    }
    
    $("pre.html").snippet("html",{style:"emacs"});
    $("pre.css").snippet("css",{style:"emacs"});
    $("pre.php").snippet("php",{style:"emacs"});
    $("pre.js").snippet("javascript",{style:"emacs"});

    $('.page #content article .the-content').animate({
      opacity: 1
    }, 1000);


    $('.nivo-slider').nivoSlider({
        effect: 'fade', // Specify sets like: 'fold,fade,sliceDown'
        slices: 15, // For slice animations
        boxCols: 8, // For box animations
        boxRows: 4, // For box animations
        animSpeed: 350, // Slide transition speed
        pauseTime: 8000, // How long each slide will show
        startSlide: 0, // Set starting Slide (0 index)
        directionNav: true, // Next & Prev navigation
        controlNav: false, // 1,2,3... navigation
        controlNavThumbs: false, // Use thumbnails for Control Nav
        pauseOnHover: true, // Stop animation while hovering
        manualAdvance: true, // Force manual transitions
        randomStart: false, // Start on a random slide
        prevText: '<i class="icon-left-open-1"></i>', // Prev directionNav text
        nextText: '<i class="icon-right-open-1"></i>', // Next directionNav text
        beforeChange: function(){}, // Triggers before a slide transition
        afterChange: function(){}, // Triggers after a slide transition
        slideshowEnd: function(){}, // Triggers after all slides have been shown
        lastSlide: function(){}, // Triggers when last slide is shown
        afterLoad: function(){} // Triggers when slider has loaded
    });
    $('video,audio').mediaelementplayer();
/*
    var $allVideos = $(".entry-video iframe, .entry-video object");
    // The element that is fluid width
    if(!$("#content").hasClass('margin')){
      var $fluidEl = $("#content article");
      console.log('width: ' + $fluidEl.width());
    }else{
      var $fluidEl = $("#content");
    }
      
    // Figure out and save aspect ratio for each video
    $allVideos.each(function() {
        var height = (this.height === '') ? 473 : this.height;
        var width = (this.width === '') ? 840 : this.width;
      $(this)
        // and remove the hard coded width/height
        .attr('data-aspectRatio', height / width)
        .removeAttr('height')
        .removeAttr('width');
    });
    // When the window is resized
    $(window).resize(function() {
      var newWidth = $fluidEl.width();
      // Resize all videos according to their own aspect ratio
      $allVideos.each(function() {
        var $el = $(this);
        $el.width(newWidth).height(newWidth * $el.attr('data-aspectRatio'));
      });
    // Kick off one resize to fix all videos on page load
    }).resize();*/


});
function social_share(data) {
    window.open( data, "fbshare", "height=450,width=760,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" );
}
