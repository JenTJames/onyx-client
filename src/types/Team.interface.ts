import User from "./User.interface";

export default interface Team {
    id: string;
    name: string;
    productivity: number;
    taskCompletionRate: number;
    teamLeader: User;
};