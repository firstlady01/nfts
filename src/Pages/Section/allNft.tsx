import Grid from '@mui/material/Grid';
import { useReactState } from '../../Util/useReactState';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Nfts } from '../../Util/listNft';
import { FormatNumber } from '../../Util/formatNumber';
import { CardTemplate, NftModal } from '../../components';

export default function AllNft(){
    const state = useReactState({
        show: false,
        details: {}
      });
      const closeModal = () =>{
        state.show =false;
      }
    const openModal = (text: number) => {
        state.show =true;
    
        const nftDetail = Nfts.find(x => x.id === text);
        state.details = nftDetail;
    
      }
    return(
        <>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Nfts.map((nft, i) => (
              <Grid xs={2} sm={4} md={4} key={i}>
                <CardTemplate onclick={() => openModal(nft.id as number)} image={nft.image}
                  volume={FormatNumber(nft.volume)}
                  name={nft.name} floor={nft.floor} unit={nft.unit} />
              </Grid>
            ))}
          </Grid>
          <Modal
        open={state.show}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  className="modal-container">
          <NftModal name={state.details.name}
            image={state.details.image}
            description={state.details.description}
            userName={state.details.userName}
            category={state.details.category}
            floor={state.details.floor}
            unit={state.details.unit}
            created={state.details.dateCreated}
            chain={state.details.chain}
            item={state.details.items}
            volume={state.details.volume}
            website= {state.details.website}
            url={state.details.url} />
        </Box>
      </Modal>
        </>
    )
}