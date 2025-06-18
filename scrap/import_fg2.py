import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import os
import time

base_url = 'https://www.formalgrievance.com'
headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:124.0) Gecko/20100101 Firefox/124.0'}
visited = set()
output_dir = 'formal_pages'
os.makedirs(output_dir, exist_ok=True)

def is_internal(url):
    return url.startswith('/') or base_url in url

def slugify(url):
    path = url.replace(base_url, '').strip('/')
    return path.replace('/', '_') or 'home'

def scrape_and_save(url):
    if url in visited:
        return
    visited.add(url)

    try:
        print(f"📄 Scraping: {url}")
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        text = soup.get_text(separator='\n', strip=True)
        filename = f"{slugify(url)}.txt"
        with open(os.path.join(output_dir, filename), 'w', encoding='utf-8') as f:
            f.write(text)
        time.sleep(1)  # Be polite
    except Exception as e:
        print(f"❌ Error scraping {url}: {e}")

# Step 1: Start with the homepage
try:
    response = requests.get(base_url, headers=headers)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, 'html.parser')

    # Step 2: Collect internal links
    internal_links = set()
    for a in soup.find_all('a', href=True):
        href = a['href']
        full_url = urljoin(base_url, href)
        if is_internal(full_url):
            internal_links.add(full_url)

    # Step 3: Scrape and save each page
    for link in sorted(internal_links):
        scrape_and_save(link)

except Exception as e:
    print(f"Error on homepage: {e}")
