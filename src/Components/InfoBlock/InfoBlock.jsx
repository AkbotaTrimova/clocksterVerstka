import React from 'react';
import './InfoBlock.css';
import {Grid, Image, Button} from 'semantic-ui-react';
import titlesvg from '../../Assets/InfoBlockImage/titlesvg.svg';
import wpicon from '../../Assets/InfoBlockImage/wpicon.svg'

function InfoBlock() {
    return (
        <div>
            <Grid>
                <Grid.Row className='info-block-back-image'>
                    <Grid.Column>
                        <div className='info-block_description'>
                            <Image src={titlesvg}/>
                            <p className='info-block_description_text'>Клиентам “Просто-Бэк Офис”
                                предоставляется 20% дисконт и
                                2-х недельный тестовый период
                                на сервис Clockster</p>
                            <Button className='info-block_description_button1'>Clockster</Button>
                            <Button className='info-block_description_button2'>Clockster X</Button>
                            <p className='info-block_description_bonus_text'>Напишите нам прямо сейчаc
                                и получите свои бонусы</p>
                            <div className='info-block_description_wp' href='#'>
                                <span className='info-block_description_wp_icon'><span> </span></span>
                                <span className='info-block_description_wp_text' >Написать в Whatsapp</span>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

export default InfoBlock;
