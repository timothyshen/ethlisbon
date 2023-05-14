import React, { useEffect, useState } from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { AccountERC6551Account } from "../utils/ERC6551RegistryContract";
import { TokenVaultInitailisation } from "../utils/TokenVault";

interface BasicPopOverProps {
  tokenID: number;
}

const BasicPopOver: React.FC<BasicPopOverProps> = ({ tokenID }) => {
  const { RegisterAccount } = AccountERC6551Account();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState(0);
  const [dayNum, setDayNum] = useState(0);

  useEffect(() => {
    console.log("tokenID", tokenID);
    const { data } = RegisterAccount(tokenID);
    setAddress(data.address);
  }, [tokenID, RegisterAccount]);

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mt={4}>
              <FormLabel>Amount</FormLabel>
              <Input
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Day Number</FormLabel>
              <Input
                placeholder="Day Number"
                value={dayNum}
                onChange={(e) => setDayNum(parseInt(e.target.value))}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="black"
              mr={3}
              onClick={() => TokenVaultInitailisation(address, amount, dayNum)}
            >
              Set Vault
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BasicPopOver;
