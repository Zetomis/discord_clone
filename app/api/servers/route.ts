import CurrentProfile from "@/lib/current-profile";
import { db } from "@/lib/db";
import { MemberRole } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export const POST = async (req: Request) => {
    try {
        const { name, imageUrl } = await req.json();
        const profile = await CurrentProfile();

        if (!profile) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const server = await db.server.create({
            data: {
                name,
                imageUrl,
                profileId: profile.id,
                inviteCode: uuidv4(),
                channels: {
                    create: [
                        {
                            name: "general",
                            profileId: profile.id,
                        },
                    ],
                },
                members: {
                    create: [
                        {
                            profileId: profile.id,
                            role: MemberRole.ADMIN,
                        },
                    ],
                },
            },
        });

        return NextResponse.json(server);
    } catch (error) {
        console.log("SERVER_POST", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
};
