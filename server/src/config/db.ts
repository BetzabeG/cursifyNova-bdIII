// src/config/db.ts
import mongoose from 'mongoose';
import { config } from './index';

const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(config.mongoUri);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDB;