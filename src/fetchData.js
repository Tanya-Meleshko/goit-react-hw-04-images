const KEY = '30714189-c7a9caa64088584cf8591e191';

export function fetchData(query, page) {
  return fetch(
    `https://pixabay.com/api/?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
  ).then(response => response.json());
}
