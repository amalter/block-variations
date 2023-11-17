/**
 * WordPress dependencies
 */
import { registerBlockVariation } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */

const MY_VARIATION_NAME = "portfolio-projects";
registerBlockVariation("core/query", {
	name: MY_VARIATION_NAME,
	title: "Portfolio Projects",
	attributes: {
		namespace: MY_VARIATION_NAME,
		query: {
			perPage: 2,
			// pages: 0,
			// offset: 0,
			postType: "portfolio_topic",
			// order: 'desc',
			// orderBy: 'date',
			// author: '',
			// search: '',
			// exclude: [],
			// sticky: '',
			// inherit: false,
		},
	},
	scope: ["inserter"],
	isActive: ["namespace"],
	innerBlocks: [
		["core/post-template", {}, [["core/post-title"], ["core/post-excerpt"]]],
		["core/query-pagination"],
		["core/query-no-results"],
	],
});
