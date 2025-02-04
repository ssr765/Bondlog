import { JWTPayload } from "jose";

interface SessionPayload extends JWTPayload {
  userToken: string;
  expiresAt: Date;
}

interface User {
  id: string;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

interface PostDetailProps {
  post: Post;
  isLoggedIn: boolean;
  userId: string;
}

interface PostActionsProps {
  postId: string;
}

interface Post {
  id: string;
  title: string;
  subtitle: string;
  body: string;
  author_id: string;
  author_name: string;
  date: string;
  created_at: string;
  updated_at: string;
}

interface Register {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

interface FormState {
  email: string;
  password: string;
}

interface APIError {
  message?: string;
  response?: {
    status?: number;
  };
}

export type {
  User,
  Post,
  Register,
  FormState,
  SessionPayload,
  PostDetailProps,
  PostActionsProps,
  APIError,
};
