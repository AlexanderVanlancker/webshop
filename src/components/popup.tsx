import React, {useState} from 'react';
import {Modal} from "antd";

const Popup = ({title, toggleModal}:any) => {
    const info = () => {Modal.info({
        title: title,
        content:
        <>
            <div>- react router</div>
            <div>- antd design</div>
        </>,
        onOk() {toggleModal(false)},
    });}

    return (
        <h1>test</h1>
    );
};

export default Popup;