const { Router } = require('express');
const router = Router();

const User = require('../models/User');

const jwt = require('jsonwebtoken');




router.get("/", (req, res) => { 
    res.send("Hello world") 
});

router.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    const newUser = new User({ email, password });
    await newUser.save();

    const token = jwt.sign({ _id: newUser._id }, 'secretKey');
    res.status(200).json({ token });
}
);

router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(401).send("The email doesn't exist");
    if (user.password !== password) res.status(401).send("Wrong password");

    const token = jwt.sign({ _id: user._id }, 'secretKey');
    return res.status(200).json({ token });
}
);

router.get('/tasks', (req, res) => {
    res.json([
        {
            _id: '1',
            name: "Task one",
            description: 'Public task',
            date: "2021-07-09T22:26:22.523Z"
        },
        {
            _id: '2',
            name: "Task two",
            description: 'Public task',
            date: "2021-07-09T22:26:22.523Z"
        },
        {
            _id: '3',
            name: "Task three",
            description: 'Public task',
            date: "2021-07-09T22:26:22.523Z"
        },
    ])
});

router.get('/private-tasks', verifyToken, (req, res) => {
    res.json([
        {
            _id: '1',
            name: "Task one",
            description: 'Private task',
            date: "2021-07-09T22:26:22.523Z"
        },
        {
            _id: '2',
            name: "Task two",
            description: 'Private task',
            date: "2021-07-09T22:26:22.523Z"
        },
        {
            _id: '3',
            name: "Task three",
            description: 'Private task',
            date: "2021-07-09T22:26:22.523Z"
        },
    ])
});


async function verifyToken(req, res, next) {
	try {
		if (!req.headers.authorization) {
			return res.status(401).send('Unauhtorized Request');
		}
		let token = req.headers.authorization.split(' ')[1];
		if (token === 'null') {
			return res.status(401).send('Unauhtorized Request');
		}

		const payload = await jwt.verify(token, 'secretkey');
		if (!payload) {
			return res.status(401).send('Unauhtorized Request');
		}
		req.userId = payload._id;
		next();
	} catch(e) {
		//console.log(e)
		return res.status(401).send('Unauhtorized Request');
	}
}

module.exports = router;
