import React from 'react';

class ModalComp extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        const closeModal = () => {
            document.querySelector('.edit-modal').classList.toggle("hide-modal");
        }


        return (
            <div className="edit-modal hide-modal">
                <div className="modal-content">
                    <div className="modal-close">
                        <p onClick={closeModal}>X</p>
                    </div>

                    <div className="cart-modal-content">
                        <div className="row inner-content">
                            <div className="content-info">
                                <p>Paisley Man</p>
                                <h1>$21</h1>
                            </div>
                            <div className="color-parent">
                                <p>Paisley</p>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="size-quant">
                                <select name="size">
                                    <option defaultValue="size">SIZE</option>
                                    <option value="size">S</option>
                                    <option value="size">M</option>
                                    <option value="size">L</option>
                                    <option value="size">XL</option>
                                </select>
                                <select name="quant">
                                    <option defaultValue="1">QTY: 1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                            <div className="add">
                                <button>EDIT</button>
                                <p>See product details</p>
                            </div>
                        </div>
                    </div>
                    <div className="cart-modal-image">
                        <img src="src/img/pant.png" alt="tshirt"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalComp;