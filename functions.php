<?php

	if(!defined('THEME_DIR')) {
		define('THEME_DIR',get_theme_root().'/'.get_template().'/');
	}

	if(!defined('THEME_URL')) {
		define('THEME_URL',WP_CONTENT_URL.'/themes/'.get_template().'/');
	}
	
	require_once THEME_DIR.'libs/post-types.php';
	require_once THEME_DIR.'libs/utils.php';

	//--------------Register menus--------------//
    if(function_exists('register_nav_menus')) { 
        register_nav_menus (array(
            'main_nav' => 'Menu glowne'
        ));
	}
	
?>