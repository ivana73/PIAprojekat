import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Radionica = new Schema({
    naziv: {
        type: String
    },
    datum: {
        type: String
    },
    mesto: {
        type: String
    },
    opis:{
        type: String
    },
    detaljnije:{
        type: String
    },
    preostaloMesta: {
        type: Number
    },
    profilnaSlika: {
        type: String
    },
    galerijaSlika: {
        type: Array
    },
    komentari: {
        type: Array
    },
    lajkovi: {
        type: Number
    }

});

export default mongoose.model('Radionica', Radionica, 'radionice');