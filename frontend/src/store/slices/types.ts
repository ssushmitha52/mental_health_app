export interface AccountResponse {
  user: {
    id: string;
    username: string;
    gender: string;
    dob: string;
    email: string;
    is_active: boolean;
  };
  access: string;
  refresh: string;
  token: string;
}