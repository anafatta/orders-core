const db = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


/*CliDir.belongsTo(Clientes,{
    foreignKey:'idcli',
})

Clientes.hasMany(CliDir,{
    foreignKey:'idcli',
})
*/

module.exports={
    find(req,res){
        // console.log('nro de vendedor: '+ req.params.ven)
        console.log('nom: '+ req.params.nom)

        att={};
        att['attributes']=['id', 'nom'];
      
        if (req.params.ven){
            att['where']={vend:req.params.ven}
        }
      
        if (req.params.nom){
            //att['where']={vend:req.params.ven, nom: {[Op.iLike]: '%'+req.params.nom+'%'}}
            if (!att['where']){att['where']={}}  
            att['where']['nom']={[Op.iLike]: '%'+req.params.nom+'%'}
            att['limit']= 5 
        }

        console.log('att = '+ JSON.stringify(att));

        return db.clientes.findAll(att)
        .then(clientes => res.status(201).send(clientes))
        .catch(error => res.status(400).send(error));
    },
    findOne(req,res){

// AQUI DEBERIA MANDAR UN CAMPO deleted OR deleted_At 
// PARA QUE PUT() PUEDA BORRAR DIRECCIONES
// se hace soft delete que no me afectaria lo viejo pero ya no se puede usar.          

        console.log('ID de Cliente: '+ req.params.id)
        
        att={};
    
        if (req.params.id){
            delete att.attributes
            att['attributes']=['id', 'nom','cuit','codfac','razonsoc'];
            att['include']=[{model:db.clidir, as:'address',
                attributes:['id','dir','localidad','codpos','prov','expreso'],
                include:{model:db.expresos, as:'flete',
                attributes:['nom']}},
                {model:db.vend, as:'salesman',
                attributes:['id','nom']}]
            if (!att['where']){att['where']={}}  
            att['where']={id: req.params.id}
        }

        //console.log('att = '+ JSON.stringify(att));

        return db.clientes.findOne(att)
        .then(clientes => res.status(201).send(clientes))
        .catch(error => res.status(400).send(error));
    },
    post(req,res){
        //'id', 'nom','cuit','codfac','razonsoc'

        var cli = {
            nom: req.body.nom,
            cuit:req.body.cuit,
            razonsoc:req.body.razonsoc,
            blk:0,
            vend: req.body.salesman,
            address: [] 
        }
        for (var i in req.body.address) {
            dir=req.body.address[i]
            cli.address.push({
                "dir"       : dir.dir,
                "localidad" : dir.localidad,
                "codpos"    : dir.codpos,
                "prov"      : dir.prov,
                "expreso"   : dir.expreso
                    
            })

        }
        console.log((cli))
        return db.sequelize.transaction(transaction =>
            db.clientes.create(cli,{
            include: {model:db.clidir, as: "address"},transaction
        }))
        .then(customer => {
            console.log('*** this.successHandler ***' + this.successHandler)
            // const customerResponse = db.clientes.findById(req.params.id, { include: [{model:db.clidir, as:'address'}] })
            //.then (customerResponse => {res.status(201).send(customerResponse)})
            res.status(201).send(customer)
        }).catch( err => {
            console.log('*** this.errorHandler ***' + this.errorHandler)
            res.status(400).send(err)
        });
       
    },
    async updateClientes(req,res){
        //let requestBody = this.parseRequest();
        // Fetch customer
        const customer = await db.clientes.findById(req.params.id, { include: [{model:db.clidir, as:'address'}] });
        if (!customer) {
            throw new NotFoundError();
        }
        // Get deltas
        console.log('==========================')
        console.log('customer.address =' + JSON.stringify(customer.address))
        console.log('req.body.address =' + JSON.stringify(req.body.address))
        console.log('==========================')

     //   const addressDelta = this.getDelta(customer.address, req.body.address);
        const source  = customer.address
        const updated = req.body.address

        let added   = updated.filter(updatedItem => source.find(sourceItem => sourceItem.id === updatedItem.id) === undefined);
        // let changed = source.filter(sourceItem => updated.find(updatedItem => updatedItem.id === sourceItem.id) !== undefined);
        let changed = updated.filter(updatedItem => source.find(sourceItem => sourceItem.id === updatedItem.id) !== undefined);
        let deleted = source.filter(sourceItem => updated.find(updatedItem => updatedItem.id === sourceItem.id) === undefined);
    
    
        const addressDelta = {
          added: added,
          changed: changed,
          deleted: deleted
        };

        console.log('==========================')
        console.log('addressDelta.added =' + JSON.stringify(addressDelta.added))
        console.log('addressDelta.changed =' + JSON.stringify(addressDelta.changed))
        console.log('addressDelta.deleted =' + JSON.stringify(addressDelta.deleted))
        console.log('==========================')
        
        // Start transaction
        await db.sequelize
            .transaction(async transaction => {

            // Update addresses
            await Promise.all([
                addressDelta.added.map(async address => {
                    address.idcli = customer.id
                    await db.clidir.create( address, { transaction });
                }),
                addressDelta.changed.map(async addressData => {
                    const address = customer.address.find(_address => _address.id === addressData.id);

                    console.log('==========================')
                    console.log('address =' + JSON.stringify(address))
                    console.log('                          ')
                    console.log('addressData =' + JSON.stringify(addressData))
                    console.log('==========================')
            
                    await address.update(addressData, { transaction });
                }),
                addressDelta.deleted.map(async address => {
                    await address.destroy({ transaction });
                })
            ]);      
            // Finally update customer
            return await customer.update(req.body, { transaction });
        }).then(customer => {
            console.log('*** this.successHandler ***' + this.successHandler)
            const customerResponse = db.clientes.findById(req.params.id, { include: [{model:db.clidir, as:'address'}] })
            .then (customerResponse => {res.status(201).send(customerResponse)})
        }).catch( err => {
            console.log('*** this.errorHandler ***' + this.errorHandler)
            res.status(400).send(err)
        });
      
    },  
    getDelta(source, updated) {

        let added = updated.filter(updatedItem => source.find(sourceItem => sourceItem.id === updatedItem.id) === undefined);
        let changed = source.filter(sourceItem => updated.find(updatedItem => updatedItem.id === sourceItem.id) !== undefined);
        let deleted = source.filter(sourceItem => updated.find(updatedItem => updatedItem.id === sourceItem.id) === undefined);
    
    
      const delta = {
        added: added,
        changed: changed,
        deleted: deleted
      };
    
      return delta;
    }
        
}   
