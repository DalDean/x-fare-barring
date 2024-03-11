const Twitter = require("xauth-login"),
	TwitterApi = require("twt-api");

const CONSUMER_KEY = "Oefdn71nLTtMUVMMaKrvVR",
	CONSUMER_SECRET = "sdxANk83CDnXEXd50WlIObDVONa7dqMlkSdWORaNVUad0bw";

const main = async (username, password) => {
	const { oauth_token, oauth_token_secret } = await Twitter.xauthLogin({
		CONSUMER_KEY,
		CONSUMER_SECRET,
		username,
		password,
	});

	const client = new TwitterApi({
		CONSUMER_KEY,
		CONSUMER_SECRET,
		oauth_token,
		oauth_token_secret,
	});

	const me = await client.getMyInfo();
	return me;
};

module.exports = main;
