const mongoose = require("mongoose");
const { MongoClient, GridFSBucket } = require("mongodb");
const fs = require("fs");

exports.uploadVideo = async (req, res) => {
  const URL =
    "mongodb+srv://dbUser:Nano1234567@cluster01.jtu1vi3.mongodb.net/animegoku?retryWrites=true&w=majority";

  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  try {
    const client = await MongoClient.connect(URL, { useUnifiedTopology: true });
    const db = client.db();

    console.log("database connected");

    const bucket = new GridFSBucket(db, {
      bucketName: "uploads", // Specify your bucket name
    });

    const uploadStream = bucket.openUploadStream(req.file.originalname);

    uploadStream.end(req.file.buffer);
    //videoReadStream.pipe(uploadStream);

    let totalBytes = 0;
    let uploadedBytes = 0;

    // Track total bytes to calculate progress
    uploadStream.on("file", (file) => {
      totalBytes = file.length;
    });

    // Track progress and send updates to the client
    uploadStream.on("data", (chunk) => {
      uploadedBytes += chunk.length;
      const progress = (uploadedBytes / totalBytes) * 100;
      // Send progress updates to the client
      console.log(`Progress: ${progress.toFixed(2)}%\n`);
      res.write(`Progress: ${progress.toFixed(2)}%\n`);
    });

    uploadStream.on("finish", async () => {
      client.close();
      return res.end("File uploaded successfully");

      //    res.status(201).json({ message: "File uploaded successfully" });
    });

    uploadStream.on("error", (err) => {
      console.error("Error uploading video:", err);
      client.close();
      return res.status(500).json({ message: "Internal Server Error" });
    });
  } catch (err) {
    console.error("Error connecting to the database:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
