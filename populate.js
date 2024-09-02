import mongoose from 'mongoose';
import User from './models/User.model.js';
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

// Sample data
const users = [
    {
        sNo: 1,
        firstName: "John",
        lastName: "Doe",
        aadharNo: "1234-5678-9012",
        city: "Bengaluru",
        state: "Karnataka",
        pincode: "560001",
        address: "123 Main St",
        contactNo: "9876543210"
    },
    {
        sNo: 2,
        firstName: "Jane",
        lastName: "Smith",
        aadharNo: "2345-6789-0123",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400001",
        address: "456 Elm St",
        contactNo: "8765432109"
    },
    {
        sNo: 3,
        firstName: "Alice",
        lastName: "Johnson",
        aadharNo: "3456-7890-1234",
        city: "Chennai",
        state: "Tamil Nadu",
        pincode: "600001",
        address: "789 Oak St",
        contactNo: "7654321098"
    },
    {
        sNo: 4,
        firstName: "Bob",
        lastName: "Brown",
        aadharNo: "4567-8901-2345",
        city: "Kolkata",
        state: "West Bengal",
        pincode: "700001",
        address: "101 Pine St",
        contactNo: "6543210987"
    },
    {
        sNo: 5,
        firstName: "Charlie",
        lastName: "Davis",
        aadharNo: "5678-9012-3456",
        city: "Hyderabad",
        state: "Telangana",
        pincode: "500001",
        address: "202 Maple St",
        contactNo: "5432109876"
    },
    {
        sNo: 6,
        firstName: "David",
        lastName: "Wilson",
        aadharNo: "6789-0123-4567",
        city: "Pune",
        state: "Maharashtra",
        pincode: "411001",
        address: "303 Cedar St",
        contactNo: "4321098765"
    },
    {
        sNo: 7,
        firstName: "Eve",
        lastName: "Martinez",
        aadharNo: "7890-1234-5678",
        city: "Ahmedabad",
        state: "Gujarat",
        pincode: "380001",
        address: "404 Birch St",
        contactNo: "3210987654"
    },
    {
        sNo: 8,
        firstName: "Frank",
        lastName: "Garcia",
        aadharNo: "8901-2345-6789",
        city: "Jaipur",
        state: "Rajasthan",
        pincode: "302001",
        address: "505 Walnut St",
        contactNo: "2109876543"
    },
    {
        sNo: 9,
        firstName: "Grace",
        lastName: "Hernandez",
        aadharNo: "9012-3456-7890",
        city: "Lucknow",
        state: "Uttar Pradesh",
        pincode: "226001",
        address: "606 Chestnut St",
        contactNo: "1098765432"
    },
    {
        sNo: 10,
        firstName: "Hank",
        lastName: "Lopez",
        aadharNo: "0123-4567-8901",
        city: "Patna",
        state: "Bihar",
        pincode: "800001",
        address: "707 Spruce St",
        contactNo: "0987654321"
    }
];

// Insert data into the collection
User.insertMany(users)
    .then(() => {
        console.log('Data inserted successfully!');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error inserting data', err);
        mongoose.connection.close();
    });
