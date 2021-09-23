/**
 * Třída obsahující kódy zpráv.
 *
 * Struktura kódu:
 *  xxyzz
 *  xx - číslo sekce, ke které zpráva patří
 *  y  - {0,1,2,3} číslo indikující typ zprávy
 *     - 0 = úspěch
 *     - 1 = informace
 *     - 2 = varování
 *     - 3 = chyba
 *  zz - číslo samotné zprávy
 */
export class MessageCodes {
    public static readonly CODE_ERROR = -1;
    public static readonly CODE_SUCCESS = 0;

    // Chybové zprávy pro 'experiments' začínají na 10000
    public static readonly CODE_ERROR_EXPERIMENT_NOT_FOUND = 10300;
    public static readonly CODE_SUCCESS_EXPERIMENT_CREATED = 10001;
    public static readonly CODE_ERROR_EXPERIMENT_WAS_NOT_CREATED = 10301;
    public static readonly CODE_SUCCESS_EXPERIMENT_UPDATED = 10002;
    public static readonly CODE_SUCCESS_EXPERIMENT_UPDATE_NOT_NECESSARY = 10102;
    public static readonly CODE_ERROR_EXPERIMENT_WAS_NOT_UPDATED = 10302;
    public static readonly CODE_SUCCESS_EXPERIMENT_DELETED = 10003;
    public static readonly CODE_ERROR_EXPERIMENT_WAS_NOT_DELETED = 10303;
    public static readonly CODE_ERROR_EXPERIMENT_NOT_VALID = 10304;
    public static readonly CODE_ERROR_EXPERIMENT_ALREADY_EXISTS = 10305;
    public static readonly CODE_ERROR_EXPERIMENT_OUTPUT_SYNCHRONIZATION_DISABLED = 10306;

    // Chybové zprávy pro 'experiment-results' začínají na 20000
    public static readonly CODE_ERROR_EXPERIMENT_RESULT_NOT_FOUND = 20300;
    public static readonly CODE_SUCCESS_EXPERIMENT_RESULT_CREATED = 20001;
    public static readonly CODE_ERROR_EXPERIMENT_RESULT_WAS_NOT_CREATED = 20301;
    public static readonly CODE_SUCCESS_EXPERIMENT_RESULT_UPDATED = 20002;
    public static readonly CODE_SUCCESS_EXPERIMENT_RESULT_UPDATE_NOT_NECESSARY = 20102;
    public static readonly CODE_ERROR_EXPERIMENT_RESULT_WAS_NOT_UPDATED = 20302;
    public static readonly CODE_SUCCESS_EXPERIMENT_RESULT_DELETED = 20003;
    public static readonly CODE_ERROR_EXPERIMENT_RESULT_WAS_NOT_DELETED = 20303;
    public static readonly CODE_ERROR_EXPERIMENT_RESULT_DATA_NOT_FOUND = 20304;
    public static readonly CODE_ERROR_EXPERIMENT_RESULT_ALREADY_EXISTS = 20305;
    public static readonly CODE_ERROR_EXPERIMENT_RESULT_NOT_VALID = 20306;
    public static readonly CODE_ERROR_EXPERIMENT_RESULT_WAS_NOT_INITIALIZED = 20307;
    public static readonly CODE_ERROR_EXPERIMENT_IS_NOT_INITIALIZED = 20308;

    // Chybové zprávy pro 'sequences' začínají na 30000
    public static readonly CODE_ERROR_SEQUENCE_NOT_FOUND = 30300;
    public static readonly CODE_SUCCESS_SEQUENCE_CREATED = 30001;
    public static readonly CODE_ERROR_SEQUENCE_NOT_CREATED = 30301;
    public static readonly CODE_SUCCESS_SEQUENCE_UPDATED = 30002;
    public static readonly CODE_SUCCESS_SEQUENCE_UPDATE_NOT_NECESSARY = 30102;
    public static readonly CODE_ERROR_SEQUENCE_NOT_UPDATED = 30302;
    public static readonly CODE_SUCCESS_SEQUENCE_DELETED = 30003;
    public static readonly CODE_ERROR_SEQUENCE_NOT_DELETED = 30303;
    public static readonly CODE_ERROR_SEQUENCE_UNSUPORTED_EXPERIMENT = 30304;
    public static readonly CODE_ERROR_SEQUENCE_EXPERIMENT_DO_NOT_SUPPORT_SEQUENCES = 30305;
    public static readonly CODE_ERROR_SEQUENCE_ALREADY_EXISTS = 30306;
    public static readonly CODE_ERROR_SEQUENCE_NOT_VALID = 30307;
    public static readonly CODE_ERROR_SEQUENCE_INVALID_SIZE = 30308;

    // Chybové zprávy pro 'file-browser' začínají na 40000
    public static readonly CODE_SUCCESS_FILE_BROWSER_DIRECTORY_CREATED = 40001;
    public static readonly CODE_SUCCESS_FILE_BROWSER_DIRECTORY_NOT_CREATED = 40301;
    public static readonly CODE_SUCCESS_FILE_BROWSER_FILES_UPLOADED = 40002;
    public static readonly CODE_ERROR_FILE_BROWSER_FILES_NOT_UPLOADED = 40302;
    public static readonly CODE_SUCCESS_FILE_BROWSER_FILES_DELETED = 40003;
    public static readonly CODE_ERROR_FILE_BROWSER_FILES_NOT_DELETED = 40303;
    public static readonly CODE_ERROR_FILE_BROWSER_FILE_WAS_NOT_WRITTEN = 40304;
    public static readonly CODE_ERROR_FILE_BROWSER_FILE_ACCESS_RESTRICTED = 40305;
    public static readonly CODE_ERROR_FILE_BROWSER_FILE_ALREADY_EXISTS = 40306;
    public static readonly CODE_ERROR_FILE_BROWSER_FILE_NOT_FOUND = 40307;

    // Chybové zprávy pro 'low-level' začínají na 50000
    public static readonly CODE_SUCCESS_LOW_LEVEL_PORT_OPPENED = 50001;
    public static readonly CODE_ERROR_LOW_LEVEL_PORT_NOT_OPPENED = 50301;
    public static readonly CODE_SUCCESS_LOW_LEVEL_FIRMWARE_UPDATED = 50002;
    public static readonly CODE_ERROR_LOW_LEVEL_FIRMWARE_NOT_UPDATED = 50302;
    public static readonly CODE_ERROR_LOW_LEVEL_PORT_NOT_OPEN = 50303;
    public static readonly CODE_ERROR_LOW_LEVEL_PORT_ALREADY_OPEN = 50304;
    public static readonly CODE_ERROR_LOW_LEVEL_PORT_UNABLE_TO_OPEN = 50305;
    public static readonly CODE_ERROR_LOW_LEVEL_PORT_UNABLE_TO_CLOSE = 50306;

    // Chybové zprávy pro 'settings' začínají na 60000
    public static readonly CODE_SUCCESS_SETTINGS_UPDATED = 60001;
    public static readonly CODE_ERROR_SETTINGS_NOT_UPDATED = 60301;

    // Chybové zprávy pro 'commands' začínají na 70000
    public static readonly CODE_ERROR_COMMANDS_INVALID_URL = 70301;
    public static readonly CODE_ERROR_COMMANDS_EXPERIMENT_UPLOAD = 70302;
    public static readonly CODE_ERROR_COMMANDS_EXPERIMENT_UPLOAD_NOT_CLEARED = 70303;
    public static readonly CODE_ERROR_COMMANDS_EXPERIMENT_SETUP = 70304;
    public static readonly CODE_ERROR_COMMANDS_EXPERIMENT_SETUP_NOT_UPLOADED = 70305;
    public static readonly CODE_ERROR_COMMANDS_EXPERIMENT_RUN = 70306;
    public static readonly CODE_ERROR_COMMANDS_EXPERIMENT_RUN_NOT_INITIALIZED = 70307;
    public static readonly CODE_ERROR_COMMANDS_EXPERIMENT_PAUSE = 70308;
    public static readonly CODE_ERROR_COMMANDS_EXPERIMENT_PAUSE_NOT_STARTED = 70309;
    public static readonly CODE_ERROR_COMMANDS_EXPERIMENT_FINISH = 70310;
    public static readonly CODE_ERROR_COMMANDS_EXPERIMENT_FINISH_NOT_RUNNING = 70311;
    public static readonly CODE_ERROR_COMMANDS_EXPERIMENT_CLEAR = 70312;
    public static readonly CODE_ERROR_COMMANDS_STIMULATOR_STATE = 70313;
    public static readonly CODE_ERROR_STIMULATOR_FIRMWARE_NOT_UPDATED = 70314;
    public static readonly CODE_ERROR_STIMULATOR_UNKNOWN_ACTION = 70315;
    public static readonly CODE_ERROR_STIMULATOR_UNSUPPORTED_COMMAND = 70316;
    public static readonly CODE_ERROR_STIMULATOR_NO_UPLOADED_EXPERIMENT = 70317;
    public static readonly CODE_ERROR_STIMULATOR_PLAYER_NOT_INITIALIZED = 70318;
    public static readonly CODE_ERROR_STIMULATOR_ACTION_NOT_POSSIBLE = 70319;
    public static readonly CODE_ERROR_STIMULATOR_ALREADY_IN_REQUESTED_STATE = 70320;

    // Chybové zprávy pro 'ipc' začínájí na 80000
    public static readonly CODE_ERROR_IPC_ALREADY_OPEN = 80301;
    public static readonly CODE_ERROR_IPC_NOT_OPEN = 80302;
    public static readonly CODE_ERROR_IPC_PLAYER_ALREADY_RUNNING = 80303;
    public static readonly CODE_ERROR_IPC_PLAYER_NOT_RUNNING = 80304;
    public static readonly CODE_ERROR_IPC_PYTHON_PATH_NOT_DEFINED = 80305;
    public static readonly CODE_ERROR_IPC_MAIN_PATH_NOT_DEFINED = 80306;
    public static readonly CODE_ERROR_IPC_SYNC_EXPERIMENT_ID_MISSING = 80307;

    // Chybové zprávy pro správu session (přihlášení/odhlášení) začínají 90000
    public static readonly CODE_ERROR_AUTH_UNAUTHORIZED = 90300;
    public static readonly CODE_SUCCESS_AUTH_LOGIN = 90001;
    public static readonly CODE_ERROR_AUTH_LOGIN_FAILED = 90301;
    public static readonly CODE_SUCCESS_AUTH_TOKEN_REFRESH = 90002;
    public static readonly CODE_ERROR_AUTH_TOKEN_REFRESH_FAILED = 90302;
    public static readonly CODE_ERROR_AUTH_TOKEN_EXPIRED = 90303;
    public static readonly CODE_ERROR_AUTH_TOKEN_NOT_FOUND = 90304;

    // chybové zprávy pro přehrávač 'player' začínají na 100000
    public static readonly CODE_ERROR_PLAYER_EXPERIMENT_RESULT_IS_NOT_INITIALIZED = 100301;
    public static readonly CODE_ERROR_PLAYER_ANOTHER_EXPERIMENT_RESULT_IS_INITIALIZED = 100302;
    public static readonly CODE_ERROR_PLAYER_UNSUPPORTED_STOP_CONDITION = 100303;

    // chybové zprávy pro 'user' začínají na 110000
    public static readonly CODE_ERROR_USER_NOT_FOUND = 110300;
    public static readonly CODE_ERROR_USER_ID_NOT_FOUND = 110301;
    public static readonly CODE_ERROR_USER_NOT_VALID = 110302;
    public static readonly CODE_SUCCESS_USER_CREATED = 110003;
    public static readonly CODE_ERROR_USER_NOT_CREATED = 110303;
    public static readonly CODE_ERROR_USER_NOT_UPDATED = 110304;
    public static readonly CODE_ERROR_USER_NOT_DELETED = 110305;
    public static readonly CODE_ERROR_USER_NOT_REGISTRED = 110306;
}
