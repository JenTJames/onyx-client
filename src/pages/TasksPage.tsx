import { Button } from "@radix-ui/themes";
import Task from "../types/Task.interface";
import Datagrid from "../components/Datagrid";
import { ColumnDef } from "@tanstack/react-table";
import { PlusCircledIcon } from "@radix-ui/react-icons";

const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "id",
    header: "Task ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
  },
  {
    accessorKey: "endDate",
    header: "End Date",
  },
];

const TasksPage = () => {
  return (
    <>
      <div className="flex justify-end">
        <Button>
          <PlusCircledIcon />
          Create Task
        </Button>
      </div>
      <Datagrid<Task>
        data={[
          {
            id: 1,
            title: "Task 1",
            description: "Description 1",
            status: "Pending",
            startDate: new Date("2022-01-01"),
            endDate: new Date("2022-01-31"),
          },
        ]}
        columns={columns}
        title="Task"
      />
    </>
  );
};

export default TasksPage;
