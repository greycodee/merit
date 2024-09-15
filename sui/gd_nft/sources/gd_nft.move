
module gd_nft::gdNFT {
    use std::string::{String};
    use sui::event;


    public struct GDNFT has key, store {
        id: UID,
        name: String,
        traits: vector<String>,
        url: String,
    }

  
    public struct GDNFTMinted has copy, drop {
        gd_id: ID,
        minted_by: address,
    }

    public  fun mint(
        name: String,
        traits: vector<String>,
        url: String,
        ctx: &mut TxContext
    ) {
        let id = object::new(ctx);

        event::emit(GDNFTMinted {
            gd_id: id.to_inner(),
            minted_by: ctx.sender(),
        });
        let nft = GDNFT { id, name, traits, url };
        transfer::public_transfer(nft, ctx.sender());
    }


    public fun add_trait(gdnft: &mut GDNFT, trait: String) {
        gdnft.traits.push_back(trait);
    }

    public fun set_url(gdnft: &mut GDNFT, url: String) {
        gdnft.url = url;
    }

    public fun destroy(gdnft: GDNFT) {
        let GDNFT { id, url: _, name: _, traits: _ } = gdnft;
        id.delete()
    }


    public fun name(gdnft: &GDNFT): String { gdnft.name }

    public fun traits(gdnft: &GDNFT): &vector<String> { &gdnft.traits }

    public fun url(gdnft: &GDNFT): String { gdnft.url }
}
