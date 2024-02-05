import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ProjectService {
  static async delete(data: any) {
    let project = undefined;

    try {
      project = await prisma.project.delete({
        where: {
          project_id: data.project_id,
        },
      });
    } catch (e) {
      // project = { project_id: -1 }
    }
    return project;
  }

  static async update(data: any) {
    let project = undefined;
    try {
      project = await prisma.project.update({
        where: {
          project_id: data.project_id,
        },
        data,
      });
    } catch (e) {
      // data = { project_id: -1 }
    }
    return project;
  }

  static async getById(id: number) {
    try {
      let project = await prisma.project.findFirstOrThrow({
        where: {
          project_id: id,
        },
        include: {
          applications: true,
        },
      });
      return project;
    } catch (err) {
      return { project_id: -1 };
    }
  }

  static async add(data: any) {
    let project = undefined;
    try {
      project = await prisma.project.create({
        data,
      });
    } catch (e) {
      // project = { project_id: -1 }
    }
    return project;
  }

  static async all() {
    const allProjects = await prisma.project.findMany({
      include: {
        applications: true,
      },
    });
    return allProjects;
  }

}

export default ProjectService;
