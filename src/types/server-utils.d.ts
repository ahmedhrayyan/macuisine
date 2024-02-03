interface ISearchResult<T> {
  results: T[];
  offset: number;
  number: number;
  totalResults: number;
}
