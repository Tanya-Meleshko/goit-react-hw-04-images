import { useState } from 'react';
import Gallery from './Gallery/Gallery';
import SearchForm from './SearchForm/SearchForm';
import { fetchData } from 'fetchData';
import ScrollButton from './ScrollButton/ScrollButton';
import { useEffect } from 'react';

export const App = () => {
  const [gallery, setGallery] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  const KEY = '30714189-c7a9caa64088584cf8591e191';

  const addAutoScroll = () => {
    const cardHeight = 500;

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      setIsLoading(true);

      fetchData(KEY, searchQuery, page)
        .then(gallery => {
          page > gallery.totalHits / 12
            ? setIsLastPage(true)
            : setIsLastPage(false);

          gallery.hits.length === 0
            ? setGallery(['noimg'])
            : setGallery(prevGallery => [...prevGallery, ...gallery.hits]);
        })
        .finally(() => {
          setIsLoading(false);
          if (page > 1) {
            setTimeout(() => {
              addAutoScroll();
            }, 200);
          }
        });
    }
  }, [searchQuery, page]);

  const onSubmit = query => {
    if (query.trim() !== '' && query !== searchQuery) {
      setSearchQuery(query);
      setGallery([]);
      setPage(1);
    }
  };

  const loadMore = () => {
    setPage(prevPage => {
      return prevPage + 1;
    });
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: 16,
        paddingBottom: 24,
      }}
    >
      <SearchForm onSubmit={onSubmit} />

      <Gallery
        isLastPage={isLastPage}
        isLoading={isLoading}
        loadMore={loadMore}
        posts={gallery}
      />

      <ScrollButton />
    </div>
  );
};
