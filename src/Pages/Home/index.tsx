import { Container } from '@mui/system';
import { AllNft, Banner } from '../Section';

export default function Home() {

  return (
    <div>
      <Banner/>
      <Container>
        <section id="list">
        <AllNft />
        </section>
      </Container>      
    </div>
  )
}

