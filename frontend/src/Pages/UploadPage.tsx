import Sidebar from "@/components/sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import UploadCVCard from "@/components/upload-cv-card";
import { SiteHeader } from "@/components/site-header";

function UploadCVPage() {
    return (
        <>
            <SidebarProvider
                style={
                    {
                        "--sidebar-width": "calc(var(--spacing) * 72)",
                        "--header-height": "calc(var(--spacing) * 12)",
                    } as React.CSSProperties
                }
            >
                {/* <Sidebar /> */}
                <SidebarInset>
                    <SiteHeader />
                    <div className = "flex flex-1 flex-col">
                        <div className = "@container/main flex flex-1 flex-col gap-2">
                            <div className = "flex flex-col py-4 md:gap-6 md:py-6">
                                <div className = "grid gap-4 px-4 grid-cols-1 lg:grid-cols-1">
                                    <div className = "px-6 lg:px-1">
                                        <UploadCVCard />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}

export default UploadCVPage;