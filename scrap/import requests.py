import requests
from bs4 import BeautifulSoup

url = 'https://formalgrievance.com'
headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:124.0) Gecko/20100101 Firefox/124.0'
}

try:
    response = requests.get(url, headers=headers, timeout=10)
    response.raise_for_status()
except requests.exceptions.RequestException as e:
    print(f"❌ Request failed: {e}")
    exit()

soup = BeautifulSoup(response.text, 'html.parser')

# Print the page title
print(f"📄 Title: {soup.title.text.strip()}")

# Print all links
print("\n🔗 Links found on the page:")
for link in soup.find_all('a', href=True):
    print(link['href'])

# Print first 1000 characters of page text
print("\n📝 Page Text Preview:")
text = soup.get_text(separator='\n', strip=True)
print(text[:1000])

# Optional: Save full text
with open("formalgrievance_home.txt", "w", encoding="utf-8") as f:
    f.write(text)
