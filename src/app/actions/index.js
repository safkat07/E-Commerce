"use server";

import { signIn, signOut } from '../../../auth';

export const handleGoogleSignIn = async () => {
    await signIn("google", { redirectTo: '/' });
}


export async function handleLogOut() {
    await signOut({ redirectTo: '/' })
}