const express = require ('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');

const app = express();
const port = 3000;
const orders = require ('./routes/orders');
const path = require ('path');

app.listen(port, () => {
    console.log('Server start and listen in port '+ port)
})

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname , 'public')));

app.use('/orders', orders);


app.get('/', (req, res) => {
    res.send('Invalid endpoint');
})