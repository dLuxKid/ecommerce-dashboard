import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProductInfo() {
  return (
    <div className="flex flex-col gap-5 w-full nav:max-w-[321px]">
      <div className="flex flex-col justify-between rounded-lg gap-8 bg-primary shadow-sm nav:px-4 py-[11px] px-3 w-full">
        <div className="w-full flex items-center">
          <span>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="36"
                height="36"
                rx="8"
                fill="white"
                fillOpacity="0.16"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.8491 21.1101C25.8491 24.0917 24.0916 25.8492 21.1099 25.8492H14.6249C11.6357 25.8492 9.87492 24.0917 9.87492 21.1101V14.6101C9.87492 11.6326 10.9699 9.87508 13.9524 9.87508H15.6191C16.2174 9.87591 16.7807 10.1567 17.1391 10.6359L17.8999 11.6476C18.2599 12.1259 18.8233 12.4076 19.4216 12.4084H21.7799C24.7691 12.4084 25.8724 13.9301 25.8724 16.9726L25.8491 21.1101Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.2342 20.0525H21.5133"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-white">All Products</p>
            <p className="text-base md:text-xl font-medium text-white flex items-center gap-1">
              45
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-white">Active</p>
            <p className="text-base md:text-xl font-medium text-white flex items-center gap-1">
              32 <span className="text-[#DBDEEE] text-xs">+24%</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between rounded-lg gap-8 bg-white shadow-sm nav:px-4 py-[11px] px-3 w-full">
        <div className="w-full flex items-center justify-between">
          <span>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="36"
                height="36"
                rx="8"
                fill="#FFCC91"
                fillOpacity="0.16"
              />
              <g clipPath="url(#clip0_4973_149)">
                <path
                  d="M24.6667 26.3333C25.1269 26.3333 25.5 25.9602 25.5 25.5C25.5 25.0398 25.1269 24.6667 24.6667 24.6667C24.2064 24.6667 23.8333 25.0398 23.8333 25.5C23.8333 25.9602 24.2064 26.3333 24.6667 26.3333Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5 26.3333C15.9602 26.3333 16.3333 25.9602 16.3333 25.5C16.3333 25.0398 15.9602 24.6667 15.5 24.6667C15.0398 24.6667 14.6667 25.0398 14.6667 25.5C14.6667 25.9602 15.0398 26.3333 15.5 26.3333Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.83333 8.83333H12.1667L14.4 19.9917C14.4762 20.3753 14.6849 20.72 14.9896 20.9652C15.2943 21.2105 15.6756 21.3408 16.0667 21.3333H24.1667C24.5577 21.3408 24.939 21.2105 25.2437 20.9652C25.5484 20.72 25.7571 20.3753 25.8333 19.9917L27.1667 13H13"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_4973_149">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(8 8)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className="self-end my-auto">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="This Week" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last-week">Last Week</SelectItem>
                <SelectItem value="last-month">Last Month</SelectItem>
                <SelectItem value="last-year">Last Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-[#CC5F5F]">Abandoned Cart</p>
            <p className="text-base md:text-xl font-medium text-black flex items-center gap-1">
              20% <span className="text-[#519C66] text-xs">+0.00%</span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-[#8B8D97]">Customers</p>
            <p className="text-base md:text-xl font-medium text-black flex items-center gap-1">
              30
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
