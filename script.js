    jQuery(document).ready(function($){
		$('#nav-menu-item-2538 a').mouseover(function(){
			$('#nav-menu-item-2538 ul.sub-menu').show();
            event.preventDefault();
		});
		
		$('#nav-menu-item-2538, #main-content').mouseout(function(){
			$('#nav-menu-item-2538 ul.sub-menu').hide();
            event.preventDefault();
		});
        
        //
        
        $('#nav-menu-item-2134 a').mouseover(function(){
			$('#nav-menu-item-2134 ul.sub-menu').show();
            event.preventDefault();
		});
		
		$('#nav-menu-item-2134, #main-content').mouseout(function(){
			$('#nav-menu-item-2134 ul.sub-menu').hide();
            event.preventDefault();
		});
        
        //
        
        $('#nav-menu-item-2305 a').mouseover(function(){
			$('#nav-menu-item-2305 ul.sub-menu').show();
            event.preventDefault();
		});
		
		$('#nav-menu-item-2305, #main-content').mouseout(function(){
			$('#nav-menu-item-2305 ul.sub-menu').hide();
            event.preventDefault();
		});
        
        //
        
        $('#abrir-menu').click(function(){
            $('#abrir-menu').hide();
            $('#cerrar-menu').show();

            $('#aside-menu').animate({
                right: 0
            },300);
            event.preventDefault();
        });

        $('#cerrar-menu').click(function(){
            $('#abrir-menu').show();
            $('#cerrar-menu').hide();

            $('#aside-menu').animate({
                right: '-100%'
            },300);
            event.preventDefault();
        });
        
        //
        
        $('#abrir-prefe').click(function(){
            $('#abrir-prefe').hide();
            $('#cerrar-prefe').show();

            $('#row-preferences').animate({
                right: 0
            },300);
            event.preventDefault();
        });

        $('#cerrar-prefe').click(function(){
            $('#abrir-prefe').show();
            $('#cerrar-prefe').hide();

            $('#row-preferences').animate({
                right: '-100%'
            },300);
            event.preventDefault();
        });
	});