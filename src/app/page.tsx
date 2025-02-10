import Chart from "@/components/dashboard/chart";
import DoughnutChart from "@/components/dashboard/doughnut-chart";
import ProductInfo from "@/components/dashboard/product-info";
import RecentOrders from "@/components/dashboard/recent-orders";
import SummaryData from "@/components/dashboard/summary-data";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header page="Dashboard" />

      <main className="nav:px-[19px] nav:py-7 px-3 py-5 w-full">
        <div className="flex flex-col gap-5 w-full">
          <SummaryData />
          <div className="flex flex-wrap nav:flex-nowrap gap-5 w-full">
            <div className="w-full 2xl:w-auto flex flex-col gap-5">
              <div className="flex flex-wrap nav:flex-nowrap gap-5">
                <DoughnutChart />
                <ProductInfo />
              </div>
              <Chart />
            </div>
            <RecentOrders />
          </div>
        </div>
      </main>
    </>
  );
}
