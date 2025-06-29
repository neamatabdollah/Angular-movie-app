export interface IReview {
  id: string;
  author: string;
  content: string;
  created_at: string;
  author_details: {
    rating: number;
    avatar_path: string;
  };
}
