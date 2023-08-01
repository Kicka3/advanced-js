def remove_url_anchor(url):
    return url[:url.find("#")] if "#" in url else url


   #  OR

def remove_url_anchor(url):
   return url.split("#")[0]