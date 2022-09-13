import DetailTokenHead from "../components/DetailTokenHead";
import DetailTokenIcons from "../components/DetailTokenIcons";
import DetailTokenTable from "../components/DetailTokenTable";
import BackToDashboardButton from "../components/BackToDashboardButton";
import Layout from "../components/Layout";

const DetailPage = ({ token }: { token: any }) => {
  return (
    <Layout>
      <div className="mx-12 space-y-8">
        <DetailTokenHead token={token} />
        <DetailTokenIcons />
        <DetailTokenTable token={token} />
        <BackToDashboardButton />
      </div>
    </Layout>
  );
};

export default DetailPage;

export async function getServerSideProps(context: any) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);

  const data = await res.json();

  return {
    props: {
      token: data,
    },
  };
}
