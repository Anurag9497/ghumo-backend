import crouselController from "../controllers/crouselController";


const crouselRoute = (app) => {
    app.route('/api/crousel')
        .get(crouselController);
};

export default crouselRoute;