import { Text } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
    if (!children) return null;
    return (
        <div className="bg-[#ea959b] p-2 rounded-md">
            <p className="text-sm text-[#B00020] p-0 m-0">{children}</p>
        </div>
    );
};

export default ErrorMessage;
