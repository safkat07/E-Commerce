import { auth } from '../../../auth'; // Adjust the path if needed

export default async function handler(req, res) {
    try {
        const session = await auth();
        res.status(200).json({ user: session?.user || null });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user data' });
    }
}
