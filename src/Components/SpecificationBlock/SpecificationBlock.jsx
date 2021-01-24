import React from 'react';
import './SpecificationBlock.css';
import {Table, Image} from 'semantic-ui-react';
import logo1 from '../../Assets/SpecificationBlockImage/clock_ster.svg';
import logo2 from '../../Assets/SpecificationBlockImage/logo2.svg';

function SpecificationBlock() {
    return (
        <div>
            <div className='specific-block_main_text'>
                <p className='specific-block_title'>Что мы делаем?</p>
            </div>
            <Table className='specific-block_table' basic='very'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell className='specific-block_table_header1'>
                            <p><Image src={logo1}/></p>
                            <p className='specific-block_table_header_text'>Учет рабочего времени сотрудников для МСБ</p>
                        </Table.HeaderCell>
                        <Table.HeaderCell className='specific-block_table_header2'>
                            <p><Image src={logo2}/></p>
                            <p className='specific-block_table_header_text'>Система учета и контроля доступа сотрудников
                                для крупных предприятий</p>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell className='specific-block_table_body1'>
                            <div className='specific-block_table_body1_bottom-border'>
                                <span className='transparent_number'>1</span>
                                <p className='specific-block_table_text'>Отметки на приход и уход через мобильное
                                    приложение</p>
                            </div>
                        </Table.Cell>
                        <Table.Cell className='specific-block_table_body2'>
                            <div className='specific-block_table_body1_bottom-border'>
                                <span className='transparent_number'>1</span>
                                <p className='specific-block_table_text'>Распознавание лиц меньше 1 секунды
                                    (с маской или без)</p>
                            </div>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell className='specific-block_table_body1'>
                            <div className='specific-block_table_body1_bottom-border'>
                                <span className='transparent_number'>2</span>
                                <p className='specific-block_table_text'>Быстрое и удобное создание рабочих
                                    графиков</p>
                            </div>
                        </Table.Cell>
                        <Table.Cell className='specific-block_table_body2'>
                            <div className='specific-block_table_body1_bottom-border'>
                                <span className='transparent_number'>2</span>
                                <p className='specific-block_table_text'>Доступ в админ панель из любой точки мира</p>
                            </div>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell className='specific-block_table_body1'>
                            <div className='specific-block_table_body1_bottom-border'>
                                <span className='transparent_number'>3</span>
                                <p className='specific-block_table_text'>Автоматическая отправка отчетов на email</p>
                            </div>
                        </Table.Cell>
                        <Table.Cell className='specific-block_table_body2'>
                            <div className='specific-block_table_body1_bottom-border'>
                                <span className='transparent_number'>3</span>
                                <p className='specific-block_table_text'>Интеграция с любым турникетом или
                                    магнитным замком</p>
                            </div>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell className='specific-block_table_body1'>
                            <div>
                                <span className='transparent_number'>4</span>
                                <p className='specific-block_table_text'>Настенный терминал  с распознаванием лиц
                                    (опционально)</p>
                            </div>
                        </Table.Cell>
                        <Table.Cell className='specific-block_table_body2'>
                            <div>
                                <span className='transparent_number'>4</span>
                                <p className='specific-block_table_text'>Измерение температуры тела сотрудника
                                    (опционально)</p>
                            </div>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    );
}


export default SpecificationBlock;