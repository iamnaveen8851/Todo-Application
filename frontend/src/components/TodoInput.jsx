import { useState } from "react";
import { Box, Input, Button } from "@chakra-ui/react";
const TodoInput = ({ handleAddTodo }) => {
  const [title, setTitle] = useState("");
  return (
    <Box m={"auto"} w="40%" display={"flex"} justifyContent={"space-around"} p={5} gap={5} flexDirection={{
      base : "column",
      sm : "column",
      md : "row",
      lg : "row",
      xl : "row",
      "2xl" : "row"
    }}>
      <Input
        type="text"
        placeholder="Add Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button bg={"purple"} color={"white"} _hover={{color : "black", backgroundColor : "pink"}} onClick={() => handleAddTodo(title)}>Add Todo</Button>
    </Box>
  );
};

export default TodoInput;
