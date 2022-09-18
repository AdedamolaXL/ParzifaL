require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "parzifalsHunt";
const description = "A gamified experience of minting NFTs for fun in search of unique items linked to quest pass-phrases";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

const layerConfigurations = [
  {
    growEditionSizeTo: 100,
    layersOrder: [
      { name: "background" },
      { name: "bottom lid" },
      { name: "top lid" },
      { name: "animals" },  
    ],
  },

  {
    growEditionSizeTo: 200,
    layersOrder: [
      { name: "background" },
      { name: "bottom lid" },
      { name: "top lid" },
      { name: "food" },
    ],
  },

  {
    growEditionSizeTo: 300,
    layersOrder: [
      { name: "background" },
      { name: "bottom lid" },
      { name: "top lid" },
      { name: "object" },
    ],
  },

  {
    growEditionSizeTo: 400,
    layersOrder: [
      { name: "background" },
      { name: "bottom lid" },
      { name: "top lid" },
      { name: "people" },
    ],
  },

  {
    growEditionSizeTo: 500,
    layersOrder: [
      { name: "background" },
      { name: "bottom lid" },
      { name: "top lid" },
      { name: "plants" },
    ],
  },

  {
    growEditionSizeTo: 600,
    layersOrder: [
      { name: "background" },
      { name: "bottom lid" },
      { name: "top lid" },
      { name: "smileys" },
    ],
  },

  {
    growEditionSizeTo: 700,
    layersOrder: [
      { name: "background" },
      { name: "bottom lid" },
      { name: "top lid" },
      { name: "zodiac" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};



// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'rinkeby'; // only rinkeby, polygon, or ethereum

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'parzifalsHunt';
const CONTRACT_SYMBOL = 'pH';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0xAADa3A46D4A94593CaB32484279B86A4AfD149B0';
const TREASURY_ADDRESS = '0x30ba148609c6808f570571140C5D4b7Bf2CBcC12';
const MAX_SUPPLY = 5000; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0.001; // Minting price per NFT. Rinkeby = ETH, Ethereum = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 5; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!
 
// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-09-17T14:55:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = null; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x249aceFBE154F3E8Ec998f181a7Cb4711a729a72"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = []; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "0xb72E3e874901dD63069DA265d68c8B7f7E8f2E98"; // If you want to manually include it



// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK") {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info





module.exports = {
  format,
  baseUri,
  description,
  layerConfigurations,
  shuffleLayerConfigurations,
  debugLogs,
  namePrefix,
  network,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
