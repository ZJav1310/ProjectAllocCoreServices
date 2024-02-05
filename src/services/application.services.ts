import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

// TODO: Had to rush this, needs to be fixed

const prisma = new PrismaClient();
dotenv.config();

class ApplicationService {

  static async apply(data: any) {
    let application = undefined;
    try {
      application = await prisma.projectApplications.create({
        data,
      });
    } catch (e) {
      // project = { project_id: -1 }
    }
    return application;
  }

  static async all() {
    const allApplications = await prisma.projectApplications.findMany({
      include: {
        user: true
      },
    });
    return allApplications;
  }
}

export default ApplicationService;
