import { payments, networks } from 'bitcoinjs-lib';
import * as bip32 from 'bip32';

// example extPubkey base58 string
export const extPubkeys: string[] = [
  process.env.EXT_PUB_KEY_BASE58_1,
  process.env.EXT_PUB_KEY_BASE58_2,
  process.env.EXT_PUB_KEY_BASE58_3
];

// generate derived child extended public key
export function generateChildPubkeyBuffer(extKeyStr: string, index: number): Buffer {
  const extkey = bip32.fromBase58(extKeyStr, networks.testnet);
  return extkey.derive(index).publicKey;
}

// generate derived child extended public key
export function generateChildPubkeyBase58(extKeyStr: string, index: number): string {
  const extkey = bip32.fromBase58(extKeyStr, networks.testnet);
  return extkey.derive(index).toBase58();
}

export function generateMultisigAddress(m: number, pubkeys: Buffer[]): string {
  return payments.p2sh({network: networks.testnet,
    redeem: payments.p2wsh({network: networks.testnet,
      redeem: payments.p2ms({network: networks.testnet,
        m, pubkeys,
      }),
    }),
  }).address;
}
