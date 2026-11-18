
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/(chat)" | "/" | "/(chat)/chat" | "/(chat)/chat/[id]" | "/mcp-servers" | "/models" | "/search" | "/settings";
		RouteParams(): {
			"/(chat)/chat/[id]": { id: string }
		};
		LayoutParams(): {
			"/(chat)": { id?: string | undefined };
			"/": { id?: string | undefined };
			"/(chat)/chat": { id?: string | undefined };
			"/(chat)/chat/[id]": { id: string };
			"/mcp-servers": Record<string, never>;
			"/models": Record<string, never>;
			"/search": Record<string, never>;
			"/settings": Record<string, never>
		};
		Pathname(): "/" | `/chat/${string}` & {} | "/mcp-servers" | "/models" | "/search" | "/settings";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/recommended-mcp/context7.png" | "/recommended-mcp/exa.ico" | "/recommended-mcp/github-dark.png" | "/recommended-mcp/github-light.png" | "/recommended-mcp/huggingface.ico" | string & {};
	}
}