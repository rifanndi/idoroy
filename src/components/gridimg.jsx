import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Konn from "../img/Konn.jpg";

const Container = styled(Box)({
  display: "flex",
  alignItems: "center",
  //flexWrap: "wrap", // Memastikan item dapat berada dalam baris yang sama jika ukurannya memungkinkan
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "calc(33.33% - 8px)", // Mengatur lebar item menjadi sekitar 33.33% dari lebar container
  margin: "4px", // Memberi jarak antara item
  maxWidth: 200,
  maxHeight: 200,
  overflow: "hidden",
}));

const Img = styled("img")({
  width: "100%",
  height: "auto",
});

export default function FullWidthGrid() {
  return (
    <Container>
      <Item>
        <Img src={Konn} />
      </Item>
      {/* Tambahkan item lainnya di sini */}
      <Item>
        <Img src={Konn} />
      </Item>
      <Item>
        <Img src={Konn} />
      </Item>
    </Container>
  );
}
