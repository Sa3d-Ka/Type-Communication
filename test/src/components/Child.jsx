export function Child({ sendData }) {
    return (
        <>
            <button
                className="bg-sky-400 rounded-md px-2 py-1 cursor-pointer text-white"
                onClick={() => sendData("Hello Parent")}>
                Envoyer au parent
            </button>
        </>
    );
}
