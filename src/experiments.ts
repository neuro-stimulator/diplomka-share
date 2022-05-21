import { UserGroups } from './users';

export interface Experiment<O extends Output> {
  // Unikátní ID přes všechny experimenty
  id?: number;
  // Název experimentu
  name: string;
  // Popis experimentu
  description: string;
  // Typ experimentu
  type: ExperimentType;
  // Časová značka založení experimentu
  created: number;
  // Typy použitých výstupů
  usedOutputs: OutputType;
  // Počet výstupů
  outputCount: number;
  // Tagy experimentu
  tags: string[];
  // Flag pro podporu sekvencí
  supportSequences: boolean;
  // Kolekce výstupů
  outputs: O[];
  // Kolekce uživatelských skupin, do kterých experiment patří
  userGroups?: UserGroups;
}

export interface Output extends OutputLedDefinition, OutputImageDefinition {
  // Unikátní ID přes všechny výstupy
  id: number;
  // ID experimentu, ke kterému je výstup přiřazen
  experimentId: number;
  // Pořadí výstupu (1 - 8)
  orderId: number;
  // Typ výstupu
  outputType: OutputType;
}

export interface OutputLedDefinition {
  // Svítivost výstupu v případě LED
  brightness: number;
}

export interface OutputImageDefinition {
  // X-ová souřadnice obrázku
  x: number;
  // Y-ová souřadnice obrázku
  y: number;
  // Šířka obrázku
  width: number;
  // Výška obrázku
  height: number;
  // Flag určující, zda-li se má použít [x,y] souřadnice, nebo relativní výpočet
  manualAlignment: boolean;
  // Horizontální zarovnání obrázku
  horizontalAlignment: HorizontalAlignment;
  // Vertikální zarovnání obrázku
  verticalAlignment: VerticalAlignment;
}

export enum HorizontalAlignment {
  LEFT,
  CENTER,
  RIGHT,
}

export enum VerticalAlignment {
  BOTTOM,
  CENTER,
  TOP,
}

export enum ExperimentType {
  NONE, ERP, CVEP, FVEP, TVEP, REA
}

export interface OutputType {
  led?: boolean;
  image?: boolean;
  imageFile?: string;
  audio?: boolean;
  audioFile?: string;
  matrix?: boolean;
  matrixContent?: number[];
}

export interface MatrixLed {
  r: number;
  g: number;
  b: number;
}

export interface ExperimentERP extends ExperimentSupportSequences<ErpOutput, ErpOutputDependency> {
  // Doba v [ms], po kterou je výstup aktivní
  out: number;
  // Doba v [ms], po kterou je výstup neaktivní
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

export interface ErpOutput extends OutputForSequence<ErpOutputDependency> {
  // Doba aktivního výstupu
  pulseUp: number;
  // Doba neaktivního výstupu
  pulseDown: number;
}

export interface ErpOutputDependency extends OutputDependency {
  // Unikádní ID přeš všechny závislosti výstupů
  id: number;
  // ID experimentu, ke kterému je závislost spřažena
  experimentId: number;
  // ID výstupu, ke kterému je závislost spřažena
  sourceOutput: number;
}

export interface OutputDependency {
  // ID závislosti výstupu, na kterém tato závislost závisí
  destOutput: number;
  // Kolikrát se musí vyskytnout 'destOutput', než se bude moct vyskytnout 'sourceOutput'
  count: number;
}

export interface ExperimentCVEP extends Experiment<CvepOutput> {
  // Doba v [ms], po kterou je výstup aktivní
  out: number;
  // Doba v [ms], po kterou je výstup neaktivní
  wait: number;
  // Pattern, podle kterého budou výstupy blikat
  pattern: number;
  // Bitový posun jednotlivých výstupů od sebe o proti hlavnímu patternu
  bitShift: number;
  // Svítivost všech výstupů
  brightness: number;
}

export interface CvepOutput extends Output {
}

export interface ExperimentFVEP extends Experiment<FvepOutput> {
}

export interface FvepOutput extends Output {
  // Doba, po kterou bude výstup svítit
  timeOn: number;
  // Doba, po kterou bude výstup zhasnutý
  timeOff: number;
  // Frekvence opakování jednoho kola
  frequency: number;
  // Poměr doby svícení vzhledem k zadané periodě
  dutyCycle: number;
}

export interface ExperimentTVEP extends Experiment<TvepOutput> {
  // Příznak, zda-li mají výstupy sdílet délku patternu
  sharePatternLength: boolean;
}

export interface TvepOutput extends Output {
  // Délka patternu
  patternLength: number;
  // Pattern, podle kterého bude výstup blikat
  pattern: number;
  // Doba v [ms], po kterou je výstup aktivní
  out: number;
  // Doba v [ms], po kterou je výstup neaktivní
  wait: number;
}

export interface ExperimentREA extends Experiment<ReaOutput> {
  // Počet cyklů v experimentu
  cycleCount: number;
  // Minimální prodleva mezi jednotlivými výstupy
  waitTimeMin: number;
  // Maximální prodleva mezi jednotlivými výstupy
  waitTimeMax: number;
  // Doba, po kterou bude možné zareagovat na výstup
  // (většinou bude o pár desítek milisekund kratší, než 'waitTimeMax')
  missTime: number;
  // Jak se má pokračovat v případě, že uživatel stiskne špatné tlačítko
  onFail: ReaOnResponseFail;
  // Svítivost výstupu
  brightness: number;
}

export interface ReaOutput extends Output {
}

export interface ExperimentSupportSequences<O extends OutputForSequence<D>, D extends OutputDependency> extends Experiment<O> {
  outputCount: number;
  // Maximální hodnota parametru distribution value pro všechny výstupy dané konfigurace
  maxDistribution: number;
  // Výchozí délka sekvence pro daný experiment
  defaultSequenceSize: number;
  // ID sequence, která se použije, nebo null v případě žádné definované sequence
  sequenceId: number | null;
}

export interface OutputForSequence<T extends OutputDependency> extends Output {
  // Distribuce výstupu (pravděpodobnost, že se výstup ukáže v sekvenci)
  distribution: number;
  // Závislosti výstupu na ostatních výstupech
  dependencies: [T[], any]
}

export enum ReaOnResponseFail {
  // Nový výstup se aktivuje okemžitě
  CONTINUE,
  // Počká se, než vyprší timeout a poté se pokračuje standardne
  WAIT
}

export interface ExperimentAssetInfo {
  name: string;
}

export interface ExperimentAudioAssetInfo extends ExperimentAssetInfo {
  // TODO přidat audio only property
}

export interface ExperimentImageAssetInfo extends ExperimentAssetInfo, OutputImageDefinition {}

export interface ExperimentAssets {
  audio: Record<number, ExperimentAudioAssetInfo>;
  image: Record<number, ExperimentImageAssetInfo>;
}

export function outputToAudioAssetInfo(output: Output): ExperimentAudioAssetInfo {
  return {
    name: output.outputType.audioFile as string
  }
}

export function outputToImageAssetInfo(output: Output): ExperimentImageAssetInfo {
  return {
    name: output.outputType.imageFile as string,
    x: output.x,
    y: output.y,
    width: output.width,
    height: output.height,
    manualAlignment: output.manualAlignment,
    horizontalAlignment: output.horizontalAlignment,
    verticalAlignment: output.verticalAlignment
  }
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

export function horizontalAlignmentFromRaw(raw: string): HorizontalAlignment {
  switch (raw.toUpperCase()) {
    case HorizontalAlignment[HorizontalAlignment.LEFT]:
      return HorizontalAlignment.LEFT;
    case HorizontalAlignment[HorizontalAlignment.RIGHT]:
      return HorizontalAlignment.RIGHT;
    default:
      return HorizontalAlignment.CENTER;
  }
}

export function verticalAlignmentFromRaw(raw: string): VerticalAlignment {
  switch (raw.toUpperCase()) {
    case VerticalAlignment[VerticalAlignment.TOP]:
      return VerticalAlignment.TOP;
    case VerticalAlignment[VerticalAlignment.BOTTOM]:
      return VerticalAlignment.BOTTOM;
    default:
      return VerticalAlignment.CENTER;
  }
}

export function edgeFromRaw(raw: string): Edge {
  switch (raw.toUpperCase()) {
    case Edge[Edge.LEADING]:
      return Edge.LEADING;
    case Edge[Edge.FALLING]:
      return Edge.FALLING;
    default:
      return Edge.LEADING;
  }
}

export function randomFromRaw(raw: string): Random {
  switch (raw.toUpperCase()) {
    case Random[Random.OFF]:
      return Random.OFF;
    case Random[Random.SHORT]:
      return Random.SHORT;
    case Random[Random.LONG]:
      return Random.LONG;
    case Random[Random.SHORT_LONG]:
      return Random.SHORT_LONG;
    default:
      return Random.OFF;
  }
}

export function reaOnResponseFailFromRaw(raw: string): ReaOnResponseFail {
  switch (raw.toUpperCase()) {
    case ReaOnResponseFail[ReaOnResponseFail.CONTINUE]:
      return ReaOnResponseFail.CONTINUE;
    case ReaOnResponseFail[ReaOnResponseFail.WAIT]:
      return ReaOnResponseFail.WAIT;
    default:
      return ReaOnResponseFail.CONTINUE;
  }
}

export function outputTypeFromRaw(outputTypeRaw: number): OutputType {
  const outputType: OutputType = { led: false, audio: false, image: false, matrix: false };
  // 0b0001
  if (outputTypeRaw & 0x01) {
    outputType.led = true;
  }
  // 0b0010
  if (outputTypeRaw & 0x02) {
    outputType.audio = true;
  }
  // 0b0100
  if (outputTypeRaw & 0x04) {
    outputType.image = true;
  }
  // 0b0100
  if (outputTypeRaw & 0x08) {
    outputType.matrix = true;
  }

  return outputType;
}

export function outputTypeToRaw(outputType: OutputType): number {
  let outputTypeRaw = 0;
  // 0b0001
  if (outputType.led !== undefined && outputType.led) {
    outputTypeRaw |= 0x01;
  }
  // 0b0010
  if (outputType.audio !== undefined && outputType.audio) {
    outputTypeRaw |= 0x02;
  }
  // 0b0100
  if (outputType.image !== undefined && outputType.image) {
    outputTypeRaw |= 0x04;
  }
  // 0b1000
  if (outputType.image !== undefined && outputType.matrix) {
    outputTypeRaw |= 0x08;
  }

  return outputTypeRaw;
}

export function createEmptyExperiment<O extends Output>(): Experiment<O> {
  return {
    name: '',
    description: '',
    created: new Date().getTime(),
    type: ExperimentType.NONE,
    usedOutputs: {
      led: true,
      image: false,
      audio: false,
      imageFile: undefined,
      audioFile: undefined
    },
    outputCount: 1,
    tags: [],
    supportSequences: false,
    outputs: [],
    userGroups: {}
  };
}

export function createEmptyOutput(experiment: Experiment<Output>, index: number): Output {
  return {
    id: 1,
    experimentId: experiment.id as number,
    orderId: index,
    outputType: {
      led: true,
      image: false,
      audio: false,
      imageFile: undefined,
      audioFile: undefined
    },
    brightness: 100,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    manualAlignment: false,
    horizontalAlignment: HorizontalAlignment.CENTER,
    verticalAlignment: VerticalAlignment.CENTER
  };
}

export function createEmptyExperimentERP(): ExperimentERP {
  const experiment: Experiment<ErpOutput> = createEmptyExperiment();
  experiment.type = ExperimentType.ERP;
  experiment.supportSequences = true;

  return {
    ...experiment,
    maxDistribution: 100,
    out: 1000,
    wait: 1000,
    edge: Edge.FALLING,
    random: Random.OFF,
    outputs: [],
    sequenceId: null,
    defaultSequenceSize: 10
  };
}

export function createEmptyOutputERP(experiment: ExperimentERP, index: number): ErpOutput {
  return {
    id: 1,
    experimentId: experiment.id as number,
    orderId: index,
    outputType: {
      led: true,
      image: false,
      audio: false,
      imageFile: undefined,
      audioFile: undefined
    },
    pulseUp: 1000,
    pulseDown: 1000,
    distribution: 0,
    brightness: 100,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    manualAlignment: false,
    horizontalAlignment: HorizontalAlignment.CENTER,
    verticalAlignment: VerticalAlignment.CENTER,
    dependencies: [[], null]
  };
}

export function createEmptyExperimentCVEP(): ExperimentCVEP {
  const experiment: Experiment<CvepOutput> = createEmptyExperiment();
  experiment.type = ExperimentType.CVEP;

  return {
    ...experiment,
    out: 1000,
    wait: 1000,
    pattern: 0,
    bitShift: 0,
    brightness: 100,
    outputs: []
  };
}

export function createEmptyOutputCVEP(experiment: ExperimentCVEP, index: number): CvepOutput {
  return {
    id: 1,
    experimentId: experiment.id as number,
    orderId: index,
    outputType: {
      led: true,
      image: false,
      audio: false,
      imageFile: undefined,
      audioFile: undefined
    },
    brightness: 100,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    manualAlignment: false,
    horizontalAlignment: HorizontalAlignment.CENTER,
    verticalAlignment: VerticalAlignment.CENTER
  };
}

export function createEmptyExperimentFVEP(): ExperimentFVEP {
  const experiment: Experiment<FvepOutput> = createEmptyExperiment();
  experiment.type = ExperimentType.FVEP;

  return {
    ...experiment,
    outputs: []
  };
}

export function createEmptyOutputFVEP(experiment: ExperimentFVEP, index: number): FvepOutput {
  return {
    id: 1,
    experimentId: experiment.id as number,
    orderId: index,
    outputType: {
      led: true,
      image: false,
      audio: false,
      imageFile: undefined,
      audioFile: undefined
    },
    timeOn: 1000,
    timeOff: 1000,
    frequency: 2000,
    dutyCycle: 2,
    brightness: 100,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    manualAlignment: false,
    horizontalAlignment: HorizontalAlignment.CENTER,
    verticalAlignment: VerticalAlignment.CENTER
  };
}

export function createEmptyExperimentTVEP(): ExperimentTVEP {
  const experiment: Experiment<TvepOutput> = createEmptyExperiment();
  experiment.type = ExperimentType.TVEP;

  return {
    ...experiment,
    sharePatternLength: true,
    outputs: []
  };
}

export function createEmptyOutputTVEP(experiment: ExperimentTVEP, index: number): TvepOutput {
  return {
    id: 1,
    experimentId: experiment.id as number,
    orderId: index,
    outputType: {
      led: true,
      image: false,
      audio: false,
      imageFile: undefined,
      audioFile: undefined
    },
    out: 1000,
    wait: 1000,
    patternLength: 1,
    pattern: 0,
    brightness: 100,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    manualAlignment: false,
    horizontalAlignment: HorizontalAlignment.CENTER,
    verticalAlignment: VerticalAlignment.CENTER
  };
}

export function createEmptyExperimentREA(): ExperimentREA {
  const experiment: Experiment<ReaOutput> = createEmptyExperiment();
  experiment.type = ExperimentType.REA;

  return {
    ...experiment,
    cycleCount: 1,
    waitTimeMin: 1000,
    waitTimeMax: 1000,
    missTime: 1000,
    onFail: ReaOnResponseFail.CONTINUE,
    brightness: 100,
    outputs: []
  };
}

export function createEmptyOutputREA(experiment: ExperimentREA, index: number): ReaOutput {
  return {
    id: 1,
    experimentId: experiment.id as number,
    orderId: index,
    outputType: {
      led: true,
      image: false,
      audio: false,
      imageFile: undefined,
      audioFile: undefined
    },
    brightness: 100,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    manualAlignment: false,
    horizontalAlignment: HorizontalAlignment.CENTER,
    verticalAlignment: VerticalAlignment.CENTER
  };
}

/**
 * Na základě typu experimentu vrátí experiment s výchozími hodnotami
 *
 * @param type {@link ExperimentType} Typ experimentu
 */
export function createEmptyExperimentByType(type: ExperimentType): Experiment<Output> {
  switch (type) {
    case ExperimentType.ERP:
      return createEmptyExperimentERP();
    case ExperimentType.CVEP:
      return createEmptyExperimentCVEP();
    case ExperimentType.TVEP:
      return createEmptyExperimentTVEP();
    case ExperimentType.FVEP:
      return createEmptyExperimentFVEP();
    case ExperimentType.REA:
      return createEmptyExperimentREA();
    default:
      return createEmptyExperiment();
  }
}

/**
 * Vytvoří a vrátí všechny podporoné experimenty s výchozími hodnotami
 */
export function createAllTypesExperiments(): Experiment<Output>[] {
  return Object.keys(ExperimentType)
                // @ts-ignore
               .filter((type: string) => !isNaN(Number(ExperimentType[type as any])) && ExperimentType[type] !== ExperimentType.NONE)
               .map((type: string, index: number) => {
                 // @ts-ignore
                 const experiment: Experiment<Output> = createEmptyExperimentByType(ExperimentType[type]);
                 experiment.id = index;
                 experiment.name = `${type}-${index}`;
                 return experiment;
               });
}

/**
 * Na základě typu experimentu vrátí výstup pro daný index s výchozími hodnotami
 *
 * @param experiment {@link Experiment} Experiment samotný
 * @param index number Index výstupu
 */
export function createEmptyOutputByType(experiment: Experiment<Output>, index: number): Output {
  switch (experiment.type) {
    case ExperimentType.ERP:
      return createEmptyOutputERP(experiment as ExperimentERP, index);
    case ExperimentType.CVEP:
      return createEmptyOutputCVEP(experiment as ExperimentCVEP, index);
    case ExperimentType.TVEP:
      return createEmptyOutputTVEP(experiment as ExperimentTVEP, index);
    case ExperimentType.FVEP:
      return createEmptyOutputFVEP(experiment as ExperimentFVEP, index);
    case ExperimentType.REA:
      return createEmptyOutputREA(experiment as ExperimentREA, index);
    default:
      return createEmptyOutput(experiment, index);
  }
}

/**
 * Převede 32-bit číslo na jednotlivé barevné složky
 *
 * @param value 32-bit číslo
 * @returns {@link MatrixLed}
 */
export function numberToMatrixLed(value: number): MatrixLed {
  return {
    r: (value >> 16) & 0x0ff,
    g: (value >> 8)  & 0xff,
    b: (value)       & 0xff
  }
}

/**
 * Převede {@link MatrixLed} na 32-bitové číslo
 *
 * @param matrixLed {@link MatrixLed}
 * @returns 32-bitové číslo obsahující rgb složky
 */
export function matrixLedToNumber(matrixLed: MatrixLed): number {
  return ((matrixLed.r & 0x0ff) << 16)
       | ((matrixLed.g & 0x0ff) << 8)
       |  (matrixLed.b & 0x0ff);
}