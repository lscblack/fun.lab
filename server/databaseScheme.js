import mongoose from 'mongoose';

const allTables = () =>{
    //******************* */ For Login Table
    const Loginschema = new mongoose.Schema({
        fname: { type: String, required: false },
        lname: { type: String, required: false },
        username: { type: String, required: false },
        email: { type: String, required: false },
        phone: { type: String, required: false },
        password: { type: String, required: false }
    });
    
    //******************** */ Create MongoDB model(table)
    const loginmodel = mongoose.model('Users', Loginschema);

    return [loginmodel]

}
export default allTables;