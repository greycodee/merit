import { useState } from 'react';
import { useCurrentAccount, useSuiClientQuery ,useSignAndExecuteTransaction} from '@mysten/dapp-kit';

import { Transaction } from '@mysten/sui/transactions';
import { bcs } from '@mysten/sui/bcs';

export default function Muyu() {
    const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransaction();
    const [digest, setDigest] = useState('');
    const account = useCurrentAccount();

    const { data, isPending, error } = useSuiClientQuery(
        "getAllBalances",
        {
            owner: account?.address as string,
        },
        {
            enabled: !!account,
        },
    );



    if (error) {
        return <span>Error: {error.message}</span>;
    }

    if (isPending || !data) {
        return <span>Loading...</span>;
    }

    // call mint_and_transfer with tx.moveCall
    /**
     * 
     * sui client call --package 0x2 \
--module coin \
--function mint_and_transfer \
--type-args '0xe25a02601bf61fabf39911ebecd2c3bd87850e34555a6e34aa12ffd453861096::greycoin::GREYCOIN' \
--args 0xba4d15b2e85ceabef004949777c7fb05471de13937f4bb832615fa177c3b45ec 100000000000 0xb9bad8d37c0391695b58c15d788fe900653c10ffac3c95b07d25a1e7d23fcc4b

public entry fun mint_and_transfer<T>(c: &mut coin::TreasuryCap<T>, amount: u64, recipient: address, ctx: &mut tx_context::TxContext)

     * 
     */



    const mintAndTransfer = () => {
        const tx = new Transaction();
        // tx.moveCall({
        //     target: `0xe3f8da279ccf0c84f75c2d330df2adbe18ec968b1d55558c53e65868ec3f7f8c::puppy::mint2`,

        // });
        tx.setGasBudget(100000000);
        tx.moveCall({
            package: '0x6bcf8a279b69d864376fa0f8dcd7b0e14fa7ed92379a903ecc824de9b43a4b20',
            module: 'puppy',
            function: 'mint',
            arguments: [
                tx.pure.string('0x2'),
                tx.pure.vector('u8', [0, 0, 0, 0, 0, 0, 0, 0]),
                tx.pure.string('0x2'),
            ],
        });

        signAndExecuteTransaction(
            {
                transaction: tx,
                chain: 'sui:devnet',
            },
            {
                onSuccess: (result) => {
                    console.log('executed transaction', result);
                    setDigest(result.digest);
                },
                onError: (error) => {
                    console.error('error executing transaction', error);
                }
            },
        );
    }


    return (
        <div>
            <button onClick={mintAndTransfer} >Get Coin</button>
            <div>
                <span>digest : </span>
                <span>{digest}</span>
            </div>
            {!account && <div>No account connected</div>}
            {account && (
                <div>
                    <h2>Current account:</h2>
                    <div>Address: {account.address}</div>
                </div>
            )}
            <div>
                {/* <span>totalBalance : </span> */}
                {
                    data.map((item: any, index: number) => {
                        return (
                            <div key={index}>
                                <p>Token : {item.coinType}</p>
                                <p>Balance : {item.totalBalance}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}