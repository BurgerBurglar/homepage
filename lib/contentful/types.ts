export interface BlogFields {
  title: string;
  slug: string;
  content: string;
  topics: string[];
}

export interface Blog extends BlogFields {
  id: string;
  createdAt: string;
  updatedAt: string;
}
