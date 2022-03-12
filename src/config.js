const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "CryptoHunkz";
const description = "7777 randomly generated CryptoHunkz coming to ";
const baseUri = "ipfs://NewUriToReplace";


// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 1,
    layersOrder: [
      { name: "Legendary" },
    ],
  },
  {
    growEditionSizeTo: 61,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Accessory" },
      { name: "Neck" },
      { name: "Torso" },
      { name: "Facial Hair" },
      { name: "Head" },
      { name: "Eyes" },
      { name: "Mouth" }
    ],
  },
  {
    growEditionSizeTo: 69,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Accessory" },
      { name: "Neck" },
      { name: "Torso" },
      { name: "Mask" },
      { name: "Head" },
      { name: "Eyes" },
    ],
  },
  {
    growEditionSizeTo: 87,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Facial Hair"},
      { name: "Eyes" },
      { name: "Hoodie"},
      { name: "Mouth" }
    ]
  },
  {
    growEditionSizeTo: 100,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Mask" },
      { name: "Eyes" },
      { name: "Hoodie"},
    ]
  }
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 720,
  height: 720,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  gif,
  preview_gif,
};
