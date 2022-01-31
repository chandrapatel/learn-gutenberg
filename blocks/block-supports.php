<?php
/**
 * Block Supports Example
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
function lg_block_supports_init() {

	register_block_type( LG_PLUGIN_PATH . '/build/block-supports/' );

}

add_action( 'init', 'lg_block_supports_init' );
