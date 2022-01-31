<?php
/**
 * Plugin Name:       Learn Gutenberg
 * Plugin URI:        https://github.com/chandrapatel/learn-gutenberg
 * Description:       Demo of different types custom Gutenberg development.
 * Version:           0.1.0
 * Requires at least: 5.9
 * Requires PHP:      7.4
 * Author:            Chandra Patel
 * Author URI:        https://chandrapatel.in/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       learn-gutenberg
 * Domain Path:       /languages
 *
 * @package           learn-gutenberg
 */

define( 'LG_PLUGIN_PATH', __DIR__ );

require_once LG_PLUGIN_PATH . '/filters.php';
require_once LG_PLUGIN_PATH . '/blocks/static-block.php';
require_once LG_PLUGIN_PATH . '/blocks/dynamic-block.php';
require_once LG_PLUGIN_PATH . '/blocks/block-supports.php';
require_once LG_PLUGIN_PATH . '/blocks/block-attributes.php';
