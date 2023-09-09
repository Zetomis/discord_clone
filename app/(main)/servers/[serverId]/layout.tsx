import ServerSidebar from "@/components/server/server-sidebar";
import CurrentProfile from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const ServerIdLayout = async ({
    children,
    params,
}: {
    children: ReactNode;
    params: { serverId: string };
}) => {
    const profile = await CurrentProfile();

    if (!profile) {
        return redirectToSignIn();
    }

    const server = await db.server.findUnique({
        where: {
            id: params.serverId,
            members: {
                some: {
                    profileId: profile.id,
                },
            },
        },
    });

    if (!server) {
        return redirect("/");
    }

    return (
        <div className="h-full">
            <div className="hidden md:flex h-full w-60 z-20 flex-col inset-y-0 fixed">
                <ServerSidebar serverId={params.serverId} />
            </div>
            <div className="h-full md:pl-60">{children}</div>
        </div>
    );
};

export default ServerIdLayout;
