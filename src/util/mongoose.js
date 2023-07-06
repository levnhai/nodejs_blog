module.exports = {
    mutipleMongooseToObject: function (mongoses) {
        return mongoses.map((mongoose) => mongoose.toObject());
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
