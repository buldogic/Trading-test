import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Pair } from "../../types";

type SetSelectedPairId = (id: number) => void;

type Props = {
  selectedPairId: number;
  pairs: Pair[];
  setSelectedPairId: SetSelectedPairId;
};

export default function SelectCoin(props: Props) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Trading pair</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.selectedPairId}
          label="Trading pair"
          onChange={(event) => {
            const id = event.target.value;
            if (typeof id === "number") {
              props.setSelectedPairId(id);
            }
          }}
        >
          {props.pairs.map((p) => {
            return (
              <MenuItem key={p.id} value={p.id}>
                {p.coin1}/{p.coin2} {p.tom}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
