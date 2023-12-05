/**
 * WordPress dependencies
 */
import { registerBlockVariation } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */

const QUERY_VARIATION_NAME = "portfolio-projects";
registerBlockVariation("core/query", {
	name: QUERY_VARIATION_NAME,
	title: "Portfolio Projects Query",
	attributes: {
		namespace: QUERY_VARIATION_NAME,
		query: {
			perPage: 10,
			postType: "portfolio_topic",
		},
		className: "portfolio-query",
		providerNameSlug: QUERY_VARIATION_NAME,
	},
	scope: ["inserter"],
	isActive: ["namespace"],
	innerBlocks: [
		[
			"core/heading",
			{ placeholder: "Section Label", className: "query-heading" },
		],
		[
			"core/post-template",
			{ layout: { type: "grid", columnCount: 3 } },
			[
				["core/post-featured-image", { isLink: true }],
				["core/post-title", { isLink: true }],
			],
		],
	],
});
