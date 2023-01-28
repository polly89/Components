import{useState} from 'react';
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage(){
    const[showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }
    const actionBar = <div>
        <Button onClick={handleClose} primary>I Accept</Button>
    </div>
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here's an important agreement for you to accept. 
        </p>
        </Modal>

    return(
        <div>
            <Button onClick={handleClick} primary>
                OpenModal
            </Button>
            {showModal && modal}
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra iaculis orci. Nulla sodales aliquet commodo. Phasellus porta semper ligula nec pharetra. Suspendisse dapibus eu libero euismod mollis. Morbi sed justo vitae ante cursus vehicula. Etiam sit amet egestas velit. Quisque id interdum magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Vivamus sem metus, placerat vel lobortis blandit, luctus id lacus. Sed efficitur massa quis lacus fringilla maximus. Pellentesque non ullamcorper ante, vel molestie enim.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra iaculis orci. Nulla sodales aliquet commodo. Phasellus porta semper ligula nec pharetra. Suspendisse dapibus eu libero euismod mollis. Morbi sed justo vitae ante cursus vehicula. Etiam sit amet egestas velit. Quisque id interdum magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Vivamus sem metus, placerat vel lobortis blandit, luctus id lacus. Sed efficitur massa quis lacus fringilla maximus. Pellentesque non ullamcorper ante, vel molestie enim.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra iaculis orci. Nulla sodales aliquet commodo. Phasellus porta semper ligula nec pharetra. Suspendisse dapibus eu libero euismod mollis. Morbi sed justo vitae ante cursus vehicula. Etiam sit amet egestas velit. Quisque id interdum magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Vivamus sem metus, placerat vel lobortis blandit, luctus id lacus. Sed efficitur massa quis lacus fringilla maximus. Pellentesque non ullamcorper ante, vel molestie enim.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra iaculis orci. Nulla sodales aliquet commodo. Phasellus porta semper ligula nec pharetra. Suspendisse dapibus eu libero euismod mollis. Morbi sed justo vitae ante cursus vehicula. Etiam sit amet egestas velit. Quisque id interdum magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Vivamus sem metus, placerat vel lobortis blandit, luctus id lacus. Sed efficitur massa quis lacus fringilla maximus. Pellentesque non ullamcorper ante, vel molestie enim.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra iaculis orci. Nulla sodales aliquet commodo. Phasellus porta semper ligula nec pharetra. Suspendisse dapibus eu libero euismod mollis. Morbi sed justo vitae ante cursus vehicula. Etiam sit amet egestas velit. Quisque id interdum magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Vivamus sem metus, placerat vel lobortis blandit, luctus id lacus. Sed efficitur massa quis lacus fringilla maximus. Pellentesque non ullamcorper ante, vel molestie enim.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra iaculis orci. Nulla sodales aliquet commodo. Phasellus porta semper ligula nec pharetra. Suspendisse dapibus eu libero euismod mollis. Morbi sed justo vitae ante cursus vehicula. Etiam sit amet egestas velit. Quisque id interdum magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Vivamus sem metus, placerat vel lobortis blandit, luctus id lacus. Sed efficitur massa quis lacus fringilla maximus. Pellentesque non ullamcorper ante, vel molestie enim.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra iaculis orci. Nulla sodales aliquet commodo. Phasellus porta semper ligula nec pharetra. Suspendisse dapibus eu libero euismod mollis. Morbi sed justo vitae ante cursus vehicula. Etiam sit amet egestas velit. Quisque id interdum magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Vivamus sem metus, placerat vel lobortis blandit, luctus id lacus. Sed efficitur massa quis lacus fringilla maximus. Pellentesque non ullamcorper ante, vel molestie enim.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra iaculis orci. Nulla sodales aliquet commodo. Phasellus porta semper ligula nec pharetra. Suspendisse dapibus eu libero euismod mollis. Morbi sed justo vitae ante cursus vehicula. Etiam sit amet egestas velit. Quisque id interdum magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Vivamus sem metus, placerat vel lobortis blandit, luctus id lacus. Sed efficitur massa quis lacus fringilla maximus. Pellentesque non ullamcorper ante, vel molestie enim.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra iaculis orci. Nulla sodales aliquet commodo. Phasellus porta semper ligula nec pharetra. Suspendisse dapibus eu libero euismod mollis. Morbi sed justo vitae ante cursus vehicula. Etiam sit amet egestas velit. Quisque id interdum magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Vivamus sem metus, placerat vel lobortis blandit, luctus id lacus. Sed efficitur massa quis lacus fringilla maximus. Pellentesque non ullamcorper ante, vel molestie enim.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra iaculis orci. Nulla sodales aliquet commodo. Phasellus porta semper ligula nec pharetra. Suspendisse dapibus eu libero euismod mollis. Morbi sed justo vitae ante cursus vehicula. Etiam sit amet egestas velit. Quisque id interdum magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Vivamus sem metus, placerat vel lobortis blandit, luctus id lacus. Sed efficitur massa quis lacus fringilla maximus. Pellentesque non ullamcorper ante, vel molestie enim.
            </p>
        </div>
    )
}
export default ModalPage;