import React, { MouseEventHandler, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface IState { }
interface IProps {
    image: string,
    name: string,
    floor: string,
    volume: string,
    unit: string,
    onclick: MouseEventHandler<HTMLButtonElement>
}

let CardTemplate: React.FC<IProps> = (props: IProps) => {

   
    return (
        <React.Fragment>
            <>
                <Card style={{ width: '22rem' }} className="card-container mb-5"  onClick={props.onclick}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image={props.image}
                            alt="altura"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {props.name}
                            </Typography>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <Typography variant="body2" color="text.secondary">
                                        Floor
                                    </Typography>
                                    <p>{props.floor} {props.unit}</p>
                                </div>
                                <div>
                                    <Typography variant="body2" color="text.secondary">
                                        24H VOLUME
                                    </Typography>
                                    <p>{props.volume} {props.unit}</p>
                                </div>
                            </div>
                        </CardContent>
                    </CardActionArea>                
                </Card>
            </>
        </React.Fragment>
    )
};

export default CardTemplate;

