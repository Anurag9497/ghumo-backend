import { Crousel } from '../models/crouselModel';


const crouselController = (req, res) => {
    Crousel.find({},(error, result) =>{
        if(error) {
            res.json({messege: error});
        }
        else {
            res.json(result);
        }
    });
};

export default crouselController;