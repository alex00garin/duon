-- Create product_interest table to track user interest in products
CREATE TABLE product_interest (
  id BIGSERIAL PRIMARY KEY,
  product_id TEXT NOT NULL,
  user_session TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create indexes for faster queries
CREATE INDEX idx_product_interest_product_id ON product_interest(product_id);
CREATE INDEX idx_product_interest_user_session ON product_interest(user_session);
CREATE INDEX idx_product_interest_created_at ON product_interest(created_at);
CREATE UNIQUE INDEX idx_product_interest_unique ON product_interest(product_id, user_session);

-- Enable Row Level Security (RLS)
ALTER TABLE product_interest ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (since we're using session-based tracking)
CREATE POLICY "Allow all operations on product_interest" ON product_interest
FOR ALL USING (true);

-- Create function to automatically update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to auto-update updated_at
CREATE TRIGGER update_product_interest_updated_at
    BEFORE UPDATE ON product_interest
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 