
import { FcGoogle } from "react-icons/fc";
import { signIn } from '../../auth';
import { handleGoogleSignIn } from "@/app/actions";

const SocialLogin = () => {
    return (
        <form
            action={handleGoogleSignIn}
        >
            <button type="submit" className='h-full flex cursor-pointer justify-center gap-x-3 items-center text-xl border-orange-600 py-1.5  w-full border-2 bg-white'>
                Continute with <FcGoogle />
            </button>
        </form>
    )
}

export default SocialLogin