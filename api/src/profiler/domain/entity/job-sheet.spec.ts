import { JobSheet } from './job-sheet';

describe('JobSheet', () => {
  it('should create an instance', () => {
    const jobSheet = new JobSheet({
      reference: '3d4e0e3b-3de1-4f8a-8f3e-6f0e1b9aae7b',
      jobTitle: 'Software Engineer',
      description: `We are looking for a software engineer to join our team. 
        We work on a plateform to reduce carbon footprint with React and Node.js.`,
    });

    expect(jobSheet).toBeInstanceOf(JobSheet);
    expect(jobSheet.jobTitle).toBe('Software Engineer');
    expect(jobSheet.description).toBe(
      `We are looking for a software engineer to join our team. 
        We work on a plateform to reduce carbon footprint with React and Node.js.`,
    );
    expect(jobSheet.requiredSkills).toEqual([]);
  });

  it('should create an instance with required skills', () => {
    const jobSheet = new JobSheet({
      reference: '3d4e0e3b-3de1-4f8a-8f3e-6f0e1b9aae7b',
      jobTitle: 'Software Engineer',
      description: `We are looking for a software engineer to join our team. 
        We work on a plateform to reduce carbon footprint with React and Node.js.`,
      requiredSkills: ['React', 'Node.js'],
    });

    expect(jobSheet).toBeInstanceOf(JobSheet);
    expect(jobSheet.jobTitle).toBe('Software Engineer');
    expect(jobSheet.description).toBe(
      `We are looking for a software engineer to join our team. 
        We work on a plateform to reduce carbon footprint with React and Node.js.`,
    );
    expect(jobSheet.requiredSkills).toEqual(['React', 'Node.js']);
  });

  it('should check if reference is an uuid', () => {
    expect(() => {
      new JobSheet({
        reference: 'invalid-uuid-v4',
        jobTitle: 'Software Engineer',
        description: `We are looking for a software engineer to join our team. 
          We work on a plateform to reduce carbon footprint with React and Node.js.`,
        requiredSkills: ['React', 'Node.js'],
      });
    }).toThrow('Invalid job sheet reference');
  });
});
