import bg from '../../assets/img/ezgif.com-gif-maker.webp';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { HashLink } from 'react-router-hash-link';

export default function Banner(){

    return(<>
    <div className='banner'>
        <img src={bg} />
        <div>
          <p>Welcome to <br />Bolu's world</p>
          <div className='banner-icon text-end'>
            <HashLink to="#list" className="zoom">
              <BsFillArrowDownCircleFill className='text-white' href="" />
            </HashLink>
          </div>

        </div>
      </div>
    </>)
}