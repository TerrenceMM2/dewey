import bookRoutes from '../routes/bookRoutes';
import userRoutes from '../routes/userRoutes';

export class Routing {
  // constructor brings in app and express
  constructor(app, express) {
    this.app = app;
    this.express = express;
  }

  init() {
    this.app.use(bookRoutes);
    this.app.use(userRoutes);
  }
}
