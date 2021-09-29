import { Button, makeStyles } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addcounter, subcounter } from "../../store/modules/counter/actions";

function Counter() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.counter);
  const addNumber = () => {
    dispatch(addcounter(number));
  };
  const subNumber = () => {
    dispatch(subcounter(number));
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      backgroundColor: "gray",
      alignItems: "center",
      flexDirection: "column",
    },
    divButton: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
    },
    button: {
      backgroundColor: "#836FFF",
      width: "100px",
      borderRadius: "10px",
      color: "#f0f0f0",
      fontWeight: "bold",
      height: "50px",
    },
    number: {
      color: "#f0f0f0",
      fontSize: "60px",
      border: "5px solid black",
      width: "150px",
      height: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  }));
  const classe = useStyles();
  return (
    <>
      <div className={classe.root}>
        <h1 className={classe.number}>{number}</h1>
        <div className={classe.divButton}>
          <Button
            className={classe.button}
            variant="outlined"
            onClick={() => addNumber()}
          >
            Add
          </Button>
          <Button
            className={classe.button}
            variant="outlined"
            onClick={() => subNumber()}
          >
            Sub
          </Button>
        </div>
      </div>
    </>
  );
}
export default Counter;
