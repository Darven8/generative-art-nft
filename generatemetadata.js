const fs = require("fs");
const path = require("path");

// Define the directory where the NFT images are located
const nftDirectory = "/mnt/h/My Drive/Tarot NFT/11. Justice/11_Justice_Batched";

// Read the files in the directory and filter out non-image files
const files = fs.readdirSync(nftDirectory).filter((file) => {
  const extension = path.extname(file).toLowerCase();
  return [".jpg", ".jpeg", ".png", ".gif"].includes(extension);
});

// Create metadata JSON files for each NFT
files.forEach((file, index) => {
  const metadata = {
    collection: 'Arcana Mind',
    name: `Justice #${index + 1}`,
    description: 'Arcana Mind, is a collection of Tarot AI NFTs that embody the essence of the 22 Major Arcana, offering a unique and personalized perspective on each card through an innovative blend of art and technology. Each NFT is a window into the collective unconscious, inviting you to explore the mysteries of the Tarot in a whole new way',
    image: `https://ipfs.io/ipfs/bafybeigo54xe67e4gxcoqgeel7oerbitepssqb7xned4ogzrlhjayfp75i/${file}`,
    // Replace QmV5LEUFVNqnbqg8PLv7Ma2H55ThsgvdmMhCGXRMiDYdVR CID with Your Uploaded Images CID
    attributes: [
      {
        trait_type: "Card Number",
        value: "XI",
      },
      {
        trait_type: "Fairness",
        interpretation: "The Justice card is often associated with the idea of balance and fairness, suggesting that justice will be served in a situation. It represents the idea of cause and effect, suggesting that every action has consequences.",
      },
      {
        trait_type: "Truth",
        intrepretation: "The Justice card is also associated with truth and clarity, suggesting that the truth will come out and that justice will be done. It suggests that honesty is the best policy and that hiding the truth will not serve you well",
      },
      {
        trait_type: "Impartiality",
        interpretation: "The Justice card also represents impartiality and objectivity. It suggests that decisions should be made based on logic and reason, rather than emotions or biases",
      },
      {
        trait_type: "Responsibility",
        interpretation: "The Justice card also represents responsibility and accountability. It suggests that you will be held accountable for your actions and that you should take responsibility for your decisions",
      },
      {
        trait_type: "Legal Matters",
        intrepretation: "The Justice card is often associated with legal matters, suggesting that you may be involved in a legal dispute or that you may need to seek legal advice"
      },
      {
        trait_type: "Overall",
        interpretation: "The Justice card suggests that you should strive for fairness, balance, and objectivity in your actions and decisions. It reminds you that the truth will ultimately prevail and that you should take responsibility for your actions",
      },
    ],
  };
  const jsonFileName = path.basename(file, path.extname(file)) + ".json";
  const jsonFilePath = path.join("./json", jsonFileName);
  fs.writeFileSync(jsonFilePath, JSON.stringify(metadata, null, 2));
  console.log(`Created metadata file for ${file}: ${jsonFilePath}`);
});