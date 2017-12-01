const express = require('express');
const router = express.Router();
const ContentResponse = require('../model/ContentResponse');

router.all('/*', function (req, res, next) {
    const {baseUrl, method} = req;
    ContentResponse.findOne({where: {url: baseUrl}})
        .then(response => {
            if (!response) {
                res.status(200).json({
                    code: 500,
                    msg: "网络故障",
                    data: null
                });
            } else {
                res.status(200).json(
                    response.toJSON().response
                )
            }
        });
});

module.exports = router;