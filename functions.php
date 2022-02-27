<?php
// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

add_action( 'wp_enqueue_scripts', function () {
	wp_enqueue_style( 'theme-core', get_stylesheet_directory_uri() . '/style.css', [], SPIRIT_VERSION );
	wp_enqueue_style( 'theme-style', get_theme_asset( 'css/theme.css' ), [ 'tailwind' ], SPIRIT_VERSION, );
} );