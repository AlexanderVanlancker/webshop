import React, {useState} from 'react';
import {Affix, Col, Row} from "antd";
import {BulbTwoTone} from "@ant-design/icons";

const Info = () => {
    const [top, setTop] = useState(10);
    const [modal1Visible, toggleModal] = useState(true);

    return (
        <Affix  style={{ position: 'absolute', top: 10, right: 30, fontSize: 25}} offsetTop={top}>
            <Row className={"information"} justify="space-around" onClick={() => {toggleModal(true)}}>
                <Col style={{color: '#1890ff'}} span={4}>
                    info
                </Col>
                <Col span={4} offset={8}>
                    <BulbTwoTone />
                </Col>
            </Row>
        </Affix>
    );
};

export default Info;