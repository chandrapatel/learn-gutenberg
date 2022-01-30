<?php
/**
 * Dynamic Block Example
 *
 * @package learn-gutenberg
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function lg_dynamic_block_init() {

	register_block_type(
		LG_PLUGIN_PATH . '/build/dynamic-block/',
		array(
			'render_callback' => 'lg_dynamic_render_callback',
		)
	);

}

add_action( 'init', 'lg_dynamic_block_init' );

/**
 * Render callback for dynamic block.
 *
 * @param array  $block_attributes Block attributes.
 * @param string $content          Block content.
 *
 * @return string
 */
function lg_dynamic_render_callback( $block_attributes, $content ) {

	$recent_posts = wp_get_recent_posts(
		array(
			'numberposts' => 1,
			'post_status' => 'publish',
		)
	);

	if ( count( $recent_posts ) === 0 ) {
		return __( 'No posts', 'learn-gutenberg' );
	}

	$post    = $recent_posts[0];
	$post_id = $post['ID'];

	return sprintf(
		'<div class="wp-block-learn-gutenberg-dynamic-block"><a href="%1$s">%2$s</a></div>',
		esc_url( get_permalink( $post_id ) ),
		esc_html( get_the_title( $post_id ) )
	);

}
