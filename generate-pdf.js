const puppeteer = require('puppeteer');

(async () => {
  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    console.log('Navigating to http://localhost:3001/promo...');
    await page.goto('http://localhost:3001/promo', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    console.log('Generating PDF...');
    await page.pdf({
      path: 'Muelle8_Promotional_Calendar.pdf',
      format: 'A4',
      printBackground: true,
      margin: { top: '1cm', right: '1cm', bottom: '1cm', left: '1cm' }
    });

    await browser.close();
    console.log('PDF generated successfully: Muelle8_Promotional_Calendar.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  }
})();
