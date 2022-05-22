const COMMAND_DELIMITER_SHARE = 0x53;

const COMMAND_EXPERIMENT_READY = 0x00;
const COMMAND_EXPERIMENT_UPLOAD = 0x01;
const COMMAND_EXPERIMENT_SETUP = 0x02;
const COMMAND_EXPERIMENT_RUN = 0x03;
const COMMAND_EXPERIMENT_PAUSE = 0x04;
const COMMAND_EXPERIMENT_FINISH = 0x05;
const COMMAND_EXPERIMENT_CLEAR = 0x06;


const COMMAND_SEQUENCE_NEXT_PART = 0x20;

const COMMAND_MEMORY = 0xF1;
const COMMAND_MEMORY_EXPERIMENT_CONFIG = 0x00;
const COMMAND_MEMORY_COUNTERS = 0x01;
const COMMAND_MEMORY_ACCUMULATOR = 0x02;

export class CommandToStimulator {

	// Oddělovač příkazu
	public static readonly COMMAND_DELIMITER = COMMAND_DELIMITER_SHARE;

	// Příkaz pro získání aktuálního stavu stimulátoru
	public static readonly COMMAND_STIMULATOR_STATE = 0x01;

	// Příkaz pro nastavení displaye
	public static readonly COMMAND_DISPLAY = 0x02;
	public static readonly COMMAND_DISPLAY_ACTION_CLEAR = 0x00;
	public static readonly COMMAND_DISPLAY_ACTION_PRINT = 0x01;
	public static readonly COMMAND_DISPLAY_ACTION_PRINT_LINE = 0x02;

	// Příkaz pro správu experimentu
	public static readonly COMMAND_MANAGE_EXPERIMENT = 0x03;
	// Jednotlivé akce u správy experimentu
	public static readonly COMMAND_MANAGE_EXPERIMENT_READY = COMMAND_EXPERIMENT_READY;
	public static readonly COMMAND_MANAGE_EXPERIMENT_UPLOAD = COMMAND_EXPERIMENT_UPLOAD;
	public static readonly COMMAND_MANAGE_EXPERIMENT_SETUP = COMMAND_EXPERIMENT_SETUP;
	public static readonly COMMAND_MANAGE_EXPERIMENT_RUN = COMMAND_EXPERIMENT_RUN;
	public static readonly COMMAND_MANAGE_EXPERIMENT_PAUSE = COMMAND_EXPERIMENT_PAUSE;
	public static readonly COMMAND_MANAGE_EXPERIMENT_FINISH = COMMAND_EXPERIMENT_FINISH;
	public static readonly COMMAND_MANAGE_EXPERIMENT_CLEAR = COMMAND_EXPERIMENT_CLEAR;


	public static readonly COMMAND_OUTPUT_SETUP = 0x11;
	public static readonly COMMAND_SEQUENCE_NEXT_PART = COMMAND_SEQUENCE_NEXT_PART;

	// Backdoor do stimulatoru
	public static readonly COMMAND_BACKDOR_1 = 0xF0;
	public static readonly COMMAND_MEMORY = COMMAND_MEMORY;
	public static readonly COMMAND_MEMORY_EXPERIMENT_CONFIG = COMMAND_MEMORY_EXPERIMENT_CONFIG;
	public static readonly COMMAND_MEMORY_COUNTERS = COMMAND_MEMORY_COUNTERS;
	public static readonly COMMAND_MEMORY_ACCUMULATOR = COMMAND_MEMORY_ACCUMULATOR;
}

export class CommandFromStimulator {

	// Oddělovač příkazu
	public static readonly COMMAND_DELIMITER = [COMMAND_DELIMITER_SHARE, 0xFF];

	public static readonly COMMAND_STIMULATOR_STATE = 0x01;
	public static readonly COMMAND_STIMULATOR_STATE_READY = COMMAND_EXPERIMENT_READY;
	public static readonly COMMAND_STIMULATOR_STATE_UPLOADED = COMMAND_EXPERIMENT_UPLOAD;
	public static readonly COMMAND_STIMULATOR_STATE_INITIALIZED = COMMAND_EXPERIMENT_SETUP;
	public static readonly COMMAND_STIMULATOR_STATE_RUNNING = COMMAND_EXPERIMENT_RUN;
	public static readonly COMMAND_STIMULATOR_STATE_PAUSED = COMMAND_EXPERIMENT_PAUSE;
	public static readonly COMMAND_STIMULATOR_STATE_FINISHED = COMMAND_EXPERIMENT_FINISH;
	public static readonly COMMAND_STIMULATOR_STATE_CLEARED = COMMAND_EXPERIMENT_CLEAR;

	public static readonly COMMAND_STIMULATOR_REQUEST_FINISH = 0x02;

	public static readonly COMMAND_OUTPUT_ACTIVATED = 0x10;
	public static readonly COMMAND_OUTPUT_DEACTIVATED = 0x11;
	public static readonly COMMAND_INPUT_ACTIVATED = 0x12;

	public static readonly COMMAND_REQUEST_SEQUENCE_NEXT_PART = COMMAND_SEQUENCE_NEXT_PART;

	public static readonly COMMAND_MEMORY = COMMAND_MEMORY;
	public static readonly COMMAND_MEMORY_EXPERIMENT_CONFIG = COMMAND_MEMORY_EXPERIMENT_CONFIG;
	public static readonly COMMAND_MEMORY_COUNTERS = COMMAND_MEMORY_COUNTERS;
	public static readonly COMMAND_MEMORY_ACCUMULATOR = COMMAND_MEMORY_ACCUMULATOR;

}

export class CommandClientToServer {
	public static readonly COMMAND_STIMULATOR_STATE = 'stimulator-state';
	public static readonly COMMAND_EXPERIMENT_RUN = 'experiment-run';
	public static readonly COMMAND_EXPERIMENT_PAUSE = 'experiment-pause';
	public static readonly COMMAND_EXPERIMENT_FINISH = 'experiment-finish';
	public static readonly COMMAND_EXPERIMENT_UPLOAD = 'experiment-upload';
	public static readonly COMMAND_EXPERIMENT_SETUP = 'experiment-setup';
	public static readonly COMMAND_EXPERIMENT_CLEAR = 'experiment-clear';

	public static readonly COMMAND_OUTPUT_SET = 'output-set';
	public static readonly COMMAND_MEMORY = 'memory';
	public static readonly COMMAND_SEQUENCE_PART = 'sequence-part';

	public static readonly COMMAND_DISPLAY_CLEAR = 'display-clear';
	public static readonly COMMAND_DISPLAY_PRINT = 'display-print';
	public static readonly COMMAND_DISPLAY_PRINT_LINE = 'display-print-line';

}

export interface ServerCommandResponse {
	valid: boolean;
	message?: string;
	code?: number;
	params?: any;
}
