import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const OrderConfirmationModal = ({ isModalOpen, orderData, closeModal }) => {
  return (
    <Dialog
      open={isModalOpen}
      keepMounted
      onClose={closeModal}
      TransitionComponent={Transition}
    >
      <DialogTitle>We've got your order, {orderData.clientName}!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Your {orderData.size} {orderData.selectedPizza} with {orderData.crust} crust
          will be ready soon.
        </DialogContentText>
        <DialogContentText>
          Thank you for shopping with us! <FavoriteBorderIcon fontSize="small" />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={closeModal}>
          Cheers
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderConfirmationModal;
