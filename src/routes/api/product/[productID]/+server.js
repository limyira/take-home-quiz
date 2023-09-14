import { categories, products } from '../../../../lib';

export async function GET(request) {
	const { productID } = request.params;

	const orderData = categories[productID];
	let orderDataProductIds = [...orderData.productOrder];
	let orderedProducts = [];
	for (let i = 0; i < orderDataProductIds.length; i++) {
		orderedProducts.push(products[orderDataProductIds[i]]);
	}
	return new Response(JSON.stringify({ orderedProducts, orderData }), {
		headers: {
			'Content-type': 'application/json'
		}
	});
}
