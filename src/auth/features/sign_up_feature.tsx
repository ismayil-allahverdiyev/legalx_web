import CustomAuthTextField from "../components/custom_auth_text_field_component";

import SmsIcon from "../../../assets/icons/sms_icon.png";
import LockIcon from "../../../assets/icons/lock_icon.png";
import LargeText from "../components/large_text_component";
import AuthButton from "../components/auth_button_component";
import ExtraAuthButton from "../components/create_account_button_component";

export default function SignUpFeature() {
    return (
        <div className="flex flex-col w-[25%] justify-center mx-auto">
            <LargeText text="Register to Legalx" />
            <p className="font-extrabold text-custom-grey pb-8">
                Connect to your partners and projects
            </p>
            <CustomAuthTextField autoComplete={false} title="Enter your full name" id="username" label="Your name..." required icon={SmsIcon.src} type="text" placeholder="..." />
            <CustomAuthTextField autoComplete={false} title="Enter your company email" id="email" label="email@some.com" required icon={SmsIcon.src} type="text" placeholder="..." />
            <CustomAuthTextField autoComplete={false} title="Enter your password" id="password" label="123456780" required icon={LockIcon.src} type="password" placeholder="..." />
            <CustomAuthTextField autoComplete={false} title="Repeat your password" id="repeat password" label="123456780" required icon={LockIcon.src} type="password" placeholder="..." />
            <AuthButton text="Create your account" />
            <LargeText text="Already signed up?" />
            <ExtraAuthButton text="Log in to your account!" />
        </div>
    )
}