"use client";

export default function ExtraAuthButton(props: ExtraAuthButtonInterface) {
    return (
        <button className="font-extrabold text-custom-grey text-left">
            {props.text}
        </button>
    )
}