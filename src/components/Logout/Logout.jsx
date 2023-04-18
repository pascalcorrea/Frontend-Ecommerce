import { Stack, Button } from "@mui/material";
import UserContext from "../../context/UserContext";
import { useContext } from "react";

const Logout = () => {
  const { signOut } = useContext(UserContext);
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{ marginRight: 2, height: 25, marginTop: 1.2 }}
    >
      <Button onClick={signOut} variant="contained" size="small">
        Logout
      </Button>
    </Stack>
  );
};

export default Logout;
