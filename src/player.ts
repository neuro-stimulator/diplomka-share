export interface OutputCountingExperimentStopConditionParams {
	maxOutput: number;
}

export type ExperimentStopConditionParams = {} | OutputCountingExperimentStopConditionParams;

export interface PlayerConfiguration {
	repeat: number;
	betweenExperimentInterval: number;
	autoplay: boolean;
	stopConditionType: ExperimentStopConditionType;
	stopConditions: ExperimentStopConditionParams;
}

export enum ExperimentStopConditionType {
	COUNTING_EXPERIMENT_STOP_CONDITION,
}