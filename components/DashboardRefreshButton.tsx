import { useRouter } from "next/router";

const DashboardRefreshButton = () => {
  const router = useRouter();
  //call this function to refresh props
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const handleRefresh = () => {
    refreshData();
    console.log("refreshed");
  };
  return (
    <>
      <button
        className="w-1/12 grid place-items-center rounded-lg py-2 text-white mx-auto bg-green-500"
        onClick={handleRefresh}
      >
        Refresh
      </button>
    </>
  );
}

export default DashboardRefreshButton
