import React from 'react';
import "./AdminModal.css";
import closeIcon from "../../src/assets/cancel.png";

function AdminModal(props) {
    return (
        <div className='admin-modal'>
            <div className='close-icon' onClick={()=>{props.closeModal()}}>
                <img src={closeIcon} alt="close icon"/>
            </div>
            <div>
            <h2>info@renixinformatics.com</h2>
            </div>
           
        </div>
    )
}

export default AdminModal
