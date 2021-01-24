import React from 'react';
import './ClientsBlock.css';
import {Grid, Image} from "semantic-ui-react";
import p1 from '../../Assets/ClientsBlockImage/p1.jpg';
import p2 from '../../Assets/ClientsBlockImage/p2.jpg';
import p3 from '../../Assets/ClientsBlockImage/p3.jpg';
import p4 from '../../Assets/ClientsBlockImage/p4.jpg';
import p5 from '../../Assets/ClientsBlockImage/p5.jpg';
import p6 from '../../Assets/ClientsBlockImage/p6.jpg';
import p7 from '../../Assets/ClientsBlockImage/p7.jpg';
import p8 from '../../Assets/ClientsBlockImage/p8.jpg';
import p9 from '../../Assets/ClientsBlockImage/p9.jpg';
import p10 from '../../Assets/ClientsBlockImage/p10.jpg';
import p11 from '../../Assets/ClientsBlockImage/p11.jpg';
import p12 from '../../Assets/ClientsBlockImage/p12.jpg';
import p13 from '../../Assets/ClientsBlockImage/p13.jpg';
import p14 from '../../Assets/ClientsBlockImage/p14.jpg';
import p15 from '../../Assets/ClientsBlockImage/p15.jpg';
import p16 from '../../Assets/ClientsBlockImage/p16.jpg';


function ClientsBlock() {
    return (
        <div>
            <div className='specific-block_main_text'>
                <p className='specific-block_title'>Наши клиенты</p>
            </div>
            <Grid>
                <Grid.Row className='clients-block_grid' columns={16}>
                    <Image src={p1}/>
                    <Image src={p2}/>
                    <Image src={p3}/>
                    <Image src={p4}/>
                    <Image src={p5}/>
                    <Image src={p6}/>
                    <Image src={p7}/>
                    <Image src={p8}/>
                </Grid.Row>
                <Grid.Row className='clients-block_grid top-20' columns={16}>
                    <Image src={p9}/>
                    <Image src={p10}/>
                    <Image src={p11}/>
                    <Image src={p12}/>
                    <Image src={p13}/>
                    <Image src={p14}/>
                    <Image src={p15}/>
                    <Image src={p16}/>
                </Grid.Row>
            </Grid>
        </div>
    );
}

export default ClientsBlock;
