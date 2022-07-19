import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const secret = process.env.NEXT_CMS_DATOCMS_PREVIEW_SECRET;

  if (secret && req.query.secret !== secret) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  res.setPreviewData({});

  res.writeHead(307, { Location: '/' });
  res.end();
};
