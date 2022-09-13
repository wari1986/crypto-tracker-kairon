import DetailTokenHead from "../components/DetailPage/DetailTokenHead";
import DetailTokenIcons from "../components/DetailPage/DetailTokenIcons";
import DetailTokenTable from "../components/DetailPage/DetailTokenTable";
import BackToDashboardButton from "../components/DetailPage/BackToDashboardButton";
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
