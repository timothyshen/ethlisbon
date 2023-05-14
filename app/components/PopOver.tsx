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
import { useNetwork } from "wagmi";
interface BasicPopOverProps {
  tokenID: number | null;
}

const BasicPopOver: React.FC<BasicPopOverProps> = ({ tokenID }) => {
  const { RegisterAccount } = AccountERC6551Account();
  const { chain, chains } = useNetwork();
  const { initialize } = TokenVaultInitailisation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState(0);
  const [dayNum, setDayNum] = useState(0);

  const handleRegister = async () => {
    console.log("registering");
    const test = await RegisterAccount(tokenID);
    console.log("test", test);
  };

  return (
    <>
      <Button
        onClick={onOpen}
        mt={"20px"}
        backgroundColor={"black"}
        color={"white"}
        _hover={{ backgroundColor: "black", opacity: "75%" }}
        width={"full"}
        borderRadius={"30px"}
      >
        Renewal Subscription
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Set Vault</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mt={3}>
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
              colorScheme="blue"
              mr={3}
              onClick={() => {
                console.log("amount", amount);
                handleRegister();
                // initialize(RegisterAccount, amount, dayNum);
              }}
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
