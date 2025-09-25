import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  console.log();
  try {
    await mongoose.connect(
     process.env.MONGO_URI as string
    );
    console.log("MongoDB conectado");
  } catch (error) {
    console.error("Error al conectar con MongoDB:", error);
    process.exit(1); 
  }
};
