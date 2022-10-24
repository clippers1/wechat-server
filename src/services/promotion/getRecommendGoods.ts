import puppeteer from "puppeteer";
import fs from "fs";

const start = async (searchText: string) => {
  const host = (text: string) =>
    `https://search.smzdm.com/?c=home&s=${encodeURIComponent(text)}&v=a`;
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.goto(host(searchText));
  await page.screenshot({ path: "example.png" });

  const feedRow = await page.$$(
    "#feed-main-list li.feed-row-wide[data-atp='3']"
  );

  const arr = [];

  for (let i = 1; i < feedRow.slice(0, 10).length; i++) {
    const title = await feedRow[i].$eval(
      "div.z-feed-content > h5 > a.feed-nowrap",
      (el: any) => el.innerText
    );
    const price = await feedRow[i].$eval(
      "div.z-feed-content .z-highlight",
      (el: any) => el.innerText
    );
    const link = await feedRow[i].$eval(
      "div.z-feed-content > h5 > a.feed-nowrap",
      (el) => el.getAttribute("href") ?? ""
    );

    arr.push({
      title: title.replace('\n', ''),
      price,
      link,
    });
  }

  await browser.close();
  return arr
};

export default start;
