<!DOCTYPE html>
<html <?php language_attributes();?>>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<?php if(is_search()):?>
			<meta name="robots" content="noindex, nofollow" />
		<?php endif;?>
		
		<?php wp_head() ?>
		<title><?php echo bloginfo('name'); echo ' - '; bloginfo('description');?></title> 

		<meta charset="<?php bloginfo('charset')?>" />

		<!-- Stylesheets-->
		
		<link rel="stylesheet" href="<?php echo THEME_URL ?>public/main.css">
	</head>
	

	<body <?php body_class()?>>

		<div id="preload">
			<div class="loader"></div>
		</div>

		<header class="header">
			<nav class="navbar">
				<a href="<?php echo esc_url(home_url('/')) ?>" class="navbarLogo">
					<img src="<?php echo THEME_URL; ?>_dev/img/logo.png" alt="" class="navbarLogo--img">
				</a>
				<div class="navbar__menu">
					<?php wp_nav_menu(array(
						'theme_location' => 'main_nav'
						));
					?>   
				</div>
				</ul>
				<div class="navbarRight">
					<ul>
						<li class="navbarLang--first">
							<a>
								<img src="<?php echo THEME_URL; ?>_dev/img/poland.png" alt="" class="navbarLang--img navbarLang--first">
							</a>
							<ul class="navbarLang--submenu">
								<li>
									<a href="/en">
										<img src="<?php echo THEME_URL; ?>_dev/img/en.png" alt="" class="navbarLang--img">
									</a>
								</li>
								<li>
									<a href="/de">
										<img src="<?php echo THEME_URL; ?>_dev/img/de.png" alt="" class="navbarLang--img">
									</a>
								</li>
							</ul>
						</li>
						
					</ul>
				</div>
				<button class="hamburger">
						<span class="hamburger__box">
							<span class="hamburger__inner"></span>
						</span>
					</button>
			</nav>
		</header>

