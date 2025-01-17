import type { IconifyIconName } from '@iconify/utils/lib/icon/name';
import { stringToIcon, validateIcon } from '@iconify/utils/lib/icon/name';

/**
 * Convert icons list from string/icon mix to icons and validate them
 */
export function listToIcons(
	list: (string | IconifyIconName)[],
	validate = true,
	simpleNames = false
): IconifyIconName[] {
	const result: IconifyIconName[] = [];

	list.forEach((item) => {
		const icon: IconifyIconName =
			typeof item === 'string'
				? (stringToIcon(item, false, simpleNames) as IconifyIconName)
				: item;
		if (!validate || validateIcon(icon, simpleNames)) {
			result.push({
				provider: icon.provider,
				prefix: icon.prefix,
				name: icon.name,
			});
		}
	});

	return result;
}

/**
 * Get all providers
 */
export function getProviders(list: IconifyIconName[]): string[] {
	const providers = Object.create(null) as Record<string, boolean>;
	list.forEach((icon) => {
		providers[icon.provider] = true;
	});
	return Object.keys(providers);
}
