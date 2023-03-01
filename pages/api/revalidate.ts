import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check for secret to confirm this is a valid request
  if (!req.query.secret || req.query.secret !== process.env.NEXT_PUBLIC_REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    if (!req.body.model || !req.body.entry) {
      return res.status(401).json({ message: 'Not a valid CMS call' });
    }
    if (req.body.model === 'blog') {
      await res.revalidate(`/blog/${req.body.entry.url}`);
      return res.json({ revalidated: true });
    }
    if (req.body.model === 'property') {
      await res.revalidate(`/listings/cms/${req.body.entry.id}`);
      return res.json({ revalidated: true });
    }
    return res.status(401).json({ message: 'Not a valid model found' });
  } catch (err: any) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send(err.message);
  }
}
