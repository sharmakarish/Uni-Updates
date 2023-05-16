import mongoose from 'mongoose';


const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-s9iqz6l-shard-00-00.6nj2mgk.mongodb.net:27017,ac-s9iqz6l-shard-00-01.6nj2mgk.mongodb.net:27017,ac-s9iqz6l-shard-00-02.6nj2mgk.mongodb.net:27017/?ssl=true&replicaSet=atlas-q6qsjh-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{

        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully'); 
    }catch(error){
        console.log('Error while connecting with datbase', error);

    }
};

export default Connection; 