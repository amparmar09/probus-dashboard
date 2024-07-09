import { ActionReducerMap } from "@ngrx/store";
import { LayoutState, layoutReducer } from "./layouts/layout-reducers";
import { ProjectReducer, ProjectState } from "./Project/project_reducer";
import { TaskReducer, TaskState } from "./Task/task_reducer";
import { TicketReducer, TicketState } from "./Ticket/ticket_reducer";
import { TodoReducer, TodoState } from "./Todo/todo_reducer";
import { ApplicationReducer, ApplicationState } from "./Jobs/jobs_reducer";
// import { authenticationReducer, AuthenticationState } from "./Authentication/authentication.reducer";

export interface RootReducerState {
    layout: LayoutState;
    Project: ProjectState;
    Task: TaskState;
    Ticket: TicketState;
    Todo: TodoState;
    Jobs: ApplicationState;
    // authentication: AuthenticationState;
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
    layout: layoutReducer,
    Project: ProjectReducer,
    Task: TaskReducer,
    Ticket: TicketReducer,
    Todo: TodoReducer,
    Jobs: ApplicationReducer,
    // authentication: authenticationReducer,

}