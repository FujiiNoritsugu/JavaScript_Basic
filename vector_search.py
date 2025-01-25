import os
from google.cloud import spanner

def connect_to_spanner(instance_id, database_id):
    """Connect to the Cloud Spanner database."""
    spanner_client = spanner.Client()
    instance = spanner_client.instance(instance_id)
    database = instance.database(database_id)
    return database

def vector_search(database, vector):
    """Perform a vector search using the COSIN_DISTANCE function."""
    with database.snapshot() as snapshot:
        query = (
            "SELECT id, COSIN_DISTANCE(vector_column, @vector) as distance "
            "FROM your_table_name "
            "ORDER BY distance ASC "
            "LIMIT 10"
        )
        params = {"vector": vector}
        param_types = {"vector": spanner.param_types.Array(spanner.param_types.Float64)}
        results = snapshot.execute_sql(query, params=params, param_types=param_types)

        for row in results:
            print(f"ID: {row[0]}, Distance: {row[1]}")

if __name__ == "__main__":
    # Set your instance and database IDs
    instance_id = "generative_ai_vector"
    database_id = "your-database-id"

    # Connect to the database
    database = connect_to_spanner(instance_id, database_id)

    # Example vector to search
    example_vector = [0.1, 0.2, 0.3, 0.4, 0.5]

    # Perform the vector search
    vector_search(database, example_vector)
