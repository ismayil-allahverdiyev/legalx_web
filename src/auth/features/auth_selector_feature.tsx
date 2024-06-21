"use client";

import { useSelector } from "react-redux";
import SignUpFeature from "./sign_up_feature";
import { useAppSelector } from "../store";
import SignInFeature from "./sign_in_feature";

export default function AuthSelector() {
    const isLoggedIn: boolean = useAppSelector(state => state.auth.isLoggedIn);

    return isLoggedIn ? <SignUpFeature /> : <SignInFeature />

}