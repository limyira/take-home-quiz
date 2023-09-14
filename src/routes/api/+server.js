import { categoryOrder, categories } from '../../lib';

export async function GET() {
	return new Response(JSON.stringify({ categories, categoryOrder }), {
		headers: {
			'Content-type': 'application/json'
		}
	});
}
