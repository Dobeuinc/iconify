import type { SVGProps, RefAttributes } from 'react';
import type { IconifyIcon } from '@iconify/types';
import type { IconifyIconCustomisations as RawIconCustomisations } from '@iconify/utils/lib/customisations';

export { RawIconCustomisations };

// Allow rotation to be string
/**
 * Icon customisations
 */
export type IconifyIconCustomisations = Omit<
	RawIconCustomisations,
	'rotate'
> & {
	rotate?: string | number;
};

/**
 * Callback for when icon has been loaded (only triggered for icons loaded from API)
 */
export type IconifyIconOnLoad = (name: string) => void;

/**
 * Icon properties
 */
export interface IconifyIconProps extends IconifyIconCustomisations {
	// Icon object or icon name (must be added to storage using addIcon for offline package)
	icon: IconifyIcon | string;

	// Style
	color?: string;

	// Shorthand properties
	flip?: string;
	align?: string;

	// Unique id, used as base for ids for shapes. Use it to get consistent ids for server side rendering
	id?: string;

	// Callback to call when icon data has been loaded. Used only for icons loaded from API
	onLoad?: IconifyIconOnLoad;
}

/**
 * React component properties: generic element for Icon component, SVG for generated component
 */
type IconifyElementProps = SVGProps<SVGSVGElement>;

export type IconRef = RefAttributes<SVGSVGElement>;

export interface ReactRefProp {
	ref?: IconRef;
}

/**
 * Mix of icon properties and SVGSVGElement properties
 */
export type IconProps = IconifyElementProps & IconifyIconProps & ReactRefProp;
