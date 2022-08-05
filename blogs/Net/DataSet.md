# DataSet

`A`

public static DataTable ExecuteQuery\(string sqlString\)

        {

            using \(MySqlConnection mySql = new MySqlConnection\(mySqlString\)\)

            {

                mySql.Open\(\);

                using \(MySqlCommand mySqlCommand = mySql.CreateCommand\(\)\)

                {

                    MySqlDataAdapter adaper = new MySqlDataAdapter\(sqlString, mySql\);

                    DataTable dt = new DataTable\(\);

                    adaper.Fill\(dt\);

                    return dt;  

                }

            }

        }
