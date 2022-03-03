<?php
/**
 * The template for displaying the header
 *
 * This is the template that displays all of the <head> section, opens the <body> tag and adds the site's header.
 *
 * @package HelloElementor
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header class="flex flex-col sticky top-0 bg-white shadow-md z-10">
    <section class="container mx-auto grid grid-cols-12 gap-lg py-sm px-xs">
        <div class="col-span-4">
            <div class="flex items-center">
                <div class="menu-button mr-sm" data-toggle="nav.main-navigation">
                    <i aria-hidden="true" class="fas fa-bars"></i>
                    <span class="sr-only"><?php _e( 'Menu', 'spirit' ); ?></span>
                </div>
				<?php if ( is_front_page() && is_home() ) : ?>
                    <h1><?php the_custom_logo(); ?></h1>
				<?php else : ?>
                    <p><?php the_custom_logo(); ?></p>
				<?php endif; ?>
            </div>
        </div>
        <div class="col-span-4 flex items-center justify-center">
            <nav class="main-navigation">
                <div class="flex items-center justify-between md:hidden w-full border-b p-md">
                    <div class="flex items-center">
                        <span class="text-xl font-semibold"><?php _e( 'Menu', 'spirit' ); ?></span>
                    </div>
                    <div data-toggle="nav.main-navigation" class="cursor-pointer text-4xl events:text-primary">
                        <i class="fa fas fa-times" aria-hidden="true"></i>
                    </div>
                </div>
				<?php
				wp_nav_menu( [
					'theme_location' => 'header',
					'menu_id'        => 'main-navigation',
					'container'      => 'ul',
				] );
				?>
                <div class="flex flex-col md:hidden border-t">
                    <div class="text-center text-xl font-bold my-lg"><?php _e( 'Find us on', 'spirit' ); ?></div>
                    <div class="flex items-center justify-center">
                        <a class="header-button mr-md"
                           href="https://www.facebook.com/spiritdigitalagencygr/" target="_blank">
                            <span class="sr-only">Facebook</span>
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a class="header-button"
                           href="https://www.instagram.com/spiritdigitalagency/" target="_blank">
                            <span class="sr-only">Instagram</span>
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a class="header-button"
                           href="https://www.linkedin.com/company/spirit-digital-agency/" target="_blank">
                            <span class="sr-only">LinkedIn</span>
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </nav>
            <div data-toggle="nav.main-navigation" class="backdrop"></div>
        </div>
        <div class="col-span-4 flex items-center justify-end">
            <div class="hidden sm:flex items-center justify-end col-span-2 md:col-span-3">
                <a class="text-lg px-sm"
                   href="https://www.facebook.com/spiritdigitalagencygr/" target="_blank">
                    <span class="sr-only">Facebook</span>
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a class="text-lg px-sm"
                   href="https://www.instagram.com/spiritdigitalagency/" target="_blank">
                    <span class="sr-only">Instagram</span>
                    <i class="fab fa-instagram"></i>
                </a>
                <a class="text-lg px-sm"
                   href="https://www.linkedin.com/company/spirit-digital-agency/" target="_blank">
                    <span class="sr-only">LinkedIn</span>
                    <i class="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    </section>
</header>
