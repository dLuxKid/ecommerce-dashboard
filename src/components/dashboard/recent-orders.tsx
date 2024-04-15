import Image from "next/image";

import OrderStatus from "./order-status";

import { orders } from "@/assets/data/orders";

export default function RecentOrders() {
  return (
    <div className="max-h-[727px] overflow-y-auto w-full nav:max-w-[426px] bg-white rounded-lg px-3 py-5 nav:p-5">
      <h3 className="mb-6 text-sm md:text-base font-medium text-black">
        Recent Orders
      </h3>
      <div className="flex flex-col items-stretch gap-3 w-full">
        {orders.map((order, i) => (
          <div
            key={i}
            className="w-full pb-3 border-b border-b-[#F1F3F9] flex justify-between items-center gap-3.5"
          >
            <div className="size-[49px] border border-[#F1F3F9] rounded-sm overflow-hidden">
              <Image
                src={order.img}
                alt="product image"
                className="w-full full object-fill object-center"
              />
            </div>
            <div className="flex flex-col gap-2.5 w-full">
              <div className="w-full flex justify-between">
                <p className="text-black font-normal text-xs md:font-sm">
                  {order.iphone_name}
                </p>
                <p className="text-xs font-normal text-[#A6A8B1]">
                  {order.date}
                </p>
              </div>
              <div className="w-full flex flex-wrap gap-2 justify-between">
                <p className="text-black font-medium text-xs md:font-sm">
                  ₦{order.price_naira} x {order.quantity}
                </p>
                <OrderStatus status={order.payment_status} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
