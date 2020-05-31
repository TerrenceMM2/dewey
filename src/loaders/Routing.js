import bookRoutes from '../routes/bookRoutes';
import userRoutes from '../routes/userRoutes';
import authRoutes from '../routes/authRoutes';
import utilRoutes from '../routes/utilRoutes';

export class Routing {
    // constructor brings in app and express
    constructor(app, express) {
        this.app = app;
        this.express = express;
    }

    init() {
        this.app.use(authRoutes);
        this.app.use(bookRoutes);
        this.app.use(userRoutes);
        this.app.use(utilRoutes);
    }
}
