export interface BasePaginationProps {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
}

export interface BaseImageProps {
  src: string;
  alternativeText: string;
  title: string;
}
