export interface ResponseMessage {
    text: string,
    type: ResponseMessageType
}

export enum ResponseMessageType {
    SUCCESS, INFO, WARNING, ERROR
}

export interface ResponseObject<T> {
    data: T;
    message?: ResponseMessage;
}

export interface Experiment {
    id?: number;
    name: string;
    description: string;
    type: ExperimentType;
    created: number;
    output: {
        led?: boolean;
        image?: boolean;
        sound?: boolean;
    }
}

export enum ExperimentType {
    NONE, ERP, CVEP, TVEP, FVEP, REA
}

export interface ExperimentERP extends Experiment {
    // Počet výstupů
    outputCount: number;
    // Maximální hodnota parametru distribution value pro všechny výstupy dané konfigurace
    maxDistributionValue: number;
    // Parametr out
    out: number;
    // Parametr wait
    wait: number;
    // Hrana, na kterou bude experiment reagovat
    edge: Edge;
    // Náhodnost experimentu
    random: Random;
    // Přiřazené výstupy
    outputs: ErpOutput[];
}

/**
 * Výčet typu hrany sestupná/náběžná
 */
export enum Edge {
    LEADING, FALLING
}

/**
 * Výčet typu náhodnosti žádná/krátká/dlouhá/krátká i dlouhý
 */
export enum Random {
    OFF, SHORT, LONG, SHORT_LONG
}

export interface ErpOutput {
    // Unikátní ID přes všechny výstupy
    id: number;
    // ID experimentu, ke kterému je výstup přiřazen
    experimentId: number;
    // Pořadí výstupu (1 - 8)
    orderId: number;
    pulseUp: number;
    pulseDown: number;
    distribution: number;
    brightness: number;
    dependencies: [OutputDependency[], any]
}

export interface OutputDependency {
    id: number;
    experimentId: number;
    sourceOutput: number;
    destOutput: number;
    count: number;
}

export function experimentTypeFromRaw(raw: string): ExperimentType {
    switch (raw.toUpperCase()) {
        case ExperimentType[ExperimentType.ERP]:
            return ExperimentType.ERP;
        case ExperimentType[ExperimentType.CVEP]:
            return ExperimentType.CVEP;
        case ExperimentType[ExperimentType.TVEP]:
            return ExperimentType.TVEP;
        case ExperimentType[ExperimentType.FVEP]:
            return ExperimentType.FVEP;
        case ExperimentType[ExperimentType.REA]:
            return ExperimentType.REA;
        default:
            return ExperimentType.NONE;

    }

}

export function createEmptyExperiment(): Experiment {
    return {
        name: '',
        description: '',
        created: new Date().getTime(),
        type: ExperimentType.NONE,
        output: {}
    };
}