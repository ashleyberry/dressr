import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import {
  ClothingState,
  getClothingAction,
} from "../../redux/clothing/ClothingSlice";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const { clothing } = useSelector(
    (state: ClothingState) => state.clothingList
  );

  useEffect(() => {
    getInfo();
  }, []);

  const addItem = () => {
    // navigate("/addItem");
  };

  const getInfo = () => {
    dispatch(getClothingAction());
    dispatch({
      type: "FETCH_TYPES",
    });
  };

  return (
    <Grid container>
      <Grid item onClick={addItem}>
        <Typography variant="h5">Your closet is empty!</Typography>
        <Typography variant="h6">Add your first item!</Typography>
        <LibraryAddIcon
          style={{ width: 50, height: 50 }}
          fontSize="large"
          onClick={addItem}
        />
      </Grid>
    </Grid>
  );
};
