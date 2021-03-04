const mongoose = require('mongoose');


const home = new mongoose.Schema({
  topTitle:{
    type: String,
  },
  topSubtitle:{
    type: String,
  },
  topTextBtn:{
    type: String,
  },
  topLinkBtn:{
    type: String,
  },
  serviceTitle:{
    type: String,
  },
  serviceSubtitle:{
    type: String,
  },
  serviceIconOne:{
    type: String,
  },
  serviceTitleOne:{
    type: String,
  },
  serviceDescOne:{
    type: String,
  },
  serviceIconTwo:{
    type: String,
  },
  serviceTitleTwo:{
    type: String,
  },
  serviceDescTwo:{
    type: String,
  },
  serviceIconThree:{
    type: String,
  },
  serviceTitleThree:{
    type: String,
  },
  serviceDescThree:{
    type: String,
  },
},{
  timestamps:true,
});

mongoose.model('Home',home);