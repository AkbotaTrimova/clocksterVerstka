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
                            <div className='info-block_description_wp'>
                                <a href='https://api.whatsapp.com/send?phone=77054290379&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%20%D0%91%D0%BE%D1%82%D0%B0%2C%20%D0%B2%D1%8B%20%D0%BF%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D1%8B%20%D0%B2%20Clockster'>
                                    <span className='info-block_description_wp_icon'><span> </span></span>
                                    <span className='info-block_description_wp_text'>Написать в Whatsapp</span>
                                </a>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

export default InfoBlock;
