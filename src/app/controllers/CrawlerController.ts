import spySite from '../utils/spySite';

import { Request, Response } from 'express';

class CrawlerController {
    async verifySite(req: Request, res: Response): Promise<Response> {
        const { url } = req.query;

        const data = await spySite(url);

        return res.json(data);
    }
}

export default new CrawlerController;
