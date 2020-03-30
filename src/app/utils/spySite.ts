import requestPromise from 'request-promise';
import cheerio from 'cheerio';

interface Result {
    plan?: string,
    charge?: string,
    transfer?: string,
    paymentMonthly?: string,
    status?: string
}

export default async function spySite(url: string): Promise<Result> {
    const result: Result = {};

    await requestPromise(url, function(error, response, body) {
        if (error) return { error: 'An error ocurred' };

        const $ = cheerio.load(body);

        result.plan = 'professional';
        result.charge = $('.tarifas-2-1-2').text().trim();
        result.transfer = $('.tarifas-2-2-2').text().trim();
        result.paymentMonthly = $('.tarifas-2-4-2').text().trim();
    });

    if (result.plan && result.charge && result.transfer && result.paymentMonthly) {
        result.status = 'succeeded';
    } else {
        result.status = 'failed';
    }

    return result;
}
