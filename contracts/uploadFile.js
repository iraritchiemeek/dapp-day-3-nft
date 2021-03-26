const pinataApiKey = "3a597f5ffeef7e229270";
const pinataSecretApiKey = "f46587b31eaef6a137f091d49b2d06ac6354293a464f336733976f097e0b5edf";
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

const pinFileToIPFS = async() => {
	const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

	let data = new FormData();

	data.append("file", fs.createReadStream("/Users/iraritchiemeek/Downloads/000016.jpeg"));

	const res = await axios.post(url, data, {
	maxContentLength: "Infinity", 
	headers: {
		"Content-Type": `multipart/form-data; boundary=${data._boundary}`,
		pinata_api_key: pinataApiKey, 
		pinata_secret_api_key: pinataSecretApiKey,
	},
	});

	console.log(res.data);
}

pinFileToIPFS();
