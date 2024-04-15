export default function OrderStatus({ status }: { status: string }) {
  return (
    <div className="mt-auto">
      {status === "Pending" && (
        <span className="bg-[#F57E771F] text-[#CC5F5F] py-0.5 px-[15px] flex items-center justify-center rounded-full text-xs nav:text-sm">
          {status}
        </span>
      )}
      {status === "Completed" && (
        <span className="bg-[#32936F1F] text-[#519C66] py-0.5 px-[15px] flex items-center justify-center rounded-full text-xs nav:text-sm">
          {status}
        </span>
      )}
    </div>
  );
}
