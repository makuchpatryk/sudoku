import { ReactElement } from "react";
import ChooseTab from "@/components/Tabs/ChooseTab";
import RootLayout from "@/components/Layout";

const Page = () => {
  return (
    <>
      <ChooseTab />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Page;
