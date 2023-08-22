interface MyButtonProps {
    /** The text to display inside the button */
    title: string;
    /** Whether the button can be interacted with */
    disabled: boolean;
}

function MyButton({ title, disabled }: MyButtonProps) {
    return (
        <button disabled={disabled} className="border rounded-xl p-3">{title}</button>
    );
}

export default function MyApp() {
    return (
        <div className=" text-center">
            <h1>Welcome to my app</h1>
            <MyButton title="I'm a disabled button" disabled={false} />
        </div>
    );
}