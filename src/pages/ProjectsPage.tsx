import { Button, Heading } from "@radix-ui/themes";
import RootLayout from "../layout/RootLayout";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import Project from "../types/Project.interface";
import ProjectSummary from "../components/ProjectSummary";

const projects: Project[] = [
  {
    id: "PR1097",
    title: "TaskFlow Manager",
    description:
      " TaskFlow Manager is a streamlined project management tool designed for small teams. It allows users to create projects, assign tasks, set deadlines, and track progress in real-time. Features include intuitive dashboards, team collaboration tools, and automated reminders to keep projects on schedule. Built with scalability in mind, TaskFlow Manager is ideal for teams seeking efficiency and simplicity.",
    progress: 10,
  },
  {
    id: "PR1098",
    title: "Categorix",
    description:
      "Categorix is a powerful SaaS platform that organizes projects into customizable categories for better organization and insights. Users can create dynamic categories, assign projects, and generate analytical reports to track progress across different sectors. With built-in tagging, filtering, and sharing features, Categorix makes it easy to manage complex workflows and align project goals with organizational priorities",
    progress: 100,
  },
  {
    id: "PR1099",
    title: "TaskMaster",
    description:
      "TaskMaster is an intuitive task management platform designed for teams. With customizable task categories, deadlines, and collaboration features, TaskMaster helps teams streamline workflows, improve productivity, and meet deadlines efficiently. The platform also includes reporting tools to analyze task completion rates and overall performance.",
    progress: 85,
  },
  {
    id: "PR1100",
    title: "CollabHub",
    description:
      "CollabHub is a versatile collaboration tool that allows teams to communicate, share files, and manage projects seamlessly. It integrates messaging, file-sharing, and task management in one platform, helping teams stay connected and organized no matter where they are. With real-time updates and notifications, teams can stay on top of their work.",
    progress: 90,
  },
  {
    id: "PR1101",
    title: "InsightFlow",
    description:
      "InsightFlow is an analytics platform that turns data into actionable insights. It helps businesses track key performance indicators (KPIs), generate reports, and visualize trends. InsightFlow provides customizable dashboards and integration with multiple data sources, enabling teams to make data-driven decisions faster and more efficiently.",
    progress: 70,
  },
  {
    id: "PR1102",
    title: "Planify",
    description:
      "Planify is a project planning and scheduling software designed to help teams plan their projects effectively. With its visual project timeline, resource allocation tools, and automatic scheduling features, Planify simplifies the planning process, making it easier to manage projects and align them with business objectives.",
    progress: 75,
  },
  {
    id: "PR1103",
    title: "DevTrack",
    description:
      "DevTrack is a comprehensive tool for software development teams. It allows teams to track their progress, manage code repositories, and coordinate tasks. DevTrack integrates with popular development platforms, making it easy to track bug reports, code commits, and feature development in one place.",
    progress: 65,
  },
  {
    id: "PR1104",
    title: "MarketVision",
    description:
      "MarketVision is a market research tool that helps businesses understand consumer behavior and industry trends. With survey integration, sentiment analysis, and competitive benchmarking, MarketVision provides businesses with the insights needed to make informed decisions and improve their marketing strategies.",
    progress: 80,
  },
  {
    id: "PR1105",
    title: "CodeLab",
    description:
      "CodeLab is a coding education platform offering interactive coding tutorials, challenges, and projects. It allows users to learn coding at their own pace, build real-world projects, and connect with mentors. CodeLab provides a community of learners and professionals to help foster skill development.",
    progress: 90,
  },
  {
    id: "PR1106",
    title: "HireStream",
    description:
      "HireStream is a recruitment management platform that streamlines the hiring process. It enables companies to post jobs, review applicants, and conduct interviews, all within a single platform. With features like resume parsing, candidate ranking, and automated interview scheduling, HireStream reduces time-to-hire and improves candidate experience.",
    progress: 50,
  },
  {
    id: "PR1107",
    title: "EduTrack",
    description:
      "EduTrack is an educational management platform designed for schools and universities. It helps educators track student progress, manage assignments, and generate reports. With features like gradebooks, communication tools, and attendance tracking, EduTrack simplifies the administration of educational institutions.",
    progress: 60,
  },
  {
    id: "PR1108",
    title: "FinPro",
    description:
      "FinPro is a financial planning and analysis tool aimed at businesses. It helps finance teams create budgets, forecast revenues, and analyze financial data in real time. With its intuitive interface, FinPro makes it easy for finance professionals to track spending, monitor cash flow, and ensure that budgets are adhered to.",
    progress: 95,
  },
];

const ProjectsPage = () => {
  return (
    <RootLayout>
      <div className="flex justify-between">
        <Heading>Projects</Heading>
        <Button>
          <PlusCircledIcon />
          Create Project
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {projects.map((project) => (
          <ProjectSummary key={project.id} project={project} />
        ))}
      </div>
    </RootLayout>
  );
};

export default ProjectsPage;
