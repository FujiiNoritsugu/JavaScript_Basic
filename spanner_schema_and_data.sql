-- Create a table to store vectors
CREATE TABLE Vectors (
    id STRING(MAX) NOT NULL,
    vector_column ARRAY<FLOAT64> NOT NULL,
) PRIMARY KEY(id);

-- Insert sample data into the Vectors table
INSERT INTO Vectors (id, vector_column) VALUES
('vector1', [0.1, 0.2, 0.3, 0.4, 0.5]),
('vector2', [0.5, 0.4, 0.3, 0.2, 0.1]),
('vector3', [0.2, 0.3, 0.4, 0.5, 0.6]),
('vector4', [0.6, 0.5, 0.4, 0.3, 0.2]),
('vector5', [0.3, 0.4, 0.5, 0.6, 0.7]);
