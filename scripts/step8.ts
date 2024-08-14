import { getHttpEndpoint } from "@orbs-network/ton-access";
import { mnemonicToWalletKey } from "@ton/crypto";
import { WalletContractV4, TonClient, fromNano, Address } from "@ton/ton";


async function main() {
    const endpoint = await getHttpEndpoint({ network: "mainnet" });
    const client = new TonClient({ endpoint });   

    const address = "UQADyTLHHkylyNZ5D20yOz8-cmJIkR3YutFHU3daMbscwQLJ";
    const balance = await client.getBalance(Address.parse(address));
    console.log("balance:", fromNano(balance));
}

main();