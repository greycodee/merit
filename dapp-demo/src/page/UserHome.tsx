import { useCurrentAccount, useSuiClientQuery } from '@mysten/dapp-kit';
import { Grid, Code, Flex, Card, Inset } from '@radix-ui/themes'

export default function Page() {
    const account = useCurrentAccount();

    const { data, isPending, isError, error, refetch } = useSuiClientQuery(
        "getOwnedObjects",
        {
            owner: account?.address as string,
            filter: {
                StructType: "0x6bcf8a279b69d864376fa0f8dcd7b0e14fa7ed92379a903ecc824de9b43a4b20::puppy::Puppy"
            }
        }
    );

    if (isError) {
        console.log(error);
    }


    return (
        <Flex direction="column" gap="3" className='p-4'>
           
            <h1>我的功德</h1>

            <Grid columns="5" gap="3">
                {/* <span>totalBalance : </span> */}
                {
                    data?.data.map((item: any) => {

                        return (
                            <a href={'https://suiscan.xyz/devnet/object/'+item.data.objectId} target="_blank" rel="noopener noreferrer">
                            <Card className='cursor-pointer' size="2">
                                <Inset clip="padding-box" side="top" pb="current">
                                    <img
                                        src="data:image/jpeg;base64,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"
                                        alt="Bold typography"
                                        style={{
                                            display: 'block',
                                            objectFit: 'inherit',
                                            width: '100%',
                                            height: 140,
                                            backgroundColor: 'var(--gray-5)',
                                        }}
                                    />
                                </Inset>
                                <Code color="orange">{item.data.objectId}</Code>
                            </Card></a>


                        )
                    })

                }
            </Grid>

        </Flex>
    )
}