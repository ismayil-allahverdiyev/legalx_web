// "use client";

import AuthDisplay from "@/auth/features/auth_display_feature";
import AuthSelector from "@/auth/features/auth_selector_feature";
import SignInFeature from "@/auth/features/sign_in_feature";
import SignUpFeature from "@/auth/features/sign_up_feature";
import { Provider } from "react-redux";

export default function AuthPage() {
    console.log("AuthPage");
    return (
        // <Provider store={AuthStore}>
        <div className="flex w-full">
            <AuthDisplay />
            <AuthSelector />
        </div>
        // </Provider>
    );
}