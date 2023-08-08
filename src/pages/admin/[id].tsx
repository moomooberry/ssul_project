import AdminFormController from "@/screens/admin/form/AdminFormController";
import { GetServerSideProps, NextPage } from "next";

interface AdminEditPageProps {
  id: string;
}

const AdminEditPage: NextPage<AdminEditPageProps> = ({ id }) => (
  <AdminFormController id={id} />
);

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.id || typeof params.id !== "string") return { notFound: true };
  return {
    props: {
      id: params.id,
    },
  };
};

export default AdminEditPage;
