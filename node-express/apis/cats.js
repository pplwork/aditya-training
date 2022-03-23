const router = require('express').Router(),
	Cats = require('../cats.json');

function* generator() {
	let id = 4;
	while (id < Number.POSITIVE_INFINITY) {
		yield id;
		id++;
	}
}
const gen = generator();

router
	.route('/')
	.get(async (req, res) => {
		const {name, age, breed} = req.query;
		let cats = Cats;

		if (name != null || age != null || breed != null) {
			cats = Cats.filter(
				(cat) =>
					(name && cat.name.toLowerCase().startsWith(name.toLowerCase())) ||
					(age != null && String(cat.age).startsWith(String(age))) ||
					(breed && cat.breed.toLowerCase().startsWith(breed.toLowerCase()))
			);
		}

		return res.status(200).json({cats});
	})
	.post(async (req, res) => {
		const {body} = req;

		if (
			!body.name ||
			!body.age ||
			!body.breed ||
			!(2 <= body.name.length && body.name.length <= 64) ||
			!(2 <= body.breed.length && body.breed.length <= 100) ||
			!(0 < Number(body.age) && Number(body.age) <= 40)
		)
			return res.sendStatus(400);

		const nextId = gen.next();
		if (nextId.done) return res.sendStatus(503);

		body.id = nextId.value;
		Cats.push(body);
		return res.sendStatus(201);
	});

router
	.route('/:id')
	.get(async (req, res) => {
		const {id} = req.params,
			cat = Cats.find((cat) => cat.id === Number(id));
		if (!cat) return res.sendStatus(404);

		return res.status(200).json({cat});
	})
	.put(async (req, res) => {
		const {
				body,
				params: {id},
			} = req,
			catIndex = Cats.findIndex((cat) => cat.id === Number(id));

		if (catIndex === -1) return res.sendStatus(404);

		if (
			(!body.name && !body.age && !body.breed) ||
			!(body.name && (2 <= body.name.length && body.name.length <= 64)) ||
			!(body.age && (0 < Number(body.age) && Number(body.age) <= 40)) ||
			!(body.breed && (2 <= body.breed.length && body.breed.length <= 100))
		)
			return res.sendStatus(400);

		const cat = Cats.find((cat) => cat.id === Number(id));
		cat.name = body.name ?? cat.name;
		cat.age = body.age ?? cat.age;
		cat.breed = body.breed ?? cat.breed;

		Cats[catIndex] = cat;
		return res.sendStatus(200);
	})
	.delete(async (req, res) => {
		const {id} = req.params,
			catIndex = Cats.findIndex((cat) => cat.id === Number(id));

		if (catIndex === -1) return res.sendStatus(404);

		Cats.splice(catIndex, 1);
		return res.sendStatus(202);
	});

module.exports = router;
