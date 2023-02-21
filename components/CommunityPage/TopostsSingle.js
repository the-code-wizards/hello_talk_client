import React, { useState } from 'react';
import Modal from './Modal';

const TopostsSingle = ({ singlePost, i }) => {

    const [showModal, setShowModal] = useState(false);
    return (
        <div className='mt-2 shadow-lg'>
            <h1 onClick={() => setShowModal(true)}
                className="cursor-pointer p-2 border border-inherit rounded-lg hover:border-2 hover:border-[#005C85]"
            >
                <span>{i + 1}.{" "}</span>
                {singlePost.title}</h1>

            {showModal ? (
                <>
                    <Modal
                        singlePost={singlePost}
                        setShowModal={setShowModal}
                    ></Modal>
                </>
            ) : null}
        </div>
    );
};

export default TopostsSingle;