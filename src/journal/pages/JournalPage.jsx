import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil adipisci
        excepturi voluptatem repudiandae doloribus amet modi, autem debitis
        aliquam facere placeat possimus, nulla asperiores totam. Libero
        architecto illo deleniti modi. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Eos doloribus cumque maxime nobis vero repudiandae
        omnis, culpa iusto expedita voluptatem qui repellat libero nihil ipsa.
        Minus aliquam fugit praesentium odio!
      </Typography> */}
      {/* <NothingSelectedView /> */}
      <NoteView />

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 10,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
