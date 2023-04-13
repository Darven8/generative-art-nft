const fs = require("fs");
const path = require("path");

// Define the directory where the NFT images are located
const nftDirectory = "/mnt/h/My Drive/Tarot NFT/16. The Tower/16_The_Tower_RN_Batched";

// Read the files in the directory and filter out non-image files
const files = fs.readdirSync(nftDirectory).filter((file) => {
  const extension = path.extname(file).toLowerCase();
  return [".jpg", ".jpeg", ".png", ".gif"].includes(extension);
});

// Create metadata JSON files for each NFT
files.forEach((file, index) => {
  const metadata = {
    collection: 'Arcana Mind',
    name: `The Tower #${index + 1}`,
    description: 'Arcana Mind, is a collection of Tarot AI NFTs that embody the essence of the 22 Major Arcana, offering a unique and personalized perspective on each card through an innovative blend of art and technology. Each NFT is a window into the collective unconscious, inviting you to explore the mysteries of the Tarot in a whole new way',
    image: `https://ipfs.io/ipfs/bafybeigh6hrswmm7mdd6jhkf2c4fiawo6n6rd345liadnm3vcet2kc34ze/${file}`,
    // Replace QmV5LEUFVNqnbqg8PLv7Ma2H55ThsgvdmMhCGXRMiDYdVR CID with Your Uploaded Images CID
    attributes: [
      {
        trait_type: "Card Number",
        value: "XVI",
      },
      {
        trait_type: "Sudden Change",
        interpretation: "The Tower represents sudden and unexpected changes, often brought on by external events",
      },
      {
        trait_type: "Destruction",
        intrepretation: "The Tower is often depicted as a tower being struck by lightning, which symbolizes destruction and upheaval. This destruction may be physical, emotional, or mental",
      },
      {
        trait_type: "Transformation",
        interpretation: "While the Tower can represent destruction, it can also symbolize transformation and rebirth",
      },
      {  
        trait_type: "Liberation",
        interpretation: "The Tower can also represent liberation and freedom",
      },
      {
        trait_type: "Awakening",
        interpretation: "The Tower can serve as a wake-up call or a moment of enlightenment.",
      },
      {
        trait_type: "Overall",
        interpretation: "The Tower is a card that represents sudden and often challenging change, but it can also lead to transformation, liberation, and awakening",
      }
    ],
  };
  const jsonFileName = path.basename(file, path.extname(file)) + ".json";
  const jsonFilePath = path.join("./json", jsonFileName);
  fs.writeFileSync(jsonFilePath, JSON.stringify(metadata, null, 2));
  console.log(`Created metadata file for ${file}: ${jsonFilePath}`);
});