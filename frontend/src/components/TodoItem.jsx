import { useState } from "react";
import {
  Box,
  Button,
  Heading,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  Input,
} from "@chakra-ui/react";
const TodoItem = ({
  id,
  title,
  status,
  handleStatusTodo,
  handleDelete,
  handleEdit,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [newTitle, setNewTitle] = useState(title);

  function handleSubmit() {
    onClose();
    handleEdit(id, newTitle);

    setNewTitle("");
  }
  return (

    <Box
     w={"100%"}
      bg={status ? "#9AE6B4" : "#FEB2B2"}
      border={"2px dashed white"}
      boxShadow="base"
      rounded="md"
      display={"flex"}
      justifyContent={"space-between"}
    >
      <Box p={5} color={"black"}>
        <Heading fontSize={"23px"}> Title: {title}</Heading>
      </Box>
      <Box p={5} display={"grid"}>
        <Button
          p={5}
          bg={status ? "green" : "red"}
          _hover={{ background: "blue" }}
          color={"white"}
          onClick={() => handleStatusTodo(id, status)}
        >
          {status ? "Completed" : "Pending"}
        </Button>
        <br />

        <Button
          bg={"red"}
          _hover={{ background: "gold", color: "black" }}
          color={"white"}
          onClick={() => handleDelete(id)}
        >
          Delete
        </Button>
        <br />

        <Button
          bg={"blue"}
          _hover={{ background: "purple" }}
          color={"white"}
          onClick={onOpen}
        >
          Edit-Title
        </Button>
      </Box>
      {/* ṃodal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={10}>
          <ModalHeader>Update-Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody display={"grid"} justifyContent={"space-between"} gap={5}>
            <Input
              type="text"
              placeholder="update-title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />

            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Update
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default TodoItem;
