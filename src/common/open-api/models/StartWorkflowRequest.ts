/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkflowDef } from './WorkflowDef';
export type StartWorkflowRequest = {
    name: string;
    version?: number;
    correlationId?: string;
    input?: Record<string, Record<string, any>>;
    taskToDomain?: Record<string, string>;
    workflowDef?: WorkflowDef;
    externalInputPayloadStoragePath?: string;
    priority?: number;
};

