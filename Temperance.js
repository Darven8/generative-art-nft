const fs = require("fs");
const path = require("path");

// Define the directory where the NFT images are located
const nftDirectory = "/mnt/h/My Drive/Tarot NFT/14. Temperance/14_Temperance_RN_Batched";

// Read the files in the directory and filter out non-image files
const files = fs.readdirSync(nftDirectory).filter((file) => {
  const extension = path.extname(file).toLowerCase();
  return [".jpg", ".jpeg", ".png", ".gif"].includes(extension);
});

// Create metadata JSON files for each NFT
files.forEach((file, index) => {
  const metadata = {
    collection: 'Arcana Mind',
    name: `Temperance #${index + 1}`,
    description: 'Arcana Mind, is a collection of Tarot AI NFTs that embody the essence of the 22 Major Arcana, offering a unique and personalized perspective on each card through an innovative blend of art and technology. Each NFT is a window into the collective unconscious, inviting you to explore the mysteries of the Tarot in a whole new way',
    image: `https://ipfs.io/ipfs/bafybeifmhz7stoeqydw6bvoul4hw2bnsguauleltl7yuamfu4h7wucf3qe/${file}`,
    // Replace QmV5LEUFVNqnbqg8PLv7Ma2H55ThsgvdmMhCGXRMiDYdVR CID with Your Uploaded Images CID
    attributes: [
      {
        trait_type: "Card Number",
        value: "XIV",
      },
      {
        trait_type: "Balance",
        interpretation: "The card represents balance and harmony between different aspects of your life, such as work and play, or your inner and outer selves",
      },
      {
        trait_type: "Moderation",
        intrepretation: "The card also represents moderation and self-control, suggesting that you need to exercise restraint and discipline in your actions and decisions",
      },
      {
        trait_type: "Patience",
        interpretation: "The card also represents patience and perseverance, suggesting that you may need to take a long-term view of your goals and be willing to wait for the right opportunities to arise",
      },
      {  
        trait_type: "Healing",
        interpretation: "The card is also associated with healing and purification, suggesting that you may need to release old patterns or habits that are holding you back and embrace a more positive and healthy approach to life",
      },
      {
        trait_type: "Spiritual Growth",
        interpretation: "The Temperance card can be seen as a symbol of spiritual growth and transformation",
      },
      {
        trait_type: "Overall",
        interpretation: "The Temperance card encourages you to find balance, moderation, and self-control in your life, and to trust in the process of growth and transformation that is unfolding within you",
      }
    ],
  };
  const jsonFileName = path.basename(file, path.extname(file)) + ".json";
  const jsonFilePath = path.join("./json", jsonFileName);
  fs.writeFileSync(jsonFilePath, JSON.stringify(metadata, null, 2));
  console.log(`Created metadata file for ${file}: ${jsonFilePath}`);
});