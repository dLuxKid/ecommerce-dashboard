import Home from "@/assets/svg/home";
import Slash from "@/assets/svg/slash";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";

export default function Breadcrumbs({ path }: { path?: string }) {
  return (
    <div className="w-full bg-white border-t border-t-[#F1F3F9] py-1 px-5">
      <Breadcrumb className="w-full flex items-center gap-5">
        <BreadcrumbItem>
          <BreadcrumbLink href={"/"}>
            <Home />
          </BreadcrumbLink>
        </BreadcrumbItem>
        {path !== "Dashboard" && (
          <>
            <Slash />
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/${path?.toLowerCase()}`}
                className="text-xs font-normal text-[#8B8D97] capitalize"
              >
                {path}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
      </Breadcrumb>
    </div>
  );
}
