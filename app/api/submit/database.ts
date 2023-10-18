import { Db, MongoClient, ServerApiVersion } from "mongodb";

export class DB {
  private static db?: Db;

  private constructor() {
  }

  private static async create() {
    if (!process.env.ATLAS_URI) {
      console.error(`ATLAS_URI not in .env! Exiting...`)
      process.exit(2)
    }

    const dbClient = new MongoClient(process.env.ATLAS_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    try {
      await dbClient.connect()
      if (!process.env.DB_NAME) {
        console.error(`DB_NAME not in .env! Exiting...`)
        process.exit(3)
      }
      DB.db = dbClient.db(process.env.DB_NAME)
    } catch (err) {
      console.error('Error connecting to database. Hint: Check if the IP is allowed network acess in cluster config.')
      console.error(err)
      process.exit(3)
    }
  }

  public static async getDB(): Promise<Db> {
    if (DB.db) {
      return DB.db;
    } else {
      await DB.create();
      return DB.db!;
    }
  }
}