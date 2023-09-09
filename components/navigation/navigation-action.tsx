"use client";

import { Plus } from "lucide-react";
import ActionTooltip from "../action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

const NavigationAction = () => {
    const { onOpen } = useModal();

    return (
        <div className="group flex items-center">
            <ActionTooltip side="right" align="center" label="Add a server">
                <button
                    onClick={() => onOpen("createServer")}
                    className="flex items-center justify-center w-12 h-12 rounded-full group-hover:rounded-md group-hover:bg-emerald-500 bg-background dark:bg-neutral-600 transition"
                >
                    <Plus
                        className="group-hover:text-white text-emerald-500 transition"
                        size={25}
                    />
                </button>
            </ActionTooltip>
        </div>
    );
};

export default NavigationAction;
