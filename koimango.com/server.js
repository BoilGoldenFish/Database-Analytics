const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors');
const data = require('./models/data.js');
// const dataD = require('./models/dataD.js')

mongoose.connect('mongodb://koimango.com/analytics', {useNewUrlParser: true});
//mongoose.Promise = global.Promise;

//const api = require('./routes/api');

const app = express();
const port = 3000;

//app.use('/api', api);

// Configuring body parser middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.static('public'));
// app.use(express.json());

app.post('/static', async (req, res) => {
    const post = new data({
		userAgent: req.body.userAgent,
        language: req.body.language,
        allowCookies: req.body.allowCookies,
        allowJavascript: req.body.allowJavascript,
        screenSize: req.body.screenSize,
        windowSize: req.body.windowSize,
        connection: req.body.connection,
        allowCSS: req.body.allowCSS,
        allowImg: req.body.allowImg
	})
	await post.save()
	res.send(post)
});

app.get('/static', async (req, res) => {
	const posts = await data.find( {'userAgent':{$exists:true}},
		{userAgent: 1,
		language: 1,
		allowCookies: 1,
		allowJavascript: 1,
		screenSize: 1,
		windowSize: 1,
		connection: 1,
		allowCSS: 1,
		allowImg: 1}
	)
	res.send(posts)
});

app.get("/static/:id", async (req, res) => {
	try {
		const post = await data.findOne({ _id: req.params.id })
		res.send(post)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})

// app.put('/static/:id', async (req, res) => {
// 	try {
// 		const post = await data.findOne({ _id: req.params.id })

// 		if (req.body.name) {
// 			post.name = req.body.name
// 		}

// 		await post.save()
// 		res.send(post)
// 	} catch {
// 		res.status(404)
// 		res.send({ error: "Post doesn't exist!" })
// 	}
// });

app.delete('/static/:id', async (req, res) => {
	try {
		await data.deleteOne({ _id: req.params.id })
		res.send('Deleted')
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})

app.post('/perf', async (req, res) => {
    const postD = new data({
        startLoading: req.body.startLoading,
        endLoading: req.body.endLoading,
        totalLoading: req.body.totalLoading,
        move: req.body.move,
        click: req.body.click,
        scroll: req.body.scroll,
        keyup: req.body.keyup,
        keydown: req.body.keydown,
        inactiveStart: req.body.inactiveStart,
        inactivePeriod: req.body.inactivePeriod,
        left: req.body.left,
        enter: req.body.enter,
        page: req.body.page
	})
	await postD.save()
	res.send(postD)
});

app.get('/perf', async (req, res) => {
	const postsD = await data.find( {'page':{$exists:true}},
		{startLoading: 1,
        endLoading: 1,
        totalLoading: 1,
        move: 1,
        click: 1,
        scroll: 1,
        keyup: 1,
        keydown: 1,
        inactiveStart: 1,
        inactivePeriod: 1,
        left: 1,
        enter: 1,
        page: 1}
	)
	res.send(postsD)
});

app.get("/perf/:id", async (req, res) => {
	try {
		const postD = await data.findOne({ _id: req.params.id })
		res.send(postD)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})

// app.put('/perf/:id', async (req, res) => {
// 	try {
// 		const post = await data.findOne({ _id: req.params.id })

// 		if (req.body.name) {
// 			post.name = req.body.name
// 		}

// 		await post.save()
// 		res.send(post)
// 	} catch {
// 		res.status(404)
// 		res.send({ error: "Post doesn't exist!" })
// 	}
// });

app.delete('/perf/:id', async (req, res) => {
	try {
		await data.deleteOne({ _id: req.params.id })
		res.send('Deleted')
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));