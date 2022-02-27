import { Route, Routes } from "react-router-dom";
import { Text } from "../components";

export const SubPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SubPageMessage />} />
        <Route path="subpage" element={<SubSubPageMessage />} />
      </Routes>
    </>
  );
};

const SubPageMessage = () => <Text>This is the sub page.</Text>;
const SubSubPageMessage = () => <Text>This is the sub sub page.</Text>;
