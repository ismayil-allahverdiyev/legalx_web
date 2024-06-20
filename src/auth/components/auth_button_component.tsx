"use client";

export default function AuthButton(props: AuthButtonInterface) {
    return (
        <button className="py-4 mt-8 w-full bg-primary rounded-lg font-extrabold text-white text-lg" onClick={() => { props.text == "Register" ? console.log(1) : console.log(2) }}>
            {props.text}
        </button>
    )
}