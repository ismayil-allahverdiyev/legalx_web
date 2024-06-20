import AuthDisplay from "@/auth/features/auth_display_feature";
import SignInFeature from "@/auth/features/sign_in_feature";
import SignUpFeature from "@/auth/features/sign_up_feature";

export default function AuthPage() {
    return (
        <div className="flex w-full">
            <AuthDisplay />
            {/* <SignInFeature /> */}
            <SignUpFeature />
        </div>
    );
}