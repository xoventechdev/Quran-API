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
    connection.query(`
        SELECT
    bn.id,
    bn.ayat,
    bn.text AS v_bangla,
    ey.text AS v_yusufali,
    qa.AyahTextAr as v_rabic,
    au.audio as v_audio
FROM
    bn_bengali AS bn
JOIN
    en_yusufali AS ey ON bn.sura = ey.sura
JOIN
    quranar AS qa ON bn.sura = qa.SuraIDAr
JOIN
    audio AS au ON bn.sura = au.sura_no   
WHERE
    bn.sura = ? AND ey.sura = ?
GROUP BY
    bn.id, bn.ayat;

    `, [id, id], function(err, rows, fields) {
        if(err){
            res.status(500).json({
                status : 'error',
                data : err
            })
            return;
        }
    
        if(rows.length > 0){
            res.json({
                status :'success',
                data : rows
            })
        }else{
            res.status(404).json({
                status : 'error',
                message : 'No data found'
            })
        }
    });
};
