import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Typography,
} from "@material-ui/core";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const OrderConfirmationModal = ({ isModalOpen, orderData, closeModal, confirmOrder }) => {
  return (
    // <Dialog
    //   open={isModalOpen}
    //   keepMounted
    //   onClose={closeModal}
    //   TransitionComponent={Transition}
    // >
    //   <DialogTitle>We've got your order, {orderData.clientName}!</DialogTitle>
    //   <DialogContent>
    //     <DialogContentText>
    //       Your {orderData.size} {orderData.selectedPizza} with {orderData.crust} crust
    //       will be ready soon.
    //     </DialogContentText>
    //     <DialogContentText>
    //       Thank you for shopping with us! <FavoriteBorderIcon fontSize="small" />
    //     </DialogContentText>
    //   </DialogContent>
    //   <DialogActions>
    //     <Button variant="text" onClick={closeModal}>
    //       Cheers
    //     </Button>
    //   </DialogActions>
    // </Dialog>
    <Dialog
      open={isModalOpen}
      keepMounted
      onClose={closeModal}
      TransitionComponent={Transition}
      fullWidth
    >
      <DialogTitle>Hi {orderData.clientName},</DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>Have we got everything right?</Typography>
        <br />
        <Typography gutterBottom>
          {orderData.quantity}x {orderData.selectedPizza} Pizza
          {orderData.quantity > 1 ? "s" : null}
        </Typography>
        <Typography gutterBottom>Size: {orderData.size}</Typography>
        <Typography gutterBottom>Crust: {orderData.crust}</Typography>
        <br />
        <Typography gutterBottom>Deliver to: {orderData.clientName}</Typography>
        <Typography gutterBottom>Address: {orderData.clientAddress}</Typography>
      </DialogContent>

      <DialogActions>
        <Button variant="text" onClick={confirmOrder}>
          Yes, Place my order
        </Button>
        <Button variant="text" onClick={closeModal}>
          No, Take me back
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderConfirmationModal;
