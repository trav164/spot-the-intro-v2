// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	interface Bearer {
		access_token: string;
		token_type: string;
		expires_in: number;
	}
}

export { };
