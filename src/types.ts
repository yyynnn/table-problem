type Enum<T extends Record<string, unknown>> = T[keyof T];

const DeployStartegies = [
  "helm",
  "simple",
  "canary",
  "rolling_update"
] as const;
type DeployStrategy = typeof DeployStartegies[number];

export type ReleaseStatus = Enum<typeof ReleaseStatus>;
export const ReleaseStatus = {
  // новый релиз, еще не был взят деплоером для выкатки
  New: "new",
  // релиз добавлен в кластера, находится в процессе выкатки
  PendingInstall: "pending_install",
  // релиз заменен на новый
  // переход в этот статус возможнен только из статуса deployed
  Superseded: "superseded",
  // релиз не был развернут из-за ошибки во время деплоя
  Failed: "failed",
  // релиз успешно задеплоен
  Deployed: "deployed",
  // стратегия blue-green: https://martinfowler.com/bliki/BlueGreenDeployment.html
  // релиз развернут рядом с текущим релизом и доступен по отдельным доменам/урлам
  BlueGreen: "blue_green",
  // релиз отмечен как неудачный
  BlueGreenDiscarded: "blue_green_discarded",
  // стратегия canary: https://martinfowler.com/bliki/CanaryRelease.html
  // релиз равернут рядом с текущим релизом и на него маршрутизируется n% трафика
  Canary: "canary",
  // релиз отмечен как неудачный
  CanaryDiscarded: "canary_discarded",
  // удален из кластера
  Removed: "removed",
  // ???, вероятно совсем-совсем удален
  Purged: "purged"
} as const;

const ServiceEnvironments = ["prod", "staging", "dev", "perf", "test"] as const;
type EnvironmentName = typeof ServiceEnvironments[number];

export interface Release {
  ciBuildId: string;
  ciBuildUrl: string;
  commitHash: string;
  environment: EnvironmentName;
  finishedAt: string;
  id: string;
  issues: Array<ReleaseIssue>;
  issuesError?: string | null;
  releaser: string;
  branch: string;
  serviceName: string;
  name: string;
  startedAt: string;
  status: ReleaseStatus;
  version?: string;
  rollbackToVersion?: number; // number can be only 1+, undefined means release is not rollback
  deployStrategy: DeployStrategy;
  clusters: Array<string>;
  customReleaseOptions?: unknown;
  metadata?: {
    copySourceReleaseId?: string | null; // id релиза c которого скопирован данный релиз
    previousSucceedReleaseId?: string; // id релиза со статусом deployed на момент создания этого релиза. При создании копии релиза это поле не меняется
    autoCanarySubcriptionId?: string | null; // id подписки на события автоканарейки. Заполняется только для автоканареечного релиза
  };
  canaryState?: unknown;
  canaryChangeLog?: Array<unknown>;
  prevSucceedReleaseHash?: string; // sets manually by LatestReleasesStore
  clustersChanges?: Array<[string, "added" | "removed" | "stayed"]>; // sets manually by LatestReleasesStore
  isHotfix: boolean;
}

interface ReleaseIssue {
  key: string;
  fields: { summary: string };
}
