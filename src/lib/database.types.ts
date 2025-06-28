export interface Database {
  public: {
    Tables: {
      product_interest: {
        Row: {
          id: number;
          product_id: string;
          user_session: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          product_id: string;
          user_session: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          product_id?: string;
          user_session?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}
