// IIFE
(function($) {

		// Define Plugin
    $.organicTabs = function(el, options) {
    
    		// JavaScript native version of this
        var base = this;
        
        // jQuery version of this
        base.$el = $(el);
        
        // Navigation for active selector passed to plugin
        base.$nav = base.$el.find(".nav");
        
        // Runs once when plugin called       
        base.init = function() {
        
        		// Pull in arguments
            base.options = $.extend({},$.organicTabs.defaultOptions, options);
                        
            // Accessible hiding fix (hmmm, re-look at this, screen readers still run JS)
            $(".hide").css({
                "position": "relative",
                "top": 0,
                "left": 0,
                "display": "none"
            }); 
            
            // When navigation tab is clicked...
            base.$nav.delegate("a", "click", function(e) {
            
        		// no hash links
        		e.preventDefault();
            
                // Figure out active list via CSS class
                var curList = base.$el.find("a.active").attr("href").substring(1),
                
                // List moving to
                    $newList = $(this),
                    
                // Figure out ID of new list
                    listID = $newList.attr("href").substring(1),
                    
                // Set outer wrapper height to (static) height of active inner list
                    $allListWrap = base.$el.find(".list-wrap"),
                    curListHeight = $allListWrap.height();
            		$allListWrap.height(curListHeight);
                                        
                if ((listID != curList) && ( base.$el.find(":animated").length == 0)) {
                                            
                    // Fade out active list
                    base.$el.find("#"+curList).fadeOut(base.options.speed, function() {
                        
                        // Fade in new list on callback
                        base.$el.find("#"+listID).fadeIn(base.options.speed);
                        
                        // Adjust outer wrapper to fit new list snuggly
                        var newHeight = base.$el.find("#"+listID).height();
                        $allListWrap.animate({
                            height: newHeight
                        }, base.options.speed);
                        
                        // Remove highlighting - Add to just-clicked tab
                        base.$el.find(".nav li a").removeClass("active");
                        base.$el.find(".nav li").removeClass("active");
                        $newList.addClass("active").parent().addClass("active");
                        
												// Change window location to add URL params
												if (window.history && history.pushState) {
												  // NOTE: doesn't take into account existing params
													history.replaceState("", "", "?" + base.options.param + "=" + listID);
												}    
                    });
                    
                }   

            });
            
						var queryString = {};

                        var hash_parts = location.hash.split('&', 2); //2 - limit, may be changed if more than two arguments.
                          var tab        = hash_parts[0];               // Tab number part of url.  Array starts at 0 for 1st element.
                          var anc        = hash_parts[1];               // Anchor name.
                          var tabId      = tab.split("-").pop()-1;      // Tab no. relating to Jquery ui index no. (starts at zero for tab 1.)  

                        /// перепиши это!
						window.location.href.replace(
						    new RegExp("([^?=&]+)(=([^&]*))?", "g"),
						    function($0, $1, $2, $3) { 
                                queryString[$1] = $3; }
						);
						var q = queryString[base.options.param];
                            if (q.slice(-1) === '#'){
                                queryString[base.options.param] = q.substring(0, q.length - 1);
                            }
						if (queryString[base.options.param]) {
						
							var tab = $("a[href='#" + queryString[base.options.param] + "']");
                            tab.closest(".nav").find(".active").removeClass("active");
							tab
								.closest(".nav")
								.find("a")
								.end()
								.next(".list-wrap")
								.find("> div")
								.hide();
                            tab.addClass("active");
							tab.parent().addClass("active");

                            
							$("#" + queryString[base.options.param]).show();
						      
						};            
            
        };
        base.init();
    };
    
		$.organicTabs.defaultOptions = {
		    "speed": 300,
		    "param": "tab"
		};
    
    $.fn.organicTabs = function(options) {
        return this.each(function() {
            (new $.organicTabs(this, options));
        });
    };
    
})(jQuery);