import { HamburgerIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

export const MenuOptions = () => {
  return (
    <Menu>
      <MenuButton as="button" aria-label="Options">
        <HamburgerIcon
          fontSize="35px"
          color="black"
          _dark={{ color: "#7f7f7f" }}
        />
      </MenuButton>
      <MenuList
        color="#212529"
        _dark={{color: "#7f7f7f", background: "#0c0c0d"}}
        
      >
        <MenuItem
        fontWeight="bold"
        fontSize="18px"
        _hover={{
          color: "#1747A6",
          transition: "ease 0.6s",
          opacity: "0.8",
        }}
        >
          Sobre
        </MenuItem>
        <MenuItem
        fontWeight="bold"
        fontSize="18px"
        _hover={{
          color: "#1747A6",
          transition: "ease 0.6s",
          opacity: "0.8",
        }}
        >
          Tecnologias
        </MenuItem>
        <MenuItem
        fontWeight="bold"
        fontSize="18px"
        _hover={{
          color: "#1747A6",
          transition: "ease 0.6s",
          opacity: "0.8",
        }}
        >
          Projetos
        </MenuItem>
        <MenuItem
        fontWeight="bold"
        fontSize="18px"
        _hover={{
          color: "#1747A6",
          transition: "ease 0.6s",
          opacity: "0.8",
        }}
        >
          Contato
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
