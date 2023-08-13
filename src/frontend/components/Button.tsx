import { FiArrowRight, FiLoader } from "react-icons/fi";

export default function SubmitButton({ isLoading, text }: { isLoading: boolean, text: string }) {
    return (
        <button
            type="submit"
            className={`w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            disabled={isLoading}
        >
            {isLoading ? (
                <FiLoader className="animate-spin mx-auto" />
            ) : (
                <>
                    <FiArrowRight className="inline-block mr-2" />
                    {text}
                </>
            )}
        </button>
    )
}
