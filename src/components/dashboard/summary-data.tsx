import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SummaryData() {
  return (
    <div className="w-full flex flex-wrap nav:flex-nowrap gap-5">
      <div className="flex flex-col justify-between rounded-lg gap-8 bg-white shadow-sm nav:px-4 py-[11px] px-3 flex-1 w-full nav:max-w-[321px]">
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
                fill="#5570F1"
                fillOpacity="0.12"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.3982 19.5743C22.9605 19.5743 23.4324 20.0384 23.3465 20.5936C22.8421 23.8603 20.0456 26.2857 16.6728 26.2857C12.9412 26.2857 9.91666 23.2612 9.91666 19.5305C9.91666 16.4568 12.2517 13.5936 14.8807 12.9462C15.4456 12.8068 16.0246 13.2041 16.0246 13.7857C16.0246 17.7261 16.157 18.7454 16.9053 19.2998C17.6535 19.8541 18.5333 19.5743 22.3982 19.5743Z"
                stroke="#5570F1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.0771 16.293C26.1218 13.7614 23.0122 9.68072 19.2227 9.75089C18.928 9.75616 18.692 10.0018 18.6788 10.2956C18.5832 12.3772 18.7122 15.0746 18.7841 16.2974C18.806 16.6781 19.1052 16.9772 19.485 16.9991C20.742 17.0711 23.5376 17.1693 25.5894 16.8588C25.8683 16.8167 26.0727 16.5746 26.0771 16.293Z"
                stroke="#5570F1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
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
        <div className="flex items-end gap-4 sm:gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-[#8B8D97]">Sales</p>
            <p className="text-base md:text-xl font-medium text-black">
              ₦4,000,000.00
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-[#8B8D97]">Volume</p>
            <p className="text-base md:text-xl font-medium text-black flex items-center gap-1">
              450 <span className="text-[#519C66] text-xs">+20.00%</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between rounded-lg gap-8 bg-white shadow-sm nav:px-4 py-[11px] px-3 flex-1 w-full nav:max-w-[321px]">
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
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.9929 20.6723C19.0671 20.6723 21.6946 21.1382 21.6946 22.999C21.6946 24.8598 19.0846 25.339 15.9929 25.339C12.9179 25.339 10.2912 24.8773 10.2912 23.0157C10.2912 21.154 12.9004 20.6723 15.9929 20.6723Z"
                stroke="#1C1D22"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.9929 18.0165C13.9746 18.0165 12.3379 16.3807 12.3379 14.3623C12.3379 12.344 13.9746 10.7082 15.9929 10.7082C18.0104 10.7082 19.6471 12.344 19.6471 14.3623C19.6546 16.3732 18.0296 18.009 16.0187 18.0165H15.9929Z"
                stroke="#1C1D22"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.7359 17.068C23.0701 16.8805 24.0976 15.7355 24.1001 14.3497C24.1001 12.9838 23.1042 11.8505 21.7984 11.6363"
                stroke="#1C1D22"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23.4962 20.2768C24.7887 20.4693 25.6912 20.9227 25.6912 21.856C25.6912 22.4985 25.2662 22.9152 24.5795 23.176"
                stroke="#1C1D22"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
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
        <div className="flex items-end gap-4 sm:gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-[#8B8D97]">Customers</p>
            <p className="text-base md:text-xl font-medium text-black flex items-center gap-1">
              1,250 <span className="text-[#519C66] text-xs">+15.80%</span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-[#8B8D97]">Active</p>
            <p className="text-base md:text-xl font-medium text-black flex items-center gap-1">
              1,180 <span className="text-[#519C66] text-xs">85%</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between rounded-lg gap-8 bg-white shadow-sm nav:px-4 py-[11px] px-3 w-full nav:max-w-[426px]">
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
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.7614 25.9167H14.8049C12.2496 25.9167 10.2893 24.9937 10.8461 21.279L11.4945 16.2447C11.8377 14.3911 13.02 13.6817 14.0574 13.6817H22.5395C23.5921 13.6817 24.7058 14.4445 25.1024 16.2447L25.7508 21.279C26.2237 24.5742 24.3167 25.9167 21.7614 25.9167Z"
                stroke="#130F26"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.8759 13.4987C21.8759 11.5103 20.264 9.89835 18.2756 9.89835V9.89835C17.3181 9.89429 16.3984 10.2718 15.7199 10.9474C15.0414 11.6231 14.66 12.5411 14.66 13.4987V13.4987"
                stroke="#130F26"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.747 17.2515H20.7088"
                stroke="#130F26"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.8881 17.2515H15.8499"
                stroke="#130F26"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
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
        <div className="flex items-end gap-4 sm:gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-[#8B8D97]">All Orders</p>
            <p className="text-base md:text-xl font-medium text-black flex items-center gap-1">
              450
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-[#8B8D97]">Pending</p>
            <p className="text-base md:text-xl font-medium text-black flex items-center gap-1">
              5
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-[#8B8D97]">Completed</p>
            <p className="text-base md:text-xl font-medium text-black flex items-center gap-1">
              445
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
