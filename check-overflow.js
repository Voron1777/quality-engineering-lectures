const fs = require('fs');

const port = process.env.PORT || 8090;
const files = process.argv.length > 2
    ? process.argv.slice(2)
    : fs.readdirSync(__dirname)
        .filter(name => /^lecture-\d+\.html$/.test(name))
        .sort();

(async () => {
    const puppeteer = (await import('puppeteer-core')).default;
    const browser = await puppeteer.launch({
        executablePath: '/usr/bin/google-chrome',
        args: ['--no-sandbox', '--disable-dev-shm-usage'],
    });
    for (const file of files) {
        const page = await browser.newPage();
        await page.goto(`http://localhost:${port}/${file}`, { waitUntil: 'networkidle0' });
        const data = await page.evaluate(() => {
            const pres = [...document.querySelectorAll('.slide')];
            return pres.map((s, i) => {
                const overflowY = s.scrollHeight - s.clientHeight;
                const overflowX = s.scrollWidth - s.clientWidth;
                const widePres = [...s.querySelectorAll('pre')].map(p => p.scrollWidth - p.clientWidth).filter(d => d > 2);
                const h2 = s.querySelector('h2') ? s.querySelector('h2').textContent.trim().slice(0, 40) : '';
                return { n: i + 1, h2, overflowY, overflowX, widePres };
            });
        });
        console.log(`\n=== ${file} ===`);
        for (const d of data) {
            const flag = d.overflowY > 2 || d.overflowX > 2 || d.widePres.length ? ' <<<' : '';
            console.log(`slide ${String(d.n).padStart(2)}: overY=${d.overflowY} overX=${d.overflowX} widePre=[${d.widePres}] ${d.h2}${flag}`);
        }
        await page.close();
    }
    await browser.close();
})();