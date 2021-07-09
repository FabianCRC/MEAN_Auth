const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mean-auth", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then((db) => console.log("DB is connected"))
  .catch((error) => console.error(err));
 