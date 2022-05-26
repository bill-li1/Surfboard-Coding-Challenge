import {
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  IconButton,
  Button,
  Box,
  useDisclosure,
  Textarea,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
} from "@chakra-ui/react";
import axios from "axios";
import { BsPencilFill } from "react-icons/Bs";
import React, { useState } from "react";
import { ITopic } from "../util/types";

interface IAddTopicProps {
  editTopic: (topic: ITopic) => void;
  oldTopic: ITopic;
}

const EditTopic = ({ editTopic, oldTopic }: IAddTopicProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [topic, setTopic] = useState<ITopic>(oldTopic);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic({ ...topic, title: e.target.value });
  };
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTopic({ ...topic, description: e.target.value });
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic({ ...topic, image: e.target.value });
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const t = {
      title: topic.title,
      description: topic.description,
      duration: topic.duration,
      image: topic.image,
    };

    axios
      .post("http://localhost:5000/topics/update/" + oldTopic._id, t)
      .then((res) => console.log(res.data));
    editTopic(topic);

    onClose();
  };

  return (
    <>
      <IconButton
        onClick={onOpen}
        borderRadius="md"
        aria-label="Profile"
        ml={2}
        bgColor="#5D5D64"
        icon={<BsPencilFill size={20} />}
        variant="outline"
      />
      <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="34" textAlign="center">
            Edit Topic
          </ModalHeader>
          <ModalCloseButton />
          <Box pb={4}>
            <Container pb={6} maxW="container.sm">
              <Box fontSize={18}>Topic Title</Box>
              <Input
                mt={2}
                mb={6}
                onChange={handleTitleChange}
                defaultValue={topic.title}
                fontSize={18}
                type="text"
                placeholder="Enter a title"
              />
              <Box fontSize={18}>Topic Description</Box>
              <Textarea
                mt={2}
                mb={6}
                onChange={handleDescriptionChange}
                defaultValue={topic.description}
                fontSize={18}
                placeholder="Enter a description"
              />
              <Box fontSize={18}>Topic Duration (minutes)</Box>

              <NumberInput
                w="105px"
                value={topic.duration}
                mt={2}
                mb={6}
                onChange={(num) => {
                  setTopic({
                    ...topic,
                    duration: Number(num),
                  });
                }}
                max={999}
                defaultValue={topic.duration}
                step={5}
                min={1}
                keepWithinRange={true}
                size="md"
                clampValueOnBlur={false}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Box fontSize={18}>Topic Image (link)</Box>
              <Input
                mt={2}
                mb={6}
                defaultValue={topic.image}
                onChange={handleImageChange}
                fontSize={18}
                type="text"
                placeholder="Enter an image link"
              />
              <Button onClick={onSubmit}>Submit</Button>
            </Container>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditTopic;
