import Sidebar from "@/components/sidebar";
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { ChartPieLegend } from "@/components/chart-pie-legend";
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";

import { useNavigate } from "react-router-dom";

function DashboardPage() {
    const navigate = useNavigate();
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
                                <SectionCards />
                                <div className = "grid gap-4 px-4 grid-cols-1 lg:grid-cols-2">
                                    <div className = "px-6 lg:px-1">
                                        <ChartAreaInteractive />
                                    </div>
                                    <div className = "px-6 lg:px-1">
                                        <ChartPieLegend />
                                    </div>
                                </div>
                                <div className = "grid gap-4 px-4 grid-cols-1 lg:grid-cols-2">
                                    <div className = "grid items-center">
                                        <Card className="@container/card">
                                            <CardHeader>
                                            <CardDescription>recent job postings</CardDescription>
                                                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                                                    *add list*
                                                </CardTitle>
                                            </CardHeader>
                                        </Card>
                                        <Button
                                            onClick={() => navigate("/job-postings")}
                                            className="font-medium text-base rounded-full justify-self-center items-center mt-4"
                                        >
                                            New job posting
                                        </Button>
                                    </div>
                                    
                                    <div className="grid items-center">
                                        <Card className="@container/card">
                                            <CardHeader>
                                            <CardDescription>recent cvs matched</CardDescription>
                                            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                                                *add list*
                                            </CardTitle>
                                            </CardHeader>
                                        </Card>
                                        <Button
                                            onClick={() => navigate("/upload-cv")}
                                            className="font-medium text-base rounded-full justify-self-center items-center mt-4"
                                        >
                                            Upload new CV
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </>
    );
}

export default DashboardPage;