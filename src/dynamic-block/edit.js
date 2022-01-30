/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Custom react hook for retrieving props from registered selectors.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data/#useselect
 */
import { useSelect } from '@wordpress/data';

/**
 * ServerSideRender is a component used for server-side rendering a preview of dynamic blocks to display in the editor.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-server-side-render/
 */
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {

	const posts = useSelect( ( select ) => {
		return select( 'core' ).getEntityRecords( 'postType', 'post' );
	}, [] );

	// Using client-side rendering.
	return (
		<div {...useBlockProps()}>
			{ ! posts && __( 'Loading', 'learn-gutenberg' ) }
			{ posts && posts.length === 0 && __( 'No Posts', 'learn-gutenberg' ) }
			{ posts && posts.length > 0 && (
				<a href={ posts[ 0 ].link }>
					{ posts[ 0 ].title.rendered }
				</a>
			) }
		</div>
	);

	// Using server-side rendering.
	// Comment above return() block and uncomment below return() block to test server-side rendering.

	// return (
	// 	<div {...useBlockProps()}>
	// 		<ServerSideRender
	// 			block="learn-gutenberg/dynamic-block"
	// 			attributes={ props.attributes }
	// 		/>
	// 	</div>
	// )
}
