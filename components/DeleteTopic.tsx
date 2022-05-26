import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  IconButton,
  Button,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { BsTrashFill } from "react-icons/Bs";
import React from "react";

interface IAddTopicProps {
  deleteTopic: (_id: string) => void;
  _id: string;
}

const DeleteTopic = ({ deleteTopic, _id }: IAddTopicProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const modalSubmit = () => {
    deleteTopic(_id);
    onClose();
  };

  const modalClose = () => {
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
        icon={<BsTrashFill size={20} />}
        variant="outline"
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Stop Timer Early?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            This session will not be counted in the report.{" "}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={modalClose}>
              Cancel
            </Button>
            <Button variant="solid" onClick={modalSubmit}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteTopic;
