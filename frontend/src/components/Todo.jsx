import { useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setTodo } from "../redux/todo/action";
import { setError, setLoading } from "../redux/app_state/action";
import Loading from "./Loading";
import Error from "./Error";
import { Heading, Box, Button } from "@chakra-ui/react";
import { toggleTheme } from "../redux/Theme/action";
const Todo = () => {
  const dispatch = useDispatch();
  const { todo, appState, theme } = useSelector((state) => state);
  const { isLoading, isError } = appState;
  const { isDarkTheme } = theme;
  // console.log(isError);

  // to get the data
  const fetchTodo = async () => {
    try {
      dispatch(setLoading(true));
      let { data } = await axios.get(`http://localhost:3000/todo`);
      // console.log(data);
      dispatch(setLoading(false));
      dispatch(setTodo(data));
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setError(true));
      // console.log(error);
    }
  };

  // to add todo
  const postTodo = async (title) => {
    try {
      dispatch(setLoading(true));
      const newTodo = {
        id: Date.now().toString(),
        title: title,
        status: false,
      };

      await axios.post(`http://localhost:3000/todo`, newTodo);
      dispatch(setLoading(false));
      fetchTodo();
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setError(true));
      // console.log(error);
    }
  };

  const handleAddTodo = (title) => {
    postTodo(title);
  };

  // to toggle status we use patch
  const handlePatch = async (id, status) => {
    let newId = id.toString();
    try {
      dispatch(setLoading(true));
      await axios.patch(`http://localhost:3000/todo/${newId}`, {
        status: !status,
      });

      dispatch(setLoading(false));
      // console.log(status);

      fetchTodo();
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setError(true));
      // console.log(error);
    }
  };

  const handleStatusTodo = (id, status) => {
    // console.log(id);
    handlePatch(id, status);
  };

  // handleDelete
  const deleteTodo = async (id) => {
    try {
      dispatch(setLoading(true));
      await axios.delete(`http://localhost:3000/todo/${id}`);
      dispatch(setLoading(false));
      fetchTodo();
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setError(true));
    }
  };

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  // handle Edit
  const editTodo = async (id, title) => {
    try {
      await axios.patch(`http://localhost:3000/todo/${id}`, {
        title: title,
      });
      fetchTodo();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (id, title, onClose) => {
   
    editTodo(id, title);
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  // toggle theme
  function handleTheme() {
    dispatch(toggleTheme());
  }
  return (
    <>
    
    <Box
      w="100%"
      bg={isDarkTheme ? "black" : "white"}
      color={isDarkTheme ? "white" : "black"}
    >
      <br />
      <Button onClick={handleTheme}>Change-Theme</Button>
      <Heading textAlign={"center"}>Todo List</Heading>
      <TodoInput handleAddTodo={handleAddTodo} />
      <Box
        display={"grid"}
        gridTemplateColumns={{
          base : "repeat(1, 1fr)",
          sm : "repeat(1, 1fr)",
          md : "repeat(2, 1fr)",
          lg : "repeat(3, 1fr)",
          xl : "repeat(4, 1fr)",
          "2xl" : "repeat(4, 1fr)"


        }}

        gap={5}
        p={5}
      >
        {todo.map((task) => (
          <TodoItem
            handleStatusTodo={handleStatusTodo}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            key={task.id}
            {...task}
          />
        ))}
      </Box>
    </Box>
    </>
  );
};

export default Todo;
