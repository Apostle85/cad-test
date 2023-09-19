const { spawnSync } = require('node:child_process');
import { Request, Response, NextFunction } from 'express';
// route /compute-cone
module.exports.computeCone = async (req: Request, res: Response, next: NextFunction) => {
    console.log('SERVER: COMPUTE_CONE: START')
    const { coneHeight, radius, numberOfSegments } = req.body;
    const process = await spawnSync('python3', [`utils/computeCone.py`, JSON.stringify({ cone_height: coneHeight, radius, number_of_segments: numberOfSegments })]);
    const result = process.stdout?.toString()?.trim();
    const error = process.stderr?.toString()?.trim();
    if (result) {
        console.log('result', result)
        console.log('SERVER: COMPUTE_CONE: END: SUCCESS');
        res.send(JSON.stringify({ data: result }));
    } else {
        console.log('SERVER: COMPUTE_CONE: END: ERROR:', error);
        next(error);
    }
}