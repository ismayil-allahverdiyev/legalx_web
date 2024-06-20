export default function LargeText(props: LargeTextInterface) {
    return (
        <p className="font-extrabold text-custom-text-blue text-2xl">
            {props.text}
        </p>
    )
}