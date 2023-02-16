export default function handler(req, res) {
    // get the tokenId from the query params
    const tokenId = req.query.tokenId;
    // As all the images are uploaded on github, we can extract the images from github directly.
    const image_url =
      "https://raw.githubusercontent.com/RaveenaBhasin/NFT-Collection/master/cryptodevs/public/cryptodevs/";
    res.status(200).json({
      name: "Crypto Dev #" + tokenId,
      description: "Crypto Dev is a collection of developers in crypto",
      image: image_url + tokenId + ".svg",
    });
  }