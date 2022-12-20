import * as React from "react";
import { Box, Typography, Modal, Button, TextField } from "@mui/material";
import cn from "classnames";
import styles from "./index.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function BuySellModal(props) {
  const { pair } = props;
  const [value, setValue] = React.useState("");
  const [isError, setIsError] = React.useState(false);

  function valueBuyPrice(e) {
    setValue(e.target.value);
    setIsError(false);
  }

  const createDeal = () => {
    if (value === "") {
      setIsError(true);
      return;
    }
    const deal = {
      type: props.type,
      pair: pair,
      volume: value,
      date: new Date(),
    };
    props.addDeal(deal);
    props.handleClose();
    setValue("");
  };

  return (
    <div>
      <Modal
        open={props.modal}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6">
            Make order
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <span
              className={cn(
                styles.action,
                props.type === "Buy" && styles.actionGreen,
                props.type === "Sell" && styles.actionRed
              )}
            >
              {props.type}
            </span>{" "}
            {props.type === "Buy" ? pair.price1 : pair.price2} {pair.coin1}/
            {pair.coin2} {pair.tom}
          </Typography>
          <div className={styles.volume}>
            <TextField
              error={isError}
              id="outlined-basic"
              size="small"
              type="number"
              label="Volume"
              variant="outlined"
              value={value}
              onChange={valueBuyPrice}
            />
          </div>
          <div>
            <Button onClick={props.handleClose}>Cancel</Button>
            <Button onClick={createDeal}>OK</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
