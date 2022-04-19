import * as sst from "@serverless-stack/resources";

export default class StorageStack extends sst.Stack {
  // Public reference to the table
  table;
  // Public reference to the bucket
  bucket;

  constructor(scope, id, props) {
    super(scope, id, props);

    //start - hope this is the right spot
    // Create an S3 bucket
    this.bucket = new sst.Bucket(this, "Uploads");
    // End hope this is the right spot

    // Create the DynamoDB table
    this.table = new sst.Table(this, "Notes", {
      fields: {
        userId: sst.TableFieldType.STRING,
        noteId: sst.TableFieldType.STRING,
      },
      primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
    });
  }
}
