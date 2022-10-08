import React from 'react'
import { List, ListItem, ListItemText } from "@mui/material";

const Review = ({ checkoutToken }) => {
  return (
    <>
        <h3>Order summary</h3>
        <List disablePadding>
            {checkoutToken.line_items.map(product => {
                return (<ListItem style={{ padding: "10px 0"}} key={product.name} >
                    <ListItemText primary= {product.name} secondary={`Quantity: ${product.quantity}`} />
                    <p>{product.line_total.formatted_with_code}</p>
                </ListItem>)
            })}
            <hr />
            <ListItem style={{ padding: "10px 0"}}>
                <ListItemText primary="Total: " />
                <p>{checkoutToken.subtotal.formatted_with_code}</p>
            </ListItem>
        </List>
    </>
  )
}

export default Review