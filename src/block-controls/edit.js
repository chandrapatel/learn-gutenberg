/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * useBlockProps React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 * @see https://developer.wordpress.org/block-editor/reference-guides/richtext/
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#alignmenttoolbar
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#blockcontrols
 */
import { useBlockProps, RichText, AlignmentToolbar, BlockControls } from '@wordpress/block-editor';

/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#inspectorcontrols
 */
import { InspectorControls } from '@wordpress/block-editor';

/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/checkbox-control/
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/radio-control/
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/text-control/
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/toggle-control/
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/select-control/
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/panel/#panelbody
 */
import { CheckboxControl, RadioControl, TextControl, ToggleControl, SelectControl, PanelBody } from '@wordpress/components';


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
export default function Edit( { attributes, setAttributes, isSelected } ) {

	const { content, alignment, checkboxField, radioField, textField, toggleField, selectField, } = attributes;

	const onChangeContent = ( newContent ) => {
		setAttributes( { content: newContent } );
	};

	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( {
			alignment: newAlignment === undefined ? 'none' : newAlignment,
		} );
	};

	const onChangeCheckboxField = ( newValue ) => {
		setAttributes( { checkboxField: newValue } );
	};

	const onChangeRadioField = ( newValue ) => {
		setAttributes( { radioField: newValue } );
	};

	const onChangeTextField = ( newValue ) => {
		setAttributes( { textField: newValue } );
	};

	const onChangeToggleField = ( newValue ) => {
		setAttributes( { toggleField: newValue } );
	};

	const onChangeSelectField = ( newValue ) => {
		setAttributes( { selectField: newValue } );
	};

	return (
		<div { ...useBlockProps() }>
			{
				<BlockControls>
					<AlignmentToolbar
						value={ attributes.alignment }
						onChange={ onChangeAlignment }
					/>
				</BlockControls>
			}
			{
				<InspectorControls>
					<PanelBody title={ __( 'Settings', 'learn-gutenberg' ) }>
						<CheckboxControl
							heading="Checkbox Field"
							label="Tick Me"
							help="Additional help text"
							checked={ checkboxField }
							onChange={ onChangeCheckboxField }
						/>

						<RadioControl
							label="Radio Field"
							selected={ radioField }
							options={ [
								{ label: 'Yes', value: 'yes' },
								{ label: 'No', value: 'no' },
							] }
							onChange={ onChangeRadioField }
						/>

						<TextControl
							label="Text Field"
							help="Additional help text"
							value={ textField }
							onChange={ onChangeTextField }
						/>

						<ToggleControl
							label="Toggle Field"
							checked={ toggleField }
							onChange={ onChangeToggleField }
						/>

						<SelectControl
							label="Select Control"
							value={ selectField }
							options={ [
								{ value: 'a', label: 'Option A' },
								{ value: 'b', label: 'Option B' },
								{ value: 'c', label: 'Option C' },
							] }
							onChange={ onChangeSelectField }
						/>
					</PanelBody>
				</InspectorControls>
			}
			<RichText
				className={ attributes.className }
				style={ { textAlign: alignment } }
				tagName="p"
				onChange={ onChangeContent }
				value={ content }
			/>
			{ ! isSelected && ( <>
				<h4>Inspector Control Fields</h4>
				<ul>
					<li>Checkbox Field: { checkboxField ? 'Checked' : 'Unchecked' }</li>
					<li>Radio Field: { radioField }</li>
					<li>Text Field: { textField }</li>
					<li>Toggle Field: { toggleField ? 'ON' : 'OFF' }</li>
					<li>Select Field: { selectField }</li>
				</ul>
			</> ) }
		</div>
	);

}
