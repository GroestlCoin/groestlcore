var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('f9beb4d4'),
  addressVersion: 0x24,
  privKeyVersion: 0x80,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('2390633b70f062cb3a3d6814b67e29a80d9d7581db0bcc494d597c92c50a0000'),
    merkle_root: hex('bb2866aaca46c4428ad08b57bc9d1493abaf64724b6c3052a7c8f959df68e93c'),
    height: 0,
    nonce: 220035,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1395342829,
    bits: 0x1e0fffff,
  },
  dnsSeeds: [
    'groestlcoin.org',
    'jswallet.groestlcoin.org',
    'electrum1.groestlcoin.org',
    'electrum2.groestlcoin.org'
  ],
  defaultClientPort: 1331
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('36cdf2dcb7556287282a05c064012323bae663c16ed3cd9898fc50bbff000000'),
    merkle_root: hex('bb2866aaca46c4428ad08b57bc9d1493abaf64724b6c3052a7c8f959df68e93c'),
    height: 0,
    nonce: 6556309,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1440000002,
    bits: 0x1e00ffff,
  },
  dnsSeeds: [
    'testnet1.groestlcoin.org',
    'testnet2.groestlcoin.org',
    'testp2pool.groestlcoin.org',
    'testp2pool2.groestlcoin.org' 
  ],
  defaultClientPort: 17777
};
