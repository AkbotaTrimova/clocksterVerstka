import React from 'react';
import './ContactBlock.css';
import {Button, Grid, Image, GridRow} from "semantic-ui-react";
import wp from '../../Assets/InfoBlockImage/wpicon.svg'

function ContactBlock() {
    return (
        <div>
            <div>
                <Grid className='contact-block_colorful-back'>
                    <GridRow className='contact-block_grid'>
                        <div>
                            <p className='contact-block_grid-text'>Готовы <br/>
                                начать работать?</p>
                        </div>
                        <div className='contact-block_whatsapp'>
                            <a href='https://api.whatsapp.com/send?phone=77054290379&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%20%D0%91%D0%BE%D1%82%D0%B0%2C%20%D0%B2%D1%8B%20%D0%BF%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D1%8B%20%D0%B2%20Clockster'>
                                <Button className='contact-block_whatsapp_button'>
                                    <Image src={wp}/>
                                    <span className='contact-block_whatsapp_button_text'>Написать в
                                Whatsapp</span>
                                </Button>
                            </a>
                        </div>
                    </GridRow>
                </Grid>
                <div className='contact-block_colorful-back2'>
                    <div className='contact-block_colorful-back2_container'>
                        <span className='contact-block_colorful-back2_text'>Звоните: <a href='tel: +7 747 860 87 19'>+7 747 860 87 19</a></span>
                    </div>
                    <div className='contact-block_colorful-back2_container'>
                        <span className='contact-block_colorful-back2_text'>Пишите: <a
                            href='mailto: info@clockster.com'>info@clockster.com</a></span>
                    </div>
                    <div className='contact-block_colorful-back2_container'>
                        <span className='contact-block_colorful-back2_text2'>Заходите: Мангилик Ел 55/8,Корпоративный
павильон С 4.6; здание «Астана hub», офис 40
Нур-Султан (Астана), Казахстан</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactBlock;
