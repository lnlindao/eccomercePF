const { Cart, Product, Item } = require('../../db');
const router = require("express").Router();


router.put('/', async (req, res, next) => {

	let { userId, productId, size } = req.body;
	try {
		let cart = await Cart.findOne({
			where: {
				userId: userId,
				status: 'Active',
			},
			include: {
				model: Item,
			},
		});

    let product = await Item.findOne({
      where:{
				size: size.toUpperCase(),
        productId: productId
				
      }
    })
		
    let newPrice = cart.totalPrice - product.price;
    let newUnits = product.units - 1;
		console.log(product)
    await cart.update({
			totalPrice: newPrice,
		});

		await product.update({
			units: newUnits,
		});
    
    return res.send(product);

	} catch (err) {
		next(err);
	}
});

module.exports = router;