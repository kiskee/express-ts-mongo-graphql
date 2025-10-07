import { Job, IJob } from "./models/Jobs.js";

export const resolvers = {
  Query: {
    jobs: async () => {
      return await Job.find().lean();
    },
  },

  Job: {
    date: (job: IJob) => job.createdAt.slice(0, 'yyyy-mm-dd'.length)
  },

  Mutation: {
    createJob: async (
      _: any,
      { input }: { input: { id: string; title: string; description?: string } }
    ) => {
      const newJob = new Job(input);
      await newJob.save();
      return newJob.toObject();
    },
  },
};
