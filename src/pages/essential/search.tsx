import { TextInput, Button } from "@mantine/core";
import { BiSearch } from "react-icons/bi";
import { useMediaQuery } from "@mantine/hooks";
const Search = () => {
  const isMobile = useMediaQuery("(min-width: 768px)");
  const btn = (
    <Button bg={"red"} size="lg" radius={"9999px"} mr={"3em"}>
      {isMobile ? <BiSearch /> : <BiSearch />}
    </Button>
  );
  return (
    <>
      <TextInput
        placeholder="Search for songs"
        rightSection={btn}
        styles={{
          input: {
            padding: "2.5em 2em",
            borderRadius: "2em",
            background: "#fff",
            border: "none",
            color: "#fff",
          },
        }}
      />
    </>
  );
};
export default Search;
