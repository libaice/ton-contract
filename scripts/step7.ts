import { mnemonicToWalletKey } from "@ton/crypto";
import { WalletContractV4 } from "@ton/ton";

async function main() {
    const mnemonic = ""
    const key = await mnemonicToWalletKey(mnemonic.split(" "));
    const wallet = WalletContractV4.create({ publicKey: key.publicKey, workchain: 0 });
    console.log(wallet.address.toString({ testOnly: true }));

    // print wallet workchain
    console.log("workchain:", wallet.address.workChain);
}

main();