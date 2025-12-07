import { Suspense } from "react";
import { Sidebar, SidebarContent, SidebarRail } from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent className="h-full w-full bg-white">
        <Suspense fallback={<div>Loading...</div>}>
          <div>This is the sidebar content</div>
        </Suspense>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
