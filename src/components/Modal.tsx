import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { FormatNumber } from '../Util/formatNumber';
import {BsGlobe} from 'react-icons/bs';
import { HashLink } from 'react-router-hash-link';


interface IProps {
    image: string,
    name: string,
    floor: string,
    unit: string,
    description: string,
    url: string,
    userName: string,
    category: string,
    created: string,
    chain: string,
    item: string,
    volume: string,
    website:string

}

let NftModal: React.FC<IProps> = (props: IProps) => {


    return (
        <div >
            <section className='bg-gray'>
                <div className=''>
                    <Grid container spacing={1} className='content-flex'>
                        <Grid item sm={4} xs={4} >
                            <img src={props.image} alt='Altura' width='200' />
                        </Grid>
                        <Grid item xs={4}>
                            <div className='d-flex justify-content-between'>
                            <h4 className='font-w-700'>{props.name}</h4>
                            <HashLink to={props.website}>
                            <BsGlobe />
                            </HashLink>                          
                            </div>                          
                            <div className='d-flex'>
                                <div>
                                    <p className='py-2 font-w-700 text-gray'>{props.userName}</p>
                                </div>
                                <div>
                                    {props.category === "" ? "" :
                                        <div className='pill radius-25 ms-3'>
                                            <p>Category : <span className='px-3'>{props.category}</span></p>
                                        </div>
                                    }

                                </div>
                            </div>

                            <p className='font-w-400'>{props.description} ​​</p>
                            <div>
                                <h4>Total Volume</h4>
                                <p>{FormatNumber(props.volume)} {props.unit}</p>
                            </div>
                            <div>
                                <h4>Floor Price</h4>
                                <p>{props.floor} {props.unit}</p>
                            </div>
                            <section className=''>
                                <div className='d-flex'>
                                    <div className='me-4'>
                                        <h4>Items</h4>
                                        <p>{props.item} </p>
                                    </div>
                                    <div className='me-4'>
                                        <h4>Chain</h4>
                                        <p>{props.chain} </p>
                                    </div>
                                    <div className='me-4'>
                                        <h4>Date Created</h4>
                                        <p>{props.created}</p>
                                    </div>
                                </div>
                            </section>
                        </Grid>
                    </Grid>
                </div>
            </section>
            <div className='pb-5 mt-3 text-center'>
                <Button href={props.url} size="large" variant="contained" className="px-5 py-3 radius-25 btn-primary-custom">Buy</Button>
            </div>
        </div>
    );
}
export default NftModal;