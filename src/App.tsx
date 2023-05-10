import "./styles.css";
import { RTable } from "./table";
import { Release } from "./types";

const data: Array<Release> = [
  {
    name: "zap",
    ciBuildId: "38160292",
    branch: "refs/heads/master",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38160292",
    commitHash: "ed4150dfbb8be95eb665e729d0ca845a35a5b209",
    environment: "prod",
    finishedAt: "2023-05-09T13:11:24.000Z",
    id: "645a463eeb0858a667738dc6",
    issues: [
      {
        key: "AU-15820",
        fields: {
          summary:
            "Добавить бота, который будет собирать статистику по обращениям в quick-deal-public"
        }
      }
    ],
    issuesError: null,
    releaser: "dvdoroginin",
    serviceName: "zap",
    startedAt: "2023-05-09T13:10:22.000Z",
    status: "deployed",
    version: "19",
    isHotfix: false,
    deployStrategy: "simple",
    clusters: ["hopeful-music", "zeta", "deep-forest"],
    canaryState: {
      scalerEnabled: false,
      weight: 0
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: null,
      previousSucceedReleaseId: "645a40d8eb0858a667738dc4",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [],
    prevSucceedReleaseHash: "693d2ef2f6370990cecdb2e8bb374ddd52b949bd",
    clustersChanges: [
      ["deep-forest", "stayed"],
      ["hopeful-music", "stayed"],
      ["zeta", "stayed"]
    ]
  },
  {
    name: "zap",
    ciBuildId: "38160249",
    branch: "refs/heads/master",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38160249",
    commitHash: "693d2ef2f6370990cecdb2e8bb374ddd52b949bd",
    environment: "prod",
    finishedAt: "2023-05-09T12:48:21.000Z",
    id: "645a40d8eb0858a667738dc4",
    issues: [
      {
        key: "AU-15820",
        fields: {
          summary:
            "Добавить бота, который будет собирать статистику по обращениям в quick-deal-public"
        }
      }
    ],
    issuesError: null,
    releaser: "dvdoroginin",
    serviceName: "zap",
    startedAt: "2023-05-09T12:47:20.000Z",
    status: "superseded",
    version: "18",
    isHotfix: false,
    deployStrategy: "simple",
    clusters: ["hopeful-music", "zeta", "deep-forest"],
    canaryState: {
      scalerEnabled: false,
      weight: 0
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: null,
      previousSucceedReleaseId: "645a3ef6eb0858a667738dc3",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [],
    prevSucceedReleaseHash: "d9b29bd147b5d63664ea35ef93109810b69c4eda",
    clustersChanges: [
      ["deep-forest", "stayed"],
      ["hopeful-music", "stayed"],
      ["zeta", "stayed"]
    ]
  },
  {
    name: "zap",
    ciBuildId: "38160239",
    branch: "refs/heads/master",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38160239",
    commitHash: "d9b29bd147b5d63664ea35ef93109810b69c4eda",
    environment: "prod",
    finishedAt: "2023-05-09T12:40:24.000Z",
    id: "645a3ef6eb0858a667738dc3",
    issues: [
      {
        key: "AU-15820",
        fields: {
          summary:
            "Добавить бота, который будет собирать статистику по обращениям в quick-deal-public"
        }
      }
    ],
    issuesError: null,
    releaser: "dvdoroginin",
    serviceName: "zap",
    startedAt: "2023-05-09T12:39:18.000Z",
    status: "superseded",
    version: "17",
    isHotfix: false,
    deployStrategy: "simple",
    clusters: ["hopeful-music", "zeta", "deep-forest"],
    canaryState: {
      scalerEnabled: false,
      weight: 0
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: null,
      previousSucceedReleaseId: "645a3e5eeb0858a667738dc1",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [],
    prevSucceedReleaseHash: "49c1d74919a1de236b0abe8d82bb62d7b67ea985",
    clustersChanges: [
      ["deep-forest", "stayed"],
      ["hopeful-music", "stayed"],
      ["zeta", "stayed"]
    ]
  },
  {
    name: "zap",
    ciBuildId: "38160228",
    branch: "refs/heads/master",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38160228",
    commitHash: "49c1d74919a1de236b0abe8d82bb62d7b67ea985",
    environment: "prod",
    finishedAt: "2023-05-09T12:37:51.000Z",
    id: "645a3e5eeb0858a667738dc1",
    issues: [
      {
        key: "AU-15820",
        fields: {
          summary:
            "Добавить бота, который будет собирать статистику по обращениям в quick-deal-public"
        }
      }
    ],
    issuesError: null,
    releaser: "dvdoroginin",
    serviceName: "zap",
    startedAt: "2023-05-09T12:36:46.000Z",
    status: "superseded",
    version: "16",
    isHotfix: false,
    deployStrategy: "simple",
    clusters: ["hopeful-music", "zeta", "deep-forest"],
    canaryState: {
      scalerEnabled: false,
      weight: 0
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: null,
      previousSucceedReleaseId: "6454e1feeb0858a6677385f6",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [],
    prevSucceedReleaseHash: "f9b0432c9643590337b07d51e42eb0c6c5bda7ee",
    clustersChanges: [
      ["deep-forest", "stayed"],
      ["hopeful-music", "stayed"],
      ["zeta", "stayed"]
    ]
  },
  {
    name: "autoteka-search-vehicle-id",
    ciBuildId: "38159807",
    branch: "refs/heads/master",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38159807",
    commitHash: "c9a276f6abefd8b04b3d8d082e9eebd7ea735125",
    environment: "prod",
    finishedAt: "2023-05-09T10:53:34.000Z",
    id: "645a25e5eb0858a667738db5",
    issues: [
      {
        key: "ROAD-16813",
        fields: {
          summary:
            "Не валидируются VehicleID на адекватность в ответах источников"
        }
      },
      {
        key: "ARCH-9714",
        fields: {
          summary: "AutoPR"
        }
      }
    ],
    issuesError: null,
    releaser: "kmvizenko",
    serviceName: "autoteka-search-vehicle-id",
    startedAt: "2023-05-09T10:52:21.000Z",
    status: "deployed",
    version: "20",
    isHotfix: true,
    deployStrategy: "rolling_update",
    clusters: ["hopeful-music", "zeta", "deep-forest"],
    canaryState: {
      scalerEnabled: false,
      weight: 0
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: null,
      previousSucceedReleaseId: "644b946fef17f525c1114453",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [],
    prevSucceedReleaseHash: "086c1199ecf801feda1a25f9e51c417955318a5c",
    clustersChanges: [
      ["deep-forest", "stayed"],
      ["hopeful-music", "stayed"],
      ["zeta", "stayed"]
    ]
  },
  {
    name: "quick-deal",
    ciBuildId: "38155813",
    branch: "refs/heads/AU-15876-skip-have-offers-sms-if-no-phone",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38155813",
    commitHash: "15ceeae9e89a81eb9be9986f4bfa712259fb2085",
    environment: "prod",
    finishedAt: "2023-05-08T18:19:45.000Z",
    id: "64593cd0eb0858a667738d1e",
    issues: [
      {
        key: "AU-15876",
        fields: {
          summary: "Дежурство спринта 2023Q2 #2"
        }
      }
    ],
    issuesError: null,
    releaser: "mrtimarev",
    serviceName: "quick-deal",
    startedAt: "2023-05-08T18:17:52.000Z",
    status: "deployed",
    version: "694",
    isHotfix: false,
    deployStrategy: "canary",
    clusters: ["zeta", "deep-forest", "hopeful-music"],
    canaryState: {
      scalerEnabled: false,
      weight: 100
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: null,
      previousSucceedReleaseId: "6454ec43eb0858a667738719",
      autoCanarySubcriptionId: "64593cc3b333e5a2214a2c0e"
    },
    canaryChangeLog: [
      {
        time: "2023-05-08T18:17:58.000Z",
        action: "create",
        status: "success",
        releaser: "mrtimarev",
        ciBuildId: "38155813",
        ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38155813",
        state: {
          weight: 10,
          scalerEnabled: true
        }
      },
      {
        time: "2023-05-08T18:25:35.000Z",
        action: "update",
        status: "success",
        releaser: "mrtimarev",
        ciBuildId: "38155824",
        ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38155824",
        state: {
          weight: 50,
          scalerEnabled: true
        }
      },
      {
        time: "2023-05-08T18:27:07.000Z",
        action: "done",
        status: "success",
        releaser: "mrtimarev",
        ciBuildId: "38155826",
        ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38155826",
        state: {
          weight: 100,
          scalerEnabled: false
        }
      }
    ],
    prevSucceedReleaseHash: "ea0c605a7b19193b6c541d0600b8f83af29db51c",
    clustersChanges: [
      ["deep-forest", "stayed"],
      ["hopeful-music", "stayed"],
      ["zeta", "stayed"]
    ]
  },
  {
    name: "autoteka-partner-api",
    ciBuildId: "38153863",
    branch: "refs/heads/ROAD-16238-doc",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38153863",
    commitHash: "b48b4530593bc3f8c3868c85e3337c4d8a8eea3e",
    environment: "prod",
    finishedAt: "2023-05-08T10:22:04.000Z",
    id: "6458cceeeb0858a667738cdc",
    issues: [
      {
        key: "ROAD-16864",
        fields: {
          summary: "panic"
        }
      },
      {
        key: "ROAD-16238",
        fields: {
          summary: "обновить документацию pro.autoteka.ru"
        }
      },
      {
        key: "ARCH-9714",
        fields: {
          summary: "AutoPR"
        }
      }
    ],
    issuesError: null,
    releaser: "rssimkin",
    serviceName: "autoteka-partner-api",
    startedAt: "2023-05-08T10:20:30.000Z",
    status: "deployed",
    version: "551",
    isHotfix: false,
    deployStrategy: "canary",
    clusters: ["zeta", "hopeful-music", "deep-forest"],
    canaryState: {
      scalerEnabled: false,
      weight: 100
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: null,
      previousSucceedReleaseId: "6453c0c862dfa80d5d09e644",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [
      {
        time: "2023-05-08T10:20:32.000Z",
        action: "create",
        status: "success",
        releaser: "rssimkin",
        ciBuildId: "38153863",
        ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38153863",
        state: {
          weight: 50,
          scalerEnabled: true
        }
      },
      {
        time: "2023-05-08T10:25:28.000Z",
        action: "done",
        status: "success",
        releaser: "rssimkin",
        ciBuildId: "38153898",
        ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38153898",
        state: {
          weight: 100,
          scalerEnabled: false
        }
      }
    ],
    prevSucceedReleaseHash: "e402e9c0f58be3299fac3eb4e6e42e33d2fe17b7",
    clustersChanges: [
      ["deep-forest", "stayed"],
      ["hopeful-music", "stayed"],
      ["zeta", "stayed"]
    ]
  },
  {
    name: "dbaas",
    ciBuildId: "38143859",
    branch: "refs/heads/master",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38143859",
    commitHash: "d02da192aa8d0686ab7ad68840f7b560b75b8114",
    environment: "prod",
    finishedAt: "2023-05-06T20:00:37.000Z",
    id: "6456b1a2eb0858a667738b3b",
    issues: [
      {
        key: "DBAD-7076",
        fields: {
          summary:
            "Скрипт replica-migration.py не переносит все шарды с первого раза"
        }
      }
    ],
    issuesError: null,
    releaser: "aebroznyakov",
    serviceName: "dbaas",
    startedAt: "2023-05-06T19:59:30.000Z",
    status: "deployed",
    version: "718",
    isHotfix: false,
    deployStrategy: "simple",
    clusters: ["zeta", "hopeful-music", "deep-forest"],
    canaryState: {
      scalerEnabled: false,
      weight: 0
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: "6454f3a0eb0858a6677387fe",
      previousSucceedReleaseId: "6454f145eb0858a6677387c0",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [],
    prevSucceedReleaseHash: "c4dcd14042db06d2caba1cbdd7eb37b6fc9d1bd5",
    clustersChanges: [
      ["deep-forest", "stayed"],
      ["hopeful-music", "stayed"],
      ["zeta", "stayed"]
    ]
  },
  {
    name: "billing-avito-gateway",
    ciBuildId: "38143374",
    branch: "refs/heads/master",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38143374",
    commitHash: "8461fa06e1c5c27003b37b0cfcb32072e903370d",
    environment: "prod",
    finishedAt: "2023-05-06T17:54:55.000Z",
    id: "645693a4eb0858a667738b30",
    issues: [
      {
        key: "BILL-12857",
        fields: {
          summary:
            "[BAVG] Проблема с перестроением проекции после смены ЮЛ -> ФЛ "
        }
      },
      {
        key: "BILL-12874",
        fields: {
          summary: "Работы по миграции данных проекций фин. отчета"
        }
      },
      {
        key: "BILL-12850",
        fields: {
          summary: "Расхождения в WL для ЮЛ "
        }
      }
    ],
    issuesError: null,
    releaser: "eifadeev",
    serviceName: "billing-avito-gateway",
    startedAt: "2023-05-06T17:51:32.000Z",
    status: "deployed",
    version: "1592",
    isHotfix: false,
    deployStrategy: "canary",
    clusters: ["zeta", "hopeful-music", "deep-forest"],
    canaryState: {
      scalerEnabled: false,
      weight: 100
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: null,
      previousSucceedReleaseId: "64568fd3eb0858a667738b2c",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [
      {
        time: "2023-05-06T17:52:03.000Z",
        action: "create",
        status: "success",
        releaser: "eifadeev",
        ciBuildId: "38143374",
        ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38143374",
        state: {
          weight: 5,
          scalerEnabled: true
        }
      },
      {
        time: "2023-05-06T17:56:52.000Z",
        action: "done",
        status: "success",
        releaser: "eifadeev",
        ciBuildId: "38143380",
        ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38143380",
        state: {
          weight: 100,
          scalerEnabled: false
        }
      }
    ],
    prevSucceedReleaseHash: "7dd8453f55c5392189ab3f94facc79600c3d0d67",
    clustersChanges: [
      ["deep-forest", "stayed"],
      ["hopeful-music", "stayed"],
      ["zeta", "stayed"]
    ]
  },
  {
    name: "billing-avito-gateway",
    ciBuildId: "38143354",
    branch: "refs/heads/BILL-12693-fix",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38143354",
    commitHash: "7dd8453f55c5392189ab3f94facc79600c3d0d67",
    environment: "prod",
    finishedAt: "2023-05-06T17:38:46.000Z",
    id: "64568fd3eb0858a667738b2c",
    issues: [
      {
        key: "BILL-12693",
        fields: {
          summary: "Списались деньги, тариф не активировался"
        }
      }
    ],
    issuesError: null,
    releaser: "eifadeev",
    serviceName: "billing-avito-gateway",
    startedAt: "2023-05-06T17:35:15.000Z",
    status: "superseded",
    version: "1591",
    isHotfix: false,
    deployStrategy: "canary",
    clusters: ["zeta", "hopeful-music", "deep-forest"],
    canaryState: {
      scalerEnabled: false,
      weight: 100
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: null,
      previousSucceedReleaseId: "6454c253eb0858a6677381a5",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [
      {
        time: "2023-05-06T17:35:47.000Z",
        action: "create",
        status: "success",
        releaser: "eifadeev",
        ciBuildId: "38143354",
        ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38143354",
        state: {
          weight: 5,
          scalerEnabled: true
        }
      },
      {
        time: "2023-05-06T17:41:11.000Z",
        action: "done",
        status: "success",
        releaser: "eifadeev",
        ciBuildId: "38143357",
        ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38143357",
        state: {
          weight: 100,
          scalerEnabled: false
        }
      }
    ],
    prevSucceedReleaseHash: "a671b70bf0e63539dd1fa19ab0193040dfe31807",
    clustersChanges: [
      ["deep-forest", "stayed"],
      ["hopeful-music", "stayed"],
      ["zeta", "stayed"]
    ]
  },
  {
    name: "antifraud-ng",
    ciBuildId: "38142008",
    branch: "refs/heads/master",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38142008",
    commitHash: "43743e76aabea030a5d81cd55691127698f5ac92",
    environment: "prod",
    finishedAt: "2023-05-06T11:22:51.000Z",
    id: "645636c0eb0858a667738b0f",
    issues: [
      {
        key: "AM-6953",
        fields: {
          summary: "Перенастроить оптимизатор для 5 проверок"
        }
      },
      {
        key: "AM-6162",
        fields: {
          summary: 'Отклонять за  "Неверная цена" по сигналу в чате'
        }
      }
    ],
    issuesError: null,
    releaser: "rfsakaev",
    serviceName: "antifraud-ng",
    startedAt: "2023-05-06T11:15:12.000Z",
    status: "deployed",
    version: "3632",
    isHotfix: false,
    deployStrategy: "rolling_update",
    clusters: ["zeta", "hopeful-music", "deep-forest"],
    canaryState: {
      scalerEnabled: false,
      weight: 0
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: null,
      previousSucceedReleaseId: "6454f73beb0858a667738857",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [],
    prevSucceedReleaseHash: "8e6a1b4587c965954a5d088e742c9928b77cdd04",
    clustersChanges: [
      ["deep-forest", "stayed"],
      ["hopeful-music", "stayed"],
      ["zeta", "stayed"]
    ]
  },
  {
    name: "autoteka-profiles",
    ciBuildId: "38141999",
    branch: "refs/heads/master",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38141999",
    commitHash: "72ecef951297c2b7a1ad1f4a8b235ba73ab043bc",
    environment: "prod",
    finishedAt: "2023-05-06T11:13:13.000Z",
    id: "645635b5eb0858a667738b0d",
    issues: [
      {
        key: "ROAD-16377",
        fields: {
          summary: "Реализация new preview flow"
        }
      }
    ],
    issuesError: null,
    releaser: "sakorzhnev",
    serviceName: "autoteka-profiles",
    startedAt: "2023-05-06T11:10:45.000Z",
    status: "deployed",
    version: "293",
    isHotfix: false,
    deployStrategy: "canary",
    clusters: ["zeta", "hopeful-music", "deep-forest"],
    canaryState: {
      scalerEnabled: false,
      weight: 100
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: null,
      previousSucceedReleaseId: "6454cf26eb0858a66773838b",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [
      {
        time: "2023-05-06T11:10:51.000Z",
        action: "create",
        status: "success",
        releaser: "sakorzhnev",
        ciBuildId: "38141999",
        ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38141999",
        state: {
          weight: 5,
          scalerEnabled: true
        }
      },
      {
        time: "2023-05-06T11:18:55.000Z",
        action: "update",
        status: "success",
        releaser: "sakorzhnev",
        ciBuildId: "38142010",
        ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38142010",
        state: {
          weight: 30,
          scalerEnabled: true
        }
      },
      {
        time: "2023-05-06T11:25:27.000Z",
        action: "update",
        status: "success",
        releaser: "sakorzhnev",
        ciBuildId: "38142018",
        ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38142018",
        state: {
          weight: 99,
          scalerEnabled: true
        }
      },
      {
        time: "2023-05-06T11:37:41.000Z",
        action: "done",
        status: "success",
        releaser: "sakorzhnev",
        ciBuildId: "38142132",
        ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38142132",
        state: {
          weight: 100,
          scalerEnabled: false
        }
      }
    ],
    prevSucceedReleaseHash: "f6aaa96e1df79618d4fbef0355f28f8b83965388",
    clustersChanges: [
      ["deep-forest", "stayed"],
      ["hopeful-music", "stayed"],
      ["zeta", "stayed"]
    ]
  },
  {
    name: "antifraud-ng",
    ciBuildId: "38141982",
    branch: "refs/heads/master",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38141982",
    commitHash: "43743e76aabea030a5d81cd55691127698f5ac92",
    environment: "prod",
    finishedAt: "2023-05-06T11:13:39.000Z",
    id: "645633cdeb0858a667738b0c",
    issues: [
      {
        key: "AM-6953",
        fields: {
          summary: "Перенастроить оптимизатор для 5 проверок"
        }
      },
      {
        key: "AM-6162",
        fields: {
          summary: 'Отклонять за  "Неверная цена" по сигналу в чате'
        }
      }
    ],
    issuesError: null,
    releaser: "rfsakaev",
    serviceName: "antifraud-ng",
    startedAt: "2023-05-06T11:02:37.000Z",
    status: "failed",
    version: "3631",
    isHotfix: false,
    deployStrategy: "rolling_update",
    clusters: ["zeta", "hopeful-music", "deep-forest"],
    canaryState: {
      scalerEnabled: false,
      weight: 0
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: null,
      previousSucceedReleaseId: "6454f73beb0858a667738857",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [],
    prevSucceedReleaseHash: "8e6a1b4587c965954a5d088e742c9928b77cdd04"
  },
  {
    name: "moderation-facade",
    ciBuildId: "38141841",
    branch: "refs/heads/MAAS-323-save-afraud-probs",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38141841",
    commitHash: "d518ed4cfdc58a4bd6c636e04ab06200ac3b3f44",
    environment: "prod",
    finishedAt: "2023-05-06T10:23:08.000Z",
    id: "64562a51eb0858a667738b07",
    issues: [
      {
        key: "MAAS-323",
        fields: {
          summary: "Отладка и тестирование перед запуском прогнозов"
        }
      },
      {
        key: "OBS-168",
        fields: {
          summary:
            "autoconf: Заслать всем PR про контакты, PR в boilerplate, перевести warning в error"
        }
      }
    ],
    issuesError: null,
    releaser: "aebroznyakov",
    serviceName: "moderation-facade",
    startedAt: "2023-05-06T10:22:09.000Z",
    status: "deployed",
    version: "85",
    isHotfix: true,
    deployStrategy: "simple",
    clusters: ["zeta", "hopeful-music", "deep-forest"],
    canaryState: {
      scalerEnabled: false,
      weight: 0
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: "6448b6f540c149f77c177eb1",
      previousSucceedReleaseId: "6441222e9c379eae98308dc3",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [],
    prevSucceedReleaseHash: "9ae1e84d9de0651e2292367756d214e3ce56e6b7",
    clustersChanges: [
      ["deep-forest", "stayed"],
      ["hopeful-music", "stayed"],
      ["zeta", "stayed"]
    ]
  },
  {
    name: "tariff",
    ciBuildId: "38141834",
    branch: "refs/heads/master",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38141834",
    commitHash: "ffb9a244daea792eb4a477bb5a83aa27658332c3",
    environment: "prod",
    finishedAt: "2023-05-06T10:41:52.000Z",
    id: "64562a15eb0858a667738b05",
    issues: [
      {
        key: "TRF-8759",
        fields: {
          summary: "Включение динамического коллтрекинга для CPT тарифа"
        }
      },
      {
        key: "TRF-8763",
        fields: {
          summary: "Добавить признак обязательного ОБ на размещении - монолит"
        }
      }
    ],
    issuesError: null,
    releaser: "aebroznyakov",
    serviceName: "tariff",
    startedAt: "2023-05-06T10:21:09.000Z",
    status: "failed",
    version: "684",
    isHotfix: false,
    deployStrategy: "simple",
    clusters: ["zeta", "hopeful-music", "deep-forest"],
    canaryState: {
      scalerEnabled: false,
      weight: 0
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: "6453a93e62dfa80d5d09e331",
      previousSucceedReleaseId: "64520351ef17f525c1116a96",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [],
    prevSucceedReleaseHash: "ae0512b4dffb551c58eb01df3d05f728c0458a3b"
  },
  {
    name: "auto-crm-static",
    ciBuildId: "38141828",
    branch: "refs/heads/master",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38141828",
    commitHash: "9c051ed6da2bcdbf71de29ea065c42eea6f94dc1",
    environment: "prod",
    finishedAt: "2023-05-06T10:19:23.000Z",
    id: "6456297eeb0858a667738b03",
    issues: [
      {
        key: "AU-15921",
        fields: {
          summary: "[FE] Попап с подтверждением для отправки в аукцион"
        }
      }
    ],
    issuesError: null,
    releaser: "kagolubev",
    serviceName: "auto-crm-static",
    startedAt: "2023-05-06T10:18:38.000Z",
    status: "deployed",
    version: "76",
    isHotfix: false,
    deployStrategy: "simple",
    clusters: ["hopeful-music", "zeta", "deep-forest"],
    canaryState: {
      scalerEnabled: false,
      weight: 0
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: null,
      previousSucceedReleaseId: "6450fed0ef17f525c1115fe8",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [],
    rollbackToVersion: 74,
    prevSucceedReleaseHash: "31ced609719ee51d1e3fd93feeab261685f0d5dc",
    clustersChanges: [
      ["deep-forest", "stayed"],
      ["hopeful-music", "stayed"],
      ["zeta", "stayed"]
    ]
  },
  {
    name: "autoload-item",
    ciBuildId: "38138537",
    branch: "refs/heads/MONAD-52595",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38138537",
    commitHash: "d7c23f4b7f6aecfb8d5a4c97ace3d7e0a7ce477a",
    environment: "prod",
    finishedAt: "2023-05-05T18:57:13.000Z",
    id: "64555128eb0858a667738a49",
    issues: [
      {
        key: "MONAD-52595",
        fields: {
          summary: "Очередь item.new(.retry) не успела рассосаться за 45 минут"
        }
      },
      {
        key: "AA-9864",
        fields: {
          summary: "Подготовить черновой TDR по переработке этапа экспорта"
        }
      }
    ],
    issuesError: null,
    releaser: "isperevoschikov",
    serviceName: "autoload-item",
    startedAt: "2023-05-05T18:55:36.000Z",
    status: "deployed",
    version: "180",
    isHotfix: false,
    deployStrategy: "canary",
    clusters: ["hopeful-music", "zeta", "deep-forest"],
    canaryState: {
      scalerEnabled: false,
      weight: 100
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: null,
      previousSucceedReleaseId: "6453613762dfa80d5d09da0d",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [
      {
        time: "2023-05-05T18:55:40.000Z",
        action: "create",
        status: "success",
        releaser: "isperevoschikov",
        ciBuildId: "38138537",
        ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38138537",
        state: {
          weight: 10,
          scalerEnabled: true
        }
      },
      {
        time: "2023-05-05T19:00:15.000Z",
        action: "done",
        status: "success",
        releaser: "isperevoschikov",
        ciBuildId: "38138541",
        ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38138541",
        state: {
          weight: 100,
          scalerEnabled: false
        }
      }
    ],
    prevSucceedReleaseHash: "c8390ce4d1adb2c245a738d9a61b9e5b7cc6de76",
    clustersChanges: [
      ["deep-forest", "stayed"],
      ["hopeful-music", "stayed"],
      ["zeta", "stayed"]
    ]
  },
  {
    name: "autoteka-profiles",
    ciBuildId: "38138298",
    branch: "refs/heads/master",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38138298",
    commitHash: "72ecef951297c2b7a1ad1f4a8b235ba73ab043bc",
    environment: "prod",
    finishedAt: "2023-05-05T18:17:16.000Z",
    id: "6455458beb0858a667738a32",
    issues: [
      {
        key: "ROAD-16377",
        fields: {
          summary: "Реализация new preview flow"
        }
      }
    ],
    issuesError: null,
    releaser: "sakorzhnev",
    serviceName: "autoteka-profiles",
    startedAt: "2023-05-05T18:06:03.000Z",
    status: "failed",
    version: "292",
    isHotfix: false,
    deployStrategy: "canary",
    clusters: ["zeta", "hopeful-music", "deep-forest"],
    canaryState: {
      scalerEnabled: true,
      weight: 5
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: null,
      previousSucceedReleaseId: "6454cf26eb0858a66773838b",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [
      {
        time: "2023-05-05T18:06:09.000Z",
        action: "create",
        status: "running",
        releaser: "sakorzhnev",
        ciBuildId: "38138298",
        ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38138298",
        state: {
          weight: 5,
          scalerEnabled: true
        }
      }
    ],
    prevSucceedReleaseHash: "f6aaa96e1df79618d4fbef0355f28f8b83965388"
  },
  {
    name: "autoteka-profiles",
    ciBuildId: "38138212",
    branch: "refs/heads/master",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38138212",
    commitHash: "72ecef951297c2b7a1ad1f4a8b235ba73ab043bc",
    environment: "prod",
    finishedAt: "2023-05-05T17:47:10.000Z",
    id: "64553e7deb0858a667738a29",
    issues: [
      {
        key: "ROAD-16377",
        fields: {
          summary: "Реализация new preview flow"
        }
      }
    ],
    issuesError: null,
    releaser: "sakorzhnev",
    serviceName: "autoteka-profiles",
    startedAt: "2023-05-05T17:35:57.000Z",
    status: "failed",
    version: "291",
    isHotfix: false,
    deployStrategy: "canary",
    clusters: ["zeta", "hopeful-music", "deep-forest"],
    canaryState: {
      scalerEnabled: true,
      weight: 5
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: null,
      previousSucceedReleaseId: "6454cf26eb0858a66773838b",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [
      {
        time: "2023-05-05T17:36:03.000Z",
        action: "create",
        status: "running",
        releaser: "sakorzhnev",
        ciBuildId: "38138212",
        ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38138212",
        state: {
          weight: 5,
          scalerEnabled: true
        }
      }
    ],
    prevSucceedReleaseHash: "f6aaa96e1df79618d4fbef0355f28f8b83965388"
  },
  {
    name: "autoteka-importer",
    ciBuildId: "38137847",
    branch: "refs/heads/master",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38137847",
    commitHash: "df6f4e5f5582bc33366fde8b456ca79dc50e3b0f",
    environment: "prod",
    finishedAt: "2023-05-05T16:39:57.000Z",
    id: "645530f5eb0858a667738a04",
    issues: [],
    issuesError: null,
    releaser: "svgalkin",
    serviceName: "autoteka-importer",
    startedAt: "2023-05-05T16:38:13.000Z",
    status: "deployed",
    version: "165",
    isHotfix: false,
    deployStrategy: "canary",
    clusters: ["zeta", "hopeful-music", "deep-forest"],
    canaryState: {
      scalerEnabled: false,
      weight: 100
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: null,
      previousSucceedReleaseId: "6454b686eb0858a667737ffa",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [
      {
        time: "2023-05-05T16:38:16.000Z",
        action: "create",
        status: "success",
        releaser: "svgalkin",
        ciBuildId: "38137847",
        ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38137847",
        state: {
          weight: 5,
          scalerEnabled: true
        }
      },
      {
        time: "2023-05-05T16:41:13.000Z",
        action: "done",
        status: "success",
        releaser: "svgalkin",
        ciBuildId: "38137867",
        ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38137867",
        state: {
          weight: 100,
          scalerEnabled: false
        }
      }
    ],
    prevSucceedReleaseHash: "df6f4e5f5582bc33366fde8b456ca79dc50e3b0f",
    clustersChanges: [
      ["deep-forest", "stayed"],
      ["hopeful-music", "stayed"],
      ["zeta", "stayed"]
    ]
  },
  {
    name: "autoteka-importer",
    ciBuildId: "38137612",
    branch: "refs/heads/master",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38137612",
    commitHash: "df6f4e5f5582bc33366fde8b456ca79dc50e3b0f",
    environment: "prod",
    finishedAt: "2023-05-05T16:23:47.000Z",
    id: "64552acfeb0858a6677389f9",
    issues: [],
    issuesError: null,
    releaser: "svgalkin",
    serviceName: "autoteka-importer",
    startedAt: "2023-05-05T16:11:59.000Z",
    status: "failed",
    version: "164",
    isHotfix: false,
    deployStrategy: "canary",
    clusters: ["zeta", "hopeful-music", "deep-forest"],
    canaryState: {
      scalerEnabled: true,
      weight: 5
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: null,
      previousSucceedReleaseId: "6454b686eb0858a667737ffa",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [
      {
        time: "2023-05-05T16:12:01.000Z",
        action: "create",
        status: "running",
        releaser: "svgalkin",
        ciBuildId: "38137612",
        ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38137612",
        state: {
          weight: 5,
          scalerEnabled: true
        }
      }
    ],
    prevSucceedReleaseHash: "df6f4e5f5582bc33366fde8b456ca79dc50e3b0f"
  },
  {
    name: "messenger-chat-text-gateway",
    ciBuildId: "38137473",
    branch: "refs/heads/master",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38137473",
    commitHash: "a80437376f5c5741a46adc2dc1db941a7c6c0a20",
    environment: "prod",
    finishedAt: "2023-05-05T16:05:03.000Z",
    id: "645528e1eb0858a6677389f2",
    issues: [],
    issuesError: null,
    releaser: "service-generator",
    serviceName: "messenger-chat-text-gateway",
    startedAt: "2023-05-05T16:03:45.000Z",
    status: "deployed",
    version: "74",
    isHotfix: false,
    deployStrategy: "simple",
    clusters: ["hopeful-music", "zeta", "deep-forest"],
    canaryState: {
      scalerEnabled: false,
      weight: 0
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: "64552605eb0858a6677389ea",
      previousSucceedReleaseId: "6454efdbeb0858a667738795",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [],
    prevSucceedReleaseHash: "a80437376f5c5741a46adc2dc1db941a7c6c0a20",
    clustersChanges: [
      ["deep-forest", "stayed"],
      ["hopeful-music", "stayed"],
      ["zeta", "stayed"]
    ]
  },
  {
    name: "messenger-chat-text-gateway",
    ciBuildId: "38137301",
    branch: "refs/heads/master",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38137301",
    commitHash: "a80437376f5c5741a46adc2dc1db941a7c6c0a20",
    environment: "prod",
    finishedAt: "2023-05-05T15:52:34.000Z",
    id: "64552605eb0858a6677389ea",
    issues: [],
    issuesError: null,
    releaser: "service-generator",
    serviceName: "messenger-chat-text-gateway",
    startedAt: "2023-05-05T15:51:33.000Z",
    status: "superseded",
    version: "73",
    isHotfix: false,
    deployStrategy: "simple",
    clusters: ["hopeful-music", "zeta"],
    canaryState: {
      scalerEnabled: false,
      weight: 0
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: "64552534eb0858a6677389e6",
      previousSucceedReleaseId: "6454efdbeb0858a667738795",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [],
    prevSucceedReleaseHash: "a80437376f5c5741a46adc2dc1db941a7c6c0a20",
    clustersChanges: [
      ["deep-forest", "removed"],
      ["hopeful-music", "stayed"],
      ["zeta", "stayed"]
    ]
  },
  {
    name: "messenger-chat-text-gateway",
    ciBuildId: "38137249",
    branch: "refs/heads/master",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38137249",
    commitHash: "a80437376f5c5741a46adc2dc1db941a7c6c0a20",
    environment: "prod",
    finishedAt: "2023-05-05T15:50:25.000Z",
    id: "64552534eb0858a6677389e6",
    issues: [],
    issuesError: null,
    releaser: "service-generator",
    serviceName: "messenger-chat-text-gateway",
    startedAt: "2023-05-05T15:48:04.000Z",
    status: "superseded",
    version: "72",
    isHotfix: false,
    deployStrategy: "simple",
    clusters: ["hopeful-music", "zeta", "deep-forest"],
    canaryState: {
      scalerEnabled: false,
      weight: 0
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: "645523bfeb0858a6677389d9",
      previousSucceedReleaseId: "6454efdbeb0858a667738795",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [],
    prevSucceedReleaseHash: "a80437376f5c5741a46adc2dc1db941a7c6c0a20",
    clustersChanges: [
      ["deep-forest", "stayed"],
      ["hopeful-music", "stayed"],
      ["zeta", "stayed"]
    ]
  },
  {
    name: "autoteka-importer",
    ciBuildId: "38137233",
    branch: "refs/heads/master",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38137233",
    commitHash: "df6f4e5f5582bc33366fde8b456ca79dc50e3b0f",
    environment: "prod",
    finishedAt: "2023-05-05T15:58:53.000Z",
    id: "645524f7eb0858a6677389e3",
    issues: [],
    issuesError: null,
    releaser: "svgalkin",
    serviceName: "autoteka-importer",
    startedAt: "2023-05-05T15:47:03.000Z",
    status: "failed",
    version: "163",
    isHotfix: false,
    deployStrategy: "canary",
    clusters: ["zeta", "hopeful-music", "deep-forest"],
    canaryState: {
      scalerEnabled: true,
      weight: 5
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: null,
      previousSucceedReleaseId: "6454b686eb0858a667737ffa",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [
      {
        time: "2023-05-05T15:47:07.000Z",
        action: "create",
        status: "running",
        releaser: "svgalkin",
        ciBuildId: "38137233",
        ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38137233",
        state: {
          weight: 5,
          scalerEnabled: true
        }
      }
    ],
    prevSucceedReleaseHash: "df6f4e5f5582bc33366fde8b456ca79dc50e3b0f"
  },
  {
    name: "messenger-chat-text-gateway",
    ciBuildId: "38137200",
    branch: "refs/heads/master",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38137200",
    commitHash: "a80437376f5c5741a46adc2dc1db941a7c6c0a20",
    environment: "prod",
    finishedAt: "2023-05-05T15:43:00.000Z",
    id: "645523bfeb0858a6677389d9",
    issues: [],
    issuesError: null,
    releaser: "service-generator",
    serviceName: "messenger-chat-text-gateway",
    startedAt: "2023-05-05T15:41:51.000Z",
    status: "superseded",
    version: "71",
    isHotfix: false,
    deployStrategy: "simple",
    clusters: ["hopeful-music", "zeta"],
    canaryState: {
      scalerEnabled: false,
      weight: 0
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: "6454fa67eb0858a667738897",
      previousSucceedReleaseId: "6454efdbeb0858a667738795",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [],
    prevSucceedReleaseHash: "a80437376f5c5741a46adc2dc1db941a7c6c0a20",
    clustersChanges: [
      ["deep-forest", "removed"],
      ["hopeful-music", "stayed"],
      ["zeta", "stayed"]
    ]
  },
  {
    name: "messenger-chat-text-gateway",
    ciBuildId: "38136918",
    branch: "refs/heads/master",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38136918",
    commitHash: "bd24ba9f583d485ccadc3729e50a0bc0858c386a",
    environment: "prod",
    finishedAt: "2023-05-05T15:33:16.000Z",
    id: "64551f51eb0858a6677389c3",
    issues: [
      {
        key: "DSSWAT-5495",
        fields: {
          summary: "Переливаем данные из MA2"
        }
      },
      {
        key: "ARCH-9714",
        fields: {
          summary: "AutoPR"
        }
      }
    ],
    issuesError: null,
    releaser: "delisovik",
    serviceName: "messenger-chat-text-gateway",
    startedAt: "2023-05-05T15:22:57.000Z",
    status: "failed",
    version: "70",
    isHotfix: false,
    deployStrategy: "simple",
    clusters: ["hopeful-music", "zeta", "deep-forest"],
    canaryState: {
      scalerEnabled: false,
      weight: 0
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: null,
      previousSucceedReleaseId: "64423b9e9c379eae98309c4e",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [],
    rollbackToVersion: 65,
    prevSucceedReleaseHash: "2c2226f8689a283936d64c7a6f99358f6224ccc6"
  },
  {
    name: "sts-recognition",
    ciBuildId: "38136866",
    branch: "refs/heads/DSSWAT-6401",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38136866",
    commitHash: "511266f8bf17f25c9cd36be93752ddbc1a217a86",
    environment: "prod",
    finishedAt: "2023-05-05T15:25:01.000Z",
    id: "64551ebfeb0858a6677389c0",
    issues: [
      {
        key: "DSSWAT-6401",
        fields: {
          summary: "sts-recognition: падают поды на кривых картинках"
        }
      }
    ],
    issuesError: null,
    releaser: "vfkassym",
    serviceName: "sts-recognition",
    startedAt: "2023-05-05T15:20:31.000Z",
    status: "deployed",
    version: "138",
    isHotfix: false,
    deployStrategy: "rolling_update",
    clusters: ["hopeful-music", "zeta"],
    canaryState: {
      scalerEnabled: false,
      weight: 0
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: null,
      previousSucceedReleaseId: "64551a80eb0858a6677389a7",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [],
    prevSucceedReleaseHash: "db45890bee1bd43686b7dbf09f6555fa31385e0f",
    clustersChanges: [
      ["hopeful-music", "stayed"],
      ["zeta", "stayed"]
    ]
  },
  {
    name: "autoteka-importer",
    ciBuildId: "38136695",
    branch: "refs/heads/master",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38136695",
    commitHash: "df6f4e5f5582bc33366fde8b456ca79dc50e3b0f",
    environment: "prod",
    finishedAt: "2023-05-05T15:24:29.000Z",
    id: "64551ce9eb0858a6677389b7",
    issues: [],
    issuesError: null,
    releaser: "svgalkin",
    serviceName: "autoteka-importer",
    startedAt: "2023-05-05T15:12:41.000Z",
    status: "failed",
    version: "162",
    isHotfix: false,
    deployStrategy: "canary",
    clusters: ["zeta", "hopeful-music", "deep-forest"],
    canaryState: {
      scalerEnabled: true,
      weight: 99
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: null,
      previousSucceedReleaseId: "6454b686eb0858a667737ffa",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [
      {
        time: "2023-05-05T15:12:43.000Z",
        action: "create",
        status: "running",
        releaser: "svgalkin",
        ciBuildId: "38136695",
        ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38136695",
        state: {
          weight: 99,
          scalerEnabled: true
        }
      }
    ],
    prevSucceedReleaseHash: "df6f4e5f5582bc33366fde8b456ca79dc50e3b0f"
  },
  {
    name: "sts-recognition",
    ciBuildId: "38136632",
    branch: "refs/heads/DSSWAT-6401",
    ciBuildUrl: "https://tmct.avito.ru/viewLog.html?buildId=38136632",
    commitHash: "db45890bee1bd43686b7dbf09f6555fa31385e0f",
    environment: "prod",
    finishedAt: "2023-05-05T15:05:21.000Z",
    id: "64551a80eb0858a6677389a7",
    issues: [
      {
        key: "DSSWAT-6401",
        fields: {
          summary: "sts-recognition: падают поды на кривых картинках"
        }
      }
    ],
    issuesError: null,
    releaser: "vfkassym",
    serviceName: "sts-recognition",
    startedAt: "2023-05-05T15:02:24.000Z",
    status: "superseded",
    version: "137",
    isHotfix: false,
    deployStrategy: "rolling_update",
    clusters: ["hopeful-music", "zeta"],
    canaryState: {
      scalerEnabled: false,
      weight: 0
    },
    customReleaseOptions: {
      nameSuffix: "",
      ttlMinutes: 0
    },
    metadata: {
      copySourceReleaseId: null,
      previousSucceedReleaseId: "6454f02deb0858a6677387a2",
      autoCanarySubcriptionId: null
    },
    canaryChangeLog: [],
    prevSucceedReleaseHash: "2baecf7db6ff12af6d666a08fb78f57de89cb1dc",
    clustersChanges: [
      ["deep-forest", "removed"],
      ["hopeful-music", "stayed"],
      ["zeta", "stayed"]
    ]
  }
];

export default function App() {
  return (
    <RTable
      canFetchNext={false}
      isLoading={false}
      fetchNext={() => {}}
      data={data}
    />
  );
}
