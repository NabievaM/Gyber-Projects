import React from 'react';
import { SearchHistoryList, SearchHistoryItem, DeleteIcon } from './styled';
import DeleteIconSrc from '@/shared/assets/delete.svg';

interface SearchHistoryProps {
  searchHistory: string[];
  setSearchHistory: React.Dispatch<React.SetStateAction<string[]>>;
}

export const SearchHistory: React.FC<SearchHistoryProps> = ({
  searchHistory,
  setSearchHistory,
}) => {
  const handleDelete = (term: string) => {
    setSearchHistory(prevHistory => prevHistory.filter(item => item !== term));
  };

  return (
    <SearchHistoryList>
      {searchHistory.map((term, index) => (
        <SearchHistoryItem key={index}>
          <span>{term}</span>
          <DeleteIcon
            src={DeleteIconSrc}
            alt="delete"
            onClick={() => handleDelete(term)}
          />
        </SearchHistoryItem>
      ))}
    </SearchHistoryList>
  );
};
