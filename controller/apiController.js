const connection = require('../helper/database')
exports.allSurah = (req, res) => {

    connection.query('SELECT * FROM sura', function(err, rows, fields) {
        if(err){
            res.status(500).json(
                {
                    status : 'error',
                    data : err
                }
            )
            return;
        }

        const successData = {
            status :'success',
            data : rows
        }

        res.json(successData);
    });
};


exports.singleSurah = (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM bn_bengali WHERE sura =?', [id], function(err, rows, fields) {
        if(err){
            res.status(500).json(
                {
                    status : 'error',
                    data : err
                }
            )
            return;
        }

        const successData = {
            status :'success',
            data : rows
        }

        res.json(successData);
    })
};