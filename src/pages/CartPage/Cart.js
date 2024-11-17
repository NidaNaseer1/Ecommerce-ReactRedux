import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal, removeItem, updateQuantity } from "../../stores/cartSlice";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  CardMedia,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Cart() {
  const dispatch = useDispatch();
  const { data: cartProducts, totalAmount, deliverCharge } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const increaseQty = (cartProductId, currentQty) => {
    const newQty = currentQty + 1;
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  const decreaseQty = (cartProductId, currentQty) => {
    const newQty = Math.max(currentQty - 1, 1); // Ensure quantity doesn't go below 1
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };

  return (
    <>
      <Box sx={{ py:3, backgroundColor: 'primary.main', color: 'white' }}>
        <Typography variant="h3" textAlign="center" gutterBottom>
          Cart
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6">
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Home
            </Link>{" "}
            / Cart
          </Typography>
        </Box>
      </Box>
      {cartProducts.length === 0 ? (
        <Typography variant="h4" textAlign="center" sx={{ py: 5 }}>
          Your Cart is Empty
        </Typography>
      ) : (
        <Box sx={{ py: 5 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Product</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Total</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cartProducts.map((cartProduct) => (
                      <TableRow key={cartProduct.id}>
                        <TableCell>
                          <CardMedia
                            component="img"
                            image={cartProduct.product_img}
                            alt={cartProduct.product_name}
                            sx={{ width: 100, borderRadius: 1 }}
                          />
                        </TableCell>
                        <TableCell>{cartProduct.product_name}</TableCell>
                        <TableCell>${cartProduct.price}</TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton
                              onClick={() =>
                                decreaseQty(cartProduct.id, cartProduct.quantity)
                              }
                            >
                              <RemoveIcon />
                            </IconButton>
                            <Typography sx={{ mx: 2 }}>{cartProduct.quantity}</Typography>
                            <IconButton
                              onClick={() =>
                                increaseQty(cartProduct.id, cartProduct.quantity)
                              }
                            >
                              <AddIcon />
                            </IconButton>
                          </Box>
                        </TableCell>
                        <TableCell>${cartProduct.totalPrice}</TableCell>
                        <TableCell>
                          <IconButton
                            onClick={() => handleRemoveItem(cartProduct.id)}
                            color="error"
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Typography variant="h5" gutterBottom>
                  Cart Total
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body1">Subtotal: ${totalAmount}</Typography>
                  <Typography variant="body1">Shipping: Flat rate ${deliverCharge}</Typography>
                </Box>
                <Box sx={{ mt: 'auto' }}>
                  <Typography variant="h6">Total: ${totalAmount + deliverCharge}</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    Proceed Checkout
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}
