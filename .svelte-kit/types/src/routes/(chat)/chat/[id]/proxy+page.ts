// @ts-nocheck
import type { PageLoad } from './$types';
import { loadAppRoute } from '$lib/stores/init';

export const load = ({ fetch }: Parameters<PageLoad>[0]) => loadAppRoute(fetch);
